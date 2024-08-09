import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BottomNavigation, Icon } from "zmp-ui";
import { BsHouse } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import "../../css/detailhome/bottomNavigation.css"
const CustomBottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { keyTab } = location.state || {};

  const [activeTab, setActiveTab] = useState(keyTab || "home");

  const handleHome = (keyTab) => {
    navigate("/",{state : {keyTab}});
    console.log("Tab active",keyTab)
  }
  const handleNotify = (keyTab) => {
    navigate("/notificationPage", { state: { keyTab } });
    console.log("Tab active", keyTab);
  };
  const handleTour = (keyTab) => {
    navigate("/homeCart", {state : {keyTab}});
    console.log("Tab active", keyTab)
  }
  const handleContactUser = (keyTab) => {
    navigate("/contactUser",{state : {keyTab}});
    console.log("Tab active",keyTab)
  }

  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
    >
     <BottomNavigation.Item
        className={activeTab === "home" ? "icon-active" : ""}
        key="home"
        label="Home"
        icon={
          <div className="accounting-icon-wrapper">
            <BsHouse />
          </div>
        }
        activeIcon={
          <div className="accounting-icon-wrapper">
            <BsHouse />
          </div>
        }
        onClick={() => {
           handleHome("home");
        }}
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
          handleNotify("contact");
        }}
      />
      <BottomNavigation.Item
        className={activeTab === "tour" ? "icon-active" : ""}
        key="tour"
        label="Đặt tour"
        icon={
          <div className="accounting-icon-wrapper">
            <TbBrandBooking />
          </div>
        }
        activeIcon={
          <div className="accounting-icon-wrapper">
            <TbBrandBooking />
          </div>
        }
        onClick={() => {
           handleTour("tour");
        }}
      />
      <BottomNavigation.Item
        className={activeTab === "user" ? "icon-active" : ""}
        key="user"
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
          handleContactUser("user")
        }}
      />
    </BottomNavigation>
  );
};

export default CustomBottomNavigation;
