import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { VscThreeBars } from "react-icons/vsc";
import { BiSolidBookAlt } from "react-icons/bi";
import {
  BsPeopleFill,
  BsFillCalendar2EventFill,
  BsFillCalendarWeekFill,
} from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import useAdmin from "../../Hooks/Admin/useAdmin";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);

  return (
    <div>
      <Helmet title="Bistro-Dashboard" />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        {/* flex flex-col */}
        <div className="drawer-content  bg-[#f6f6f6] items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full text-base-content bg-[#D1A054]">
            {/* Sidebar content here */}
            <div className="text-center p-2 mb-4">
              <h1 className="text-3xl md:font-extrabold">BISTRO BOSS</h1>
              <p
                className="text-lg font-semibold"
                style={{ letterSpacing: "10px" }}
              >
                Restaurant
              </p>
            </div>
            {isAdmin?.admin ? (
              <>
                <li>
                  <NavLink
                    to="adminHome"
                    className="uppercase text-lg font-medium"
                  >
                    <IoMdHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="addItem"
                    className="uppercase text-lg font-medium"
                  >
                    <ImSpoonKnife /> Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="manageItem"
                    className="uppercase text-lg font-medium"
                  >
                    <VscThreeBars /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="manageBooking"
                    className="uppercase text-lg font-medium"
                  >
                    <BiSolidBookAlt /> Manage booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="manageUser"
                    className="uppercase text-lg font-medium"
                  >
                    <BsPeopleFill /> All users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="userHome"
                    className="uppercase text-lg font-medium"
                  >
                    <IoMdHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="reservation"
                    className="uppercase text-lg font-medium"
                  >
                    <BsFillCalendarWeekFill /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="paymentHistory"
                    className="uppercase text-lg font-medium"
                  >
                    <IoWallet /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cart" className="uppercase text-lg font-medium">
                    <FaCartShopping /> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="booking"
                    className="uppercase text-lg font-medium"
                  >
                    <BsFillCalendar2EventFill /> My Booking
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider bg-white h-1"></div>

            <li>
              <NavLink to="/" className="uppercase text-lg font-medium">
                <IoMdHome /> home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="uppercase text-lg font-medium">
                <VscThreeBars /> menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop/:category"
                className="uppercase text-lg font-medium"
              >
                <HiShoppingBag /> shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="uppercase text-lg font-medium">
                <MdEmail /> contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
