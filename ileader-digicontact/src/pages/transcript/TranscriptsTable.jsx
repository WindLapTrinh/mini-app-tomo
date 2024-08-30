import React from "react";
import { Box } from "zmp-ui";
import HeaderFormDate from "./HeaderFormDate";
import "../../css/accountant/transcripttable.css";

const TranscriptsTable = ({ transcripts, isLoading }) => {
  
  // Tìm độ dài lớn nhất của ColumName
  const maxColumnWidths = transcripts.reduce((maxWidths, transcript) => {
    const details = JSON.parse(transcript.jsonContent || "{}").Details || [];
    details.forEach((detail, index) => {
      const columNameLength = detail.ColumName?.length || 0;
      maxWidths[index] = Math.max(maxWidths[index] || 0, columNameLength);
    });
    return maxWidths;
  }, []);

  return (
    <Box>
      <HeaderFormDate
        image={"./images/icon/icon-transcript.png"}
        title={"Danh sách bảng điểm"}
      />
      <div className="table-container">
        {!isLoading && transcripts.length > 0 ? (
          <table className="custom-table">
          

            {/* Nội dung bảng */}
            <tbody>
              {transcripts.map((transcript, index) => {
                const parsedJsonContent = JSON.parse(transcript.jsonContent || "{}");
                const details = parsedJsonContent.Details || [];
                
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <th colSpan={maxColumnWidths.length}>
                        {parsedJsonContent.TranscriptName || "N/A"}
                      </th>
                    </tr>
                    <tr>
                      {maxColumnWidths.map((maxWidth, detailIndex) => (
                        <th
                          key={detailIndex}
                          className="item-colum-name"
                          style={{ width: `${maxWidth}ch` }} // Set width theo độ dài lớn nhất của ColumName
                        >
                          {details[detailIndex]?.ColumName || "N/A"}
                        </th>
                      ))}
                    </tr>
                    <tr>
                      {maxColumnWidths.map((maxWidth, detailIndex) => (
                        <td
                          key={detailIndex}
                          style={{ width: `${maxWidth}ch` }} // Set width theo độ dài lớn nhất của ColumName
                        >
                          {details[detailIndex]?.ColumnContent || "0"}
                        </td>
                      ))}
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="description-table">Hiện tại không có thông tin học phí nào?</div>
        )}
      </div>
    </Box>
  );
};

export default TranscriptsTable;
