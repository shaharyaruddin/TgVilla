"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

const OurServiceLeft = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Background animation
      gsap.from(bgRef.current, {
        scaleY: 0.15,
        transformOrigin: "bottom",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1.5,
        },
      });

      // Image container animation
      gsap.from(imageContainerRef.current, {
        scaleY: 0.15,
        transformOrigin: "bottom",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "center center",
          scrub: 1.5,
        },
      });

      // Image zoom in/out
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, containerRef);

    setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => ctx.revert();
  }, [pathname]); // 🔑 re-run on route change

  return (
    <div
      ref={containerRef}
      className="w-full h-full p-10 px-16 relative max-[51.25em]:min-h-[20rem]! max-[51.25em]:p-0!"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="bg-[#C8B29C] absolute w-[85%] h-[90%] -translate-y-1/2 right-19 max-lg:right-5 max-[51.25em]:hidden rounded-[3rem] top-[55%]"
      ></div>

      {/* Image Container */}
      <div
        ref={imageContainerRef}
        className="absolute w-[85%] h-[90%] max-[51.25em]:h-full! max-[51.25em]:w-full! rounded-[3rem] max-lg:rounded-none overflow-hidden"
      >
        <img
          ref={imageRef}
          src="/assets/residence/8.jpg"
          alt="welcome-image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default OurServiceLeft;
