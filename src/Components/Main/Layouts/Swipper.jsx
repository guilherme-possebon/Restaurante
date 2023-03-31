import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import ex1 from '/exemplo1.jpg'
import ex2 from '/exemplo2.jpg'
import ex3 from '/exemplo3.jpg'
import ex4 from '/exemplo4.jpg'

import "swiper/css";
import "swiper/css/navigation";
import "../Scss/Swipper.scss";

// TODO Nome da pasta "_swipper.tsx"

export default function MySwipper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={ex1} alt="Exemplo1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ex2} alt="Exemplo2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ex3} alt="Exemplo3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ex4} alt="Exemplo4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
