"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Poster from "./Poster";

const PosterAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const CONTENT = [
    {
      id: 2,
      src: "/assets/images/posters/poster-6.jpg",
      title: "a new chapter in seaside luxury living",
      description: `TG Luxury Stay is proud to introduce its next evolution in hospitality: 
        TG Residence by the Beach – an exclusive new beachfront apartment concept 
        in the heart of Germasogeia Tourist Area, Limassol.`,
    },
    {
      id: 3,
      src: "/assets/images/beach/newbeach4.jpg",
      title: "a new chapter in seaside luxury living",
      description: `TG Luxury Stay is proud to introduce its next evolution in hospitality: 
        TG Residence by the Beach – an exclusive new beachfront apartment concept 
        in the heart of Germasogeia Tourist Area, Limassol.`,
    },
    {
      id: 4,
      src: "/assets/images/beach/newbeach1.jpg",

      title: "a new chapter in seaside luxury living",
      description: `TG Luxury Stay is proud to introduce its next evolution in hospitality: 
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

  // handle mobile state
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // register plugin once
    if (!gsap.core.globals().ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // safety: ensure sectionsRef is filled
      const sections = sectionsRef.current.filter(Boolean);

      // set stacking with zIndex so first has highest z
      sections.forEach((el, i) => {
        // highest z for first section
        gsap.set(el, { zIndex: sections.length - i });
      });

      // compute end in pixels: container height * (n-1)
      const container = containerRef.current;
      if (!container) return;

      const sectionHeight = container.offsetHeight; // equals viewport height (h-screen)
      const totalScroll = sectionHeight * (CONTENT.length - 1);

      // timeline mapped to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // important for responsive / production
        },
      });

      // for each section except last, animate it up by 100%
      sections.forEach((el, index) => {
        if (index < sections.length - 1) {
          // animate the current wrapper up (yPercent -100) so next one shows
          tl.to(
            el,
            {
              yPercent: -100,
              duration: 1, // timeline drives it relative to scroll
              ease: "none",
              force3D: true,
            },
            index // position the tween
          );
        }
      });

      // fade in video container inside first section if present
      const firstVideo = container.querySelector(
        ".section-wrapper-1 .video-container"
      );
      if (firstVideo) {
        gsap.fromTo(
          firstVideo,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: sections[0],
              start: "top 80%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }

      // refresh on load/resize to avoid measurement glitches
      const onLoad = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("load", onLoad);
      window.addEventListener("resize", onLoad);

      // extra safety: refresh after fonts/images settle
      const rafRefresh = () => {
        requestAnimationFrame(() => ScrollTrigger.refresh());
      };
      setTimeout(rafRefresh, 500);
      setTimeout(rafRefresh, 1200);

      // cleanup handlers when context is reverted
      return () => {
        window.removeEventListener("load", onLoad);
        window.removeEventListener("resize", onLoad);
      };
    }, containerRef); // scope to container

    // cleanup
    return () => {
      try {
        ctx.revert();
      } catch (e) {
        // ignore
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CONTENT.length]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative combinedAnimation overflow-hidden"
    >
      {CONTENT.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => (sectionsRef.current[i] = el)}
          className={`section-wrapper section-wrapper-${
            i + 1
          } h-screen w-full absolute top-0 left-0`}
          style={{ willChange: "transform, opacity" }}
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
              <div className="absolute inset-0 bg-black/30 z-10" />

              {/* Video Background */}
              <video
                loop
                muted
                playsInline
                // autoplay handled; keep muted to allow autoplay in most browsers
                autoPlay
                className="bg-black/30 w-full h-screen object-cover"
                // don't set preload="auto" so production doesn't force heavy preloads
                preload={isMobile ? "metadata" : "auto"}
              >
                <source src={item.src} />
                {/* fallback */}
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
