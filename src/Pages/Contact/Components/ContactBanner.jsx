import React from "react";
import banner3 from "../../../assets/contact/banner.jpg"

const ContactBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner3})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="bg-[#151515] md:px-40 md:py-10 bg-opacity-30 md:space-y-3">
            <h2 className="md:text-5xl md:font-bold md:space-x-3">CONTACT US</h2>
            <p className="font-light">WOULD YOU LIKE TO TRY A DISH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
