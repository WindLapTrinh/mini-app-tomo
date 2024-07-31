import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import bannerOne from "../../images/banner/banner-one.jpg";
import bannerTwo from "../../images/banner/banner-two.png";
import banner4 from "../../images/banner/banner-4.jpg";
import banner5 from "../../images/banner/banner-5.png";
import banner7 from "../../images/banner/banner-7.jpg";
import banner8 from "../../images/banner/banner-8.jpg";
import banner9 from "../../images/banner/banner-9.jpg";


import "../../css/detailhome/slider.css";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const slide_img = [bannerOne, banner4, banner5, banner7, banner8, banner9, bannerTwo];

const Slider = () => {
  return (
    <div className="main-swiper">
      <Swiper
        effect={"slide"} 
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        className="mySwiper"
        loop={true} //lặp lại
        initialSlide={1} //run thứ hai
        onSlideChange={(swiper) => {
          if (swiper.activeIndex === 0) {
            swiper.slideTo(1); //slide thứ hai khi quay lại
          } else if (swiper.activeIndex === swiper.slides.length - 1) {
            swiper.slideTo(swiper.slides.length - 2); // slide thứ hai khi ở cuối cùng
          }
        }}
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img className="image-slider" src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
