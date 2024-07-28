import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  Box,
  Icon,
  Page,
  Sheet,
  Swiper,
  Text,
  Input,
} from "zmp-ui";
import "../../css/detailHome.css";
import CategoryProduct from "@/pages/home/CategoryProduct";
import ProductList from "@/pages/home/ProductList";
import Slider from "@/pages/home/Slider";
import ServiceStore from "@/pages/home/ServiceStore";
import Introduce from "@/pages/home/Introduce";

import CustomBottomNavigation from "@/components/layout/CustomBottomNavigation";
import SetTitleHeader from "@/pages/shared/hooks/setTitleHeader";
import Popup from "@/pages/shared/pages/Popup";

const categories = [
  { id: 1, name: "Sản phẩm 1", icon: "/images/banner-1.jpg" },
  { id: 2, name: "Sản phẩm 2", icon: "/images/banner-2.webp" },
  { id: 3, name: "Sản phẩm 3", icon: "/images/banner-3.webp" },
  { id: 4, name: "Sản phẩm 4", icon: "/images/banner-4.webp" },
];

const products = [
  { id: 1, name: "Mì sào", image: "/images/category/combo-1.jpg" },
  { id: 2, name: "Đồ nướng", image: "/images/category/combo-2.jpg" },
  { id: 3, name: "Combo Three", image: "/images/category/combo-3.jpg" },
  { id: 4, name: "Đồ ăn nhanh", image: "/images/category/combo-4.jpg" },
];

const gotoCategory = (id) => {
  console.log("Chuyển đến danh mục:", id);
};

const Home = (props) => {
  SetTitleHeader({
    title: "Nhà hàng Wind",
  });
  const navigate = useNavigate();

  const handleServiceStoreClick = (id) => {
    console.log("Category clicked:", id);
    navigate(`/categoryByProduct`);
  };

  //popup
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Kiểm tra nếu popup đã được hiển thị trước đó
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      setShowPopup(true);
      // Đánh dấu popup đã được hiển thị
      localStorage.setItem('popupShown', 'true');
    }
  }, []);
  const handleClosePopup = () => {
    setShowPopup(false);
  }
  return (
    <Page className="home">
 <Popup show={showPopup} onClose={handleClosePopup} />
      <Box className="header-home">
        <Introduce/>
        <ServiceStore
          products={products}
          onServiceStoreClick={handleServiceStoreClick}
        />
        <Slider />
        <CategoryProduct/>
      </Box>
      <Box>
        <ProductList />
      </Box>
      <CustomBottomNavigation />
    </Page>
  );
};

export default Home;
