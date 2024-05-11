import React from "react";

type Props = {};
const dataTopNav = [
  {
    name: "Hotline: 1800.6608",
  },
  {
    name: "Zalo cửa hàng",
  },
  {
    name: "Ưu đãi khi tải app",
  },
  {
    name: "Hệ thống 159 cửa hàng",
  },
  {
    name: "Thưởng Kicoin",
  },
];

interface isTopNav {
  name: string;
}
export default function TopNav({}: Props) {
  const renderNavMenuItems = () => {
    return dataTopNav.map((item: isTopNav, index) => {
      return (
        <li key={index}>
          <a
            href="#"
            className={`
                px-3 border-black   ${
                  index === dataTopNav.length - 1 ? "" : "border-r-2"
                } hover:opacity-70 hover:transition-all`}
          >
            {" "}
            {item.name}
          </a>
        </li>
      );
    });
  };
  return (
    <div className="flex items-center justify-between py-3 px-10 bg-white">
      <div className="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <span className="mx-2 text-sm text-gray-500">
          Xem tồn kho, giá bán tại:
        </span>
        <p className="text-blue-800 font-bold text-sm hover:opacity-80 hover:transition-all flex items-center">
          Miền Bắc
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </p>
      </div>
      <ul className="flex items-center text-sm">{renderNavMenuItems()}</ul>
    </div>
  );
}
