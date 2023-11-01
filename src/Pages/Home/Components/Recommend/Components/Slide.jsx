import React from "react";
import { SwiperSlide } from "swiper/react";

const Slide = ({ item }) => {
  // console.log(item);

  const { price, _id, recipe, name, image } = item;

  return (
    <div className="card w-96 bg-slate-100 shadow-xl">
      <figure>
        <img
        className="w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-sm">{recipe}</p>
        {/* <div className="card-actions justify-center">
          <button className="btn hover:bg-[#1F2937] border-b-2 border-b-[#BB8506] uppercase text-[#BB8506] ">Add to Cart</button>
        </div> */}
      </div>
    </div>
  );
};

export default Slide;
