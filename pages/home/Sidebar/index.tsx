import React from "react";

type Props = {};

type subListChild = {
  name: string;
};
type subList = {
  name: string;
  subListChild?: subListChild[];
};

interface isDataMenuSideBar {
  id: number;
  name: string;
  subList?: subList[];
}

const dataMenuSideBar = [
  {
    id: 1,
    name: "Mẹ Bầu sau sinh",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 2,
    name: "Sữa và thực phẩm",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 3,
    name: "Bỉm và tã vệ sinh",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 4,
    name: "Đồ sơ sinh",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 5,
    name: "Đồ dùng ăn uống",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 6,
    name: "Thời trang và phụ kiện",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 7,
    name: "Đồ chơi và học tập",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 8,
    name: "Xe - Đai - Địu",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 9,
    name: "Nôi - Giường - Cũi",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 10,
    name: "Giặt xả và tắm gội",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
  {
    id: 11,
    name: "Đồ dùng gia đình",
    subList: [
      {
        name: "Sữa cho mẹ bầu",
      },
      {
        name: "Vitamin cho mẹ bầu và sau sinh",
      },
      {
        name: "Quần áo mẹ bầu và sau sinh",
      },
      {
        name: "Máy hút sữa",
        subListChild: [
          {
            name: "Máy hút sữa Avent",
          },
          {
            name: "Máy hút sữa Unimon",
          },
          {
            name: "Máy hút sữa Spectra",
          },
          {
            name: "Máy hút sữa Medela",
          },
          {
            name: "Máy hút sữa Mamago",
          },
          {
            name: "Máy hút sữa Fatbaby",
          },
        ],
      },
      {
        name: "Túi trữ sữa",
      },
      {
        name: "Thấm sữa và trợ ty",
      },
      {
        name: "Bỉm - Băng Vệ Sinh - Dung dịch vệ sinh",
      },
      {
        name: "Gel và Gen nịt bụng",
      },
      {
        name: "Dầu gội và sữa tắm",
      },
      {
        name: "Túi đựng đồ mẹ và bé",
      },
      {
        name: "Mỹ phẩm và làm đẹp",
      },
    ],
  },
];

export default function Sidebar({}: Props) {
  const renderListMenuSideBar = () => {
    return dataMenuSideBar.map((item: isDataMenuSideBar, index) => {
      return (
        <li
          key={item.id}
          className={`z-10  group/item flex items-center justify-between py-2 px-3 text-gray-500 hover:bg-[#fff4fc] cursor-pointer hover:transition-all text-sm`}
        >
          <a href="#" className="block">
            {item.name}
          </a>
          {item?.subList ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          ) : (
            <></>
          )}

          {item.subList ? (
            <ul
              className={`absolute  group-hover/item:flex hidden top-0 right-[-215%] text-wrap flex-col flex-wrap bg-white z-30 w-[740px] h-full  pt-12 `}
            >
              {item?.subList.map((_item, _index) => {
                return (
                  <li
                    key={_index}
                    className="relative max-w-[350px] group/sub h-[36px] min-w-[350px] hover:bg-[#fff4fc] flex items-center justify-between py-2 px-3 text-gray-500  hover:transition-all cursor-pointer text-sm"
                  >
                    <a href="#" className="block">
                      {_item.name}
                    </a>
                    {_item.subListChild ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <></>
                    )}
                    {_item.subListChild ? (
                      <ul className="absolute top-0 right-[-100%] hidden group-hover/sub:block bg-white border border-solid z-30  ">
                        {_item.subListChild.map((itm, _indx) => {
                          return (
                            <li
                              key={_indx}
                              className="max-w-[350px] min-w-[350px] hover:bg-[#fff4fc] py-2 px-3 text-gray-500  group-hover/item:transition-all cursor-pointer text-sm"
                            >
                              <a href="#" className="block">
                                {itm.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <></>
          )}
        </li>
      );
    });
  };
  return (
    <div className="bg-white shadow-xl border h-full relative">
      <div className="flex items-center px-2 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <h2 className="text-gray-500 ml-3">Danh mục</h2>
      </div>
      <ul className="">
        {renderListMenuSideBar()}
        <li className="flex items-center justify-between text-sm text-red-500 font-bold py-2 px-3  hover:bg-[#fff4fc] cursor-pointer hover:transition-all ">
          <a href="#" className="">
            Khuyễn mãi hot
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#60a5fa"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
        </li>
        <li className="flex items-center justify-between text-sm text-red-500 font-bold py-2 px-3 hover:bg-[#fff4fc] cursor-pointer hover:transition-all ">
          <a href="#" className="">
            Combo Tiết Kiệm
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#60a5fa"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
}
