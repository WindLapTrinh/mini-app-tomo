import React, { useState } from "react";
import { Box, Text, Button, Input, List, Icon } from "zmp-ui";
import "../../css/cart/homeCart.css";

const cartItems = [
  {
    id: 1,
    name: "Bắt cải trắng",
    image: "/images/product/veg-3.jpg",
    price: "29.99",
    quantity: 1,
  },
  {
    id: 2,
    name: "Rau mồng tơi",
    image: "/images/product/veg-4.jpg",
    price: "15.99",
    quantity: 2,
  },
];

const HomeCart = () => {
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

  const handleCheckout = () => {
    // Xử lý thanh toán
    console.log("Proceed to checkout");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Box className="cart-page" p={4}>
      <Box className="cart-items">
        <Text className="section-title" size="large" bold mb={3}>
          Sản phẩm đặt mua
        </Text>
        {cartItems.map((item) => (
          <Box key={item.id} className="cart-item">
          <Box className="cart-item-image">
            <img src={item.image} alt={item.name} />
          </Box>
          <Box className="cart-item-info">
            <Text className="cart-item-name">{item.name}</Text>
            <Text className="cart-item-price">${item.price}</Text>
            <Text className="cart-item-quantity">Quantity: {item.quantity}</Text>
          </Box>
        </Box>
        ))}
      </Box>

      <Box className="shipping-info" mt={4}>
        <Text className="section-title" size="large" bold mb={3}>
          Thông tin vận chuyển
        </Text>
        <Input
          name="address"
          value={shippingInfo.address}
          onChange={handleChange}
          placeholder="Địa chỉ"
          mb={2}
        />
        <Input
          name="city"
          value={shippingInfo.city}
          onChange={handleChange}
          placeholder="Thành phố"
          mb={2}
        />
        <Input
          name="postalCode"
          value={shippingInfo.postalCode}
          onChange={handleChange}
          placeholder="Mã bưu điện"
          mb={2}
        />
        <Input
          name="country"
          value={shippingInfo.country}
          onChange={handleChange}
          placeholder="Quốc gia"
          mb={2}
        />
      </Box>

      <Box className="payment-details" mt={4} p={2} border>
        <Text className="section-title" size="large" bold mb={3}>
          Chi tiết thanh toán
        </Text>
        <Box className="payment-summary" mb={2}>
          <Text size="medium" bold>
            Tổng cộng:
          </Text>
          <Text size="medium">${calculateTotal()}</Text>
        </Box>
        <Button className="btn-payment" fullWidth onClick={handleCheckout}>
          Thanh toán
        </Button>
      </Box>
    </Box>
  );
};

export default HomeCart;
