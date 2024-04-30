import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhone } from "react-icons/pi";
import { ImInfo } from "react-icons/im";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";

const Contact = () => {
  return (
    <section>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Custom Sourcing Available
        </h2>

        <p className="mt-4 text-[#5E5B5B] text-lg">
          Can&apos;t find the animal skin you need? Contact us! We&apos;ll
          prepare a source just for you. With our extensive network of partners,
          we can fulfill your requirements. Get in touch today.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block rounded bg-secondary px-8 py-3 text-sm font-semibold text-white"
        >
          Contact Us Now
        </a>
      </div>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16" id="contact">
        <h2 className="text-3xl font-bold sm:text-4xl">Contact</h2>
        <div className="grid grid-cols-3 gap-8 w-full mt-12">
          <div className="flex flex-col items-center justify-center gap-2 contact-shadow px-8 py-8 rounded-lg">
            <HiOutlineMail className="text-[#648286] text-[50px] " />
            <h4 className="text-2xl font-semibold my-2">Email</h4>
            <a
              href=""
              className="text-[#648286] hover:text-[#5a7e83] text-md font-semibold transition"
            >
              Email@example.com
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 contact-shadow px-8 py-8 rounded-lg">
            <PiPhone className="text-[#648286] text-[50px] " />
            <h4 className="text-2xl font-semibold my-2">Phone</h4>
            <a
              href=""
              className="text-[#648286] hover:text-[#5a7e83] text-md font-semibold transition"
            >
              +2165481997
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 contact-shadow px-8 py-8 rounded-lg">
            <ImInfo className="text-[#648286] text-[50px] " />
            <h4 className="text-2xl font-semibold my-2">Info</h4>
            <div className="flex flex-col gap-2">
              <a
                href=""
                className="text-[#648286] hover:text-[#5a7e83] text-md font-semibold transition group"
              >
                <span className="text-black group-hover:text-black"> NIP:</span>{" "}
                1234567899
              </a>
              <a
                href=""
                className="text-[#648286] hover:text-[#5a7e83] text-md font-semibold transition group"
              >
                <span className="text-black group-hover:text-black"> RN:</span>{" "}
                1234567899
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 col-span-3 contact-shadow px-8 py-8 rounded-lg">
            <FiMapPin className="text-[#648286] text-[50px] " />
            <h4 className="text-2xl font-semibold my-2">Address</h4>
            <a
              href=""
              className="text-[#648286] hover:text-[#5a7e83] text-md font-semibold transition"
            >
              123 Maple Street, Greenwood City, Meadowshire, MS 12345, United
              States
            </a>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="">
                <Image
                  src={"/icons/google.png"}
                  alt=""
                  width={80}
                  height={80}
                  className="hover:scale-105 transition w-[50px] h-[50px] object-cover "
                />
              </a>
              <a href="">
                <Image
                  src={"/icons/ios.png"}
                  alt=""
                  width={80}
                  height={80}
                  className="hover:scale-105 transition w-[50px] h-[50px] object-cover "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
