import React from "react";

type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-gray-900 font-bold mb-[10px] text-2xl">{title}</h2>
      <p className="text-gray-500 font-semibold text-base">
        Your Social Campaigns
      </p>
    </div>
  );
}
