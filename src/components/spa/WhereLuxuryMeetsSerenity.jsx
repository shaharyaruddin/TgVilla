"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

const WhereLuxuryMeetsSerenity = () => {
  // Refs
  const mainContainerRef = useRef(null);
  const aboutAnimateRef = useRef(null);
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: "top top",
        end: "+=800",
        scrub: 1,
        pin: mainContainerRef.current,
      },
    });

    tl.from(aboutAnimateRef.current, {
      scale: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .from(
        topLeftRef.current,
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
        topRightRef.current,
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
        bottomLeftRef.current,
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
        bottomRightRef.current,
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
    <div
      ref={mainContainerRef}
      className="main-container flex justify-center items-center relative overflow-hidden min-h-screen p-10 max-md:p-4"
    >
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

      <div
        ref={aboutAnimateRef}
        className="relative w-full min-h-[calc(100vh-100px)] bg-[#F4F4EA] rounded-3xl max-md:rounded-2xl"
      >
        {/* Top left */}
        <div
          ref={topLeftRef}
          className="absolute top-20 left-20 max-md:top-10 max-sm:top-10 max-md:left-4  size-[15rem]  max-lg:size-[13rem] max-md:size-[10rem] max-sm:size-[8rem]"
        >
          <Image
            className="rounded-xl object-cover"
            src="/images/spa/1.avif"
            alt="spa"
            fill
          />
        </div>

        {/* Top right */}
        <div
          ref={topRightRef}
          className="absolute top-20 right-20 max-md:top-20 max-sm:top-10 max-md:right-4 size-[15rem]  max-lg:size-[13rem] max-md:size-[10rem] max-sm:size-[8rem]"
        >
          <Image
            className="rounded-xl object-cover"
            src="/images/spa/2.avif"
            alt="spa"
            fill
          />
        </div>

        {/* Bottom left */}
        <div
          ref={bottomLeftRef}
          className="absolute bottom-40 left-40 max-md:bottom-15 max-lg:left-20 max-lg:bottom-20 max-sm:bottom-[14vh] max-[400px]:bottom-3 max-sm:left-4  size-[15rem]  max-lg:size-[13rem] max-md:size-[10rem] max-sm:size-[8rem] "
        >
          <Image
            className="rounded-xl object-cover"
            src="/images/spa/3.avif"
            alt="spa"
            fill
          />
        </div>

        {/* Bottom right */}
        <div
          ref={bottomRightRef}
          className="absolute bottom-40 right-40 max-md:bottom-15 max-lg:right-20 max-lg:bottom-20  max-sm:bottom-[14vh] max-sm:right-4  size-[15rem]  max-lg:size-[13rem] max-md:size-[10rem] max-sm:size-[8rem]  "
        >
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
