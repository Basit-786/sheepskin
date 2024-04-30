"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const images = ["/about.jpeg", "/pr2.png", "/pr1.png", "/pr3.png"];

const Sheeps = () => {
  const [selectedImage, setSelectedImage] = useState("/about.jpeg");
  return (
    <div className="max-w-[1000px] flex flex-col items-center justify-center mx-auto px-4 py-8 lg:py-16">
      <div className="flex justify-between gap-10 w-full">
        <div className="w-full">
          <div className="w-full h-[500px] rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt=""
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          {/* <div className="bg-secondary rounded-md px-2 py-1 w-full flex items-center justify-center cursor-pointer">
            <IoIosArrowUp className="text-white text-[30px]" />
          </div> */}
          <div className="flex flex-col gap-2 h-[500px] overflow-y-auto scroll-hidden">
            {images.map((item, index) => (
              <div
                key={index}
                className={`w-[140px] h-[140px] flex-shrink-0 flex-grow-0 transition ${
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
      <div className="p-4 mt-10">
        <h2 className="text-3xl font-bold sm:text-4xl leading-[110%] my-3">
          Lorem ipsum Lorem ipsum dolo{" "}
        </h2>
        <p className="my-4 text-[#666666] text-[16px]">
          At [Your Company Name], we specialize in utilizing the finest animal
          skins, including sheep, reindeer, and deer, to craft an array of
          medical products, decorations, and much more. Our dedication to
          quality craftsmanship and ethical sourcing ensures that every item we
          produce meets the highest standards.
        </p>

        <h2 className="text-2xl font-bold sm:text-3xl leading-[110%] my-4 mt-6">
          Product Processing
        </h2>
        <h3 className="text-secondary text-xl font-semibold my-3">
          Step 1: Sourcing and Preparation
        </h3>
        <div className="flex items-center justify-center gap-4 my-8">
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
        </div>
        <p className="my-4 text-[#666666] text-[16px]">
          Sourcing: Reindeer skins are sourced from reputable suppliers who
          adhere to ethical and sustainable practices. These suppliers often
          work closely with indigenous communities or small-scale farmers who
          raise reindeer for various purposes. Preparation: Upon arrival, each
          reindeer skin undergoes careful inspection to ensure it meets quality
          standards. Any damaged or flawed areas are noted for special attention
          during the tanning process. The skins are then sorted based on size,
          thickness, and quality.
        </p>
        <h3 className="text-secondary text-xl font-semibold my-3">
          Step 2: Sourcing and Preparation
        </h3>
        <div className="flex items-center justify-center gap-4 my-8">
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
        </div>
        <p className="my-4 text-[#666666] text-[16px]">
          Sourcing: Reindeer skins are sourced from reputable suppliers who
          adhere to ethical and sustainable practices. These suppliers often
          work closely with indigenous communities or small-scale farmers who
          raise reindeer for various purposes. Preparation: Upon arrival, each
          reindeer skin undergoes careful inspection to ensure it meets quality
          standards. Any damaged or flawed areas are noted for special attention
          during the tanning process. The skins are then sorted based on size,
          thickness, and quality.
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
