"use client";

import Image from "next/image";
import React, { useState, useTransition, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { onceTrue, slideInFromRight, slideInFromTop } from "../utils/motion";

const langs = [
  {
    img: "/flags/polish.png",
    name: "Polski",
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
    value: "de",
  },
  {
    img: "/flags/french.png",
    name: "French",
    value: "fr",
  },
  {
    img: "/flags/swedish.png",
    name: "Swedish",
    value: "sv",
  },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState({
    name: "Polish",
    value: "pl",
    img: "/flags/polish.png",
  });

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const langRef = useRef();
  const pathname = usePathname();

  const currentPath = pathname.slice(3, pathname.length);

  const handleLang = (item) => {
    const nextLocale = item.value;
    // console.log(currentPath, item.value);

    startTransition(() => {
      router.replace(`/${nextLocale}/${currentPath}`);
    });

    setLang(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const selectedLang = langs.filter((item) => item.value === localActive);
    // console.log(selectedLang, "Selected");
    setLang(...selectedLang);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!langRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <motion.div
      variants={slideInFromTop(0.5)}
      initial={"hidden"}
      viewport={onceTrue}
      whileInView={"visible"}
      ref={langRef}
      className=" relative flex items-center gap-2"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" flex items-center justify-center gap-1 text-[14px] font-semibold cursor-pointer"
      >
        <p>{lang.name}</p>
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
              onClick={() => handleLang(item)}
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
    </motion.div>
  );
};

export default LanguageSwitcher;
