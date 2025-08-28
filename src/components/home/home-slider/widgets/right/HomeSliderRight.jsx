"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Added Autoplay for optional auto-sliding
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HomeSliderRight = () => {
  // Ref to control Swiper instance
  const swiperRef = useRef(null);

  const images = [
    "/assets/images/bedroomVilla/bedroom1.webp",
    "/assets/images/bedroomVilla/bedroom2.webp",
    "/assets/images/bedroomVilla/bedroom4.webp",
    "/assets/images/bedroomVilla/bedroom5.webp",
    "/assets/images/bedroomVilla/bedroom6.webp",
    "/assets/images/bedroomVilla/bedroom7.webp",
    "/assets/images/bedroomVilla/bedroom8.webp",
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each slide when it becomes active
    gsap.from(".swiper-slide-active", {
      x: 100, // Slide in from right
      opacity: 0, // Fade in
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".slider-right-container",
        start: "top 20%",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="w-full relative center px-10 max-md:px-2 slider-right-container">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]} 
        spaceBetween={30}
        slidesPerView={1}
        loop={true} // Infinite loop enabled
        loopedSlides={images.length} // Ensure smooth looping for small number of slides
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        className="mySwiper center rounded-2xl overflow-hidden"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[30rem] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        <button className="custom-swiper-button-prev border border-gray-300 p-2 rounded-full hover:bg-[#E0E0E0] transition-colors">
          <ArrowLeft className="size-10 text-gray-300 hover:text-gray-900" />
        </button>
        <button className="custom-swiper-button-next border border-gray-300 p-2 rounded-full hover:bg-[#E0E0E0] transition-colors">
          <ArrowRight className="size-10 text-gray-300 hover:text-gray-900" />
        </button>
      </div>

      <style jsx>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HomeSliderRight;
