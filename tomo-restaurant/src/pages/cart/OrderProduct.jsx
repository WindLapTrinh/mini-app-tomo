import React from "react";
import { Box, Text, Button } from "zmp-ui";
import "../../css/cart/orderProduct.css";

const OrderProduct = () => {
  const calculateTotal = () => {
    // Hàm tính tổng tiền, thay thế bằng tính toán thực tế của bạn
    return (100.00).toFixed(2); // Ví dụ: tổng tiền là $100.00
  };

  const handleCheckout = () => {
    // Xử lý thanh toán
    console.log("Thanh toán");
  };

  return (
    <Box className="order-product-container">
      <Box className="order-product-cart">
        <Box className="payment-summary">
          <Text size="medium" bold>
            Tổng cộng:
          </Text>
          <Text size="medium">${calculateTotal()}</Text>
        </Box>
        <Button className="btn-payment" onClick={handleCheckout}>
          Thanh toán
        </Button>
      </Box>
    </Box>
  );
};

export default OrderProduct;
