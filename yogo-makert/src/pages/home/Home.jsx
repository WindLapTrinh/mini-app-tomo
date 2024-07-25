import React, { useState } from "react";
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

const categories = [
  { id: 1, name: "Sản phẩm 1", icon: "/images/banner-1.jpg" },
  { id: 2, name: "Sản phẩm 2", icon: "/images/banner-2.webp" },
  { id: 3, name: "Sản phẩm 3", icon: "/images/banner-3.webp" },
  { id: 4, name: "Sản phẩm 4", icon: "/images/banner-4.webp" },
];

const products = [
  { id: 1, name: "Flesh", image: "/images/category/flesh.jpg" },
  { id: 2, name: "Snacks", image: "/images/category/snacks.jpg" },
  { id: 3, name: "Vegetables", image: "/images/category/vegetables.jpg" },
  { id: 4, name: "Fruit", image: "/images/category/fruit.jpg" },
  { id: 5, name: "Seafood", image: "/images/category/seafood.jpg" },
  { id: 6, name: "Rice", image: "/images/category/rice.jpg" },
  { id: 7, name: "Beer", image: "/images/category/beer.jpg" },
  { id: 9, name: "Flesh", image: "/images/category/flesh.jpg" },
  { id: 9, name: "Snacks", image: "/images/category/snacks.jpg" },
  { id: 10, name: "Vegetables", image: "/images/category/vegetables.jpg" },
  { id: 11, name: "Fruit", image: "/images/category/fruit.jpg" },
  { id: 12, name: "Seafood", image: "/images/category/seafood.jpg" },
];

const gotoCategory = (id) => {
  console.log("Chuyển đến danh mục:", id);
};

const Home = (props) => {
  SetTitleHeader({
    title: "Shop Tomo Makert",
  });
  const navigate = useNavigate();

  const handleServiceStoreClick = (id) => {
    console.log("Category clicked:", id);
    navigate(`/categoryByProduct`);
  };

  return (
    <Page className="home">

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
