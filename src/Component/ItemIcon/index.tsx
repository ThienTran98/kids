import React from "react";

type Props = {
  icon: any;
  title: string;
};

export default function ItemIcon({ icon, title }: Props) {
  return (
    <div className="flex flex-col items-center px-3 hover:opacity-65 hover:transition-all cursor-pointer">
      <div className="w-8 h-8 border border-solid rounded-full  border-gray-700 flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <span className="text-center text-sm">{title}</span>
    </div>
  );
}
