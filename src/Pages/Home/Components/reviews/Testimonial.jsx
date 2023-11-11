import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Rating from "react-rating";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../../Shared/Components/SectionTitle/SectionTitle";
import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos";

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios("https://bistro-server-714t.vercel.app/review");
      return res.data;
    },
  });

  // console.log(reviews);

  return (
    <div
    data-aos="fade-right"
    data-aos-duration="1500"
      className="mt-5 md:mt-16 mb-5 md:mb-16"
    >
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <div className="md:w-5/6 mx-auto">
        <Swiper modules={[Pagination]} className="mySwiper">
          {reviews.map((item) => (
            <SwiperSlide
              key={item._id}
              className="md:w-[70%] text-center space-y-3"
            >
              <Rating
                className="text-xl md:text-3xl"
                placeholderRating={item.rating}
                emptySymbol={<FaRegStar className="text-[#CD9003]" />}
                placeholderSymbol={<FaStar className="text-[#CD9003]" />}
                fullSymbol={<FaStar className="text-[#CD9003]" />}
              />
              <p className="text-sm md:text-base">{item.details}</p>
              <h2 className="text-xl md:text-3xl font-semibold">{item.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
