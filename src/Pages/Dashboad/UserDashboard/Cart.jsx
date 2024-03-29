import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/cart/useCart";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cartItem, refetch] = useCart();
  //   console.log(cartItem);

  const totalPrice = cartItem
    ?.reduce((sum, item) => item.price + sum, 0)
    .toFixed(2);

  // console.log(totalPrice);

  const handleDeleteItem = (id) => {
    // console.log(typeof id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://bistro-server-714t.vercel.app/cart/${id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="py-5 md:pt-5">
      <Helmet title="Dashboard-My Cart" />
      <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?" />
      <div className="overflow-x-auto md:w-4/5 mx-auto bg-[#ffffff] md:p-4 rounded-md">
        <div className="flex justify-around items-center md:mb-5 text-lg md:text-2xl font-bold">
          <h2 className="uppercase">Total Order: {cartItem.length}</h2>
          <h2 className="uppercase">Total price: ${totalPrice}</h2>
          <Link to="/dashboard/payment">
            <button className="btn bg-[#d1a054]">Pay</button>
          </Link>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#d1a054] text-white ">
              <th></th>
              <th className="uppercase">Item Image</th>
              <th className="uppercase">Item name</th>
              <th className="uppercase">Price</th>
              <th className="uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartItem.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="btn bg-red-800 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
