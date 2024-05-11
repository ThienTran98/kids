import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

type Props = {};

export default function Banner({}: Props) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      navigation
      modules={[FreeMode, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="./assets/image/banner_dich_vu_t5_1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/image/banner_dich_vu_t5_1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/image/banner_dich_vu_t5_1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/image/banner_dich_vu_t5_1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/image/banner_dich_vu_t5_1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/image/banner_dich_vu_t5_1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/image/banner_dich_vu_t5_1.png" alt="" />
      </SwiperSlide>

      <div
        className={`swiper-button-next after:!text-xl !text-white before:!text-xl !w-12 !h-12 !rounded-full bg-gray-300 hover:opacity-70 hover:bg-slate-400`}
      ></div>
      <div
        className={`swiper-button-prev after:!text-xl !text-white before:!text-xl !w-12 !h-12 !rounded-full bg-gray-300 hover:opacity-70 hover:bg-slate-400`}
      ></div>
    </Swiper>
  );
}
