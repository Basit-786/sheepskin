"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useTranslations } from "next-intl";

const images = ["/about.jpeg", "/pr2.png", "/pr1.png", "/pr3.png"];

const Medical = () => {
  const t = useTranslations("Medical");

  const [selectedImage, setSelectedImage] = useState("/about.jpeg");

  return (
    <div className="max-w-[1000px] flex flex-col items-center justify-center mx-auto px-4 py-8 lg:py-16">
     <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 w-full">
        <div className="w-full">
          <div className="w-full h-[380px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt=""
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-between gap-2">
          {/* <div className="bg-secondary rounded-md px-2 py-1 w-full flex items-center justify-center cursor-pointer">
            <IoIosArrowUp className="text-white text-[30px]" />
          </div> */}
          <div className="flex flex-row md:flex-col gap-4 md:h-[500px] overflow-y-auto scroll-hidden">
            {images.map((item, index) => (
              <div
                key={index}
                className={`w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex-shrink-0 flex-grow-0 transition ${
                  item == selectedImage ? "border-[4px]" : "border-[2px]"
                }  border-secondary rounded-lg cursor-pointer`}
              >
                <Image
                  src={item}
                  alt=""
                  width={600}
                  height={600}
                  onClick={() => setSelectedImage(item)}
                  className="w-full rounded-lg border-[2px] border-white h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* <div className="bg-secondary w-full rounded-md px-2 py-1 flex items-center justify-center cursor-pointer">
            <IoIosArrowUp className="text-white text-[30px] rotate-180" />
          </div> */}
        </div>
      </div>
      <div className="mt-5 md:mt-10">
        <h2 className="text-2xl xs:text-3xl font-bold md:text-4xl leading-[110%] my-3">
          {t("title")}
        </h2>
        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">{t("description")}</p>

        <h2 className="text-2xl font-bold sm:text-3xl leading-[110%] md:my-4 my-2.5 mt-4 md:mt-6">
          {t("safteyTitle")}
        </h2>
        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">{t("safteyContent")}</p>
        <h2 className="text-2xl font-bold sm:text-3xl leading-[110%] md:my-4 my-2.5 mt-4 md:mt-6">
          {t("applicationTitle")}
        </h2>

        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">
          {t("applicationContent")}
        </p>
        <h2 className="text-2xl font-bold sm:text-3xl leading-[110%] md:my-4 my-2.5 mt-4 md:mt-6">
          {t("qualityTitle")}
        </h2>

        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">{t("qualityContent")}</p>
        <h2 className="text-2xl font-bold sm:text-3xl leading-[110%] md:my-4 my-2.5 mt-4 md:mt-6">
          {t("partnerTitle")}
        </h2>

        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">{t("partnerContent")}</p>

        <a
          href="/#contact"
          className="mt-8 inline-block rounded bg-secondary px-8 py-3 text-sm font-semibold text-white"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Medical;
