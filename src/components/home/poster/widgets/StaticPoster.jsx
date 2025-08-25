import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StaticPosterCard from "./StaticPosterCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const STATIC_DATA = [
  {
    id: 2,
    image: "/assets/images/posters/poster-5.jpg",
    title: "a new chapter in seaside luxury living",
    description: `
TG Luxury Stay is proud to introduce its next evolution in hospitality: TG Residence by the Beach – an exclusive new beachfront apartment concept in the heart of Germasogeia Tourist Area, Limassol.`,
  },
];
const StaticPoster = () => {
  useGSAP(() => {
    gsap.to(".staticPosterContainer .layerImage", {
      scale: 9,
      scrollTrigger: {
        trigger: ".staticPosterContainer",
        start: "top top",
        end: "bottom -20%",
        scrub: 1.2,
        pin: true,
      },
    });
    gsap.from(".staticPosterContainer .poster1", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".staticPosterContainer",
        start: "top top",
        end: "bottom -20%",
        scrub: 1.2,
      },
    });
  }, []);

  return (
    <div class="relative   staticPosterContainer overflow-hidden">
      <div className="z-10 h-screen w-full layerImage absolute left-0 top-0 ">
        <img
          src="/assets/images/posters/poster-layer.png"
          className="w-full posterImage h-full "
          alt="poster layer"
        />
      </div>
      {/* LAYER */}
      <StaticPosterCard
        key={STATIC_DATA[0].id}
        className="poster1"
        imageClassName="staticPosterImage"
        imgSrc={STATIC_DATA[0].image}
        title={STATIC_DATA[0].title}
        description={STATIC_DATA[0].description}
      />
    </div>
  );
};

export default StaticPoster;
