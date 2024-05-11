import Header from "@/Component/Header";
import React from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import Infor from "./Infor";
import Banner from "./Banner";

type Props = {};

export default function Home({}: Props) {
  return (
    <main>
      <Header />
      <div className="mt-[120px]">
        <div className="grid grid-cols-4 gap-5 pt-3 px-10">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <Slider />
          </div>
          <div className="col-span-1">
            <Infor />
          </div>
        </div>
        <div className="px-10 py-5">
          <Banner />
        </div>
      </div>
    </main>
  );
}
