import React, { createContext, useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/cart/useCart";
import useAdmin from "../../Hooks/Admin/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [cartItem, isLoading] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        <Navigate to="/" />;
      })
      .catch((err) => console.log(err));
  };

  const navItem = (
    <>
      <li className="text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " hover:text-accent text-yellow-500 border-b-2 border-accent"
              : "text-white hover:text-yellow-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? " hover:text-accent text-yellow-500 border-b-2 border-accent"
              : "text-white hover:text-yellow-500"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive
              ? " hover:text-accent text-yellow-500 border-b-2 border-accent"
              : "text-white hover:text-yellow-500"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? " hover:text-accent text-yellow-500 border-b-2 border-accent"
              : "text-white hover:text-yellow-500"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/shop/:category"
          className={({ isActive }) =>
            isActive
              ? " hover:text-accent text-yellow-500 border-b-2 border-accent"
              : "text-white hover:text-yellow-500"
          }
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="md:mx- bg-black rounded-b-md bg-opacity-30 md:w-full fixed top-0 z-10">
      <div className="navbar md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link className="text-white">
            <span className="font-semibold text-lg">BISTRO BOSS</span> <br />{" "}
            <span className="tracking-widest">RESTAURENT</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {!isAdmin && (
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {cartItem?.length}
              </span>
              <button className="btn btn-ghost text-white text-lg">
                <FaShoppingCart />
              </button>
            </div>
          )}
          {user ? (
            <Link
              onClick={handleLogout}
              className="btn btn-ghost text-white text-lg"
            >
              Sign Out
            </Link>
          ) : (
            <Link to="/login" className="btn btn-ghost text-white text-lg">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
