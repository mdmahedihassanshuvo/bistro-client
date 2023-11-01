import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { name, price, recipe, image, _id } = item;

  const handleAddToCart = (item) => {
    item.userEmail = user?.email;
    // console.log(item);
    axios
      .post("http://localhost:7000/cart", item)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add Item successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-800 text-white absolute right-0 mr-5 mt-4 p-2 rounded">
          ${price}
        </p>
        <div className="card-body ">
          <h2 className="card-title justify-center">{name}</h2>
          <p className="justify-center">{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn bg-[#E8E8E8] border-0 border-b-4 mt-2 border-[#BB8506] text-[#BB8506] btn-primary hover:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
