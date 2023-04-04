import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import Image from 'next/image'

import ex1 from '../../../../public/exemplo1.webp'
import ex2 from '../../../../public/exemplo2.webp'
import ex3 from '../../../../public/exemplo3.webp'
import ex4 from '../../../../public/exemplo4.webp'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from '../ScssMain/Swipper.module.scss'

export default function MySwipper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className={styles.mySwiper}
        aria-label="Carrossel de imagens"
      >
        <SwiperSlide aria-label="Imagem de exemplo 1">
          <Image
            src={ex1}
            alt="Exemplo1"
            className={styles.ImgSwiper}
            priority
          />
        </SwiperSlide>

        <SwiperSlide aria-label="Imagem de exemplo 2">
          <Image
            src={ex2}
            alt="Exemplo2"
            className={styles.ImgSwiper}
            priority
          />
        </SwiperSlide>

        <SwiperSlide aria-label="Imagem de exemplo 3">
          <Image
            src={ex3}
            alt="Exemplo3"
            className={styles.ImgSwiper}
            priority
          />
        </SwiperSlide>

        <SwiperSlide aria-label="Imagem de exemplo 4">
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
