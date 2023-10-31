import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { VscThreeBars } from "react-icons/vsc";
import { BiSolidBookAlt } from "react-icons/bi";
import { BsPeopleFill, BsFillCalendar2EventFill } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import useAdmin from "../../Hooks/Admin/useAdmin";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
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
            {isAdmin ?
              <>
                <li>
                  <Link
                    to="adminHome"
                    className="uppercase text-lg font-medium"
                  >
                    <IoMdHome /> Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="addItem" className="uppercase text-lg font-medium">
                    <ImSpoonKnife /> Add Item
                  </Link>
                </li>
                <li>
                  <Link
                    to="manageItem"
                    className="uppercase text-lg font-medium"
                  >
                    <VscThreeBars /> Manage Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="manageBooking"
                    className="uppercase text-lg font-medium"
                  >
                    <BiSolidBookAlt /> Manage booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="manageUser"
                    className="uppercase text-lg font-medium"
                  >
                    <BsPeopleFill /> All users
                  </Link>
                </li>
              </>
             : 
              <>
                <li>
                  <Link
                    to="userHome"
                    className="uppercase text-lg font-medium"
                  >
                    <IoMdHome /> user Home
                  </Link>
                </li>
                <li>
                  <Link to="payment" className="uppercase text-lg font-medium">
                    <IoWallet /> Payment History
                  </Link>
                </li>
                <li>
                  <Link
                    to="cart"
                    className="uppercase text-lg font-medium"
                  >
                    <FaCartShopping /> my cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="booking"
                    className="uppercase text-lg font-medium"
                  >
                    <BsFillCalendar2EventFill /> my booking
                  </Link>
                </li>
              </>
            }


            <div className="divider bg-white h-1"></div>

            <li>
              <Link to="/" className="uppercase text-lg font-medium">
                <IoMdHome /> home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="uppercase text-lg font-medium">
                <VscThreeBars /> menu
              </Link>
            </li>
            <li>
              <Link
                to="/shop/:category"
                className="uppercase text-lg font-medium"
              >
                <HiShoppingBag /> shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="uppercase text-lg font-medium">
                <MdEmail /> contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
