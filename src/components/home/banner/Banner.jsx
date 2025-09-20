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
import { BookingBrand } from "./booking-brand";
import { AirbnbBrand } from "./airbnb-brand";
import bannerContent from "@/(data)/bannerContent.json";
import { usePathname } from "next/navigation";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 const pathName =  usePathname();

  useGSAP(() => {
  if (typeof window === "undefined") return;

  const duration = 0.7;
  const delay = 0;
  const delayAfter = window.innerWidth < 640 ? 0.5 : 1.7;

  const mm = gsap.matchMedia();
  const ctx = gsap.context(() => {
    mm.add("(min-width: 64rem)", () => {
      gsap.to(".animation2 .circleImage", {
        maskImage:
          "radial-gradient(circle at center, transparent 100%, black 81px)",
        WebkitMaskImage:
          "radial-gradient(circle at center, transparent 100%, black 81px)",
        duration: duration + 1,
        delay: delay + 0.5,
        onComplete: () => {
          const animationElement = document.querySelector(".animation2");
          if (animationElement) animationElement.style.display = "none";
        },
      });

      gsap.to(".animation2 .logoImage", {
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
      { x: 0, opacity: 1, duration, delay: delay + delayAfter }
    );

    gsap.fromTo(
      ".opacityAnimation",
      { opacity: 0 },
      { opacity: 1, duration, delay: delay + delayAfter }
    );

    gsap.fromTo(
      ".reviewCardleft",
      { x: "-150%" },
      { x: 0, duration, delay: delay + delayAfter }
    );

    gsap.fromTo(
      ".reviewCardRight",
      { x: "150%" },
      { x: 0, duration, delay: delay + delayAfter }
    );
  });

  return () => {
    ctx.revert(); // cleanup
    mm.revert();
  };
}, []); // ✅ run only once per mount


  const isVilla = currentSlide <= 2; // pehle 3 slides villas hain

  const backgroundImages = [
    "/assets/resort/homebg.jpg",
    "/assets/resort/homebg1.jpg",
    "/assets/resort/homebg3.jpg",
    "/images/residence/new.jpg",
    "/images/residence/new-2.jpg",
    // "/images/residence/new-3.jpg",
    "/assets/images/posters/poster-6.jpg",

    // "/assets/resort/67.webp",
    "/images/residence/new-3.jpg",
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bannerContainer">
      {/* Swiper Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1800,
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

      {/* Layer and Content */}
      <div className="relative z-10">
        <BannerLayer />
        <BannerContent
          content={bannerContent[currentSlide] || bannerContent[0]}
        />
        <BannerContent
          content={bannerContent[currentSlide] || bannerContent[0]}
        />
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:-mt-4 mt-20 md:px-3">
        <BookingBrand />

        <AirbnbBrand />

        <BookingBrand />
        <AirbnbBrand />
        <div className="w-full font-crimson-text text-white py-6 flex flex-col md:flex-row justify-between px-4 md:px-10 absolute bottom-2 md:bottom-10 left-0 space-y-6 md:space-y-0">
          <div className="text-center md:flex-1">
            <h2 className="text-xl md:text-3xl font-bold">
              {isVilla ? "Exclusive Villas" : "Exclusive Residence"}
            </h2>
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
            <p className="text-sm md:text-xl">
              Memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

