import Image from "next/image";

export default function PricingSection() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Text Content */}
        <div className="flex-1">
          {/* Standard Rate */}
          <div className="flex w-fit rounded-full border border-black overflow-hidden mb-4">
            <div className="px-4 py-2 font-medium text-black bg-white">
              Standard Rate
            </div>
            <div className="px-4 py-2 font-medium text-white rounded-l-2xl bg-[#2a1b14]">
              €750
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>🌙 1 Nights</span>
            <span>👥 2 Guests</span>
            <span>💶 €750</span>
          </div>
          {/* Breakfast Info */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Breakfast Info</h3>
            <p className="text-gray-600">Continental, Italian, Vegetarian</p>
          </div>
          {/* Villas with */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Villas with:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Sea View</li>
              <li>Private Garden</li>
              <li>Free Wi-Fi</li>
              <li>BBQ Facilities</li>
              <li>Luxury SPA & Wellness Center</li>
              <li>Daily Breakfast Included</li>
              <li>2 Hours of Private Jacuzzi Use per Day</li>
              <li>2 Hours of Private Sauna Use per Day</li>
            </ul>
          </div>
          {/* Additional Services */}
          <div>
            <h3 className="text-lg font-semibold">Additional Services:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Breakfast (€10)</li>
              <li>Scooters Electric x2 (€30)</li>
              <li>Daily Laundry, Linen & Amenities Refresh (€30)</li>
              <li>Trips & Tours, Jet Ski (€300)</li>
            </ul>
          </div>
        </div>
        {/* Images */}
        <div className="relative flex gap-6">
          {/* Bottom aligned cylinder */}
          <div className="absolute  bottom-0 right-52 w-48 h-[400px]">
            <div className="w-48 h-[400px] overflow-hidden rounded-t-full">
              <Image
                src="/assets/detail-2/topimage.jpg"
                alt="Villa Upright"
                width={192}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Top aligned cylinder */}
          <div className="flex items-start w-48 h-[400px]">
            <div className="w-48 h-[400px] overflow-hidden rounded-b-full">
              <Image
                src="/assets/detail-2/topimage.jpg"
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
}
