
import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Text, List, Icon } from "zmp-ui";
import SetTitleHeader from "../shared/hooks/setTitleHeader";
import CustomBottomNavigation from "../shared/components/CustomBottomNavigation";
import FlashSale from "./FlashSale";
import CartOrder from "./CartOrder";
import Header from './Infomation';
import Extension from './Extension';
import ByBack from './BuyBack';
import '../../css/user/home.css';

const Home = () => {
  SetTitleHeader({
    title: " ",
    leftButton: "none"
  });
  const user = {
    avatar: './images/user/user-wind.jpg', // Replace with real image
    name : 'Wind Lập Trình',
    level: "Thành viên bạc",
    balance: 1000000,
  };

  return (
    <Box className="page-user">
      <Header avatar={user.avatar} level={user.level} balance={user.balance}  name={user.name}/>
      <FlashSale/>
      <CartOrder/>
      <Extension/>
      <ByBack/>
      <ByBack/>

      <CustomBottomNavigation />
    </Box>
  );
};

export default Home;
