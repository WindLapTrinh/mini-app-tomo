import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Page, Text, Box, Modal, Icon, List, Select } from "zmp-ui";
import axios from "axios";
import parse from "html-react-parser";
import { BsCalendar2MinusFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import SetTitleHeader from "../shared/hooks/setTitleHeader"
import "../../css/notify/dateNotify.css";
import HeaderFormDate from "./HeaderFormDate";

const { Item } = List;
const { Option } = Select;

const Notice = ({ tasks, props }) => {
  SetTitleHeader({
    title : "Danh sách thông báo"
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { studentGuid, currentDate } = location.state || {};
  console.log("StudentGuid:", studentGuid);

  const [modalVisible, setModalVisible] = useState(false);
  const [notifys, setnotifys] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isChecked, setIsChecked] = useState({});
  const [unseenCount, setUnseenCount] = useState(0); // Number of unseen notifications
  const [selectedMonth, setSelectedMonth] = useState(() => {
    return currentDate ? currentDate.getMonth() + 1 : new Date().getMonth() + 1;
  });
  const [selectedYear, setSelectedYear] = useState(() => {
    return currentDate ? currentDate.getFullYear() : new Date().getFullYear();
  });

  // Fetch notifys whenever studentGuid, selectedMonth, or selectedYear changes
  useEffect(() => {
    const fetchnotifys = async () => {
      try {
        const formattedMonth =
          selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth.toString();
        const formattedYear = selectedYear.toString();
        const apiUrl = `https://ileader.cloud/api/MiniApp/GetListNotifysByDate?msgType=SK&guidStudent=${studentGuid}&month=${formattedMonth}&year=${formattedYear}`;
        console.log(apiUrl);

        const response = await axios.get(apiUrl);
        setnotifys(response.data.data.reverse());
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bảng điểm:", error);
      }
    };

    if (studentGuid && selectedMonth && selectedYear) {
      fetchnotifys();
    }
  }, [studentGuid, selectedMonth, selectedYear]);

  // Count unseen notifications
  useEffect(() => {
    const countUnseen = () => {
      const unseenNotice = notifys.filter((notify) => !isChecked[notify.guid]);
      setUnseenCount(unseenNotice.length);
    };
    countUnseen();
  }, [notifys, isChecked]);

  // Load checked state from localStorage on mount
  useEffect(() => {
    const loadCheckedState = () => {
      const storedCheckedState = localStorage.getItem("isChecked");
      if (storedCheckedState) {
        setIsChecked(JSON.parse(storedCheckedState));
      }
    };
    loadCheckedState();
  }, []);

  // Save checked state to localStorage
  const saveCheckedState = (newState, callback) => {
    localStorage.setItem("isChecked", JSON.stringify(newState));
    setIsChecked(newState);
    if (callback) {
      callback();
    }
  };

  // Send checked state to server
  const sendCheckedStateToServer = async (regGuid, checkedState) => {
    try {
      await axios.post(`https://ileader.cloud/api/MiniApp/CheckSeen?guid=${regGuid}&check=${checkedState}`);
      console.log("Trạng thái checked đã được gửi thành công lên server");
    } catch (error) {
      console.error("Lỗi khi gửi trạng thái checked lên server:", error);
    }
  };

  // Handle item click
  const handleItemClick = (notify) => {
    const newIsChecked = { ...isChecked };
    const currentState = isChecked[notify.guid];
    const newCheckedState = !currentState; // Toggle state

    newIsChecked[notify.guid] = newCheckedState;

    // Update unseenCount accordingly
    if (!newCheckedState) {
      setUnseenCount((prevCount) => prevCount + 1);
    } else {
      setUnseenCount((prevCount) => prevCount - 1);
    }

    saveCheckedState(newIsChecked, () => {
      setModalVisible(true);
      setSelectedNotice(notify);
      // Send the new checked state to server
      sendCheckedStateToServer(notify.guid, newCheckedState);
    });
  };

  // Generate month options
  const generateMonthOptions = () => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push({
        value: i,
        displayName: `Tháng ${i}`,
      });
    }
    return months;
  };

  // Generate year options
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const endYear = 2050;
    const years = [];
    for (let i = currentYear; i <= endYear; i++) {
      years.push({
        value: i,
        displayName: `Năm ${i}`,
      });
    }
    return years;
  };

  return (
    <Page className="page-notify">
      <Box pl={2}>
      <HeaderFormDate/>
        <div className="form-date">
          <div className="date-left">
            <Box mt={6}>
              <Box className="lable-date-left">
                <Text.Title size="small">Chọn tháng</Text.Title>
              </Box>
              <Select
                placeholder="Chọn tháng..."
                value={selectedMonth}
                onChange={(value) => {
                  setSelectedMonth(value);
                }}
                closeOnSelect={true}
              >
                {generateMonthOptions().map((option) => (
                  <Option
                    key={option.value}
                    value={option.value}
                    title={option.displayName}
                  >
                    {option.displayName}
                  </Option>
                ))}
              </Select>
            </Box>
          </div>
          <div className="date-right">
            <Box mt={6}>
            <Box className="lable-date-right">
                <Text.Title size="small">Chọn năm</Text.Title>
              </Box>
              <Select
                placeholder="Chọn năm..."
                value={selectedYear}
                onChange={(value) => {
                  setSelectedYear(value);
                }}
                closeOnSelect={true}
              >
                {generateYearOptions().map((option) => (
                  <Option
                    key={option.value}
                    value={option.value}
                    title={option.displayName}
                  >
                    {option.displayName}
                  </Option>
                ))}
              </Select>
            </Box>
          </div>
        </div>
      </Box>

      <Box>
      <div className="header-form-date">
        <img
          className="img-header-form"
          src="./images/icon/icon-list-notify.png"
        />
        <Text className="title-header-form">Danh sách thông báo</Text>
      </div>
    </Box>

      {notifys.length === 0 ? (
        <div className="text-student">Hiện tại không có thông báo nào?</div>
      ) : (
        <List className="list-date-notify">
          {notifys.map((notify) => (
            <Item
              key={notify.guid} // Ensure unique key
              title={notify.title}
              prefix={<Icon icon="zi-calendar" />}
              suffix={<Icon icon="zi-chevron-right" />}
              onClick={() => handleItemClick(notify)}
              className={"item-check-notify"}
              subTitle={notify.dateCreated}
            />
          ))}
        </List>
      )}

      <Modal
        visible={modalVisible}
        title="Thông báo"
        onClose={() => setModalVisible(false)}
        zIndex={1200}
        actions={[
          {
            text: "Đã hiểu",
            close: true,
          },
          {
            text: "Thoát",
            close: true,
            highLight: true,
          },
        ]}
        description=""
      >
        <Box className="space-y-4">
          {selectedNotice &&
            parse(selectedNotice.jsonContent.replace(/"/g, ""))}
        </Box>
      </Modal>
    </Page>
  );
};

export default Notice;
