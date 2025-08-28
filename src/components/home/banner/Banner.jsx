"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import BannerLayer from "./widgets/BannerLayer";
import BannerContent from "./widgets/BannerContent";
import BlurFade from "@/components/ui/blur-fade";
import { BookingBrand } from "./booking-brand";
import { AirbnbBrand } from "./airbnb-brand";
import bannerContent from "@/(data)/bannerContent.json";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    const duration = 0.7;
    const delay = 0;
    const delayAfter = window.innerWidth < 640 ? 0.5 : 1.7;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 64rem)", () => {
      gsap.to(".animation .circleImage", {
        maskImage:
          "radial-gradient(circle at center, transparent 100%, black 81px)",
        WebkitMaskImage:
          "radial-gradient(circle at center, transparent 100%, black 81px)",
        duration: duration + 1,
        delay: delay + 0.5,
        onComplete: () => {
          const animationElement = document.querySelector(".animation");
          if (animationElement) {
            animationElement.style.display = "none";
          }
        },
      });

      gsap.to(".animation .logoImage", {
        opacity: 0,
        duration: duration,
        delay: delay + 0.5,
        onComplete: () => {
          document.body.style.overflowY = "auto";
        },
      });
    });

    gsap.fromTo(
      ".headingAnimation1",
      { x: "-150%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: duration,
        delay: delay + delayAfter,
        onComplete: () => {
          document.querySelectorAll(".headingAnimation1").forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          });
        },
      }
    );

    gsap.fromTo(
      ".opacityAnimation",
      { opacity: 0 },
      {
        opacity: 1,
        duration: duration,
        delay: delay + delayAfter,
        onComplete: () => {
          document.querySelectorAll(".opacityAnimation").forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          });
        },
      }
    );

    gsap.fromTo(
      ".reviewCardleft",
      { x: "-150%" },
      { x: 0, duration: duration, delay: delay + delayAfter }
    );

    gsap.fromTo(
      ".reviewCardRight",
      { x: "150%" },
      { x: 0, duration: duration, delay: delay + delayAfter }
    );
  }, []);

  const backgroundImages = [
    "/assets/resort/1.webp",
    "/assets/resort/2.webp",
    "/assets/resort/66.webp",
    "/assets/resort/3resort.webp",
    "/assets/resort/4resort.webp",
    "/assets/resort/67.webp",
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bannerContainer">
      {/* Swiper Background (z-0) */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1600}
          className="w-full h-full"
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-screen">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] via-[#06B6D490] via-30% to-transparent to-61%" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Layer and Content on top of Swiper (z-10+) */}
      <div className="relative z-10">
        <BannerLayer />
        <BannerContent content={bannerContent[currentSlide] || bannerContent[0]} />
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:-mt-4 mt-20 md:px-3">
          <BookingBrand />
   
          <AirbnbBrand />


        <div className="w-full font-crimson-text text-white py-6 flex flex-col md:flex-row justify-between px-4 md:px-10 absolute bottom-2 md:bottom-10 left-0 space-y-6 md:space-y-0">
          <div className="text-center md:flex-1">
            <h2 className="text-xl md:text-3xl font-bold">Exclusive Villas</h2>
            <p className="text-sm md:text-xl">
              Handpicked villas in stunning locations.
            </p>
          </div>
          <div className="text-center md:flex-1">
            <h2 className="text-xl md:text-3xl font-bold">Dedicated Service</h2>
            <p className="text-sm md:text-xl">
              We ensure every detail exceeds expectations.
            </p>
          </div>
          <div className="text-center md:flex-1">
            <h2 className="text-xl md:text-3xl font-bold">
              Unforgettable Experience
            </h2>
            <p className="text-sm md:text-xl">Memories that last a lifetime.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;