import React, { useEffect } from "react";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos";

const ContactInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="my-5 md:my-16"
    >
      <SectionTitle subHeading={"Visit Us"} heading={"OUR LOCATION"} />
      <div className="grid grid-cols-3 gap-2 md:gap-4 mx-3">
        <div className="md:w-96 mx-auto border-s-2 border-e-2 border-b-2">
          <div className="bg-[#D1A054] flex justify-center items-center py-4">
            <FaPhoneAlt className="text-white text-xl" />
          </div>
          <div className="md:mx-4 flex flex-col justify-center items-center bg-[rgb(243,243,243)] md:h-32 mb-3">
            <h2 className="uppercase font-medium">phone</h2>
            <p className="font-light">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="md:w-96 mx-auto border-s-2 border-e-2 border-b-2">
          <div className="bg-[#D1A054] flex justify-center items-center py-4">
            <FaLocationDot className="text-white text-xl" />
          </div>
          <div className="md:mx-4 flex flex-col justify-center items-center bg-[rgb(243,243,243)] md:h-32 mb-3">
            <h2 className="uppercase font-medium">ADDRESS</h2>
            <p className="font-light">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="md:w-96 mx-auto border-s-2 border-e-2 border-b-2">
          <div className="bg-[#D1A054] flex justify-center items-center py-4">
            <FaClock className="text-white text-xl" />
          </div>
          <div className="md:mx-4 flex flex-col justify-center items-center bg-[rgb(243,243,243)] md:h-32 mb-3">
            <h2 className="uppercase text-center font-medium">WORKING HOURS</h2>
            <p className="font-light">
              Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
