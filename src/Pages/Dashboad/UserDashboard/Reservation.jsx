import React, { useContext } from "react";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Reservation = () => {
  const { user } = useContext(AuthContext);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const time = form.time.value;
    const guest = form.guest.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    // console.log(date, time, guest, name, phone, email);

    const bookingTable = {
      date,
      time,
      guest,
      name,
      phone,
      email,
      user: user?.email,
    };
    axios
      .post("http://localhost:7000/booking", bookingTable)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booking a table successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#ffffff]">
      <div className="md:pt-5">
        <SectionTitle subHeading="Reservation" heading="ADD AN ITEM" />
      </div>
      <div className="bg-[#f3f3f3] w-4/5 mx-auto">
        <form onSubmit={handleForm} className="border-2 p-4 text-center">
          <div className="text-start md:mb-3 grid grid-cols-1 md:grid-cols-3 md:gap-3">
            <div className="text-start md:mb-3">
              <label className="font-semibold">Date*</label> <br />
              <input
                type="date"
                name="date"
                placeholder="date"
                className="w-full md:h-10"
              />
            </div>
            <div>
              <label className="font-semibold">Time*</label> <br />
              <input
                type="time"
                name="time"
                placeholder="time"
                className="w-full md:h-10"
              />
            </div>
            <div>
              <label className="font-semibold">Guest*</label> <br />
              <input
                type="number"
                name="guest"
                placeholder="person"
                className="w-full md:h-10"
              />
            </div>
          </div>
          <div className="text-start md:mb-3 grid grid-cols-1 md:grid-cols-3 md:gap-3">
            <div className="text-start md:mb-3">
              <label className="font-semibold">Name*</label> <br />
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full md:h-10"
              />
            </div>
            <div>
              <label className="font-semibold">Phone*</label> <br />
              <input
                type="text"
                name="phone"
                placeholder="phone"
                className="w-full md:h-10"
              />
            </div>
            <div>
              <label className="font-semibold">Email*</label> <br />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full md:h-10"
              />
            </div>
          </div>

          <button className="btn bg-gradient-to-r from-[#835d23] to-[#b58130] text-white my-2">
            Update Recipe Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
