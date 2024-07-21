import "../../css/detailhome/swiper/swiper-bundle.min.css";
import React from "react";
import { Box, Text } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../css/detailHome.css"; // Ensure correct path to your CSS

const products = [
  {
    id: 1,
    name: "Product One",
    price: 100000,
    discountPrice: 80000,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Product Two",
    price: 200000,
    discountPrice: 150000,
    image: "/images/product1.jpg",
  },
  {
    id: 3,
    name: "Product Three",
    price: 300000,
    discountPrice: 250000,
    image: "/images/product1.jpg",
  },
  {
    id: 3,
    name: "Product Fo",
    price: 300000,
    discountPrice: 250000,
    image: "/images/product1.jpg",
  },
  // Add more products here
];

const CategoryProduct = ({ categories, gotoCategory }) => {
  return (
    <Box>
      <Text.Title size="small">Products today</Text.Title>
      <Box className="category-product">
        <Box mt={2} mb={2} className="category-store">
          <Swiper
            spaceBetween={16} // Space between slides
            slidesPerView="auto" // Allow slides to be as wide as their content
            freeMode={true} // Enable free scrolling
            className="swiper-container"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="swiper-slide">
                <Box
                  className="slider-item-category"
                  p={2}
                  border="1px solid #ddd"
                  borderRadius="8px"
                >
                  <img
                    className=" border-image"
                    src={product.image}
                    alt={product.name}
                    style={{ borderRadius: "8px" }}
                  />
                  <Text size="xxSmall" className="text-gray">
                    {product.name}
                  </Text>
                  <Text size="xxSmall" className="line-through text-gray">
                    Price: {product.price} VND
                  </Text>
                  <Text size="small" className="discount-price">
                  Reduced price: {product.discountPrice} VND
                  </Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryProduct;
