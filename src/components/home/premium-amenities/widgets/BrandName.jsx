"use client";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandNameToolTip from "./BrandNameToolTip";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BrandName = () => {
  useEffect(() => {
    // New enhanced tooltip animation
    gsap.from(".brand-tooltip", {
      opacity: 0,
      scale: 0.85,
      y: 30,
      rotation: 3, // Subtle rotation for dynamic effect
      duration: 1,
      stagger: 0.15, // Slightly faster stagger for smoother sequence
      ease: "back.out(1.4)", // Dynamic bounce-like easing
      scrollTrigger: {
        trigger: ".brand-container",
        start: "top 80%",
        end: "center 20%",
        scrub: 0.4, // Smoother scrub
        // markers: true // Uncomment for debugging
      },
    });

    // Original tooltip animation (commented out for reference)
    /*
    gsap.from(".brand-tooltip", {
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".brand-container",
        start: "top 80%",
        end: "center 20%",
        scrub: 0.5,
        // markers: true
      },
    });
    */

    // New animation for lineClassName elements (height growth from top)
    gsap.from(".tooltip-line", {
      height: 0,
      transformOrigin: "top",
      duration: 1.2,
      stagger: 0.15, // Sequential growth
      ease: "power3.out", // Smooth growth
      scrollTrigger: {
        trigger: ".brand-container",
        start: "top 80%",
        end: "center 20%",
        scrub: 0.4, // Smoother scrub
        // markers: true // Uncomment for debugging
      },
    });
  }, []);

  return (
    <div className="h-screen center relative max-width brand-container">
      <BrandNameToolTip
        className={
          "top-[10%] left-[17%] brand-tooltip lg:top-[10%] lg:left-[2%]"
        }
        lineClassName="hidden lg:block rotate-[300deg] tooltip-line"
      />
      <BrandNameToolTip
        tooltip={{
          title: "Private & Secure Stay",
          imagePath: "/assets/icon/point/Private.png",
        }}
        className={
          "top-[2%] left-[48%] brand-tooltip lg:top-[2%] lg:left-[58%]"
        }
        lineClassName="hidden min-h-12! lg:block rotate-0 lg:rotate-[0deg] tooltip-line"
      />
      <BrandNameToolTip
        tooltip={{
          title: "Ultra-Luxurious outdoor living",
          imagePath: "/assets/icon/point/ulta-luxurious.png",
        }}
        className={
          "top-[20%] max-md:top-[27%] left-[32%] brand-tooltip lg:top-[1%] lg:left-[26%]"
        }
        lineClassName="hidden min-h-12! lg:block rotate-[0deg] tooltip-line"
      />
      <BrandNameToolTip
        tooltip={{
          title: "Fully Equipped Gourmet Kitchen",
          imagePath: "/assets/icon/point/fully-equipped.png",
        }}
        className={
          "top-[18%] right-[3%] brand-tooltip lg:top-[13%] lg:right-[3.5%]"
        }
        lineClassName="hidden lg:block rotate-[60deg] tooltip-line"
      />
      <BrandNameToolTip
        tooltip={{
          title: "Private Spa & Wellness",
          imagePath: "/assets/icon/point/private-spa.png",
        }}
        className={
          "top-[87%] left-[2%] brand-tooltip lg:top-[50%] lg:left-[2%]"
        }
        lineClassName="hidden lg:block min-h-22! -rotate-[20deg] left-[80%]! top-0! rotate-[250deg] tooltip-line"
      />
      <BrandNameToolTip
        tooltip={{
          title: "Exclusive 5-Star Hotel Services",
          imagePath: "/assets/icon/point/5-Star-Hotel.png",
        }}
        className={
          "top-[61%] left-[2%] brand-tooltip lg:top-[68%] lg:left-[15%]"
        }
        lineClassName="hidden lg:block left-[80%]! min-h-[5rem]! top-0! rotate-[200deg] tooltip-line"
      />
      <BrandNameToolTip
        tooltip={{
          title: "Heated Saltwater Pool",
          imagePath: "/assets/icon/point/heated-saltwater.png",
        }}
        className={
          "top-[70%] left-[2%] brand-tooltip lg:top-[70%] lg:left-[70%]"
        }
        lineClassName="hidden lg:block left-[10%]! min-h-[7rem]! top-0! rotate-[120deg] tooltip-line"
      />
      <BrandNameToolTip
        tooltip={{
          title: "High-Tech Smart Home & Entertainment",
          imagePath: "/assets/icon/point/high-tech.png",
        }}
        className={
          "bottom-[15%] max-[412px]:right-[11%] right-[21%] brand-tooltip lg:bottom-[30%] lg:right-[0%]"
        }
        lineClassName="hidden lg:block min-h-20! left-[23%]! top-0! rotate-[120deg] tooltip-line"
      />

      <div className="max-xl:mt-13 max-md:mt-0">
      

        <div className="flex justify-center gap-1  my-2">
          {[...Array(5)].map((_, index) => (
            <Star stroke="0" fill="#D4A017" />
            // <img
            //   key={index}
            //   src="https://www.pngmart.com/files/23/5-Star-Download-PNG-Image.png"
            //   alt="golden star"
            //   className="w-5 h-5 md:w-12 md:h-12 object-contan"
            // />
          ))}
        </div>
  <h2 className="text-center capitalize font-playfair text-lg lg:text-7xl text-[#D4A017]">
          FIVE - STAR
        </h2>
        <h2 className="capitalize font-playfair text-[10vw] leading-none max-lg:text-[8vw]">
          <div className="flex flex-col items-center justify-center text-[#D4A017]">
            <h2> TG Luxury</h2>
            <h2>Stay</h2>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default BrandName;
