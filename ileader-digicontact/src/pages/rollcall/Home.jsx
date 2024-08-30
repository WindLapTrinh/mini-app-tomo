// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Page, Box, Text } from 'zmp-ui';
import SetTitleHeader from '../shared/hooks/setTitleHeader';
import Loading from '../shared/pages/Loading';
import BottomNavigationComponent from '../shared/components/BottomNavigationComponent';
import DateSelect from './DateSelect';
import RollCallsTable from './RollCallsTable';
import CurrentDate from './CurrentDate';
import HeaderFormDate from "./HeaderFormDate";
import "../../css/accountant/tuitionfees.css"
const Home = () => {
  SetTitleHeader({ title: "Điểm danh" });

  const navigate = useNavigate();
  const location = useLocation();

  const { studentGuid, currentDate: initialDate } = location.state || {};
  const { currentDate, currentMonth, currentYear, setCurrentDate } = CurrentDate(initialDate);

  const [rollcalls, setRollcalls] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isChecked, setIsChecked] = useState({});
  const [unseenCount, setUnseenCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const fetchRollcalls = async () => {
      try {
        let apiUrl = `https://ileader.cloud/api/MiniApp/GetListNotifysByDate?msgType=ĐD-NX&guidStudent=${studentGuid}`;

        const year = selectedYear || currentYear;
        const month = selectedMonth || currentMonth;
        const formattedMonth = month < 10 ? `0${month}` : month.toString();

        apiUrl += `&month=${formattedMonth}&year=${year}`;

        const response = await axios.get(apiUrl);
        setRollcalls(response.data.data.reverse());
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bảng điểm:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRollcalls();
  }, [studentGuid, selectedMonth, selectedYear, currentMonth, currentYear]);

  useEffect(() => {
    if (isFirstRender && rollcalls.length > 0) {
      const updateItemsToTrue = async () => {
        const updatedRollcalls = rollcalls.map(rollcall => ({
          ...rollcall,
          isChecked: true,
        }));
        
        setRollcalls(updatedRollcalls);

        try {
          const updateRequests = updatedRollcalls.map(rollcall =>
            axios.post(
              `https://ileader.cloud/api/MiniApp/CheckSeen?guid=${rollcall.guid}&check=true`
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
  }, [rollcalls, isFirstRender]);

  const countUnseen = () => {
    const unseenRollcalls = rollcalls.filter(
      (rollcall) => !isChecked[rollcall.guid]
    );
    setUnseenCount(unseenRollcalls.length);
  };

  useEffect(() => {
    countUnseen();
  }, [rollcalls, isChecked]);

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
    <Page className='page-tuitionfees'>
      <HeaderFormDate image={"./images/icon/icon-oclock.png"} title={"Chọn mốc thời gian"}/>
      <DateSelect
          currentMonth={currentMonth}
          currentYear={currentYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
        />
      <Box className='header-tuitionfees'>
        {isLoading ? (
          <Loading />
        ) : (
          
          <RollCallsTable rollcalls={rollcalls} isLoading={isLoading} />
        )}
      </Box>
      <BottomNavigationComponent studentGuid={studentGuid} />
    </Page>
  );
};

export default Home;
