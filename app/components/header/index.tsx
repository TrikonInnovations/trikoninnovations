import Image from "next/image";
import React from "react";
import "./index.scss";

import ContactUs from "./ContactUs";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex items-center justify-between px-16 py-8">
      <Logo />
      <div className="header-items border border-solid border-white/[0.8] rounded-full p-6 flex gap-32 cursor-pointer">
        <p>About Us</p>
        <p>Development</p>
        <p>Our Work</p>
        <p>Team</p>
      </div>
      <ContactUs />
    </div>
  );
}

export default Header;
