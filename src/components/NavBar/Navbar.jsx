"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { LINKS } from "./widgets/links";
import NavLinks from "./widgets/NavLinks";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   // const handleScroll = () => {
  //   //   const currentScrollY = window.scrollY;

  //   //   if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
  //   //     // scrolling down
  //   //     gsap.to(navbarRef.current, {
  //   //       y: "-100%",
  //   //       duration: 0.5,
  //   //     });
  //   //   } else {
  //   //     // scrolling up
  //   //     gsap.to(navbarRef.current, {
  //   //       y: "0%",
  //   //       duration: 0.5,
  //   //     });
  //   //   }

  //   //   lastScrollY.current = currentScrollY;
  //   // };

  //   // window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      ref={navbarRef}
      className="w-full fixed backdrop-blur-[3px] top-0 left-0 z-50"
    >
      {/* NAV CONTAINER */}
      <div className="max-width flex justify-between items-center px-10 max-h-[4.5rem] overflow-hidden py-4 relative max-md:px-4">
        {/* logo */}
        <div>
          <Image
            src="/assets/logo/TG-villas-48.png"
            alt="logo"
            width={80}
            height={50}
            className="max-md:w-[4.5rem] "
          />
        </div>

        {/* desktop links */}
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center gap-10 text-lg  max-xl:gap-5 font-medium text-gray-700">
            {LINKS.map((link, i) => (
              <NavLinks key={i} href={link.href} name={link.name} />
            ))}
          </ul>
        </div>

        {/* actions */}
        <div className="hidden lg:flex justify-end items-center gap-4">
          <button className="bg-app-yellow w-[10rem] rounded-full px-4 py-2 font-medium hover:bg-app-yellow/90 text-black">
            Book Now
          </button>
        </div>

        {/* mobile menu icon */}
        <div className="lg:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out px-3 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-base font-semibold text-gray-700 pb-4">
          {LINKS.map((link, i) => (
            <NavLinks key={i} href={link.href} name={link.name} />
          ))}
          <button className="mt-2 bg-app-yellow w-full rounded-full px-4 py-2 font-medium hover:bg-app-yellow/90 text-black">
            Book Now
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
