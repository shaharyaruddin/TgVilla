"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Link from "next/link";

const OurServiceRight = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRefs = useRef([]);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "center center",
          scrub: 0.5,
          toggleActions: "play complete none none",
        },
      });

      // Container animation
      tl.from(containerRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(containerRef.current, {
          scale: 1.05,
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(containerRef.current, {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });

      // Headings & paragraph
      if (headingRef.current && paragraphRef.current) {
        tl.from(
          [headingRef.current, paragraphRef.current],
          {
            x: 50,
            opacity: 0,
            scale: 0.9,
            duration: 2,
            ease: "power2.out",
            stagger: 0.5,
          },
          "-=1.8"
        );
      }

      // List items
      if (listRefs.current.length > 0) {
        tl.from(
          listRefs.current,
          {
            x: 50,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power2.out",
            stagger: { each: 1, from: "start" },
          },
          "-=1.2"
        );
      }
    }, containerRef);

    setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => ctx.revert();
  }, [pathname]); // re-run on route change

  const SERVICES = [
    { title: "Private Finnish or infrared sauna" },
    { title: "Rainfall experience shower with aromatherapy" },
    { title: "Fully equipped kitchen & smart home system" },
    { title: "Balcony with partial or full sea views" },
    { title: "Optional access to TG Private Wellness Spa & Lounge" },
    { title: "Concierge support, cleaning on demand, and airport pickup" },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex homeServiceRightSection items-center pr-10 max-lg:pr-6 max-[51.25em]:pr-0!"
    >
      <div className="h-full w-full center-column items-start! p-10 max-xl:p-6 max-lg:space-y-3">
        <h2
          ref={headingRef}
          className="font-playfair text-5xl max-xl:text-3xl max-lg:text-2xl"
        >
          Expected Amenities
        </h2>
        <p
          ref={paragraphRef}
          className="text-[1.4rem] mt-2 max-xl:text-base max-xl:mt-0"
        >
          Enjoy a seamless blend of high-end hospitality and personalized care.
        </p>
        <ul className="mt-5 w-full max-xl:mt-0">
          {SERVICES.map((service, index) => (
            <li
              key={index}
              ref={(el) => (listRefs.current[index] = el)}
              className="border-t-2 font-playfair w-full py-3 text-4xl max-xl:text-3xl max-lg:text-2xl text-gray-800 border-gray-300"
            >
              {service.title}
            </li>
          ))}
        </ul>
        <div className="mt-5 w-full flex justify-end">
          <Link href="/bookings">
            <button className="bg-app-yellow transform transition-all duration-300 hover:scale-105 w-[10rem] rounded-full px-4 py-2 font-medium hover:bg-app-yellow/90 text-black">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServiceRight;
