"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BookingSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftStarsRef = useRef(null);
  const leftHeadingRef = useRef(null);
  const leftSubtextRef = useRef(null);
  const leftTextRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightHeadingRef = useRef(null);
  const rightSubtextRef = useRef(null);
  const rightTextRef = useRef(null);
  const rightButtonRef = useRef(null);
  const bottomHeadingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        backgroundPositionY: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      const leftElements = [
        leftStarsRef.current.querySelectorAll("span"),
        leftHeadingRef.current,
        leftSubtextRef.current,
        leftTextRef.current,
        leftButtonRef.current,
      ];

      gsap.from(leftRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      leftElements.forEach((el, index) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          scale: index === 0 ? 1.5 : 0.9,
          rotation: index === 0 ? 180 : 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });

      const rightElements = [
        rightHeadingRef.current,
        rightSubtextRef.current,
        rightTextRef.current,
        rightButtonRef.current,
      ];

      gsap.from(rightRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      rightElements.forEach((el, index) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(bottomHeadingRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bottomHeadingRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      [leftButtonRef.current, rightButtonRef.current].forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
  <div className="bg-[#E8E4D9]">
  <div
    ref={sectionRef}
    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center p-6 space-y-6 md:space-y-0 md:space-x-6 overflow-hidden"
    style={{
      backgroundImage: "url('/assets/images/beach-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Left Card */}
    <div ref={leftRef} className="relative flex-1 rounded-lg overflow-hidden shadow-lg">
      <img
        src="/assets/wmremove-transformed1.jpg"
        alt="Villa"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 backdrop-blur-3xl bg-white/20 p-8 text-center">
        <div ref={leftStarsRef} className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-3xl">★</span>
          ))}
        </div>
        <h2 ref={leftHeadingRef} className="text-4xl font-bold text-white font-playfair">
          Preferred Plus Award
        </h2>
        <p ref={leftSubtextRef} className="text-white mb-4">
          by{" "}
          <span className="text-[#003B95] font-bold text-2xl font-playfair">Booking.com</span>
        </p>
        <p ref={leftTextRef} className="text-white mb-6 text-lg font-playfair">
          Proudly recognized by Booking.com as a Preferred Plus Partner —
          reserved for the finest homes and villas offering outstanding
          quality, location, and guest experience.
        </p>
        <button
          ref={leftButtonRef}
          className="bg-[#D4A017] font-playfair text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold"
        >
          View Our Villas
        </button>
      </div>
    </div>

    {/* Right Card */}
    <div ref={rightRef} className="relative flex-1 rounded-lg overflow-hidden shadow-lg">
      <img
        src="/assets/wmremove-transformed1.jpg"
        alt="Airbnb"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 backdrop-blur-3xl bg-white/20 p-8 text-center">
        <h2
          ref={rightHeadingRef}
          className="text-4xl font-bold text-white mt-0 md:mt-12 font-playfair"
        >
          Top 5% of Villas
        </h2>
        <p ref={rightSubtextRef} className="text-white mb-4">
          by{" "}
          <span className="text-[#FF607D] font-bold text-2xl font-playfair">Airbnb.com</span>
        </p>
        <p ref={rightTextRef} className="text-white mb-6 text-lg font-playfair">
          One of the most loved homes on Airbnb, according to guests. Our
          properties consistently rank among the highest-rated accommodations.
        </p>
        <button
          ref={rightButtonRef}
          className="bg-[#D4A017] font-playfair text-white px-8 py-3 rounded-full hover:bg-[#D4A017] transition-all duration-300 text-lg font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Bottom Heading */}
      <div className="bg-[#E8E4D9]">
        <h2
          ref={bottomHeadingRef}
          className="text-center text-6xl font-playfair pt-3 italic pb-10 text-[#D4A017]"
        >
          TG 5 STAR LUXURY RESORT
        </h2>
      </div>
    </>
  );
};

export default BookingSection;
