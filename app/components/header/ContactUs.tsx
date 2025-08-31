"use client";
import React, { useState } from "react";
import ContactusForm from "../ContactusForm";

function ContactUs() {
  const [openContactUs, setOpenContactUs] = useState(false);
  return (
    <>
      <div
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"
        onClick={() => setOpenContactUs(true)}
      >
        Contact Us
      </div>
      <ContactusForm
        isOpen={openContactUs}
        onClose={() => setOpenContactUs(false)}
      />
    </>
  );
}

export default ContactUs;
