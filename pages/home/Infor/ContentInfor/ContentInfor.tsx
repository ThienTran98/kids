import ItemIcon from "@/Component/ItemIcon";
import React from "react";
import {
  iconAccount,
  iconDocument,
  iconNote,
} from "../../../../public/assets/image/icons/Icon";

type Props = {};

export default function ContentInfor({}: Props) {
  return (
    <div className="flex items-center px-3 my-[30px]">
      <ItemIcon icon={iconAccount} title="Thông tin tài khoản" />
      <ItemIcon icon={iconNote} title="Sổ địa chỉ" />
      <ItemIcon icon={iconDocument} title="Sản phẩm đã xem" />
    </div>
  );
}
