"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

const WhereLuxuryMeetsSerenity = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = {
      trigger: ".main-container",
      start: "top top",
      end: "+=800",
      scrub: 1,
      pin: ".main-container",
    };

    const tl = gsap.timeline({ scrollTrigger });

    tl.from(".aboutAnimate", {
      scale: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .from(
        ".aboutTopLeft",
        {
          top: "-100%",
          left: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        },
        "-=0.5"
      )
      .from(
        ".aboutTopRight",
        {
          top: "-100%",
          right: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        },
        "-=0.5"
      )
      .from(
        ".aboutBottomLeft",
        {
          bottom: "-100%",
          left: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        },
        "-=0.5"
      )
      .from(
        ".aboutBottomRight",
        {
          bottom: "-100%",
          right: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        },
        "-=0.5"
      );
  }, []);

  return (
    <div className="main-container flex justify-center items-center relative overflow-hidden min-h-screen p-10 max-md:p-4">
      <div className="absolute flex flex-col items-center max-w-lg text-center z-[1] text-[#333333] space-y-4 max-md:max-w-sm max-md:space-y-3">
        <h3 className="max-md:text-lg">About Us</h3>
        <h2 className="font-cormorant lg:text-5xl text-2xl md:text-3xl">
          Where Luxury Meets Serenity
        </h2>
        <p className="mx-10 max-md:mx-4 max-md:text-sm">
          Experience personalized spa treatments that restore balance and
          elevate self-care
        </p>
        <Link
          href="/about"
          className="border-2 px-3 py-2 max-md:px-2 max-md:py-1 max-md:text-sm border-black rounded-full"
        >
          More About TG Luxury Stays
        </Link>
      </div>
      <div className="aboutAnimate relative w-full min-h-[calc(100vh-100px)] bg-[#F4F4EA] rounded-3xl max-md:rounded-2xl">
        {/* Top left */}
        <div className="absolute aboutTopLeft top-20 max-md:top-4 max-md:left-4 left-20 max-md:size-[100px] md:size-[130px] lg:size-[190px]">
          <Image
            className="rounded-xl object-cover"
            src="/images/spa/1.avif"
            alt="spa"
            fill
          />
        </div>
        {/* Top right */}
        <div className="absolute aboutTopRight top-20 right-20 max-md:top-4 max-md:right-4 max-md:size-[100px] md:size-[130px] lg:size-[240px]">
          <Image
            className="rounded-xl object-cover"
            src="/images/spa/2.avif"
            alt="spa"
            fill
          />
        </div>
        {/* Bottom left */}
        <div className="absolute aboutBottomLeft bottom-20 left-40 max-md:left-4 max-md:bottom-4 max-md:size-[100px] md:size-[130px] lg:size-[240px]">
          <Image
            className="rounded-xl object-cover"
            src="/images/spa/3.avif"
            alt="spa"
            fill
          />
        </div>
        {/* Bottom right */}
        <div className="absolute aboutBottomRight bottom-20 right-20 max-md:right-4 max-md:bottom-4 max-md:size-[100px] md:size-[130px] lg:size-[190px]">
          <Image
            className="rounded-xl object-cover"
            src="/images/spa/4.avif"
            alt="spa"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default WhereLuxuryMeetsSerenity;
