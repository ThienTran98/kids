import React from "react";

type Props = {};

export default function LineSingInEmail({}: Props) {
  return (
    <div className="flex items-center my-14 text-center">
      <div className="w-1/2 border border-solid bg-gray-500"></div>
      <h2 className="w-[125px] font-semibold text-gray-400 text-sm">
        Or with email
      </h2>
      <div className="w-1/2 border border-solid bg-gray-500"></div>
    </div>
  );
}
