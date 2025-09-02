'use client';
import React, { useEffect } from 'react';
import SpaChips from './SpaChips';
import SpaServiceCard from './SpaServiceCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SpaLuxuryTreatments = () => {
  const SERVICES_CHIPS = [
    'Luxury Spa',
    'Wellness Retreat',
    'Mind Body Soul',
    'Relaxation Time',
    'Spa Day',
    'Holistic Healing',
    'Pamper Yourself',
    'Luxury Lifestyle',
    'Luxury Facial',
    'Glowing Skin',
    'Hydrating Facial',
    'Anti Aging Treatment',
  ];

  const SERVICE = [
    {
      image: '/images/spa/service/luxuryfacials.avif',
      service: `Luxury Facials`,
      desc: `Hydrating, anti-aging, and brightening facials for radiant skin.`,
    },
    {
      image: '/images/spa/service/aromatherapy-rituals.avif',
      service: `Aromatherapy Rituals`,
      desc: `Hydrating, anti-aging, and brightening facials for radiant skin.`,
    },
    {
      image: '/images/spa/service/deeptissuemassage.avif',
      service: `Deeptissue massage`,
      desc: `Hydrating, anti-aging, and brightening facials for radiant skin.`,
    },
    {
      image: '/images/spa/service/full-body-detox-wrap.avif',
      service: `Full Body Detox Wrap`,
      desc: `Hydrating, anti-aging, and brightening facials for radiant skin.`,
    },
    {
      image: '/images/spa/service/hot-stone-therapy.avif',
      service: `Hot Stone therapy`,
      desc: `Hydrating, anti-aging, and brightening facials for radiant skin.`,
    },
    {
      image: '/images/spa/service/spa-manicure-pedicure.avif',
      service: `Spa Manicure Pedicure`,
      desc: `Hydrating, anti-aging, and brightening facials for radiant skin.`,
    },
  ];

  useEffect(() => {
    // Use GSAP matchMedia to apply ScrollTrigger only for screens >= 768px (Tailwind 'md')
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const leftContent = document.querySelector('.sticky-container');
      const rightContent = document.querySelector('.scrollable-content');

      if (leftContent && rightContent) {
        gsap.to('.sticky-container', {
          scrollTrigger: {
            trigger: '.sticky-container',
            start: 'top top+=80', // Start pinning 80px from the top (matches mt-20)
            end: () =>
              `bottom+=${rightContent.offsetHeight - leftContent.offsetHeight} bottom`,
            pin: true, // Pin the sticky container
            pinSpacing: false, // Prevent extra spacing
            scrub: true, // Smooth pinning
          },
        });
      }
    });

    // Cleanup ScrollTrigger and matchMedia on component unmount
    return () => {
      mm.revert(); // Reverts matchMedia changes
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 min-h-screen max-w-7xl max-md:place-items-center mx-auto mt-20 gap-10">
      {/* Left - Sticky */}
      <div className="sticky-container">
        <div className="h-fit self-start max-md:self-center max-md:flex max-md:flex-col max-md:text-center max-md:justify-center max-md:items-center font-outfit space-y-5">
          <h3>Luxury Treatments</h3>
          <h2 className="font-cormorant text-5xl font-[600] w-3/4 max-md:w-full">
            Healing Hands, Lasting Benefits
          </h2>
          <p className="text-xl">
            Feel the difference with expert care that restores and revitalizes
          </p>
          <div className="flex flex-wrap max-md:justify-center">
            {SERVICES_CHIPS.map((item, i) => (
              <SpaChips text={item} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Right - Scrollable */}
      <div className="scrollable-content space-y-5 my-10 max-md:my-0 max-md:mb-4">
        {SERVICE.map((item, index) => (
          <SpaServiceCard
            key={index}
            image={item.image}
            service={item.service}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaLuxuryTreatments;