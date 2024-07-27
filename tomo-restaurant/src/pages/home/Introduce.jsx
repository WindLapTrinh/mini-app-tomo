import React, { useState, useEffect } from "react";
import { Box } from "zmp-ui";
import { GrRestaurant } from "react-icons/gr";
import { TbBrandBooking } from "react-icons/tb";
import { BiSolidDish } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "../../css/detailhome/infroduce.css";

const Introduce = () => {
  const [content, setContent] = useState({
    mesage:"Booking online, tiện lợi",
    icon: <TbBrandBooking/>
  });

  useEffect(() => {
    const messages = [
      {mesage:"Booking online, tiện lợi", icon: <TbBrandBooking/>},
      {mesage:"Đặt bàn ngay, kẻo hết",icon:<BiSolidDish/>},
      {mesage:"Món ăn hấp dẫn, chất lượng", icon: <BsFillPatchCheckFill/>}
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
        <GrRestaurant />
        <span>Chào bạn, đến Nhà hàng Wind</span>
      </div>
      <div className="free-ship">
        <span>{content.icon}</span>
        <span>{content.mesage}</span>
      </div>
    </Box>
  );
};

export default Introduce;
