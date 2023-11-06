import React from "react";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddItem = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const category = form?.category?.value;
    const price = form?.price?.value;
    const recipe = form?.recipe?.value;
    const image = form?.image?.value;
    // console.log(name, category, price, recipe, image);
    const newItem = {
      name,
      category,
      price,
      recipe,
      image,
    };
    // console.log(newItem);
    axios
      .post(`http://localhost:7000/menu`, newItem)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Food Item added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#ffffff]">
      <Helmet title="Dashboard-Add Item" />
      <div className="md:pt-5">
        <SectionTitle subHeading="What's new?" heading="ADD AN ITEM" />
      </div>
      <div className="bg-[#f3f3f3] w-4/5 mx-auto">
        <form onSubmit={handleForm} className="border-2 p-4 text-center">
          <div className="text-start md:mb-3">
            <label className="font-semibold">Category Name*</label> <br />
            <input type="text" name="name" className="w-full md:h-10" />
          </div>
          <div className="text-start md:mb-3 grid grid-cols-1 md:grid-cols-2 md:gap-3">
            <div>
              <label className="font-semibold">Category*</label> <br />
              <input type="text" name="category" className="w-full md:h-10" />
            </div>
            <div>
              <label className="font-semibold">Price*</label> <br />
              <input type="text" name="price" className="w-full md:h-10" />
            </div>
          </div>
          <div className="text-start md:mb-3">
            <label className="font-semibold">Recipe*</label> <br />
            <input type="text" name="recipe" className="w-full md:h-10" />
          </div>
          <div className="text-start md:mb-3">
            <label className="font-semibold">Image URL*</label> <br />
            <input
              type="text"
              name="image"
              required
              className="file-input file-input-bordered file-input-primary w-full "
            />
          </div>

          <button className="btn bg-gradient-to-r from-[#835d23] to-[#b58130] text-white my-2">
            Update Recipe Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
