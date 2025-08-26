import React from 'react'
import Marquee from "react-fast-marquee";
const ResortImageMarqee = ({direction}) => {
    const images = [
      { src: "/assets/resort2/1.jpg", alt: "Pool Area" },
      { src: "/assets/resort2/2.jpg", alt: "Pool Area" },
      { src: "/assets/resort2/3.jpg", alt: "Pool Area" },
      { src: "/assets/resort2/4.jpeg", alt: "Pool Area" },
      { src: "/assets/resort2/5.jpg", alt: "Pool Area" },
      { src: "/assets/resort2/6.jpg", alt: "Pool Area" },
      { src: "/assets/resort2/7.jpg", alt: "Pool Area" },
      { src: "/assets/resort2/8.jpg", alt: "Pool Area" },
      { src: "/assets/resort2/9.jpg", alt: "Pool Area" },

   
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