import React, { useState, useEffect } from "react";
import { Box } from "zmp-ui";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import "../../css/detailhome/infroduce.css";

const Introduce = () => {
  const [content, setContent] = useState({
    mesage:"Đặt tour có vouchers",
    icon: <BsClipboard2CheckFill/>
  });

  useEffect(() => {
    const messages = [
      {mesage:"Đặt tour có vouchers", icon: <BsClipboard2CheckFill/>},
      {mesage:"Hè này đi đâu",icon:<FaCarSide/>},
      {mesage:"Ưu đãi khách hàng",icon:<BsPatchCheckFill/>},
      {mesage:"Vui chơi hè cùng Wind", icon: <BsEmojiSunglassesFill/>}
    ];
    
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % messages.length;
      setContent(messages[index]);
    }, 1500);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <Box className="introduce-home">
      <div className="fouder">
        <BsShieldFillCheck />
        <span>Chất lượng đảm bảo bởi Wind</span>
      </div>
      <div className="free-ship">
        <span>{content.icon}</span>
        <span>{content.mesage}</span>
      </div>
    </Box>
  );
};

export default Introduce;
