import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Text, List, Icon } from "zmp-ui";
import SetTitleHeader from "../shared/hooks/setTitleHeader";
import CustomBottomNavigation from "../shared/components/CustomBottomNavigation";
import FlashSale from "./FlashSale";
import CartOrder from "./CartOrder";
import Header from "./Infomation";
import Extension from "./Extension";
import ByBack from "./BuyBack";
import ListFunction from "./ListFunction";
import "../../css/user/home.css";

const Home = () => {
  SetTitleHeader({
    title: "Tài khoản",
    leftButton: "none",
  });
  const {keyTab } = location.state || {};

  const user = {
    avatar: "./images/user/user-wind.jpg", // Replace with real image
    name: "Wind Lập Trình",
    level: "Thành viên vàng",
    balance: 1000000,
  };

  return (
    <Box>
      <Box className="page-user">
        <Header
          avatar={user.avatar}
          level={user.level}
          balance={user.balance}
          name={user.name}
        />
        <FlashSale />
        <CartOrder />
        <Extension />
        <ByBack />
        <ListFunction />
      </Box>
      <CustomBottomNavigation />
    </Box>
  );
};

export default Home;
