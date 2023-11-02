import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const UpdateItem = () => {
  const { item } = useParams();
  const {isLoading} = useContext(AuthContext);
  const decodedItem = decodeURIComponent(item);
  const itemObject = JSON.parse(decodedItem);

  console.log(itemObject);

  return (
    <div className="bg-[#ffffff] md:pt-5 ">
      <div className="md:mb-5"> 
        <h2 className="text-2xl font-semibold text-center">UPDATE ITEM</h2>
      </div>
      <div className="bg-[#f3f3f3] w-4/5 mx-auto">
        <form className="border-2 p-4 text-center">
          <div className="">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="name"
              placeholder={itemObject?.name}
              className="w-full md:h-11 p-2"
              required
            />
          </div>

          <div className="md:mt-2 flex flex-col md:flex-row justify-between items-center md:gap-3">
            <div className="w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select className="select select-primary w-full ">
                <option disabled selected>
                  {itemObject?.cetegory}
                </option>
                <option>dessert</option>
                <option>pizza</option>
                <option>salad</option>
                <option>soup</option>
              </select>
            </div>
            <div className="w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="price"
                placeholder={itemObject?.price}
                className="w-full md:h-11 p-2"
                required
              />
            </div>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              className="w-full md:mt-3"
              name="recipe"
              type="recipe"
              id=""
              cols="30"
              rows="8"
              placeholder={itemObject?.recipe}
            ></textarea>
          </div>

          <button className="btn bg-gradient-to-r from-[#835d23] to-[#b58130] text-white my-2">
            Update Recipe Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
