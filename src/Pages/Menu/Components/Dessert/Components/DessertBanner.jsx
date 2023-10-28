import React from "react";
import banner3 from "../../../../../assets/menu/dessert-bg.jpeg"

const DessertBanner = () => {
  return (
    <div className="md:mt-16">
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
            <h2 className="md:text-5xl md:font-bold md:space-x-3 uppercase">Desserts</h2>
            <p className="font-light">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DessertBanner;
