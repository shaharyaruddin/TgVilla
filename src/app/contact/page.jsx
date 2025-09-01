import ContactDetail from "@/components/contact/ContactDetail";
import ContactTopSection from "@/components/contact/ContactTopSection";
import FAQSection from "@/components/contact/FAQSection";
import GetInTouchSection from "@/components/contact/GetInTouchSection";
import React from "react";

const Contact = () => {
  return (
    <div>
      <ContactTopSection />
      <GetInTouchSection />
      <ContactDetail />
      <FAQSection />
    </div>
  );
};

export default Contact;
