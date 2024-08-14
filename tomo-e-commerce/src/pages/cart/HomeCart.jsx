import React, { useState, useEffect } from "react";
import { Box, Text, Button, Input, Icon } from "zmp-ui";
import SetTitleHeader from "@/pages/shared/hooks/setTitleHeader";
import ShippingInfo from "./ShippingInfo";
import PaymentDetail from "./PaymentDetail";
import OrderProduct from "./OrderProduct";
import CustomBottomNavigation from "@/components/layout/CustomBottomNavigation";
import InfomationVoucher from "./InfomationVoucher";
import { useCart } from "../shared/cart/CartContext";

import "../../css/cart/homeCart.css";
import "../../css/cart/shippingInformation.css";

const HomeCart = () => {
  SetTitleHeader({
    title: "Giỏ hàng của bạn",
  });

  const { cart, removeItemFromCart } = useCart();
  const [items, setItems] = useState(cart);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  const handleQuantityChange = (id, change) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const handleDeleteProduct = (id) => {
    removeItemFromCart(id);
  };

  return (
    <Box className="cart-page" p={4}>
      <Box className="sum-cart-page">
        <Box className="cart-items">
          <Box className="header-cart-product">
            <img className="icon-header-cart" src="/images/icon/cart.jpg" />
            <Text className="section-title" size="large" bold mb={3}>
              Sản phẩm đặt mua
            </Text>
          </Box>

          {items != "" 
                  ? items.map((item) => (
                    <Box key={item.id} className="index-cart-item">
                      <Box className="delete-item-cart" onClick={() => handleDeleteProduct(item.id)}>
                        <Icon className="icon-delete-item" icon="zi-close" />
                      </Box>
                      <Box className="cart-item" mt={2}>
                        <Box className="cart-item-image">
                          <img src={item.image} alt={item.name} />
                        </Box>
                        <Box className="cart-item-info">
                          <Text className="cart-item-name">{item.name}</Text>
                          <Text className="cart-item-price">
                            {item.price.toLocaleString()} đ
                          </Text>
                        </Box>
                      </Box>
                      <Box className="cart-item-quantity">
                        <a
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </a>
                        <Input
                          className="quantity-input"
                          type="number"
                          value={item.quantity}
                          readOnly
                        />
                        <a
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </a>
                      </Box>
                    </Box>)) 
                  : <Box className="text-cart">
                      <Text> Bạn chưa có sản phẩm nào trong giỏ hàng!</Text>
                    </Box>}
        </Box>
        <ShippingInfo />
        <InfomationVoucher />
        <PaymentDetail />
      </Box>
      <OrderProduct />
      <CustomBottomNavigation />
    </Box>
  );
};

export default HomeCart;