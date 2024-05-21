"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useTranslations } from "next-intl";

const images = ["/sh4.jpg", "/sh1.jpg", "/sh2.jpg", "/sh3.jpg", "/sh5.jpg"];

const Sheeps = () => {
  const t = useTranslations("Sheeps");

  const [selectedImage, setSelectedImage] = useState("/sh4.jpg");

  return (
    <div className="max-w-[1000px] flex flex-col items-center justify-center mx-auto px-6 py-8 lg:py-16">
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
        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">
          {t("description")}
        </p>

        <h2 className="text-2xl font-bold xs:text-3xl leading-[110%] md:my-4 my-2.5 mt-4 md:mt-6">
          Product Processing
        </h2>
        <h3 className="text-secondary text-xl font-semibold my-3">
          {t("stageOneTitle")}
        </h3>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 my-8">
          <Image
            src={"/sh3.jpg"}
            alt=""
            className="md:w-1/2 object-cover rounded-lg"
            width={500}
            height={400}
          />
          <Image
            src={"/about.jpeg"}
            alt=""
            className="md:w-1/2 object-cover rounded-lg"
            width={500}
            height={400}
          />
        </div>
        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">
          {t("stageOneDesc")}
        </p>
        <h3 className="text-secondary text-xl font-semibold my-3">
          {t("stageTwoTitle")}
        </h3>
        {/* <div className="flex items-center justify-center gap-4 my-8">
          <Image
            src={"/about.jpeg"}
            alt=""
            className="w-1/2 object-cover rounded-lg"
            width={500}
            height={400}
          />
          <Image
            src={"/about.jpeg"}
            alt=""
            className="w-1/2 object-cover rounded-lg"
            width={500}
            height={400}
          />
        </div> */}
        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">
          {t("stageTwoDesc")}
        </p>
        <h3 className="text-secondary text-xl font-semibold my-3">
          {t("stageThreeTitle")}
        </h3>
        {/* <div className="flex items-center justify-center gap-4 my-8">
          <Image
            src={"/about.jpeg"}
            alt=""
            className="w-1/2 object-cover rounded-lg"
            width={500}
            height={400}
          />
          <Image
            src={"/about.jpeg"}
            alt=""
            className="w-1/2 object-cover rounded-lg"
            width={500}
            height={400}
          />
        </div> */}
        <p className="md:my-4 my-2.5 text-[#666666] text-[16px]">
          {t("stageThreeDesc")}
        </p>
        <h2 className="text-2xl font-bold sm:text-3xl leading-[110%] md:my-4 my-2.5 mt-4 md:mt-6">
          {t("sheepBreedTitle")}
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed1Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed1Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed2Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed2Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed3Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed3Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed4Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed4Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed5Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed5Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed6Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed6Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed7Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed7Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed8Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed8Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed9Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed9Desc")}</p>
          </div>
          <div className="flex flex-col gap-2 p-3 shadow-card rounded-md">
            <h3 className="text-secondary text-2xl font-semibold">
              {t("breed10Title")}
            </h3>
            <p className="text-[#666666] text-[16px]">{t("breed10Desc")}</p>
          </div>
        </div>

        <p className="md:my-4 my-2.5 mt-8 text-[#666666] text-[16px]">
          {t("conclusion")}
        </p>

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

export default Sheeps;
