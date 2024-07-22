import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
import CustomBottomNavigation from "@/components/layout/CustomBottomNavigation";
import SetTitleHeader from "@/pages/shared/hooks/SetTitleHeader";


const categories = [
  { id: 1, name: "Sản phẩm 1", icon: "/images/banner-1.jpg" },
  { id: 2, name: "Sản phẩm 2", icon: "/images/banner-2.webp" },
  { id: 3, name: "Sản phẩm 3", icon: "/images/banner-3.webp" },
  { id: 4, name: "Sản phẩm 4", icon: "/images/banner-4.webp" },
];

const products = [
  { id: 1, name: "Thịt heo", image: "/images/thit-heo.png" },
  { id: 2, name: "Bánh kẹo", image: "/images/banh-keo-cac-loai.png" },
  { id: 3, name: "Rau củ", image: "/images/rau-cu-trai-cay.png" },
  { id: 4, name: "Cá hải sản", image: "/images/ca-hai-san.png" },
  { id: 5, name: "Giạo các loại", image: "/images/gao-cac-loai.png" },
  { id: 6, name: "Trái cây", image: "/images/trai-cay-cac-loai.png" },
];

const gotoCategory = (id) => {
  console.log("Chuyển đến danh mục:", id);
};

const Home = (props) => {
  const navigate = useNavigate();
  
  const handleCategory = () => {
    navigate("/categoryByProduct");
  };

  SetTitleHeader({
    title: "Shop Yogo"
  });

  return (
    <Page className="">
      <Box className="header-home">
        <Box mt={2} flex justifyContent="center" alignItems="center">
          <Swiper>
            <Swiper.Slide>
              <img
                className="slide-img"
                src="/images/anh_1.jpg"
                alt="slide-2"
              />
            </Swiper.Slide>
            <Swiper.Slide>
              <img
                className="slide-img"
                src="/images/anh_2.jpg"
                alt="slide-2"
              />
            </Swiper.Slide>
          </Swiper>
        </Box>
        <Box mt={2} mb={2}>
          <Input.Search placeholder="search product" size="small" />
        </Box>
        <Box mt={2} className="service-store">
          <Box className="slider-container bg-white p-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="slider-item flex flex-col space-y-2 items-center"
                onClick={handleCategory}
              >
                <img
                  className="w-12 h-12 boder-image"
                  src={product.image}
                  alt={product.name}
                />
                <Text size="xxSmall" className="text-gray">
                  {product.name}
                </Text>
              </div>
            ))}
          </Box>
        </Box>
        <CategoryProduct categories={categories} gotoCategory={gotoCategory} />
      </Box>
      <hr />
      <Box>
        <ProductList />
      </Box>

      <CustomBottomNavigation/>
    </Page>
  );
};

export default Home;
