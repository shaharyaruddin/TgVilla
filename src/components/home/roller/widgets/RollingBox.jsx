import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FirstSide from './FirstSide';
import SecondSide from './SecondSide';
import ThirdSide from './ThirdSide';
import FourthSide from './FourthSide';

const RollingBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
 
    mm.add("(min-width: 768px)",() => {
        gsap.to(boxRef.current, {
          rotationX: 270,
          duration: 22,
          scrollTrigger: {
            trigger: '.stick',
            start: 'top 20%',
            end: 'bottom 20%',
            scrub: true,
    
          },
        });
     
        
      });
    mm.add("(max-width: 768px)", () => {
        gsap.to(boxRef.current, {
          rotationX: 270,
          duration: 22,
          scrollTrigger: {
            trigger: '.stick',
            start: 'top top',
            end: 'bottom center',
            scrub: true,
 
          },
        });
      },);

    return () => mm.revert(); // cleanup
  }, []);

  return (
    <div className="bg-[#E8E4D9] rolling-box-center absolute top-[200%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full perspective-[1000px] ">
      <div
        ref={boxRef}
        className="transform-3d relative w-[60rem] max-[1131px]:w-[50rem] max-[950px]:w-[85%] h-60 max-md:h-[30rem] max-md:w-[50%] rotateBox max-sm:h-[54vh] max-sm:w-[70dvw] b"
      >
        <FirstSide />
        <SecondSide />
        <ThirdSide />
        <FourthSide />
      </div>
    </div>
  );
};

export default RollingBox;
