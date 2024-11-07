import React from "react";
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
              item={item}
              onClick={() => {
                console.log("clicked ", item.name);
              }}
            />
          ))}
        </div>
        {/* 반응형 - mobile menu */}
        <div className="flex gap-8 md:hidden">
          {menus.map(
            (item, index) =>
              index < 3 && ( // 3개만 보여주기
                <HeaderItem
                  item={item}
                  onClick={() => {
                    console.log("clicked ", item.name);
                  }}
                />
              )
          )}
          <HeaderItem
            item={ShowMoreButton}
            onClick={() => {
              console.log("clicked ", ShowMoreButton.name);
            }}
          />
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
