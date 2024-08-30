import React, { useEffect, useRef } from "react";
import { Page, Box, Button, Text, Icon, Swiper } from "zmp-ui";
import { BsShop } from "react-icons/bs";
import "../../css/home/infomation.css";

const Infomation = () => {
  return (
    <Box mt={2} className="page-infomation-home">
      <Box className="header-infomation-home">
        <BsShop className="icon-infomation-home"/>
        <Text.Title className="title-infomation-home">
          Nhà Thiếu Nhi Thành Phố Hồ Chí Minh
        </Text.Title>
      </Box>
        <Text.Title className="description-infomation-home">
          Nhà Truyền thống Đội Thiếu niên Tiền phong Hồ Chí Minh tọa lạc trong
          khuôn viên Tượng Bác Hồ với thiếu nhi tại số 169 Nam Kỳ Khởi Nghĩa,
          Phường Võ Thị Sáu, Quận 3, thành phố Hồ Chí Minh. Đây là nơi lưu giữ
          và trưng bày những hình ảnh, hiện vật gắn với lịch sử của tổ chức Đội
          Thiếu niên Tiền phong Hồ Chí Minh và phong trào thiếu nhi thành phố Hồ
          Chí Minh từ năm 1941 đến nay.
        </Text.Title>
    </Box>
  );
};

export default Infomation;
