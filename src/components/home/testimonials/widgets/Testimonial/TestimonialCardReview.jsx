import clsx from "clsx";
import React from "react";

const TestimonialCardReview = ({
  className,
  companyName,
  reviewerName,
  location,
  countryCode,
  reviewText,
  logoUrl, // Optional prop for company logo
}) => {
  // Capitalize company name
  const formattedCompanyName =
    companyName?.charAt(0).toUpperCase() + companyName?.slice(1);

  // Split by dot (.)
  const [mainName, domain] = formattedCompanyName?.split(".") || [];

  return (
    <div
      className={clsx(
        "w-[25rem] min-h-[10rem] rounded-2xl border border-gray-200 p-5 bg-white shadow-sm",
        className
      )}
    >
      <div className="flex justify-between items-center">
        {/* Reviewer Info */}
        <div className="flex mt-4 items-center">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-2xl uppercase">
            <h2>{reviewerName?.charAt(0) || "S"}</h2>
          </div>
          <div className="flex flex-col ml-3">
            <h3 className="font-medium text-gray-900">
              {reviewerName || "Sagi"}
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              {/* Country Flag Image */}
              <img
                src={"/assets/flags/israel.png"}
                alt={countryCode}
                className="w-3 h-3 object-cover rounded-sm"
              />
              {location || "Israel"}
            </p>
          </div>
        </div>

        {/* Company Name */}
        <div className="flex">
         <img
         src="/assets/icon/airbrn-logo.png"
         alt=""
         className="w-16 h-16 object-contain"
         />
        </div>
      </div>

      {/* Review Text */}
      <div className="mt-4 text-sm">
        "
        {reviewText ||
          "We had a fantastic stay at the villa! It's beautifully equipped with everything you could possibly need for a comfortable and relaxing vacation. The space was spotless, well-maintained, and felt like ..."}
        "
      </div>
    </div>
  );
};

export default TestimonialCardReview;
