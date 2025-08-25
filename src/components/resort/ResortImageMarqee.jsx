import React from 'react'
import Marquee from "react-fast-marquee";
const ResortImageMarqee = ({direction}) => {
    const images = [
      { src: "/assets/images/beach/2.jpg", alt: "Pool Area" },
      { src: "/assets/images/beach/6.jpg", alt: "Bedroom" },
      { src: "/assets/images/beach/7.jpg", alt: "Outdoor Seating" },
      { src: "/assets/images/beach/9.jpg", alt: "Outdoor Seating" },
      { src: "/assets/images/beach/10.jpg", alt: "Outdoor Seating" },
      { src: "/assets/images/beach/2.jpg", alt: "Pool Area" },
      { src: "/assets/images/beach/6.jpg", alt: "Bedroom" },
      { src: "/assets/images/beach/7.jpg", alt: "Outdoor Seating" },
      { src: "/assets/images/beach/9.jpg", alt: "Outdoor Seating" },
      { src: "/assets/images/beach/10.jpg", alt: "Outdoor Seating" },
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