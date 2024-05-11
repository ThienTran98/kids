import React from "react";

type Props = {};

export default function FooterInfor({}: Props) {
  return (
    <div className="bg-[#fff4fc] text-sm h-1/2">
      <h1 className="text-center py-5 text-base font-bold text-blue-500">
        Tải app Kidsplaze- Nhận quà bao la
      </h1>
      <div className="pl-10 font-semibold text-gray-500 ">
        <p className="leading-7">
          <span>{">"}</span>
          <span>
            Nhập mã BANMOIT8- Giảm ngay 50.000 đ cho đơn hàng từ 699.000 đ{" "}
          </span>
        </p>
        <p className="leading-7">
          <span>{">"}</span>
          <span>Hàng ngàn voucher khác chỉ áp dụng khi đặt hàng tại app</span>
        </p>
      </div>
      <div className="mt-6 py-[14px]">
        <h2 className="text-center font-semibold">Quét mã QR để tải app</h2>
        <div className="mt-3 flex items-center justify-center">
          <div>
            <img
              src="./assets/image/QR.png"
              alt="QR"
              className="w-16 h-1w-16 object-cover"
            />
          </div>
          <div className="pl-3">
            <a href="#">
              <img
                src="./assets/image/Group_14993.png"
                alt="App Store"
                className="w-[120px] h-8 object-cover mb-2 rounded-lg cursor-pointer"
              />
            </a>
            <a href="#">
              <img
                src="./assets/image/Group_14994.png"
                alt="CH Play"
                className="w-[120px] h-8 object-cover rounded-lg cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
