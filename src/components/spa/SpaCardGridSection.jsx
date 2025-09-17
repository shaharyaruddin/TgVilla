"use client"
import { useEffect } from 'react';
import SpaGridCard from './SpaGridCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const SpaCardGridSection = () => {
  const Card = [
    {
      subTitle: 'water sea',
      text: `50 meters from water sea`,
      image: `/assets/images/beach/2.jpg`,
    },
    {
      subTitle: 'location',
      text: `Ithakis 10, Agios Tychonas, 4521 Limassol, Cyprus`,
      image: `/assets/resort2/7.jpg`,
    },
    {
      subTitle: '5 star luxury',
      text: `5 star luxury high quality`,
      image: `/assets/resort2/16.webp`,
    },
    {
      subTitle: '5 star service',
      text: `Our services are rated 5/5 stars`,
      image: `/images/amenities/private.avif`,
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 300, // Animation duration in milliseconds
        easing: 'ease-out', // Smooth easing for slide-up
        once: false, // Animation plays only once
        anchorPlacement: 'top-bottom', // Trigger when top of card hits bottom of viewport
      });
    }

    // Cleanup function to destroy AOS on unmount
    return () => {
      if (typeof window !== 'undefined') {
        AOS.destroy(); // Removes AOS event listeners
      }
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-3 my-10 max-2xl:px-5">
      {Card.map((item, index) => (
        <SpaGridCard
          key={index} // Required for React list rendering
          subTitle={item.subTitle}
          text={item.text}
          image={item.image}
          index={index} // Pass index for staggered delay
        />
      ))}
    </div>
  );
};

export default SpaCardGridSection;