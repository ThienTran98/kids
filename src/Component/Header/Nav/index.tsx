import Image from "next/image";
import React from "react";

type Props = {};

export default function Nav({}: Props) {
  return (
    <div className="bg-[#003189]">
      <div className="px-10 flex items-center justify-between">
        <img src="./assets/image/logo.png" alt="" />
        <div className="w-[430px] bg-white rounded-3xl flex items-center justify-between px-6 h-11">
          <input
            type="text"
            placeholder="Đồ sơ sinh 19k"
            className="text-sm outline-none flex-grow "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 hover:cursor-pointer hover:opacity-75 hover:transition-all text-[#F6C000] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="flex items-center py-4">
          <div className="text-white cursor-pointer text-sm hover:opacity-70 hover:transition-all flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <a href="#">
              <span>Lịch sử đơn hàng</span>
            </a>
          </div>
          <div className="text-white ml-8 cursor-pointer text-sm hover:opacity-70 hover:transition-all flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>

            <a href="#">
              <span>Ưu đãi</span>
            </a>
          </div>
          <div className="text-white mx-8 relative cursor-pointer text-sm hover:opacity-70 hover:transition-all flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <a href="#">
              <span>Giỏ hàng</span>
            </a>
            <div className="w-6 h-4 rounded-full bg-[#F6C000] flex items-center justify-center absolute top-0 right-0">
              <span className="text-sm">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
