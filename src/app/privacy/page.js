import SectionContainer from "@/components/sections/section-container";

export default function Privacy() {
  return (
    <div className="bg-[#E8E4D9]">

    <SectionContainer>
        <h1 className="text-4xl md:text-5xl pt-5 font-cormorant font-bold text-center italic my-5">
        Privacy Policy
      </h1>
      <p>
        Your privacy is very important to TGLuxuryStays (“we” / “us”). We follow
        strict security procedures in the storage and disclosure of personal
        information which you have given to us when accessing and using our
        website, when making a booking on our website or registering with us, to
        protect your privacy in accordance with the provisions of the applicable
        data protection laws. In this section, you can find information about
        our policy regarding the protection of personal data, our use of cookies
        and the security policy that we follow about your privacy.
      </p>
      <br />
      <p>
        We collect personal data from you if you register online with us, access
        and/or use our website or carry out transactions for goods and services
        via our website or our hotel directly.
      </p>

      <h3 className="text-2xl font-semibold my-4">
        1. Information We Collect and How We Use and Share It
      </h3>
      <p className="mb-4">
        Personal data we collect when you access and use our website, when you
        make a booking through our reservation system, and where you register
        online with us (hereinafter referred to as “personal data”):
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          Your name, email address, physical address, phone number, date of
          birth, country location, and payment card information (to the extent
          this information is provided by you).
        </li>
        <li>
          Information relating to your membership in one of our services or
          programs.
        </li>
        <li>
          Information about how you use our website, products, and services.
        </li>
        <li>
          Information such as stay and room preferences made during the course
          of your reservation, such as your preferred room type and specific
          requests to the hotel.
        </li>
        <li>
          Digital Key Functionality – We use background location services and
          collect location data even when the app is closed or not in use for
          the digital key functionality on the app.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold my-4">
        2. We Use the Personal Data Collected for the Purposes of:
      </h3>
      <ul className="list-decimal list-inside mb-4 space-y-2">
        <li>
          Registering you as a new user of our services and managing our
          relationship with you as a registered user.
        </li>
        <li>
          Providing our reservation and booking services for our hotels and
          facilities to you.
        </li>
        <li>Internal analysis purposes.</li>
        <li>
          To the extent that you have consented to being contacted for marketing
          purposes, we will use your personal data for the purposes of providing
          you with email newsletters, surveys, and other communication for
          advertising and marketing of our services, as well as providing you
          with targeted advertisements on our or third-party websites.
        </li>
        <li>
          Maintaining legal records and accounts for the time periods required
          by European/Cyprus law or where we need to comply with a legal or
          regulatory obligation.
        </li>
        <li>
          Where it is necessary to establish and/or exercise our legitimate
          interests (or those of a third party) and your interests and
          fundamental rights do not override those interests.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold my-4">
        3. Disclosures of Your Personal Data
      </h3>
      <p className="mb-4">
        We may have to share your personal data within our group to the extent
        that is necessary for the purposes for which the personal data was
        collected. This includes sharing with third-party companies under
        specific contract terms in accordance with applicable laws, whose
        services we employ to conduct our business or in relation to any supply
        of products and services. Disclosure of your personal data may also be
        required to comply with any applicable laws.
      </p>
      <p className="mb-4">
        In instances where you have consented to the use of your personal data
        for advertising and/or marketing purposes, we may share your personal
        data with third-party online service providers who may be located
        outside of the EEA.
      </p>
      <p className="mb-4">
        Whenever we transfer your personal data outside of the EEA, we ensure a
        similar degree of protection is afforded to it and that all third
        parties respect the security of your personal data and treat it in
        accordance with the law. We do not allow our third-party service
        providers to use your personal data for their own purposes and only
        permit them to process your personal data for specified purposes in
        accordance with our instructions.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">List of Processors:</h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Survey: ReviewPro</li>
        <li>Online Reservations System: UIBS</li>
        <li>Hotel Management System: Theova</li>
        <li>Newsletter Service: UIBSces</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Data Retention of Your Personal Data
      </h3>
      <p className="mb-4">
        We will only retain your personal data for as long as necessary to
        fulfill the purposes we collected it for, including for the purposes of
        satisfying any legal, accounting, or reporting requirements.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Information Security</h3>
      <p className="mb-4">
        We work hard to protect our users and their personal data from
        unauthorized access, alteration, disclosure, or destruction of
        information we hold. In particular:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>We encrypt many of our services using SSL.</li>
        <li>
          We review our information collection, storage, and processing
          practices, including physical security measures, to guard against
          unauthorized access to systems.
        </li>
        <li>
          We restrict access to personal data to TG employees, contractors, and
          agents who need to know that information to process it for us. They
          are subject to strict contractual confidentiality obligations and may
          be disciplined or terminated if they fail to meet these obligations.
        </li>
      </ul>
    </SectionContainer>
    </div>

  );
}
