import React from "react";
import { Swiper, Box } from "zmp-ui";
import "../../css/detailhome/product/productDetail.css";

const SliderCategory = () => {
  return (
    <Box className="product-image">
        <Swiper className="product-item">
          
          <Swiper.Slide>
            <img
              className="slide-img"
              src="/images/product/vung-tau.jpg"
              alt="slide-2"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="/images/product/tay-ninh.jpg"
              alt="slide-3"
            />
          </Swiper.Slide>
        </Swiper>
      </Box>
  );
};

export default SliderCategory;