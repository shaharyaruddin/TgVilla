"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const HomeServicesRight = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeServiceRightSection",
        start: "top 85%",
        end: "center center",
        scrub: 0.5,
        toggleActions: "play complete none none",
      },
    });

    // Animate the container with zoom-in effect
    tl.from(".homeServiceRightSection", {
      x: 100, // Slide in from right
      opacity: 0, // Fade in
      scale: 0.8, // Zoom in from smaller scale
      duration: 1.2,
      ease: "power3.out",
    })
      // Zoom out slightly for a subtle effect
      .to(".homeServiceRightSection", {
        scale: 1.05, // Zoom out slightly
        duration: 0.6,
        ease: "power2.inOut",
      })
      // Return to normal scale
      .to(".homeServiceRightSection", {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });

    // Animate h2 and p with zoom-in effect
    tl.from(
      [".homeServiceRightSection h2", ".homeServiceRightSection p"],
      {
        x: 50, // Slide in from right
        opacity: 0, // Fade in
        scale: 0.9, // Zoom in from smaller scale
        duration: 2,
        ease: "power2.out",
        stagger: 0.5,
      },
      "-=1.8" // Overlap with container zoom
    );

    // Animate list items sequentially with zoom-in effect
    tl.from(
      ".homeServiceRightSection li",
      {
        x: 50, // Slide in from right
        opacity: 0, // Fade in
        scale: 0.9, // Zoom in from smaller scale
        duration: 1,
        ease: "power2.out",
        stagger: {
          each: 1, // Sequential animation for each item
          from: "start",
        },
      },
      "-=1.2" // Overlap with h2 and p animations
    );

    // Ensure all elements are fully visible at the end
    tl.to(
      [
        ".homeServiceRightSection",
        ".homeServiceRightSection h2",
        ".homeServiceRightSection p",
        ".homeServiceRightSection li",
      ],
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.1, // Quick snap to final state
        ease: "none",
      },
      ">"
    );
  }, []);
  
  

  const SERVICES = [
    { title: "Heated Saltwater Pool" },
    { title: "Luxury Outdoor Jacuzzi" },
    { title: "Outdoor Glass Sauna" },
    { title: "Daily Breakfast" },
    { title: "Hot Water 24/7" },
  ];

  return (
    <div className="w-full h-full flex homeServiceRightSection items-center pr-10 max-lg:pr-6 max-[51.25em]:pr-0!">
      <div className="h-full w-full center-column items-start! p-10 max-xl:p-6 max-lg:space-y-3">
        <h2 className="font-playfair text-4xl max-xl:text-3xl max-lg:text-2xl">
          Star Hotel Services & Facilities
        </h2>
        <p className="text-[1.4rem] mt-2 max-xl:text-base max-xl:mt-0">
          Enjoy a seamless blend of high-end hospitality and personalized care.
        </p>
        <ul className="mt-5 w-full max-xl:mt-0">
          {SERVICES.map((service, index) => (
            <li
              key={index}
              className="border-t-2 font-playfair w-full py-3 text-4xl max-xl:text-3xl max-lg:text-2xl text-gray-800 border-gray-300"
            >
              {service.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeServicesRight;
