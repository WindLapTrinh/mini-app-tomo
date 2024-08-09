import React from "react";
import { Box, Text } from "zmp-ui";
import { TiShoppingCart } from "react-icons/ti";
import "../../css/detailhome/swiper/swiper-bundle.min.css";
const categories = [
  {
    id: 1,
    name: "Bangkok",
    image: "/images/product/bangkok.jpg",
    price: "$2000",
  },
  {
    id: 2,
    name: "Châu Âu",
    image: "/images/product/chau-au.jpeg",
    price: "$342000",
  },
  {
    id: 3,
    name: "Đại lý TQ",
    image: "/images/product/dai-ly.jpg",
    price: "$678000",
  },
  {
    id: 4,
    name: "Thái lan",
    image: "/images/product/thai-lan.jpg",
    price: "$78000",
  },
  {
    id: 5,
    name: "Mực na",
    image: "/images/product/seafood-2.jpg",
    price: "$342000",
  },
  {
    id: 6,
    name: "Thịt vụn bò",
    image: "/images/product/flesh-4.jpg",
    price: "$12000",
  },
  {
    id: 7,
    name: "Hàu sashiml",
    image: "/images/product/seafood-3.jpg",
    price: "$6000",
  },
  {
    id: 8,
    name: "Cá Basa",
    image: "/images/product/flesh-5.jpg",
    price: "$4800",
  },
  {
    id: 9,
    name: "Mực nút",
    image: "/images/product/seafood-4.jpg",
    price: "$2300",
  },
  {
    id: 10,
    name: "Mực ống",
    image: "/images/product/seafood-5.jpg",
    price: "$20600",
  },
];

const CategoryProduct = () => {
  return (
    <Box className="product-today">
      <div className="icon-product-today"><TiShoppingCart/></div>
      <Text.Title size="small" className="title-product">
        Sản phẩm hôm nay
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
