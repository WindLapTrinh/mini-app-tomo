import React from "react";
import { Box, Text, Button } from "zmp-ui";
import "../../css/booking/buttonBooking.css";

const OrderProduct = () => {
  const calculateTotal = () => {
    // Hàm tính tổng tiền, thay thế bằng tính toán thực tế của bạn
    return (6);
  }

  const handleSubmit = () => {
   // Xử lý gửi thông tin đặt chỗ ở đây
   alert(`Đặt chỗ thành công:
    Ngày: ${date}
    Thời gian: ${time}
    Số lượng khách: ${guests}
    Yêu cầu đặc biệt: ${specialRequests}`);
  };

  return (
    <Box className="booking-product-container">
      <Box className="booking-product-cart">
        <Box className="booking-summary">
          <Text size="medium" bold>
            Số lượng khách: {calculateTotal()}
          </Text>
        </Box>
        <Button className="btn-booking" onClick={handleSubmit}>
          Đặt bàn
        </Button>
      </Box>
    </Box>
  );
};

export default OrderProduct;
