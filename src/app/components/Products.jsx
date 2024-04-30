import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex flex-col py-6 lg:py-10">
        <h2 className="text-[#333333] text-4xl font-[700] my-6">
          Our Services
        </h2>
        <div className="w-full grid grid-cols-4 gap-20 mt-6 max-w-[1100px]">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full bg-light-white rounded-full p-12 cursor-pointer hover:bg-secondary group transition duration-200">
              <Image
                src={"/icons/sheep1.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="w-full h-full transition duration-200 object-cover group-hover:brightness-0 group-hover:invert-[1]"
              />
            </div>
            <h3 className="text-xl font-medium">Sheep</h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full bg-light-white rounded-full p-12 cursor-pointer hover:bg-secondary group transition duration-200">
              <Image
                src={"/icons/sheep2.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="w-full h-full transition duration-200 object-cover group-hover:brightness-0 group-hover:invert-[1]"
              />
            </div>
            <h3 className="text-xl font-medium">Reindeer</h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full bg-light-white rounded-full p-12 cursor-pointer hover:bg-secondary group transition duration-200">
              <Image
                src={"/icons/sheep3.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="w-full h-full transition duration-200 object-cover group-hover:brightness-0 group-hover:invert-[1]"
              />
            </div>
            <h3 className="text-xl font-medium">Daniel Deer</h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full bg-light-white rounded-full p-12 cursor-pointer hover:bg-secondary group transition duration-200">
              <Image
                src={"/icons/sheep4.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="w-full h-full transition duration-200 object-cover group-hover:brightness-0 group-hover:invert-[1]"
              />
            </div>
            <h3 className="text-xl font-medium">Medical</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-[#333333] text-4xl font-[700] my-6">
          Our Products
        </h2>
        <div className="w-full grid grid-cols-4 gap-6 mt-6">
          <Link href={'/sheeps'} className="w-full flex flex-col items-center justify-between gap-4 bg-white rounded-lg p-5 py-6 shadow-card">
            <div className="px-3 cursor-pointer h-[140px]">
              <Image
                src={"/pr1.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-2xl font-semibold">Sheep</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                doloribus?
              </p>
            </div>
          </Link>
          <div className="w-full flex flex-col items-center justify-between gap-4 bg-white rounded-lg p-5 py-6 shadow-card">
            <div className="px-3 cursor-pointer h-[140px] ">
              <Image
                src={"/pr2.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-2xl font-semibold">Lorem, ipsum</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                doloribus?
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-between gap-4 bg-white rounded-lg p-5 py-6 shadow-card">
            <div className="px-3 cursor-pointer h-[140px]">
              <Image
                src={"/pr3.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-2xl font-semibold">Daneial</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                doloribus?
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-between gap-4 bg-white rounded-lg p-5 py-6 shadow-card">
            <div className="px-3 cursor-pointer h-[140px] ">
              <Image
                src={"/pr4.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-2xl font-semibold">Sheep</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                doloribus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
