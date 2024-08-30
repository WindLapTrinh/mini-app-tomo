import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Page, Button, Box, Modal, Icon, List } from "zmp-ui";
import axios from "axios";
import useFormatDate from "../shared/hooks/useFormatDate";
import SetTitleHeader from "../shared/hooks/setTitleHeader";
import BottomNavigationComponent from "../shared/components/BottomNavigationComponent"; // Import the component
import ReviewAllDate from "../shared/pages/ReviewAllData";
import Notify from "../shared/pages/Notify";
import parse from "html-react-parser";
import "../../css/notify/home.css";

const { Item } = List;

const Notice = () => {
  SetTitleHeader({ title: "Thông báo" });

  const navigate = useNavigate();
  const location = useLocation();
  const formatDate = useFormatDate();
  const { studentGuid } = location.state || {};

  const [modalVisible, setModalVisible] = useState(false);
  const [notifys, setNotifys] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isChecked, setIsChecked] = useState({});
  const [unseenCount, setUnseenCount] = useState(0);

  // Fetch notifications on component mount and when studentGuid changes
  useEffect(() => {
    const fetchNotifys = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/GetListNotifys?msgType=SK&guidStudent=${studentGuid}`
        );

        const savedState = JSON.parse(localStorage.getItem("isChecked")) || {};
        setNotifys(response.data.data.reverse()); // Reverse the array if needed
        setIsChecked(savedState);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách thông báo:", error);
      }
    };

    fetchNotifys();
  }, [studentGuid]);

  // Calculate unseen notifications count whenever notifys or isChecked changes
  useEffect(() => {
    const countUnseen = () => {
      const unseenNotice = notifys.filter((notify) => !isChecked[notify.guid]);
      setUnseenCount(unseenNotice.length);
    };

    countUnseen();
  }, [notifys, isChecked]);
  // Send checked state to server
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
  // Handle notification item click
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

  // Save checked state to local storage
  const saveCheckedState = (newState, callback) => {
    localStorage.setItem("isChecked", JSON.stringify(newState));
    setIsChecked(newState);
    if (callback) {
      callback();
    }
  };

  // Handle navigation to date notice page
  const handleClickDate = () => {
    const newCurrentDate = new Date();
    navigate("/datenotice", {
      state: { studentGuid, currentDate: newCurrentDate },
    });
  };

  return (
    <Page className="page-notify">
      {notifys.length === 0 ? (
        <Box className="header-notify">
            <Notify />
            <ReviewAllDate onClickDate={handleClickDate}/>
        </Box>
      ) : (
        <Box>
          <List className="list-notify">
            {notifys.map((notify) => (
              <Item
                key={notify.guid}
                title={notify.title}
                prefix={<Icon icon="zi-calendar" />}
                suffix={<Icon icon="zi-chevron-right" />}
                onClick={() => handleItemClick(notify)}
                className={
                  isChecked == false ? "item-notify" : "item-check-notify"
                }
                subTitle={"Ngày gửi: " + formatDate(notify.dateCreated)}
              />
            ))}
          </List>
          <ReviewAllDate onClickDate={handleClickDate} />
        </Box>
      )}
      <Modal
        visible={modalVisible}
        title="Thông báo"
        onClose={() => setModalVisible(false)}
        zIndex={1200}
        actions={[
          { text: "Đã hiểu", close: true },
          { text: "Thoát", close: true, highLight: true },
        ]}
        description=""
      >
        <Box className="space-y-4">
          {selectedNotice &&
            parse(selectedNotice.jsonContent.replace(/"/g, ""))}
        </Box>
      </Modal>
      <BottomNavigationComponent studentGuid={studentGuid} />{" "}
      {/* Add the BottomNavigationComponent */}
    </Page>
  );
};

export default Notice;
