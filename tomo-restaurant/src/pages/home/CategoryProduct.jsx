import React from "react";
import { Box, Text } from "zmp-ui";
import { IoRestaurantSharp } from "react-icons/io5";
import "../../css/detailhome/swiper/swiper-bundle.min.css";
const categories = [
  {
    id: 1,
    name: "Bông cải ",
    image: "/images/product/bong-cai-xanh.jpg",
    price: "$2000",
  },
  {
    id: 2,
    name: "Gà nướng",
    image: "/images/product/ga-nuong.jpg",
    price: "$342000",
  },
  {
    id: 3,
    name: "Mực nướng",
    image: "/images/product/muc-nuong.jpg",
    price: "$678000",
  },
  {
    id: 4,
    name: "Heo quay",
    image: "/images/product/heo-quay.jpg",
    price: "$78000",
  },
  {
    id: 5,
    name: "Xíu mại",
    image: "/images/product/xíu-mai.jpg",
    price: "$342000",
  },
  {
    id: 6,
    name: "Đậu hủ",
    image: "/images/product/product-1.jpg",
    price: "$12000",
  },
  {
    id: 7,
    name: "Tỏi hấp",
    image: "/images/product/toi-hap.jpg",
    price: "$6000",
  },
];

const CategoryProduct = () => {
  return (
    <Box className="product-today">
      <div className="icon-product-today"><IoRestaurantSharp/></div>
      <Text.Title size="small" className="title-product">
        Món ăn hôm nay
      </Text.Title>
      <Box mt={2} className="category-product">
        <Box className="slider-category  p-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="custom-slider-item flex flex-col space-y-2 items-center category-item"
            >
              <img
                className=" custom-border-image"
                src={category.image}
                alt={category.name}
              />
              <Text size="xxSmall" className="custom-text-gray">
                <span className="name-product-today">{category.name}</span>
                <span className="price-product-today">{category.price}</span>
              </Text>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryProduct;
