import Image from "next/image";

export default function PricingSection() {
  return (
    <div className="max-w-full lg:max-w-[90%] mx-auto p-0 lg:p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* ===== Card 1 ===== */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
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
                <ul className="list-disc text-sm list-inside text-gray-600">
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
                <ul className="list-disc text-sm w-84 list-inside text-gray-600">
                  <li>Breakfast (€10)</li>
                  <li>Scooters Electric x2</li>
                  <li>Daily Laundry, Linen & Amenities Refresh</li>
                  <li>Trips & Tours, Jet Ski (€300)</li>
                </ul>
              </div>
            </div>

            {/* Images - Hidden on mobile and tablet, visible on desktop */}
            <div className="relative hidden md:block">
              {/* Bottom aligned cylinder */}
              <div className="absolute bottom-0 right-20 w-48 h-[360px]">
                <div className="w-32 h-[360px] overflow-hidden rounded-t-full">
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
              <div className="flex items-start justify-end w-48 h-[360px]">
                <div className="w-32 h-[360px] overflow-hidden rounded-b-full">
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

        {/* ===== Card 2 (Different Content) ===== */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Text Content */}
            <div className="flex-1">
              {/* Premium Rate */}
              <div className="flex w-fit rounded-full border border-black overflow-hidden mb-4">
                <div className="px-4 py-2 font-medium text-black bg-white">
                  Premium Rate
                </div>
                <div className="px-4 py-2 font-medium text-white rounded-l-2xl bg-[#2a1b14]">
                  €1200
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>🌙 2 Nights</span>
                <span>👥 4 Guests</span>
                <span>💶 €1200</span>
              </div>
              {/* Breakfast Info */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Breakfast Info</h3>
                <p className="text-gray-600">Buffet, Vegan, Halal</p>
              </div>
              {/* Villas with */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Villas with:</h3>
                <ul className="list-disc text-sm list-inside text-gray-600">
                  <li>Infinity Pool</li>
                  <li>Private Beach</li>
                  <li>Smart Home System</li>
                  <li>Personal Chef</li>
                  <li>Fitness Center Access</li>
                  <li>Daily Breakfast & Dinner Included</li>
                  <li>Private Jacuzzi & Sauna Unlimited</li>
                </ul>
              </div>
              {/* Additional Services */}
              <div>
                <h3 className="text-lg font-semibold">Additional Services:</h3>
                <ul className="list-disc text-sm list-inside text-gray-600">
                  <li>Luxury Car Rental (€200)</li>
                  <li>Private Yacht Tour (€500)</li>
                  <li>Massage & Spa (€150)</li>
                  <li>Helicopter Ride (€800)</li>
                </ul>
              </div>
            </div>

            {/* Images - Hidden on mobile and tablet, visible on desktop */}
            <div className="relative hidden md:block">
              {/* Bottom aligned cylinder */}
              <div className="absolute bottom-0 right-20 w-48 h-[360px]">
                <div className="w-32 h-[360px] overflow-hidden rounded-t-full">
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
              <div className="flex items-start justify-end w-48 h-[360px]">
                <div className="w-32 h-[360px] overflow-hidden rounded-b-full">
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
      </div>
    </div>
  );
}