import ItemIcon from "@/Component/ItemIcon";
import Image from "next/image";
import React from "react";

import FooterInfor from "./FooterInfor/FooterInfor";
import ContentInfor from "./ContentInfor/ContentInfor";
import HeaderInfor from "./HeaderInFor/HeaderInfor";

type Props = {};

export default function Infor({}: Props) {
  return (
    <div className="max-h-full  border border-solid ">
      <div className="h-1/2">
        <HeaderInfor />
        <ContentInfor />
      </div>
      <FooterInfor />
    </div>
  );
}
