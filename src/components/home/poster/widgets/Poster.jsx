import clsx from "clsx";
import React from "react";

const Poster = ({
  imgSrc,
  title,
  description,
  className = "",
  imageClassName = "",
}) => {
  return (
    <div
      className={clsx(
        "poster h-screen w-full relative overflow-hidden",
        className
      )}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      {/* Background Image */}
      <img
        src={imgSrc}
        className={clsx("w-full h-full object-cover", imageClassName)}
        alt={title}
      />
      {/* Text Content */}
      <div className="absolute bottom-10 left-10 text-white capitalize space-y-3 z-20">
        <h2 className="font-playfair text-4xl">{title}</h2>
        <p className="w-[80%]">{description}</p>
      </div>
    </div>
  );
};

export default Poster;
