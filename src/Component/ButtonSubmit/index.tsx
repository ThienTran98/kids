import React from "react";

type Props = {
  title: string;
};

export default function ButtonSubmit({ title }: Props) {
  return (
    <div className="w-full text-center rounded-[10px] bg-blue-500 hover:bg-blue-600 hover:duration-300 hover:ease-linear cursor-pointer mt-[26px]">
      <button className="py-3 font-bold text-base text-white hover:opacity-80 hover:duration-300 hover:ease-linear ">
        {title}
      </button>
    </div>
  );
}
