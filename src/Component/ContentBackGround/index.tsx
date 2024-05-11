import Image from "next/image";
import React from "react";

type Props = {};

export default function ContentBackGround({}: Props) {
  return (
    <div className=" w-full h-full bg-content-image flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center p-12">
        <div className="mb-10">
          <img src="./assets/image/logo.png" alt="" />
        </div>
        <div className="px-[160px] mb-8">
          <Image
            src="/assets/image/auth-screens.png"
            width={330}
            height={260}
            alt=""
            className="w-[360px] h-[280px] object-cover "
          />
        </div>
        <h3 className="text-[30px] text-white font-bold mb-8">
          Fast, Efficient and Productive
        </h3>
        <p className="text-sm w-[462px] text-center">
          In this kind of post,{" "}
          <a href="#" className="text-[#F6C000] px-1">
            the blogger
          </a>
          introduces a person they’ve interviewed and provides some background
          information about the{" "}
          <a href="#" className="text-[#F6C000] px-1">
            interviewee
          </a>{" "}
          and their work following this is a transcript of the interview.
        </p>
      </div>
    </div>
  );
}
