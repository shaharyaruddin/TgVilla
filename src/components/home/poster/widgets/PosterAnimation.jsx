"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import Poster from "./Poster";

const PosterAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const CONTENT = [
    {
      id: 2,
      src: "/assets/images/posters/poster-4.jpg",
      title: "a new chapter in seaside luxury living",
      description: `
        TG Luxury Stay is proud to introduce its next evolution in hospitality: 
        TG Residence by the Beach – an exclusive new beachfront apartment concept 
        in the heart of Germasogeia Tourist Area, Limassol.`,
    },
    {
      id: 3,
      src: "/assets/images/posters/poster-2.jpg",
      title: "a new chapter in seaside luxury living",
      description: `
        TG Luxury Stay is proud to introduce its next evolution in hospitality: 
        TG Residence by the Beach – an exclusive new beachfront apartment concept 
        in the heart of Germasogeia Tourist Area, Limassol.`,
    },
    {
      id: 4,
      src: "/assets/images/posters/poster-6.jpg",
      title: "a new chapter in seaside luxury living",
      description: `
        TG Luxury Stay is proud to introduce its next evolution in hospitality: 
        TG Residence by the Beach – an exclusive new beachfront apartment concept 
        in the heart of Germasogeia Tourist Area, Limassol.`,
    },
    {
      id: 5,
      src: "/assets/videos/experience-harmony.mov",
      title:
        "Stop everything,\nto experience harmony.\nAllow yourself to feel.",
      description: "",
    },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".section-wrapper", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".combinedAnimation",
        start: "top top",
        end: `+=${(CONTENT.length - 1) * 100}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    Array.from({ length: CONTENT.length }).forEach((_, index) => {
      if (index < CONTENT.length - 1) {
        tl.to(
          `.section-wrapper-${index + 1}`,
          {
            yPercent: -100,
            duration: 1,
            ease: "none",
          },
          index
        );
      }
    });

    gsap.fromTo(
      ".section-wrapper-1 .video-container",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-wrapper-1",
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-screen relative combinedAnimation overflow-hidden">
      {CONTENT.map((item, i) => (
        <div
          key={item.id}
          className={`section-wrapper section-wrapper-${
            i + 1
          } h-screen w-full absolute top-0 left-0`}
        >
          {item.src.endsWith(".jpg") ? (
            <Poster
              imgSrc={item.src}
              title={item.title}
              description={item.description}
            />
          ) : (
            <div className="relative w-full h-screen video-container">
              {/* Overlay */}
              <div className="hidden md:block absolute inset-0 bg-black/30 z-10" />

              {/* Video Background */}
              {/* <video
                src={item.src}
                playsInline
                className="w-full h-screen object-cover"
                {...(isMobile
                  ? { controls: true, preload: "none" } // Stop auto preload + only controls
                  : { autoPlay: true, loop: true, muted: true })}
              /> */}

                    <video
        loop
        muted
        playsInline
        autoPlay
        // {...(isMobile
        //   ? { controls: true }
        //   : { autoPlay: true })}
                className="bg-black/30 w-full h-screen object-cover"
      >
        <source src={item.src} type="video/mp4" />
      </video>

              {/* Centered Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white space-y-3 max-md:space-y-1">
                <h2
                  className={`font-playfair ${
                    item.id === 1
                      ? "text-6xl max-md:text-2xl text-nowrap"
                      : "text-5xl max-md:text-2xl max-w-xl leading-tight"
                  } whitespace-pre-line`}
                >
                  {item.title}
                </h2>
                {item.description && (
                  <p className="max-md:text-sm">{item.description}</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PosterAnimation;
