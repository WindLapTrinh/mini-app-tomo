// src/components/NotificationPage.js
import React from "react";
import { Box, Text, Button } from "zmp-ui";
import SetTitleHeader from "@/pages/shared/hooks/SetTitleHeader";
import "../../css/notify/notifyPage.css";

const notifications = [
  {
    id: 1,
    title: "Purchase history",
    message: "The order is in transit. Check it out now!",
    date: "2024-07-20",
  }
];

const NotificationPage = () => {
  SetTitleHeader({
    title: "Notification list"
  })
  return (
    <Box className="notification-page">
      <Box className="notification-list">
        {notifications.map((notification) => (
          <Box key={notification.id} className="notification-item" p={2} mb={2} border>
            <Text className="notification-title" size="medium" bold>
              {notification.title}
            </Text>
            <Text className="notification-message" size="small">
              {notification.message}
            </Text>
            <Text className="notification-date" size="xSmall" color="gray">
              {notification.date}
            </Text>
            <Button className="view-details-button" mt={2}>
              View Detail
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NotificationPage;
