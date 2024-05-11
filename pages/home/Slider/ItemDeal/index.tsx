import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
type Props = {};

const listItemImage = [
  {
    link: "/assets/image/Icon__s_sinh_1.png",
    name: "Siêu deal",
  },
  {
    link: "/assets/image/Icon_B_nh-s_a_1.png",
    name: "Voucher",
  },
  {
    link: "/assets/image/Icon_Gi_t_x_t_m_g_i_2.png",
    name: "Ưu đãi",
  },
  {
    link: "/assets/image/Icon_Gi_y_1.png",
    name: "Hỏi đáp",
  },
  {
    link: "/assets/image/Icon_S_a_cho_b__1_1.png",
    name: "Tra cứu đơn hàng",
  },
  {
    link: "/assets/image/Icon_Th_a_d_a_1.png",
    name: "Siêu thị gần bạn",
  },
  {
    link: "/assets/image/Icon_B_m_t_V_sinh_1.png",
    name: "Giao hàng tận nơi",
  },
  {
    link: "/assets/image/Icon__s_sinh_1.png",
    name: "Siêu deal",
  },
  {
    link: "/assets/image/Icon_B_nh-s_a_1.png",
    name: "Voucher",
  },
  {
    link: "/assets/image/Icon_Gi_t_x_t_m_g_i_2.png",
    name: "Ưu đãi",
  },
  {
    link: "/assets/image/Icon_Gi_y_1.png",
    name: "Hỏi đáp",
  },
  {
    link: "/assets/image/Icon_S_a_cho_b__1_1.png",
    name: "Tra cứu đơn hàng",
  },
  {
    link: "/assets/image/Icon_Th_a_d_a_1.png",
    name: "Siêu thị gần bạn",
  },
  {
    link: "/assets/image/Icon_B_m_t_V_sinh_1.png",
    name: "Giao hàng tận nơi",
  },
  {
    link: "/assets/image/Icon__s_sinh_1.png",
    name: "Siêu deal",
  },
  {
    link: "/assets/image/Icon_B_nh-s_a_1.png",
    name: "Voucher",
  },
  {
    link: "/assets/image/Icon_Gi_t_x_t_m_g_i_2.png",
    name: "Ưu đãi",
  },
  {
    link: "/assets/image/Icon_Gi_y_1.png",
    name: "Hỏi đáp",
  },
  {
    link: "/assets/image/Icon_S_a_cho_b__1_1.png",
    name: "Tra cứu đơn hàng",
  },
  {
    link: "/assets/image/Icon_Th_a_d_a_1.png",
    name: "Siêu thị gần bạn",
  },
  {
    link: "/assets/image/Icon_B_m_t_V_sinh_1.png",
    name: "Giao hàng tận nơi",
  },
];

export default function ItemDeal({}: Props) {
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
      className="mySwiper w-full h-full !py-5 !px-2"
    >
      {listItemImage.map((item, index) => {
        return (
          <SwiperSlide>
            <div
              className={`w-full h-full flex items-center  justify-end ${
                index === 0 ? "ml-1" : ""
              } ${index === listItemImage.length - 1 ? "mr-1" : ""} `}
            >
              <a href="#" className={`flex flex-col items-center text-center`}>
                <img
                  src={item.link}
                  width="5"
                  height="5"
                  alt=""
                  className="w-10 h-10 object-cover"
                />
                <h2 className="min-h-12">{item.name}</h2>
              </a>
            </div>
          </SwiperSlide>
        );
      })}

      <div className="">
        <div className="swiper-button-next !right-[-10px] after:!text-base before:!text-base !text-slate-500"></div>
        <div className="swiper-button-prev  !left-[-10px] after:!text-base before:!text-base !text-slate-500"></div>
      </div>
    </Swiper>
  );
}
