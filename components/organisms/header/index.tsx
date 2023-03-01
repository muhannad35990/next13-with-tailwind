"use client";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import React, { ReactElement } from "react";
import { data } from "./data";

const Header = (): ReactElement => {
  return (
    <div className="container ">
      <div className=" flex h-[7rem] items-center justify-between py-4">
        <Image
          src="/images/logo.webp"
          alt="logo"
          width="200"
          height="100"
          priority
          className="h-full"
        />
        <ul className="  flex list-none items-center">
          {data.map((item: any, index: number) => (
            <li className="group relative mx-2 text-xl" key={index}>
              {item.name}
              {item.items.length! > 0 && (
                <ul className="group-hover: invisible absolute top-[110%]  left-0 z-[999] w-[28rem] origin-top scale-y-0 bg-white py-4  px-8 opacity-0  shadow duration-300 ease-in-out  group-hover:visible group-hover:scale-y-100 group-hover:opacity-100">
                  {item.items.map((subItem: any, index1: number) => (
                    <li key={index1}>{subItem.name}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Button text="Login" onClick={() => alert("Clicked")} />
      </div>
    </div>
  );
};

export default Header;
