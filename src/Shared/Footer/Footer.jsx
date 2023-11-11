import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className=" grid grid-cols-2 text-white text-sm md:text-base md:font-medium">
        <div className="bg-[#525d6d] text-center md:py-10 p-4">
          <h2>CONTACT US</h2>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-[#111827] text-center md:py-10 p-4 md:space-y-3">
          <h2>Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex justify-center items-center gap-2">
            <FaFacebook className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaTwitter className="text-2xl" />
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-black text-slate-200">
        <aside>
          <p>Copyright © 2023 - All right reserved by MHS Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
