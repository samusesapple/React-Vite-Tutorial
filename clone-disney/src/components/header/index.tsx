import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";
// types
import { Menu, menus } from "./type";
// components
import HeaderItem from "./HeaderItem";
import { HiDotsVertical } from "react-icons/hi";


const ShowMoreButton: Menu = {
  name: "More",
  icon: HiDotsVertical,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        {/* 반응형 - desktop menu */}
        <div className="hidden gap-8 md:flex">
          {menus.map((item) => (
            <HeaderItem
              title={item.name}
              icon={item.icon}
              onClick={() => {
                console.log("clicked ", item.name);
              }}
            />
          ))}
        </div>
        {/* 반응형 - mobile menu */}
        <div className="flex gap-5 md:hidden">
          {menus.map(
            (item, index) =>
              index < 3 && ( // 3개만 보여주기
                <HeaderItem
                  title={''}
                  icon={item.icon}
                  onClick={() => {
                    console.log("clicked ", item.name);
                  }}
                />
              )
          )}
          <div className="md:hidden">
          <HeaderItem
            title={''}
            icon={ShowMoreButton.icon}
            onClick={() => setIsOpen(!isOpen)}
          />
            <div className={`absolute mt-3 border-[1px] p-3 px-5 py-3bg-[#121212] border-gray-700 ${isOpen ? 'block' : 'hidden'}`}>
            {menus.map(
              (item, index) =>
                index > 2 && ( // 3개만 보여주기
                  <HeaderItem
                    title={item.name}
                    icon={item.icon}
                    onClick={() => {
                      console.log("clicked ", item.name);
                    }}
                  />
                )
            )}
            </div>
        </div>
        </div>
      </div>
      <img
        src={user}
        alt="user"
        className="w-[40px] rounded-full cursor-pointer"
      />
    </div>
  );
}
