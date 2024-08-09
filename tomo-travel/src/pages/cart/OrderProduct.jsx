import React from "react";
import { Box, Text, Button } from "zmp-ui";
import "../../css/cart/orderProduct.css";

const OrderProduct = () => {
  const calculateTotal = () => {
    return ("31.000.000");
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
          <Text className="calculate-total" size="medium">{calculateTotal()} đ</Text>
        </Box>
        <Button className="btn-payment" onClick={handleCheckout}>
          Thanh toán
        </Button>
      </Box>
    </Box>
  );
};

export default OrderProduct;
