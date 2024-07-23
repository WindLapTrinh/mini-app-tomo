import React from "react";
import { Swiper, Box } from "zmp-ui";
import "../../css/detailHome.css";

const Slider = () => {
  return (
    <Box mt={2} flex justifyContent="center" alignItems="center">
      <Swiper>
        <Swiper.Slide>
          <img
            className="slide-img"
            src="/images/banner/banner-one.jpg"
            alt="slide-1"
          />
        </Swiper.Slide>
        <Swiper.Slide>
          <img
            className="slide-img"
            src="/images/banner/banner-two.jpg"
            alt="slide-2"
          />
        </Swiper.Slide>
      </Swiper>
    </Box>
  );
};

export default Slider;
