import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, Icon } from "zmp-ui";
import { BsCart } from "react-icons/bs";

const CustomBottomNavigation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("chat");

  const openChatScreen = () => {
    console.log("Open Chat Screen");
  };
  const handleNotify = () => {
    navigate("/notificationPage");
  };
  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
      style={{ marginTop: "56px" }}
    >
      <BottomNavigation.Item
        className={activeTab === "chat" ? "icon-active" : ""}
        key="chat"
        label="Tin Nhắn"
        icon={<Icon icon="zi-chat" />}
        activeIcon={<Icon icon="zi-chat-solid" />}
        onClick={openChatScreen}
      />
      <BottomNavigation.Item
        className={activeTab === "contact" ? "icon-active" : ""}
        label="Thông báo"
        key="contact"
        icon={
          <div className="accounting-icon-wrapper">
            <Icon icon="zi-clock-1" />
          </div>
        }
        activeIcon={<Icon icon="zi-clock-1-solid" />}
        onClick={() => {
          handleNotify();
        }}
      />
      <BottomNavigation.Item
        className={activeTab === "cart" ? "icon-active" : ""}
        key="cart"
        label="Giỏ hàng"
        icon={
          <div className="accounting-icon-wrapper">
                <BsCart />
                </div>
        }
        activeIcon={
          <div className="accounting-icon-wrapper">
                <BsCart />
                </div>
        }
        onClick={() => {
          // Handle click for Giỏ hàng
        }}
      />
      <BottomNavigation.Item
        className={activeTab === "customer" ? "icon-active" : ""}
        key="customer"
        label="Cá nhân"
        icon={
          <div className="accounting-icon-wrapper">
            <Icon icon="zi-user" />
          </div>
        }
        activeIcon={
          <div className="accounting-icon-wrapper">
            <Icon icon="zi-user-solid" />
          </div>
        }
        onClick={() => {
          // Handle click for Cá nhân
        }}
      />
    </BottomNavigation>
  );
};

export default CustomBottomNavigation;
