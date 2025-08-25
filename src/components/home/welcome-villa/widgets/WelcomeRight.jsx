"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React from "react";

const WelcomeRight = () => {
  const WELCOME_SECTION_LINK = [
    {
      title: "Concept",
      link: "/",
    },
    {
      title: "OUR VILLAS",
      link: "/",
    },
    {
      title: "WELLNESS",
      link: "/",
    },
    {
      title: "SPA RETREAT",
      link: "/",
    },
  ];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".welcomeRightSection", {
      scale: 0.5,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".welcomeSection",
        start: "top center",
        end: "60% 70%",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.from(".welcomeLinks", {
      y: "250%",
      opacity: 0,
      stagger: 2,
      duration: 2,
      scrollTrigger: {
        trigger: ".welcomeSection",
        start: "center center",
        end: "bottom bottom",
        scrub: 2,
        // markers: true,
      },
    });
  }, []);
  return (
    //OLD COLOR bg-[#F2F2F2]

    <div className="w-full h-full welcomeRightSection origin-bottom-right  flex items-center pr-10 max-lg:pr-6 max-[51.25em]:pr-0!">
      <div className="min-h-[35rem] max-xl:min-h-[25rem] max-[51.25em]:min-h-full! bg-[#F2EFE7] w-full center-column items-start! p-10 space-y-6 max-xl:p-6 max-lg:space-y-3">
        <h4 className="font-cormorant text-3xl max-lg:text-2xl">Welcome to</h4>
        <h2 className="font-playfair text-5xl max-xl:text-4xl max-lg:text-3xl">
          TG Luxury Villas Exclusive Private Retreats
        </h2>
        <h4 className="font-cormorant text-xl font-medium italic max-lg:text-base">
          Luxury Villas in Limassol – A Private <br /> Wellness & Spa Retreat
        </h4>
        <p className="text-[1.5rem] max-xl:text-lg max-lg:text-base ">
          Welcome to TG Luxury Villas, your exclusive escape in Limassol,
          Cyprus. Experience five-star luxury, wellness, and tranquility in a
          private, high-end villa designed for discerning travelers.
        </p>
        <div className="center mt-10 max-lg:mt-5 space-x-5 w-full max-lg:space-x-3 ">
          {WELCOME_SECTION_LINK.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="uppercase welcomeLinks font-light text-sm max-lg:text-xs"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeRight;
