import React, { useEffect } from "react";
import posterimg1 from "../../../../assets/home/chef-service.jpg";
import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos";

const Poster1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      className="mt-5 md:mt-16"
    >
      <div className="relative">
        <img className="md:w-4/5 mx-auto" src={posterimg1} alt="" />
        <div className="text-center p-5 rounded w-3/5 md:w-3/5 mx-auto bg-white space-y-2 absolute top-[30%] md:top-[40%] left-[20%] z-10">
          <h2 className="text-3xl uppercase">Bistro Boss</h2>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Poster1;
