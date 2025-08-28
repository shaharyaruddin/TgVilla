import React from "react";

const BannerContent = ({ content }) => {
  return (
    <div className="center h-full pt-[30%] md:pt-[10%]">
      <div className="flex items-center flex-col uppercase">
        <h1 className="font-crimson-text md:w-[50%] min-[1200px]:w-full leading-[6vw] text-white text-[5vw] md:text-[6vw] max-lg:mb-5 headingAnimation1 opacity-0">
          Slice of Paradise
        </h1>
        <h1 className="font-crimson-text leading-[0vw] md:leading-[8vw] lg:leading-[11vw] opacityAnimation opacity-0 text-[#EAE0D5] text-[9vw] lg:text-[8vw]">
          {"in Cyprus"}
        </h1>
        <p className="text-white max-w-[50vw] max-sm:max-w-[90vw]  font-crimson-text text-sm lg:text-[1.2vw] px-2 lg:px-0 max-lg:mt-5 text-center opacityAnimation opacity-0">
          {content?.description ? (
            content.description.split("<br/>").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < content.description.split("<br/>").length - 1 && (
                  <br className="lg:hidden" />
                )}
              </React.Fragment>
            ))
          ) : (
            <>
              Your Private 5-Star resort experience designed for tranquility & indulgence
            </>
          )}
        </p>
        <button className="mt-5 md:hidden opacityAnimation opacity-0 bg-app-yellow rounded-xl px-6 py-3 max-md:px-3 max-md:py-2 max-md:text-sm font-medium hover:bg-app-yellow/90 text-black text-base w-fit">
          {content?.buttonText || "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default BannerContent;