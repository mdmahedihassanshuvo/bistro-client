import React, { useContext } from "react";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useUserBooking from "../../../Hooks/UserBooking/useUserBooking";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";

const Booking = () => {
  const [userBookings, refetch] = useUserBooking();

  const handleDeleteBooking = (id) => {
    // console.log(id);
    axios
      .delete(`http://localhost:7000/booking/${id}`)
      .then((res) => {
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Delete booking successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#ffffff]">
      <div className="md:pt-5">
        <SectionTitle subHeading="Excenllent Ambience" heading="MY BOOKINGS" />
      </div>
      <div className="overflow-x-auto md:w-4/5 mx-auto md:p-4 rounded-md">
        <div className="flex justify-around bookings-center md:mb-5 text-2xl font-bold">
          <h2 className="uppercase">Total Bookings: {userBookings?.length}</h2>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#d1a054] text-white ">
              <th></th>
              <th className="uppercase">GUEST NUMBER</th>
              <th className="uppercase">DATE</th>
              <th className="uppercase">TIME</th>
              <th className="uppercase">ACTIVITY</th>
              <th className="uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userBookings?.map((booking, index) => (
              <tr key={booking._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{booking?.guest} person</td>
                <td>{booking?.date}</td>
                <td>{booking?.time}</td>
                {booking?.activity ? (
                  <td className="font-semibold">{booking?.activity}</td>
                ) : (
                  <td className="font-semibold">Pending</td>
                )}
                <th>
                  <button
                    onClick={() => handleDeleteBooking(booking._id)}
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

export default Booking;
