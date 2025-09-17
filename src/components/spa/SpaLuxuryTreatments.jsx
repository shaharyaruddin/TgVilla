"use client";
import React, { useEffect } from "react";
import SpaChips from "./SpaChips";
import SpaServiceCard from "./SpaServiceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SpaLuxuryTreatments = () => {
  const SERVICES_CHIPS = [
    "Luxury Spa",
    "Wellness Retreat",
    "Mind Body Soul",
    "Relaxation Time",
    "Spa Day",
    "Holistic Healing",
    "Pamper Yourself",
    "Luxury Lifestyle",
    "Luxury Facial",
    "Glowing Skin",
    "Hydrating Facial",
    "Anti Aging Treatment",
  ];

  const SERVICE = [
    {
      image: "/spa/SAUNA.jpg",
      service: `SAUNA`,
      desc: `Hydrating, anti-aging, and brightening facials for radiant skin.`,
    },
    {
      image: "/spa/STEAM BATH.jpg",
      service: `STEAM BATH`,
      desc: `Immerse yourself in calming essential oils and holistic techniques for full-body renewal.`,
    },
    {
      image: "/spa/COLD-PLUNG.jpg",
      service: `COLD PLUNG`,
      desc: `Relieve tension and stress with expert deep tissue techniques that promote relaxation.`,
    },
    {
      image: "/spa/ICE ROOM.jpg",
      service: `ICE ROOM`,
      desc: `Detoxify, exfoliate, and hydrate your skin with our signature mineral-rich body wrap.`,
    },
    {
      image: "/images/resort/3.jpg",
      service: `POOL WITH HYDRO PUMBS`,
      desc: `Experience deep relaxation and muscle relief through soothing heated stone treatments.`,
    },
  ];

  useEffect(() => {
    // Create a GSAP context to manage animations
    const ctx = gsap.context(() => {
      // Use matchMedia for responsive animations
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const leftContent = document.querySelector(".sticky-container");
        const rightContent = document.querySelector(".scrollable-content");

        if (leftContent && rightContent) {
          gsap.to(".sticky-container", {
            scrollTrigger: {
              trigger: ".sticky-container",
              start: "top top+=80", // Start pinning 80px from the top (matches mt-20)
              end: () =>
                `bottom+=${rightContent.offsetHeight - leftContent.offsetHeight} bottom`,
              pin: true, // Pin the sticky container
              pinSpacing: false, // Prevent extra spacing
              scrub: true, // Smooth pinning
            },
          });
        }
      });
    });

    // Cleanup function to kill all animations and ScrollTriggers
    return () => {
      ctx.revert(); // Reverts all GSAP animations, ScrollTriggers, and matchMedia
    };
  }, []);

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 min-h-screen max-w-7xl max-md:place-items-center mx-auto mt-20 gap-10">
      {/* Left - Sticky */}
      <div className="sticky-container">
        <div className="h-fit self-start max-md:self-center max-md:flex max-md:flex-col max-md:text-center max-md:justify-center max-md:items-center font-outfit space-y-5">
          <h3>Luxury Treatments</h3>
          <h2 className="font-cormorant text-5xl font-[600] w-3/4 max-md:w-full">
            Healing Hands, Lasting Benefits
          </h2>
          <p className="text-xl">
            Feel the difference with expert care that restores and revitalizes
          </p>
          <div className="flex flex-wrap max-md:justify-center">
            {SERVICES_CHIPS.map((item, i) => (
              <SpaChips text={item} key={i} />
            ))}
          </div>
        </div>
        <div className="mt-5 w-full flex">
          <Link href="/bookings">
            <button className="bg-app-yellow transform transition-all duration-300 hover:scale-105 w-[10rem] rounded-full px-4 py-2 font-medium hover:bg-app-yellow/90 text-black">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Right - Scrollable */}
      <div className="scrollable-content space-y-5 my-10 max-md:px-6 max-md:my-0 max-md:mb-4">
        {SERVICE.map((item, index) => (
          <SpaServiceCard
            key={index}
            image={item.image}
            service={item.service}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaLuxuryTreatments;