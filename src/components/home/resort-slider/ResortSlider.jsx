"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const ResortSlider = () => {
  const images = Array.from(
    { length: 20 },
    (_, index) => `/assets/resort/${index + 3}.jpg`
  );

  const slideImageRefs = useRef([]);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  useEffect(() => {
    // Animate images
    slideImageRefs.current.forEach((img) => {
      gsap.to(img, {
        scale: 1.2,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    // Animate navigation buttons on hover
    [navPrevRef.current, navNextRef.current].forEach((btn) => {
      if (btn) {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
            onStart: () => btn.classList.add("bg-opacity-80"),
          });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => btn.classList.remove("bg-opacity-80"),
          });
        });
      }
    });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6 relative">
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900/50">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          slidesPerView={1}
          navigation={{
            prevEl: navPrevRef.current,
            nextEl: navNextRef.current,
          }}
          className="w-full h-[600px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden">
                <img
                  ref={(el) => (slideImageRefs.current[index] = el)}
                  src={src}
                  alt={`Resort poster ${index + 3}`}
                  className="w-full h-full object-cover will-change-transform transition-transform duration-500 brightness-90 hover:brightness-100"
                />
                {/* Enhanced overlay with subtle grain effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                </div>
                {/* Caption for added context */}
                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <h3 className="text-2xl font-bold tracking-tight drop-shadow-lg">
                    Resort Paradise {index + 3}
                  </h3>
                  <p className="text-sm opacity-80">Discover luxury and serenity</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <button
          ref={navPrevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-800/60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          ref={navNextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-800/60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResortSlider;