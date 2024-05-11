import Image from "next/image";
import React from "react";

type Props = {};

const fetchData = [
  {
    id: "1",
    link: "#",
    name: "Terms",
  },
  {
    id: "2",
    link: "#",
    name: "Plans",
  },
  {
    id: "3",
    link: "#",
    name: "Contact Us",
  },
];

interface isData {
  id: string;
  link: string;
  name: string;
}
export default function FooterForm({}: Props) {
  const handleRenderListTerms = () => {
    return fetchData.map((item: isData, index) => {
      return (
        <li
          className="px-4 text-blue-500 font-semibold hover:opacity-80 hover:transition-all "
          key={index}
        >
          <a href={item.link}>{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div className="flex items-center justify-between mt-10 mb-10">
      <div className="flex items-center">
        <Image
          width={30}
          height={30}
          alt="flag"
          src="/assets/image/download (1).png"
          className="w-[30px] h-[30px] object-cover rounded-full mr-4"
        />
        <form className="max-w-sm mx-auto flex items-center justify-between ">
          <select className="block cursor-pointer py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200">
            <option className="px-2" value="US">
              English
            </option>
            <option className="px-2" value="CA">
              VietNamese
            </option>
            <option className="px-2" value="FR">
              France
            </option>
            <option className="px-2" value="DE">
              Germany
            </option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </form>
      </div>
      <ul className="flex items-center">{handleRenderListTerms()}</ul>
    </div>
  );
}
