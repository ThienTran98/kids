import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  title: string;
};

export default function ButtonSingInWith({ icon, title }: Props) {
  return (
    <a
      href="#"
      className=" flex items-center px-5 py-3  rounded hover:opacity-75 hover:text-blue-500 cursor-pointer hover:transition-all hover:bg-gray-50 border-solid border border-gray-300"
    >
      <Image width={15} height={15} src={icon} alt={title} />
      <h2 className="ml-2">Sign in with {title}</h2>
    </a>
  );
}
