  "use client";
  import React, { useRef, useEffect } from "react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Poster from "./widgets/Poster";
  import StaticPoster from "./widgets/StaticPoster";
import PosterAnimation from "./widgets/PosterAnimation";

  gsap.registerPlugin(ScrollTrigger);

  const HomePosters = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);

    

    useEffect(() => {
      // Split text into characters for header animation
      const headers = headerRef.current.querySelectorAll("h2");
      headers.forEach((header) => {
        const text = header.textContent;
        header.innerHTML = text
          .split("")
          .map((char) => `<span class="char">${char}</span>`)
          .join("");
      });

      // Header animation: letter-by-letter fade-in with rotation and scale
      gsap.from(".headerAnimation3 .char", {
        opacity: 0,
        y: 30,
        rotation: 5,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".headerAnimation3",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.3,
        },
      });

      // Poster overlap animation
      // const posters = gsap.utils.toArray(".poster-wrapper");
      // posters.forEach((poster, index) => {
      //   // Pin each poster
      //   ScrollTrigger.create({
      //     trigger: poster,
      //     start: "top top", // Pin when the poster hits the top of the viewport
      //     end: index < posters.length - 1 ? "+=100%" : "bottom top", // Unpin when the next poster fully overlaps or for the last poster
      //     pin: true,
      //     pinSpacing: false,
      //     id: `pin-${index}`,
      //   });

      //   if (index > 0) {
      //     // Animate posters to slide up and overlap the previous one
      //     gsap.from(poster, {
      //       y: "100%", // Start below the viewport
      //       ease: "none",
      //       scrollTrigger: {
      //         trigger: poster,
      //         start: "top bottom", // Start when the poster hits the bottom of the viewport
      //         end: "top top", // End when the poster reaches the top
      //         scrub: true, // Smoothly animate with scroll
      //         id: `slide-${index}`,
      //       },
      //     });
      //   }

      //   // Set z-index to ensure correct stacking
      //   gsap.set(poster, { zIndex: index + 1 });
      // });

      // poster
     


      // Refresh ScrollTrigger to ensure proper calculations
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, []);

    return (
      <>
        {/* Header Section */}
         <div
          ref={headerRef}
          className="min-h-[15rem] bg-[#E8E6DA] headerAnimation3 pt-8 w-full center-column capitalize text-[5vw] leading-none"
        >
          <h2 className="font-bold">TG Residence by the Beach</h2>
          <h2 className="font-playfair mt-3 italic">Coming Soon to Limassol</h2>
        </div>

        <StaticPoster />

        {/* Poster Scroll Section */}
        <PosterAnimation/>
      </>
    );
  };

  export default HomePosters;
