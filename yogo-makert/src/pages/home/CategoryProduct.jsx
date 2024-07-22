import "../../css/detailhome/swiper/swiper-bundle.min.css";
import React from "react";
import { Box, Text } from "zmp-ui";

const categories = [
  { id: 1, name: "Category One", image: "/images/product2.jpg" },
  { id: 2, name: "Category Two", image: "/images/product2.jpg" },
  { id: 3, name: "Category Three", image: "/images/product2.jpg" },
  { id: 4, name: "Category Four", image: "/images/product2.jpg" },
  { id: 5, name: "Category Five", image: "/images/product2.jpg" },
  { id: 6, name: "Category Six", image: "/images/product2.jpg" },
  { id: 7, name: "Category Seven", image: "/images/product2.jpg" },
  { id: 8, name: "Category Eight", image: "/images/product2.jpg" },
  { id: 9, name: "Category Nine", image: "/images/product2.jpg" },
  { id: 10, name: "Category Ten", image: "/images/product2.jpg" },
];

const CategoryProduct = () => {
  return (
    <Box mt={3}>      
      <Text.Title size="small" className="title-product">Products today</Text.Title>
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
              {category.name}
            </Text>
          </div>
        ))}
      </Box>
    </Box>
    </Box>
  );
};

export default CategoryProduct;
