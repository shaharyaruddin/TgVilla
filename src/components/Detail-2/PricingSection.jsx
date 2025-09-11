import Image from "next/image";
import VillaDetailCard from "./VillaDetailCard";

export default function PricingSection() {
const villaDetail = [
    {
      rateType: "standard",
      baseNeight: 1,
      maxGuest: 6,
      basePrice: 750,
      breakfastInfo: "Continental, Italian, Vegetarian",
      images: ["/assets/images/bedroomvilla-3/bedroom6.webp", "/assets/images/resort/section2/image-2.webp"],
      villasWith: [
        "Sea View",
        "Private Garden",
        "Free Wi-Fi",
        "BBQ Facilities",
        "Luxury SPA & Wellness Center",
        "Daily Breakfast Included",
        "2 Hours of Private Jacuzzi Use per Day",
        "2 Hours of Private Sauna Use per Day",
      ],
      additionalServices: [
        "breakfast (€10)",
        "Scooters Electric X2 (€30)",
        "Daily Laundry, Linen & Amenities Refresh (€30)",
        "Trips & Tours & Jet Ski (€300)",
        "Jaccuzi use 2hr extra (€30)",
      ],
    },
    {
      rateType: "Standard (Non-Refundable) Rate",
      baseNeight: 1,
      maxGuest: 6,
      basePrice: 750,
      images: ["/assets/images/bedroomVilla/bedroom29.jpg", "/assets/images/bedroomvilla-3/bedroom13.jpg"],
      breakfastInfo: "Continental, Italian, Vegetarian",
      villasWith: [
        "Sea View",
        "Private Garden",
        "Free Wi-Fi",
        "BBQ Facilities",
        "Luxury SPA & Wellness Center",
        "Daily Breakfast Included",
        "2 Hours of Private Jacuzzi Use per Day",
        "2 Hours of Private Sauna Use per Day",
      ],
      additionalServices: [
        "breakfast (€10)",
        "Scooters Electric X2 (€30)",
        "Daily Laundry, Linen & Amenities Refresh (€30)",
        "Trips & Tours & Jet Ski (€300)",
        "Jaccuzi use 2hr extra (€30)",
      ],
    },
  ];
  return (
    <div className="max-w-full lg:max-w-[90%] mx-auto p-0 lg:p-6">
      <div className="grid md:grid-cols-2 gap-8 md:px-0 px-3">
             {villaDetail.map((detail,key) => {
          return <VillaDetailCard key={key} detail={detail} />;
        })}

      </div>
    </div>
  );
}
