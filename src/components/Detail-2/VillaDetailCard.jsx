"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useBook } from "@/contexts/book-context";
import { useRouter } from "next/navigation";
import { differenceInDays, addDays, startOfDay } from "date-fns";

const VillaDetailCard = ({ option, villa,villaNumber }) => {
  const { setBookData } = useBook();
  const router = useRouter();

  const [additionalServices, setAdditionalServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Villa prop in VillaDetailCard:", villa); // Debug villa prop
    setAdditionalServices(villa.services || []);
  }, [villa]);

  const handleCheckboxChange = ({ name, checked }) => {
    setAdditionalServices((prevState) =>
      prevState.map((service) =>
        service.name === name ? { ...service, selected: checked } : service
      )
    );
  };

  const handleReserve = async () => {
    setLoading(true);
    try {
      const selectedServices = additionalServices.filter((s) => s.selected);

      const totalServicePrice = additionalServices
        .filter((service) => service.selected)
        .reduce((acc, service) => {
          const servicePrice = service.each
            ? service.price * option.totalNights * option.guests
            : service.price * option.totalNights;
          return acc + servicePrice;
        }, 0);

      const totalPrice = parseFloat(option.totalNightsPrice || 0) + totalServicePrice;

      // Handle and validate dates with fallback
      let startDate = villa.startDate ? new Date(villa.startDate) : null;
      let endDate = villa.endDate ? new Date(villa.endDate) : null;

      // Debug the raw and parsed dates
      console.log("Raw startDate:", villa.startDate, "Parsed startDate:", startDate);
      console.log("Raw endDate:", villa.endDate, "Parsed endDate:", endDate);

      // Fallback to a default date range if dates are missing or invalid
      if (!startDate || isNaN(startDate.getTime()) || !endDate || isNaN(endDate.getTime())) {
        console.warn("Falling back to default dates due to invalid or missing dates");
        startDate = startOfDay(new Date()); // Today's date as fallback
        endDate = addDays(startDate, option.totalNights || 1); // Add totalNights days
      }

      const totalNights = differenceInDays(endDate, startDate);

      if (totalNights <= 0) {
        console.error("Invalid date range: totalNights must be positive", { startDate, endDate });
        throw new Error("Invalid date range selected");
      }

      // Match BestMatchCard's bookData structure
      const bookData = {
        startDate,
        endDate,
        totalNights,
        guests: option.guests || villa.guests || 2,
        rateType: option.rateType || villa.rateType || "Non-Refundable",
        totalNightsPrice: parseFloat(option.totalNightsPrice || 0),
        villaId: villa._id,
        villaName: villa.name,
        villaNumber: villaNumber,
        additionalServices: selectedServices,
        totalPrice: totalPrice.toFixed(2),
      };

      console.log("bookData from VillaDetailCard:", bookData); // Debug log
      setBookData(bookData);
      router.push("/checkout"); // Explicitly navigate to checkout
    } catch (error) {
      console.error("Error in handleReserve:", error);
      // Optionally show a user-friendly message
      // toast.error("Failed to reserve. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-3 relative bg-gray-50 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Text Content */}
        <div className="flex-1 p-4">
          {/* Standard Rate */}
          <div className="flex items-center w-fit rounded-full border border-black overflow-hidden mb-5">
            <div className="px-4 py-2 text-sm font-medium text-black bg-white capitalize">
              {option.rateType} Rate
            </div>
            <div className="px-4 py-2 font-medium text-white rounded-l-2xl bg-[#2a1b14]">
              €{option.totalNightsPrice}
            </div>
          </div>

          <div className="flex gap-6 text-sm text-gray-600 mb-2">
            <div className="flex items-center">
              <img
                src="/assets/detail-2/moon.avif"
                alt="moon"
                className="w-5 h-5"
              />
              <div className="text-xs font-semibold">
                {option.totalNights} Nights
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="/assets/detail-2/guest.avif"
                alt="guest"
                className="w-5 h-5"
              />
              <div className="text-xs font-semibold">
                {option.guests} Guests
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="/assets/detail-2/dollar.avif"
                alt="price"
                className="w-5 h-5"
              />
              <div className="text-xs font-semibold">€{option.totalNightsPrice}</div>
            </div>
          </div>

          {/* Breakfast Info */}
          <div className="mb-2">
            <h3 className="text-lg font-medium">Breakfast Info</h3>
            <p className="text-xs text-gray-600">Continental, Italian, Vegetarian</p>
          </div>

          {/* Villas with */}
          <div className="mb-2">
            <h3 className="text-lg font-medium">Villas with:</h3>
            <ul className="list-disc text-xs list-inside text-gray-600">
              {[
                "Sea View",
                "Private Garden",
                "Free Wi-Fi",
                "BBQ Facilities",
                "Luxury SPA & Wellness Center",
                "Daily Breakfast Included",
                "2 Hours of Private Jacuzzi Use per Day",
                "2 Hours of Private Sauna Use per Day",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Additional Services:</h3>
            <div className="space-y-1">
              {additionalServices.map((service) => (
                <div key={service.name} className="flex items-center gap-2">
                  <Checkbox
                    id={service.name}
                    name={service.name}
                    className="text-cyan-400"
                    checked={service.selected || false}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange({ name: service.name, checked })
                    }
                  />
                  <Label className="text-sm capitalize font-light">
                    {service.name} (€{service.price})
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Reserve Button */}
          <Button
            onClick={handleReserve}
            disabled={loading}
            className="w-40 bg-[#D4A017] text-white py-3 rounded-md hover:bg-[#c99d2e] transition-colors"
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : "Reserve"}
          </Button>
        </div>

        {/* Right Images */}
        <div className="hidden lg:block relative">
          {/* Bottom aligned cylinder */}
          <div className="absolute bottom-0 right-10 w-48 h-[360px]">
            <div className="w-32 h-[360px] overflow-hidden rounded-t-full">
              <Image
                src="/assets/images/bedroomvilla-3/bedroom6.webp"
                alt="Villa Upright"
                width={192}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Top aligned cylinder */}
          <div className="absolute top-0 -right-14 w-48 h-[360px]">
            <div className="w-32 h-[360px] overflow-hidden rounded-b-full">
              <Image
                src="/assets/images/resort/section2/image-2.webp"
                alt="Villa Inverted"
                width={192}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaDetailCard;