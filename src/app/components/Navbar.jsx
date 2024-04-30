"use client";

import Image from "next/image";
import React, { useState } from "react";
import { SlGlobe } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const langs = [
  {
    img: "/flags/polish.png",
    name: "Polish",
    value: "pl",
  },
  {
    img: "/flags/english.png",
    name: "English",
    value: "en",
  },
  {
    img: "/flags/german.png",
    name: "German",
    value: "gr",
  },
  {
    img: "/flags/french.png",
    name: "French",
    value: "fr",
  },
  {
    img: "/flags/swedish.png",
    name: "Swedish",
    value: "sw",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("Polish");

  return (
    <div className="max-w-[1250px] mx-auto p-4 flex items-center justify-between gap-4">
      <Link href="/" className="w-[100px] cursor-pointer">
        <Image
          src={"/logo.png"}
          alt="Sheeps Skin LOGO"
          width={200}
          height={100}
          className="w-full  h-full object-cover"
        />
      </Link>
      <div className=" relative flex items-center gap-2">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" flex items-center justify-center gap-1 text-[14px] font-semibold cursor-pointer"
        >
          <p>{lang}</p>
          <IoIosArrowDown
            className={`${isOpen ? "rotate-180" : ""} text-[15px]`}
          />
        </div>
        <SlGlobe className="text-[20px]" />
        {isOpen && (
          <div className="absolute top-[150%] right-[20px] bg-white border p-4 flex flex-col gap-5 w-[150px] rounded-sm shadow-sm">
            {langs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 text-[13px] font-semibold cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  setLang(item.name);
                }}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="h-[15px] w-[24px] object-cover mb-1"
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
