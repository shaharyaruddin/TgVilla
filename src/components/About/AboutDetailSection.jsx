import React from "react";

const AboutDetailSection = () => {
  const details = [
    "140-acres Estate - A vast retreat immersed in nature.",
    "Farm-to-Table Dining - Fresh ingredients from fields.",
    "Scenic Surroundings - Gardens, a bird sanctuary.",
    "Seamless Luxury - Open spaces blending nature.",
    "Exclusive Winery - Fine wines from Oasis Winery.",
    "Lakeside Serenity - Stunning views and tranquility.",
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:pr-8">
          <h2 className="text-3xl md:text-4xl max-w-96 text-[#6A3A1C] font-serif leading-tight mb-4">
            140 acres of pure bliss. With endless reasons to return to our
            lodge.
          </h2>
          <p className="text-[#6A3A1C] text-sm leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-[#6A3A1C] text-sm leading-relaxed">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>

        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
          {details.map((detail, index) => (
            <p
              key={index}
              className={`text-base py-3 border border-t text-[#6A3A1C] border-l-0 border-b-0 border-r-0 ${
                index !== details.length - 1 ? "mb-2" : ""
              }`}
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDetailSection;
