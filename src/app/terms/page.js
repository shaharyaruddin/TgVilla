import SectionContainer from "@/components/sections/section-container";

export default function Terms() {
  return (
    <div className="bg-[#E8E4D9]">
      <SectionContainer>
        <h1 className="text-4xl md:text-5xl pt-5 font-cormorant font-bold text-center italic my-5">
          Terms and Conditions
        </h1>
        <h3 className="text-2xl font-semibold my-4">1. Introduction</h3>
        <p className="mb-4">
          Welcome to www.tgluxurystay.com. These Terms and Conditions govern
          your use of our website and services. By accessing or booking through
          our Website, you agree to comply with these terms.
        </p>

        <h3 className="text-2xl font-semibold my-4">2. Booking and Payment</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>All bookings must be secured with a valid payment method.</li>
          <li>
            Full payment may be required at the time of booking, depending on
            the rate selected.
          </li>
          <li>
            Prices are listed in [Currency] and include applicable taxes and
            fees unless otherwise stated.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold my-4">
          3. Cancellation and Refund Policy
        </h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            Standard Rate & Weekly Bookings: Free cancellation up to 30 days
            before arrival. If canceled within 30 days of arrival, the full
            amount of the booking will be charged.
          </li>
          <li>
            Non-Refundable Rate: No cancellations, modifications, or refunds
            allowed. The full amount is charged at the time of booking.
          </li>
          <li>No-shows will be charged the full booking amount.</li>
        </ul>

        <h3 className="text-2xl font-semibold my-4">4. Check-in & Check-out</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Check-in time: 3pm</li>
          <li>Check-out time: 11am</li>
          <li>
            Early check-in or late check-out may be available upon request and
            subject to availability.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold my-4">
          5. Guest Responsibilities
        </h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Guests must comply with all property rules and policies.</li>
          <li>
            Any damage to the property caused by guests will be charged
            accordingly.
          </li>
          <li>Maximum occupancy limits must be respected.</li>
        </ul>

        <h3 className="text-2xl font-semibold my-4">
          6. Liability and Disclaimers
        </h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            We are not responsible for lost, stolen, or damaged personal
            belongings.
          </li>
          <li>
            Use of facilities, including the spa, sauna, jacuzzi, and pool, is
            at the guest's own risk.
          </li>
          <li>
            We reserve the right to cancel a booking due to unforeseen
            circumstances, in which case a full refund will be issued.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold my-4">7. Privacy Policy</h3>
        <p className="mb-4">
          Guest information is handled securely and will not be shared with
          third parties except as required by law.
        </p>

        <h3 className="text-2xl font-semibold my-4">8. Amendments to Terms</h3>
        <p className="mb-4">
          We reserve the right to update these terms at any time. Any changes
          will be posted on our Website and apply to future bookings.
        </p>

        <p className="mb-4">
          For any inquiries, please contact us at{" "}
          <a
            href="mailto:theofilosgeorgioucy@gmail.com"
            className="text-blue-500 underline"
          >
            theofilosgeorgioucy@gmail.com
          </a>{" "}
          or +357 97806072.
        </p>
      </SectionContainer>
    </div>
  );
}
