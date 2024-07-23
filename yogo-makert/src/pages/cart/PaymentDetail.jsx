import React from "react";
import { List, Icon, Box,Text } from "zmp-ui";
import "../../css/cart/paymentDetail.css";
import { FaSackDollar } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { Title } from "chart.js";
const PaymentDetail = () => {
  return (
    <Box className="detail-payment">
      <Text className="section-title" size="large" bold mb={3}>
        Chi tiết thanh toán
      </Text>
      <Box className="payment-cart" mt={2}>
        <List>
          <List.Item className="payment-detail">
            <div className="list-item-payment">
              <FaSackDollar className="payment-icon" />
              <div className="item-payment">
                <div className="title-sum-cart">0 đ</div>
                <div className="payment-description">Tổng tiền hàng</div>
              </div>
            </div>
          </List.Item>
          <List.Item className="payment-detail">
            <div className="list-item-payment">
              <FaTruck className="payment-icon" />
              <div className="item-payment">
                <div className="title-frre-payment">Miễn phí vận chuyển</div>
                <div className="free-description">Phí vận chuyển</div>
                <div className=""></div>
              </div>
            </div>
            <div className="payment-methods">
              <div className="title-method">Các phương thức thanh toán</div>
            </div>
          </List.Item>
        </List>
      </Box>
    </Box>
  );
};

export default PaymentDetail;
