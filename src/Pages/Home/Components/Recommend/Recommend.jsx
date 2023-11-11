import React, { useEffect } from "react";
import SectionTitle from "../../../../Shared/Components/SectionTitle/SectionTitle";
import useMenu from "../../../../Hooks/Menu/useMenu";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slide from "./Components/Slide";
import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos";

const Recommend = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [menu] = useMenu();
  // console.log(menu);

  return (
    <div
    data-aos="zoom-in-right"
      data-aos-duration="1500"
      className="mt-5 md:mt-16"
    >
      <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"} />
      <div className="mt-5 md:mt-10 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5">
        {menu.slice(0, 3).map((item) => (
          <Slide key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
