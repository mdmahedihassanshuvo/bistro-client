import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useMenu from "../../../Hooks/Menu/useMenu";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";

const ManageItem = () => {
  const [menu, refetch] = useMenu();
  // console.log(menu);

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
        axios.delete(`https://bistro-server-714t.vercel.app/menu/${id}`).then((res) => {
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
    <div className="md:pt-5">
      <Helmet title="Dashboard-Manage Items" />
      <SectionTitle subHeading="My Cart" heading="MANAGE ALL ITEMS" />
      <div className="overflow-x-auto md:w-4/5 mx-auto bg-[#ffffff] md:p-4 rounded-md">
        <div className="flex justify-around items-center md:mb-5 text-2xl font-bold">
          <h2 className="uppercase">Total Items: {menu?.length}</h2>
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
              <th className="uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
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
                  <Link
                    to={`/dashboard/updateItem/${encodeURIComponent(
                      JSON.stringify(item)
                    )}`}
                    className="btn bg-[#d1a054] text-white"
                  >
                    <FiEdit />
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
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

export default ManageItem;
