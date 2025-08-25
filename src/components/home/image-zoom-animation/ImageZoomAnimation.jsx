"use client"
import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ImageZoomAnimation = () => {
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    // New smooth header animation
    gsap.from(".headerAnimation2 h2", {
      y: 50, // Reduced initial offset for smoother start
      opacity: 0, // Fade in
      scale: 0.95, // Slight scale for subtle zoom effect
      duration: 1.2, // Slightly longer duration for smoothness
      stagger: 0.3, // Reduced stagger for faster sequence
      ease: "power3.out", // Smooth easing for natural flow
      scrollTrigger: {
        trigger: ".headerAnimation2",
        start: "top 80%", // Start earlier for better visibility
        end: "bottom 20%", // Extended end for smoother scrub
        scrub: 0.5, // Smoother scrub value
        // markers: true // Uncomment for debugging
      }
    });

    // Original header animation (commented out for reference)
    /*
    gsap.from(".headerAnimation2 h2", {
      y: 100, // Start 100px below
      opacity: 0, // Start invisible
      duration: 1, // Animation duration
      stagger: 2,
      ease: 'linear',
      scrollTrigger: {
        trigger: ".headerAnimation2",
        start: "top 20%",
        end: "bottom center",
        scrub: 1,
        // markers: true
      }
    });
    */

    // Existing image animation (unchanged)
    gsap.from('.imageInner', {
      maxWidth: '15rem',
      height: '80%',
      borderTopLeftRadius: '10rem',
      borderTopRightRadius: '10rem',
      duration: 2,
      scrollTrigger: {
        trigger: '.imageAnimationContainer',
        start: '-20% top',
        end: 'center center',
        scrub: 2,
        // markers: true
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-[15rem] bg-[#E8E4D9] headerAnimation2  w-full center-column capitalize text-[6vw] pt-35 max-md:pt-10 leading-none">
        <h2 className='font-bold'>there is no place like</h2>
        <h2 className='font-playfair mt-3 italic'>TG LUXURY VILLA</h2>
      </div>

      <div className='bg-[#E8E4D9] h-screen center imageAnimationContainer relative'>
        <div className="imageInner max-w-screen w-full overflow-hidden h-full absolute bottom-0 rounded-tl-none rounded-tr-none">
          <img src="/assets/images/posters/poster-1.jpg" className='w-full h-full object-cover' alt="tg villa image" />
        </div>
      </div>
    </>
  );
};

export default ImageZoomAnimation;