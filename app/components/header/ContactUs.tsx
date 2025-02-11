"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ContactUs() {
  const router = useRouter();

  return (
    <div
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      onClick={() => router.push("/contactus")}
    >
      Contact Us
    </div>
  );
}

export default ContactUs;
