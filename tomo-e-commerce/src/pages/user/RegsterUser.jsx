import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, List, Icon } from "zmp-ui";
import "../../css/user/regsteruser.css";
const RegsterUser = () => {
  return (
    <Box className="page-regster-user">
      <Text className="form-title" size="medium" bold mb={2}>
           Đăng ký thành viên
      </Text>
      <Text size="small" className="descript-user">
        Tích điểm đổi thưởng 
      </Text>
    </Box>
  );
};
export default RegsterUser;
