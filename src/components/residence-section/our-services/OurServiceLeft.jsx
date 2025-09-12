"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const OurServiceLeft = () => {

 
   // GSAP animations
   useGSAP(() => {
     gsap.registerPlugin(ScrollTrigger);
 
     // Existing animations for background
     gsap.from(".homeServiceBgImage", {
       scaleY: 0.15,
       transformOrigin: "bottom",
       scrollTrigger: {
         trigger: ".homeService",
         start: "top top",
         end: "bottom center",
         scrub: 1.5,
       },
     });
 
     // Existing animation for image container
     gsap.from(".homeServiceImageContainer", {
       scaleY: 0.15,
       transformOrigin: "bottom",
       scrollTrigger: {
         trigger: ".homeService",
         start: "top 75%",
         end: "center center",
         scrub: 1.5,
       },
     });
 
     // Yoyo zoom animation for the image
     gsap.to(".homeServiceImage", {
       scale: 1.1, // Zoom in slightly
       duration: 2,
       repeat: -1, // Infinite repeat
       yoyo: true, // Zoom in and out
       ease: "power1.inOut", // Smooth easing
     });
 
   
   }, []); 
 
   

 
   return (
     <div className="w-full h-full p-10 px-16 relative max-[51.25em]:min-h-[20rem]! max-[51.25em]:p-0!">
       {/* Background */}
       <div className="bg-[#C8B29C] homeServiceBgImage absolute w-[85%] h-[90%] -translate-y-1/2 right-19 max-lg:right-5 max-[51.25em]:hidden rounded-[3rem] top-[55%] max-[51.25em]:-translate-y-0 max-[-51.25em]:static!"></div>
       {/* Image Container */}
       <div
         className="homeServiceImageContainer absolute w-[85%] h-[90%] max-[51.25em]:h-full! max-[51.25em]:w-full! rounded-[3rem] max-lg:rounded-none  overflow-hidden"
    
       >
         <img
                    src="/assets/residence/8.jpg"
           alt="welcome-image"
           className="homeServiceImage w-full h-full object-cover"
         />
       </div>
 
  
     </div>
   );
}

export default OurServiceLeft