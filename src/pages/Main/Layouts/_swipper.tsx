import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import Image from 'next/image'

import ex1 from '../../../../public/exemplo1.jpg'
import ex2 from '../../../../public/exemplo2.jpg'
import ex3 from '../../../../public/exemplo3.jpg'
import ex4 from '../../../../public/exemplo4.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from '../Scss/Swipper.module.scss'

export default function MySwipper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 200000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <Image
            src={ex1}
            alt="Exemplo1"
            className={styles.ImgSwiper}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ex2}
            alt="Exemplo2"
            className={styles.ImgSwiper}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ex3}
            alt="Exemplo3"
            className={styles.ImgSwiper}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ex4}
            alt="Exemplo4"
            className={styles.ImgSwiper}
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
