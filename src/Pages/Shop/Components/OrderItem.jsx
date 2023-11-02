import React from "react";
import FoodCard from "./FoodCard";

const OrderItem = ({ item }) => {
    // console.log(item);
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:mb-[70px]">
        {item.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
  );
};

export default OrderItem;
