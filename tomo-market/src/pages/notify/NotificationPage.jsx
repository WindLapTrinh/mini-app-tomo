import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Text, Button } from "zmp-ui";
import SetTitleHeader from "@/pages/shared/hooks/setTitleHeader";
import CustomBottomNavigation from "@/components/layout/CustomBottomNavigation";

import "../../css/notify/notifyPage.css";

const notifications = [
  {
    id: 1,
    title: "Đơn hàng của bạn",
    message: "Bắp cải và cà chua đã đã được giao",
    date: "2024-07-20",
  },
  // Thêm các thông báo khác nếu cần
];

const NotificationPage = () => {
  SetTitleHeader({
    title: "Thông báo của bạn",
  });
  const location = useLocation();
  const navigate = useNavigate();
  
  const { keyTab } = location.state || { keyTab}; 

  const handleHistoryCart = () => {
    navigate("/purchaseHistory");
  }

  return (
    <Box className="notification-page">
      <Box className="notification-list">
        {notifications.map((notification) => (
          <Box
            key={notification.id}
            className="notification-item"
            p={2}
            mb={2}
            border
            onClick={handleHistoryCart}
          >
            <Text className="notification-title" size="medium" bold>
              {notification.title}
            </Text>
            <Text className="notification-message" size="small">
              {notification.message}
            </Text>
            <Text className="notification-date" size="xSmall" color="gray">
              {notification.date}
            </Text>
            {/* <Button className="view-details-button" mt={2}>
              View Detail
            </Button> */}
          </Box>
        ))}
      </Box>
      <CustomBottomNavigation />
    </Box>
  );
};

export default NotificationPage;
