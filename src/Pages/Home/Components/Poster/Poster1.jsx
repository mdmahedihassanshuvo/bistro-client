import React from "react";
import posterimg1 from "../../../../assets/home/chef-service.jpg";

const Poster1 = () => {
  return (
    <div className="md:mt-16 ">
      <div className="relative">
        <img className="md:w-4/5 mx-auto" src={posterimg1} alt="" />
        <div className="text-center p-5 rounded md:w-3/5 mx-auto bg-white space-y-2 absolute top-[40%] left-[20%] z-10">
            <h2 className="text-3xl uppercase">Bistro Boss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
      </div>
    </div>
  );
};

export default Poster1;
