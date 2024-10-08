import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BottomNavigation, Icon } from "zmp-ui";
import {BsCart, BsHouse } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
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
  const handleBooking =(keyTab) => {
    navigate("/booking", {state : {keyTab}});
  }
  const handleCart = (keyTab) => {
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
        label="Trang chủ"
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
        className={activeTab === "booking" ? "icon-active" : ""}
        key="booking"
        label="Đặt bạn"
        icon={
          <div className="accounting-icon-wrapper">
            <BiDish />
          </div>
        }
        activeIcon={
          <div className="accounting-icon-wrapper">
            <BiDish />
          </div>
        }
        onClick={() => {
          handleBooking("booking");
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
           handleCart("cart");
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
