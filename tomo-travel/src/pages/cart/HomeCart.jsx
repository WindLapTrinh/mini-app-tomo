import React, { useState } from "react";
import { Box, Text, Button, Input, List, Icon } from "zmp-ui";
import SetTitleHeader from "@/pages/shared/hooks/setTitleHeader";
import ShippingInfo from "./ShippingInfo";
import PaymentDetail from "./PaymentDetail";
import OrderProduct from "./OrderProduct";
import CustomBottomNavigation from "@/components/layout/CustomBottomNavigation";
import InfomationVoucher from "./InfomationVoucher";
import "../../css/cart/homeCart.css";
import "../../css/cart/shippingInformation.css";

const cartItems = [
  {
    id: 1,
    name: "Bình Lập",
    image: "/images/product/binh-lap.jpg",
    price: "24.000.000",
    quantity: 1,
  },
  {
    id: 2,
    name: "Tây Ninh",
    image: "/images/product/tay-ninh.jpg",
    price: "8.000.000",
    quantity: 2,
  },
];

const HomeCart = () => {
  SetTitleHeader({
    title: "Tour của bạn",
  });
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // Xử lý thanh toán
  const handleCheckout = () => {
    console.log("Proceed to checkout");
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Box className="cart-page" p={4}>
      <Box className="sum-cart-page">
        <Box className="cart-items">
          <Box className="header-cart-product">
            <img className="icon-header-cart" src="/images/icon/cart.jpg" />
            <Text className="section-title" size="large" bold mb={3}>
              Tour đã chọn
            </Text>
          </Box>

          {cartItems.map((item) => (
            <Box key={item.id} className="cart-item" mt={2}>
              <Box className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </Box>
              <Box className="cart-item-info">
                <Text className="cart-item-name">{item.name}</Text>
                <Text className="cart-item-price">${item.price} đ</Text>
                <Text className="cart-item-quantity">
                  Số lượng: {item.quantity}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
        <InfomationVoucher/>
        <PaymentDetail />
      </Box>
      <OrderProduct />
      <CustomBottomNavigation />
    </Box>
  );
};

export default HomeCart;
