import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Page } from "zmp-ui";
import Introduce from "./Introduce.jsx";
import Slider from "./Slider.jsx";
import Feature from "./Feature.jsx";
import Infomation from "./Infomation.jsx";
import CreateShortcuts from "./CreateShortcuts.jsx";
import SetTitleHeader from "../shared/hooks/setTitleHeader";
import BottomNavigationComponent from "../shared/components/BottomNavigationComponent";
import {openChatScreen} from "../shared/utils/openChatScreen.js";
import "../../css/home/home.css";

const Home = () => {
  const location = useLocation();
  const { studentName, studentGuid, phoneNumber } = location.state || {};
  SetTitleHeader({
    title: studentName
  });
  const navigate = useNavigate();

  const handleListBillonClick = () => {
    console.log("Navigating to ListBill with studentGuid:", studentGuid);
    navigate("/notify", { state: { studentGuid } });
  };

  const registerOnLick = () => {
    console.log("Navigating to ListBill with studentGuid:", studentGuid);
    navigate("/register", { state: { studentGuid, studentName } });
  };

  return (
    <Page className="page-home">
      <Box className="header-home">
        <Introduce />
        <Slider />
        <Feature />
      </Box>
      <Box className="body-home">
        <CreateShortcuts />
        <Infomation />
      </Box>
      <BottomNavigationComponent
        studentGuid={studentGuid}
        studentName={studentName}
        phoneNumber={phoneNumber}
        handleListBillonClick={handleListBillonClick}
        openChatScreen={openChatScreen}
      />
    </Page>
  );
};

export default Home;
