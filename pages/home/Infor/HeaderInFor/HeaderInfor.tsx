import Image from "next/image";
import React from "react";

type Props = {};

export default function HeaderInfor({}: Props) {
  return (
    <div className="flex items-center justify-between shadow-2xl rounded-2xl my-3 mx-2 py-1">
      <div className="flex items-center  pl-2">
        <div className="border-2 w-6 h-6 rounded-full border-solid border-blue-500">
          <Image
            width={16}
            height={16}
            alt="avatar"
            src="/assets/image/images.jpg"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="pl-2">
          <h3 className="text-sm text-gray-500">
            Xin chào, <span className="font-bold">Bố Bin!</span>
          </h3>
          <button className="bg-blue-500 mt-1 text-white px-1 py-1 rounded-3xl flex items-center justify-center text-xs hover:opacity-75 hover:transition-all">
            Mua nhanh
          </button>
        </div>
      </div>
      <div className="w-px h-12 bg-gray-300"></div>
      <div className="flex items-center justify-center min-w-[150px]">
        <div className="border w-6 h-6 rounded-full">
          <Image
            width={16}
            height={16}
            alt="avatar"
            src="/assets/image/KHUYEN_MAI_HOT.png"
            className="w-full h-full object-cover rounded-full "
          />
        </div>
        <div className="ml-3 text-sm text-gray-500">
          <h3>Kicoin</h3>
          <button className="font-bold text-blue-600">12.000</button>
        </div>
      </div>
    </div>
  );
}
