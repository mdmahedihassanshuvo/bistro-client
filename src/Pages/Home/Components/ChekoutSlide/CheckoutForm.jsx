import React, { useEffect } from "react";
import feature from "../../../../assets/home/featured.jpg";
import SectionTitle from "../../../../Shared/Components/SectionTitle/SectionTitle";

const CheckoutForm = () => {
  return (
    <div className="mt-5 md:mt-10 hidden md:block">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${feature})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-opacity-60">
          <div className="md:py-4 text-white">
            <SectionTitle
              subHeading={"Check it out"}
              heading={"FROM OUR MENU"}
            />
          </div>
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              <div className="w-full md:w-[50%]">
                <img className="w-[50%] float-right" src={feature} alt="" />
              </div>
              <div className="w-full md:w-[50%] text-white text-left">
                <p className="mb-5 ">
                  March 20, 2023 <br /> WHERE CAN I GET SOME? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Error voluptate facere,
                  deserunt dolores maiores quod nobis quas quasi. Eaque repellat
                  recusandae ad laudantium tempore consequatur consequuntur
                  omnis ullam maxime tenetur.
                </p>
                <button className="btn btn-ghost border-b-2 text-white hover:text-orange-500 border-b-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
