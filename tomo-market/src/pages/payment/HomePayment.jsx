import React, { useState, useEffect } from "react";
import { Box, Text, Button, Input, Icon } from "zmp-ui";
import SetTitleHeader from "@/pages/shared/hooks/setTitleHeader";
import InfoPayment from "./InfoPayment.jsx";
import ProductPayment from "./ProductPayment.jsx";
import ContentPayment from "./ContentPayment.jsx";
import AddressPayment from "./AddressPayment.jsx";
import MethodPayment from "./MethodPayment.jsx";
import InfoShipping from "./InfoShipping.jsx";
import { usePayment } from "../shared/common/payment/PaymentContext";
import "../../css/payment/paymentDetail.css";
import { useNavigate } from "react-router-dom";
import OrderCart from "./OrderCart.jsx";
import ContactPayment from "./ContactPayment.jsx";
const HomePayment = () => {
  SetTitleHeader({
    title: "Chi tiết thanh toán",
  });
  //date payment -> context
  const { paymentData } = usePayment();
   const navigate = useNavigate()

  return (
    <Box className="page-payment" p={4}>
      {paymentData.length > 0 
                          ? (
                              <Box>
                                <InfoPayment cartData={paymentData} />
                                <AddressPayment />
                                <ProductPayment cartData={paymentData} />
                                <ContentPayment cartData={paymentData} />
                                <MethodPayment />
                                <InfoShipping />
                                <ContactPayment/>
                              </Box>) 
                          : (<OrderCart/>)}
    </Box>
  );
};

export default HomePayment;
