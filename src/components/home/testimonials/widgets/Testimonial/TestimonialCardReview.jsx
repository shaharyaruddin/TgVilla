import clsx from "clsx";
import React, { useMemo } from "react";

const TestimonialCardReview = ({
  className,
  companyName,
  reviewerName,
  location,
  countryCode,
  reviewText,
  logoUrl,
}) => {
  // Company logos
  const companyLogos = {
    "airbnb.com": "/assets/icon/airbrn-logo.png",
    "booking.com": "/assets/icon/booking-logo.png",
  };

  // Pick logo
  const selectedLogo =
    companyLogos[companyName?.toLowerCase()] || logoUrl || "/assets/icon/default-logo.png";

  // Avatar background colors
  const avatarColors = ["bg-black", "bg-orange-500", "bg-blue-500", "bg-green-600", "bg-purple-600"];

  // Pick a random color (stable per render using useMemo)
  const avatarColor = useMemo(
    () => avatarColors[Math.floor(Math.random() * avatarColors.length)],
    []
  );

  return (
    <div
      className={clsx(
        "w-[25rem] min-h-[10rem] rounded-2xl border border-gray-200 px-3 py-2 bg-white shadow-sm",
        className
      )}
    >
      <div className="flex justify-between items-center">
        {/* Reviewer Info */}
        <div className="flex items-center">
          <div
            className={clsx(
              "w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl uppercase",
              avatarColor
            )}
          >
            <h2>{reviewerName?.charAt(0) || "S"}</h2>
          </div>
          <div className="flex flex-col ml-3">
            <h3 className="font-medium text-gray-900">{reviewerName || "Sagi"}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <img
                src={`/assets/flags/${countryCode || "israel"}.png`}
                alt={countryCode}
                className="w-3 h-3 object-cover rounded-sm"
              />
              {location || "Israel"}
            </p>
          </div>
        </div>

        {/* Company Logo */}
        <div className="flex">
          <img src={selectedLogo} alt={companyName} className="w-20 h-20 object-contain" />
        </div>
      </div>

      {/* Review Text */}
      <div className="mt-4 text-sm">
        "{reviewText ||
          "We had a fantastic stay at the villa! It's beautifully equipped with everything you could possibly need for a comfortable and relaxing vacation. The space was spotless, well-maintained, and felt like ..."}"
      </div>
    </div>
  );
};

export default TestimonialCardReview;
