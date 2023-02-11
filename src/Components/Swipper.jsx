import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Css/Swipper.css";

// import required modules
import { Pagination } from "swiper";

export default function MySwipper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1580654712603-eb43273aff33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1636866120504-81110da6e04f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
