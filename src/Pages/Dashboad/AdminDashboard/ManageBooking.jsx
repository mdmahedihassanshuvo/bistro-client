import React from "react";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";
import useBooking from "../../../Hooks/Booking/useBooking";
import { FcCheckmark } from "react-icons/fc";
import { GiCheckMark } from "react-icons/gi";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageBooking = () => {
  const [bookings, refetch] = useBooking();
  //   console.log(bookings);

  const handleConfirmbooking = (booking) => {
    console.log(booking);
    booking.activity = "Done";
    axios
      .patch(`http://localhost:7000/booking/${booking?._id}`, booking)
      .then((res) => {
        // console.log(res.data);
        if (res.data.matchedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booking a table successfully",
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
      <Helmet title="Dashboard-Manage Bookings" />
      <div className="md:pt-5">
        <SectionTitle subHeading="At a Glance!" heading="MANAGE ALL BOOKING" />
      </div>
      <div className="overflow-x-auto md:w-4/5 mx-auto md:p-4 rounded-md">
        <div className="flex justify-around bookings-center md:mb-5 text-2xl font-bold">
          <h2 className="uppercase">Total Bookings: {bookings?.length}</h2>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#d1a054] text-white ">
              <th></th>
              <th className="uppercase">USER EMAIL</th>
              <th className="uppercase">PHONE NUMBER</th>
              <th className="uppercase">BOOKING DATE</th>
              <th className="uppercase">BOOKING TIME</th>
              <th className="uppercase">ACTIVITY</th>
              <th className="uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings?.map((booking, index) => (
              <tr key={booking._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  {booking?.email}
                  <br />
                </td>
                <td>{booking?.phone}</td>
                <td>{booking?.date}</td>
                <td>{booking?.time}</td>
                {booking?.activity ? (
                  <td>{booking?.activity}</td>
                ) : (
                  <td>Pending</td>
                )}
                {booking?.activity ? (
                  <th>
                    <button
                      disabled
                      onClick={() => handleConfirmbooking(booking)}
                      className="btn bg-[#287855] text-white"
                    >
                      <GiCheckMark className="text-white" />
                    </button>
                  </th>
                ) : (
                  <th>
                    <button
                      onClick={() => handleConfirmbooking(booking)}
                      className="btn bg-[#287855] text-white"
                    >
                      <GiCheckMark className="text-white" />
                    </button>
                  </th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
