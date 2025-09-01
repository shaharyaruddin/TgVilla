import React from 'react'
import Marquee from "react-fast-marquee";
const ResortImageMarqee = ({direction}) => {
    const images = [
      { src: "/assets/resort2/10.webp", alt: "Pool Area1" },
      { src: "/assets/resort2/11.webp", alt: "Pool Area2" },
      { src: "/assets/resort2/12.webp", alt: "Pool Area3" },
      { src: "/assets/resort2/13.webp", alt: "Pool Area 4" },
      { src: "/assets/resort2/14.webp", alt: "Pool Area 5" },
      { src: "/assets/resort2/15.webp", alt: "Pool Area 6" },
      { src: "/assets/resort2/16.webp", alt: "Pool Area 7" },
      { src: "/assets/resort2/17.jpg", alt: "Pool Area 8" },
      { src: "/assets/resort2/18.jpg", alt: "Pool Area 9" },

   
    ];
  
    return (
      <>
        <div className="w-full  flex flex-col items-center justify-center ">
  
          {/* Scrolling Images */}
          <Marquee speed={50} gradient={false}  direction={direction ? direction : "left"}>
            <div className="flex">
              {images.map((img, index) => (
                <div key={index} className='mx-1.5'>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-[25rem] h-56 object-cover"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </>
    );
}

export default ResortImageMarqee