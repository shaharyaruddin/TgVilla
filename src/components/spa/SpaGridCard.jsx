const SpaGridCard = ({ subTitle, text, image, index }) => {
  return (
    <div
      className="bg-white rounded-2xl text-[#333333] p-4 flex flex-col justify-between min-h-[20rem]"
      data-aos="fade-up" 
      data-aos-delay={index * 200} 
      data-aos-duration="400" 
    >
      <h3 className="font-crimson-text">{subTitle}</h3>
      <div className="max-h-[13rem] mt-4 w-full">
        <img
          src={image}
          className="rounded-2xl h-full object-cover w-full"
          alt={text}
        />
      </div>
      <div className="min-h-[3.5rem] flex items-center">
        <p className="font-crimson-text text-gray-600 text-lg max-2xl:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SpaGridCard;