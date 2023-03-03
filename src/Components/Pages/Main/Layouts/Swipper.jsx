import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import ex1 from '/exemplo1.jpg'
import ex2 from '/exemplo2.jpg'
import ex3 from '/exemplo3.jpg'
import ex4 from '/exemplo4.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "../Scss/Swipper.scss";

export default function MySwipper() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={ex1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ex2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ex3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ex4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
