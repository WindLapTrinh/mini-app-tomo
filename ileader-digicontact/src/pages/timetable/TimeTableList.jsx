import React, { useEffect, useState } from "react";
import { Box } from "zmp-ui";
import HeaderFormDate from "./HeaderFormDate";
import "../../css/timetable/home.css";

const TimeTableList = ({ timeTables }) => {
  const [columnWidths, setColumnWidths] = useState({});
  const daysOfWeek = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const parsedDate = new Date(dateString);
    return `${parsedDate.getDate()}/${
      parsedDate.getMonth() + 1
    }/${parsedDate.getFullYear()}`;
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    const parsedDate = new Date(dateString);
    const hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const calculateMaxWidths = () => {
      const maxWidths = {};

      timeTables.forEach((timeTable) => {
        const parsedJsonContent = JSON.parse(timeTable.jsonContent || "{}");
        const sessions = parsedJsonContent.JsContent || [];

        sessions.forEach((item) => {
          const [dayOfWeek, details] = item.split(": ");
          if (details && details.trim() !== "Ngày nghỉ") {
            try {
              const session = JSON.parse(details);
              session.forEach((sessionDetail) => {
                const combinedLength =
                  sessionDetail.SectionName.length +
                  sessionDetail.TeacherName.join(", ").length +
                  sessionDetail.RoomName.length +
                  `${formatTime(sessionDetail.StartTime)} - ${formatTime(
                    sessionDetail.EndTime
                  )}`.length;

                const normalizedDay = dayOfWeek.trim().toLowerCase();
                maxWidths[normalizedDay] = Math.max(
                  maxWidths[normalizedDay] || 0,
                  combinedLength
                );
              });
            } catch (error) {
              console.error("Error parsing session details:", error);
            }
          }
        });
      });

      setColumnWidths(maxWidths);
    };

    calculateMaxWidths();
  }, [timeTables]);

  if (timeTables.length === 0) {
    return (
      <div className="description-table">
        {" "}
        Hiện tại không có thời khóa biểu nào ?
      </div>
    );
  }

  return (
    <Box>
      <div className="timetable-container">
        {timeTables.length > 0 ? (
          <table className="timetable-table">
            <tbody>
              {timeTables.map((timeTable, index) => {
                const parsedJsonContent = JSON.parse(
                  timeTable.jsonContent || "{}"
                );
                const dateApplied = formatDate(
                  parsedJsonContent.DateApplication
                );

                const schedule = {
                  "thứ hai": [],
                  "thứ ba": [],
                  "thứ tư": [],
                  "thứ năm": [],
                  "thứ sáu": [],
                  "thứ bảy": [],
                  "chủ nhật": [],
                };

                parsedJsonContent.JsContent?.forEach((item) => {
                  const [dayOfWeek, details] = item.split(": ");
                  const normalizedDayOfWeek = dayOfWeek.trim().toLowerCase();

                  if (details && details.trim() !== "Ngày nghỉ") {
                    try {
                      const sessions = JSON.parse(details);
                      if (schedule.hasOwnProperty(normalizedDayOfWeek)) {
                        schedule[normalizedDayOfWeek] = sessions;
                      }
                    } catch (error) {
                      console.error("Error parsing session details:", error);
                    }
                  }
                });

                const hasSchedule = Object.values(schedule).some(
                  (daySessions) => daySessions.length > 0
                );

                return (
                  <React.Fragment key={index}>
                    <tr>
                      <th
                        colSpan={daysOfWeek.length + 1}
                        className="timetable-header"
                      >
                        Ngày áp dụng: {dateApplied}
                      </th>
                    </tr>
                    <tr>
                      <th>Môn học</th>
                      {daysOfWeek.map((day) => (
                        <th key={day}>{day}</th>
                      ))}
                    </tr>
                    <tr className="item-day-week">
                      <td>{parsedJsonContent.ScheduleName}</td>
                      {daysOfWeek.map((day) => {
                        const normalizedDay = day.toLowerCase().trim();
                        return (
                          <td
                            key={day}
                            style={{
                              width: `${columnWidths[normalizedDay] || 10}ch`, // Default width if not calculated
                            }}
                            className="item-data-week"
                          >
                            {schedule[normalizedDay].length > 0 ? (
                              schedule[normalizedDay].map((session, idx) => (
                                <table key={idx} className="nested-table">
                                  <thead>
                                    <tr>
                                      <th>Tiết</th>
                                      <th>Thời gian</th>
                                      <th>Giáo viên</th>
                                      <th>Phòng</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>{session.SectionName}</td>
                                      <td>
                                        {formatTime(session.StartTime)} -{" "}
                                        {formatTime(session.EndTime)}
                                      </td>
                                      <td>{session.TeacherName.join(", ")}</td>
                                      <td>{session.RoomName}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              ))
                            ) : (
                              <div className="item-dropout">Ngày nghỉ</div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                    {!hasSchedule && (
                      <tr>
                        <td colSpan={daysOfWeek.length + 1}>
                          Không có lịch học
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="description-table">
            Hiện tại không có thời khóa biểu nào?
          </div>
        )}
      </div>
    </Box>
  );
};

export default TimeTableList;
