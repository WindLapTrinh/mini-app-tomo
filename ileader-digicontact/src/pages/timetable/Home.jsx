import React, { useState, useEffect } from "react";
import { Page, Box } from "zmp-ui";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TimeTableList from "./TimeTableList";
import DateSelect from "./DateSelect";
import CurrentDate from './CurrentDate';
import HeaderFormDate from "./HeaderFormDate";
import SetTitleHeader from "../shared/hooks/setTitleHeader"

const Home = () => {
  SetTitleHeader({
    title : "Thời khóa biểu"
  })
  const location = useLocation();
  const [timeTables, setTimeTables] = useState([]);
  const { studentGuid, currentDate: initialDate } = location.state || {};
  const { currentDate, currentMonth, currentYear, setCurrentDate } = CurrentDate(initialDate);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isChecked, setIsChecked] = useState({});
  const [unseenCount, setUnseenCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);



  useEffect(() => {
    const fetchTimeTables = async () => {
      try {
        let apiUrl = `https://ileader.cloud/api/MiniApp/GetListNotifysByDate?msgType=TKB&guidStudent=${studentGuid}`;

        const year = selectedYear || currentYear;
        const month = selectedMonth || currentMonth;
        const formattedMonth = month < 10 ? `0${month}` : month.toString();

        apiUrl += `&month=${formattedMonth}&year=${year}`;

        const response = await axios.get(apiUrl);
        setTimeTables(response.data.data.reverse());
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bảng điểm:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTimeTables();
  }, [studentGuid, selectedMonth, selectedYear, currentMonth, currentYear]);

  useEffect(() => {
    if (isFirstRender && timeTables.length > 0) {
      const updateItemsToTrue = async () => {
        const updatedTimeTables = timeTables.map(timeTable => ({
          ...timeTable,
          isChecked: true,
        }));
        
        setTimeTables(updatedTimeTables);

        try {
          const updateRequests = updatedTimeTables.map(timeTable =>
            axios.post(
              `https://ileader.cloud/api/MiniApp/CheckSeen?guid=${timeTable.guid}&check=true`
            )
          );
          await Promise.all(updateRequests);
          console.log("Tất cả trạng thái checked đã được gửi thành công lên server");
        } catch (error) {
          console.error("Lỗi khi gửi trạng thái checked lên server:", error);
        }
      };

      updateItemsToTrue();
      setIsFirstRender(false); // Ensure this runs only once
    }
  }, [timeTables, isFirstRender]);

  const countUnseen = () => {
    const unseenTimeTables = timeTables.filter(
      (table) => !isChecked[table.guid]
    );
    setUnseenCount(unseenTimeTables.length);
  };

  useEffect(() => {
    countUnseen();
  }, [timeTables, isChecked]);

  useEffect(() => {
    const loadCheckedState = () => {
      const storedCheckedState = localStorage.getItem("isChecked");
      if (storedCheckedState) {
        setIsChecked(JSON.parse(storedCheckedState));
      }
    };

    loadCheckedState();
  }, []);

  const saveCheckedState = (newState, callback) => {
    localStorage.setItem("isChecked", JSON.stringify(newState));
    setIsChecked(newState);
    if (callback) {
      callback();
    }
  };

  const sendCheckedStateToServer = async (regGuid, checkedState) => {
    try {
      await axios.post(
        `https://ileader.cloud/api/MiniApp/CheckSeen?guid=${regGuid}&check=${checkedState}`
      );
      console.log("Trạng thái checked đã được gửi thành công lên server");
    } catch (error) {
      console.error("Lỗi khi gửi trạng thái checked lên server:", error);
    }
  };

  const handleCheck = (guid) => {
    const newCheckedState = { ...isChecked, [guid]: !isChecked[guid] };
    saveCheckedState(newCheckedState, () => {
      sendCheckedStateToServer(guid, !isChecked[guid]);
    });
  };

  return (
    <Page className="page-timetable">
      <HeaderFormDate image={"./images/icon/icon-oclock.png"} title={"Chọn mốc thời gian"}/>
      
      <Box>
      <DateSelect
          currentMonth={currentMonth}
          currentYear={currentYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
        />
        <HeaderFormDate
          title={"Danh sách thời khóa biểu"}
          image={"./images/icon/icon-timetable.png"}
        />
      <TimeTableList timeTables={timeTables} />
      </Box>
    </Page>
  );
};

export default Home;
