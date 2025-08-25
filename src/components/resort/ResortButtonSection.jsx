import React from 'react'
import Marquee from 'react-fast-marquee';

const ResortButtonSection = () => {
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
          <Marquee speed={50} gradient={false}  >
            <div className="flex">
              {images.map((img, index) => (
                <div key={index} >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-[25rem] h-[20rem] max-md:w-[20rem] max-md:h-[15rem] object-cover"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </>
    );
}

export default ResortButtonSection