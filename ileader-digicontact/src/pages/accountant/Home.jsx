// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Page, Box, Text } from 'zmp-ui';
import SetTitleHeader from '../shared/hooks/setTitleHeader';
import Loading from '../shared/pages/Loading';
import BottomNavigationComponent from '../shared/components/BottomNavigationComponent';
import DateSelect from './DateSelect';
import AccountsTable from './AccountsTable';
import CurrentDate from './CurrentDate';
import HeaderFormDate from "./HeaderFormDate";
import "../../css/accountant/tuitionfees.css"
const Home = () => {
  SetTitleHeader({ title: "Phiếu thu học phí" });

  const navigate = useNavigate();
  const location = useLocation();

  const { studentGuid, currentDate: initialDate } = location.state || {};
  const { currentDate, currentMonth, currentYear, setCurrentDate } = CurrentDate(initialDate);

  const [accounts, setAccounts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isChecked, setIsChecked] = useState({});
  const [unseenCount, setUnseenCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        let apiUrl = `https://ileader.cloud/api/MiniApp/GetListNotifysByDate?msgType=HP&guidStudent=${studentGuid}`;

        const year = selectedYear || currentYear;
        const month = selectedMonth || currentMonth;
        const formattedMonth = month < 10 ? `0${month}` : month.toString();

        apiUrl += `&month=${formattedMonth}&year=${year}`;

        const response = await axios.get(apiUrl);
        setAccounts(response.data.data.reverse());
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bảng điểm:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccount();
  }, [studentGuid, selectedMonth, selectedYear, currentMonth, currentYear]);

  useEffect(() => {
    if (isFirstRender && accounts.length > 0) {
      const updateItemsToTrue = async () => {
        const updatedAccounts = accounts.map(account => ({
          ...account,
          isChecked: true,
        }));
        
        setAccounts(updatedAccounts);

        try {
          const updateRequests = updatedAccounts.map(account =>
            axios.post(
              `https://ileader.cloud/api/MiniApp/CheckSeen?guid=${account.guid}&check=true`
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
  }, [accounts, isFirstRender]);

  const countUnseen = () => {
    const unseenAccounts = accounts.filter(
      (account) => !isChecked[account.guid]
    );
    setUnseenCount(unseenAccounts.length);
  };

  useEffect(() => {
    countUnseen();
  }, [accounts, isChecked]);

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
      <HeaderFormDate image={"./images/icon/icon-select-date.png"} title={"Chọn mốc thời gian"}/>
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
          
          <AccountsTable accounts={accounts} isLoading={isLoading} />
        )}
      </Box>
      <BottomNavigationComponent studentGuid={studentGuid} />
    </Page>
  );
};

export default Home;
