import React from "react";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";
import useUsers from "../../../Hooks/Users/useUsers";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt, FaUserAlt, FaUserFriends } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [users, refetch] = useUsers();
  console.log(users);

  const handleAdmin = (user) => {
    console.log(user);
    user.roll = "admin";
    axios
      .patch(`http://localhost:7000/user/${user?._id}`, user)
      .then((res) => {
        console.log(res.data);
        if (res.data.matchedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Make user admin successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteuser = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:7000/user/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Delete user successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:pt-5">
      <SectionTitle subHeading="How many?" heading="MANAGE ALL USERS" />
      <div className="overflow-x-auto md:w-4/5 mx-auto bg-[#ffffff] md:p-4 rounded-md">
        <div className="flex justify-around users-center md:mb-5 text-2xl font-bold">
          <h2 className="uppercase">TOTAL USERS: {users?.length}</h2>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#d1a054] text-white ">
              <th></th>
              <th className="uppercase">NAME</th>
              <th className="uppercase">EMAIL</th>
              <th className="uppercase">ROLL</th>
              <th className="uppercase">MAKE ADMIN</th>
              <th className="uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users ? (
              users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    {user?.name}
                    <br />
                  </td>
                  <td>{user?.email}</td>
                  {user?.roll == "admin" ? (
                    <td>
                      <FaUserAlt />
                    </td>
                  ) : (
                    <td>
                      <FaUserFriends />
                    </td>
                  )}
                  {user?.roll == "admin" ? (
                    <th>
                      <button disabled className="btn bg-[#d1a054] text-white">
                        admin
                      </button>
                    </th>
                  ) : (
                    <th>
                      <button
                        onClick={() => handleAdmin(user)}
                        className="btn bg-[#d1a054] text-white"
                      >
                        user
                      </button>
                    </th>
                  )}
                  <th>
                    <button
                      onClick={() => handleDeleteuser(user._id)}
                      className="btn bg-red-800 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
