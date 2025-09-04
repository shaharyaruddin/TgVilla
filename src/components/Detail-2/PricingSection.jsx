import Image from "next/image";

export default function PricingSection() {
  return (
    <div className="max-w-full lg:max-w-[90%] mx-auto p-0 lg:p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* ===== Card 1 ===== */}
        <div className="relative p-6 bg-gray-50 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Text Content */}
            <div className="flex-1">
              {/* Standard Rate */}
              <div className="flex items-center w-fit rounded-full border border-black overflow-hidden mb-8">
                <div className="px-4 py-2  text-sm font-medium text-black bg-white">
                  Standard Rate
                </div>
                <div className="px-4 py-2 font-medium text-white rounded-l-2xl bg-[#2a1b14]">
                  €750
                </div>
              </div>

              <div className="flex gap-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <img
                    src="/assets/detail-2/moon.avif"
                    alt="moon"
                    className="w-5 h-5"
                  />
                  <div className="text-xs font-semibold"> 1 Nights</div>
                </div>

                <div className="flex items-center">
                  <img
                    src="/assets/detail-2/guest.avif"
                    alt="moon"
                    className="w-5 h-5"
                  />
                  <div className="text-xs font-semibold">2 Guests</div>
                </div>

                <div className="flex items-center">
                  <img
                    src="/assets/detail-2/dollar.avif"
                    alt="moon"
                    className="w-5 h-5"
                  />
                  <div className="text-xs font-semibold">€750</div>
                </div>
              </div>
              {/* Breakfast Info */}
              <div className="mb-4">
                <h3 className="text-lg font-medium">Breakfast Info</h3>
                <p className="text-xs text-gray-600">
                  Continental, Italian, Vegetarian
                </p>
              </div>
              {/* Villas with */}
              <div className="mb-4">
                <h3 className="text-lg font-medium">Villas with:</h3>
                <ul className="list-disc text-xs list-inside text-gray-600">
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
                <h3 className="text-lg font-medium">Additional Services:</h3>
                <ul className="list-disc text-xs w-84 list-inside text-gray-600">
                  <li>Breakfast (€10)</li>
                  <li>Scooters Electric x2</li>
                  <li>Daily Laundry, Linen & Amenities Refresh</li>
                  <li>Trips & Tours, Jet Ski (€300)</li>
                </ul>
              </div>
            </div>

            <div className=" hidden md:block">
              {/* Bottom aligned cylinder */}
              <div className="absolute bottom-0 right-22 w-48 h-[360px]">
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
              <div className="absolute top-0 -right-14 w-48 h-[360px]">
                <div className="w-32 h-[360px] overflow-hidden rounded-b-full">
                  <Image
                    src="/assets/images/bedroomVilla/bedroom1.webp"
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
        <div className="relative p-6 bg-gray-50 rounded-lg shadow-md">
          <div className=" flex flex-col md:flex-row gap-6">
            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center w-fit rounded-full border border-black overflow-hidden mb-8">
                <div className="px-4 py-2 text-sm  font-medium text-black bg-white">
                  Standard (Non-Refundable) Rate
                </div>
                <div className="px-4 py-2 font-medium text-white rounded-l-2xl bg-[#2a1b14]">
                  €1200
                </div>
              </div>

              <div className="flex gap-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <img
                    src="/assets/detail-2/moon.avif"
                    alt="moon"
                    className="w-5 h-5"
                  />
                  <div className="text-xs font-semibold"> 1 Nights</div>
                </div>

                <div className="flex items-center">
                  <img
                    src="/assets/detail-2/guest.avif"
                    alt="moon"
                    className="w-5 h-5"
                  />
                  <div className="text-xs font-semibold">2 Guests</div>
                </div>

                <div className="flex items-center">
                  <img
                    src="/assets/detail-2/dollar.avif"
                    alt="moon"
                    className="w-5 h-5"
                  />
                  <div className="text-xs font-semibold">€750</div>
                </div>
              </div>
              {/* Breakfast Info */}
              <div className="mb-4">
                <h3 className="text-lg font-medium">Breakfast Info</h3>
                <p className="text-xs text-gray-600">Buffet, Vegan, Halal</p>
              </div>
              {/* Villas with */}
              <div className="mb-4">
                <h3 className="text-lg font-medium">Villas with:</h3>
                <ul className="list-disc text-xs list-inside text-gray-600">
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
                <h3 className="text-lg font-medium">Additional Services:</h3>
                <ul className="list-disc text-xs list-inside text-gray-600">
                  <li>Luxury Car Rental (€200)</li>
                  <li>Private Yacht Tour (€500)</li>
                  <li>Massage & Spa (€150)</li>
                  <li>Helicopter Ride (€800)</li>
                </ul>
              </div>
            </div>

            {/* Images - Hidden on mobile and tablet, visible on desktop */}
            <div className=" hidden md:block">
              {/* Bottom aligned cylinder */}
              <div className="absolute bottom-0 right-22 w-48 h-[360px]">
                <div className="w-32 h-[360px] overflow-hidden rounded-t-full">
                  <Image
                    src="/assets/images/bedroomVilla/bedroom29.jpg"
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
                    src="/assets/images/bedroomVilla/bedroom34.jpg"
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
