import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const { item } = useParams();
  const { isLoading } = useContext(AuthContext);
  const decodedItem = decodeURIComponent(item);
  const itemObject = JSON.parse(decodedItem);

  // console.log(itemObject);
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const category = form?.category?.value;
    const price = form?.price?.value;
    const recipe = form?.recipe?.value;
    // console.log(name, category, price, recipe);

    const item = {
      name,
      category,
      price,
      recipe,
    };
    // console.log(item);

    axios
      .patch(`http://localhost:7000/menu/${itemObject._id}`, item)
      .then((res) => {
        // console.log(res.data);
        if(res.data?.modifiedCount > 0){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Food Item update successfully',
            showConfirmButton: false,
            timer: 1500
          })
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#ffffff] md:pt-5 ">
      <div className="md:mb-5">
        <h2 className="text-2xl font-semibold text-center">UPDATE ITEM</h2>
      </div>
      <div className="bg-[#f3f3f3] w-4/5 mx-auto">
        <form onSubmit={handleForm} className="border-2 p-4 text-center">
          <div className="text-start md:mb-3">
            <label className="">Category Name*</label> <br />
            <input type="text" name="name" className="w-full md:h-10" />
          </div>
          <div className="text-start md:mb-3 grid grid-cols-1 md:grid-cols-2 md:gap-3">
            <div>
              <label className="">Category*</label> <br />
              <input type="text" name="category" className="w-full md:h-10" />
            </div>
            <div>
              <label className="">Price*</label> <br />
              <input type="text" name="price" className="w-full md:h-10" />
            </div>
          </div>
          <div className="text-start md:mb-3">
            <label className="">Recipe*</label> <br />
            <input type="text" name="recipe" className="w-full md:h-10" />
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
