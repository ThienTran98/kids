import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import ItemDeal from "./ItemDeal";

type Props = {};

export default function Slider({}: Props) {
  return (
    <div className=" border border-solid h-full flex flex-col">
      <div className="w-full h-[340px] bg-red-300">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          pagination={{ type: "fraction", el: ".swiper-pagination" }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full h-full swiper"
        >
          <SwiperSlide>
            <img
              src="./assets/image/home-flash_sale_online_sn.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/banner_home-super-party-t5.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/home-flash_sale_online_sn.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/banner_home-super-party-t5.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/home-flash_sale_online_sn.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/banner_home-super-party-t5.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/home-flash_sale_online_sn.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/banner_home-super-party-t5.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/home-flash_sale_online_sn.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/banner_home-super-party-t5.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/home-flash_sale_online_sn.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/banner_home-super-party-t5.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/home-flash_sale_online_sn.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/banner_home-super-party-t5.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/home-flash_sale_online_sn.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/banner_home-super-party-t5.png"
              alt=""
              className="w-full h-full"
            />
          </SwiperSlide>
          <div
            className={`swiper-button-next after:!text-xl !text-white before:!text-xl !w-10 !h-10 !rounded-full bg-gray-300 hover:opacity-70 hover:bg-slate-400`}
          ></div>
          <div
            className={`swiper-button-prev after:!text-xl !text-white before:!text-xl !w-10 !h-10 !rounded-full bg-gray-300 hover:opacity-70 hover:bg-slate-400`}
          ></div>

          <div className="swiper-pagination !flex !items-center !justify-end px-4 !text-[#a08b45]">
            <div className="swiper-pagination-current"></div>
            <div className="swiper-pagination-total"></div>
          </div>
        </Swiper>
      </div>
      <div className="flex-grow">
        <ItemDeal />
      </div>
    </div>
  );
}
