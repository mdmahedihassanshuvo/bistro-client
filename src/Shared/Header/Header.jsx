import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const navList = <>
    <li className="text-xl">
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? " hover:text-accent text-yellow-500 border-b-2 border-accent" :  "text-white hover:text-yellow-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to='/Contact'
          className={({ isActive }) =>
            isActive ? " hover:text-accent text-yellow-500 border-b-2 border-accent" :  "text-white hover:text-yellow-500"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to='/Dashboard'
          className={({ isActive }) =>
            isActive ? " hover:text-accent text-yellow-500 border-b-2 border-accent" :  "text-white hover:text-yellow-500"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to='/menu'
          className={({ isActive }) =>
            isActive ? " hover:text-accent text-yellow-500 border-b-2 border-accent" :  "text-white hover:text-yellow-500"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to='/shop'
          className={({ isActive }) =>
            isActive ? " hover:text-accent text-yellow-500 border-b-2 border-accent" :  "text-white hover:text-yellow-500"
          }
        >
          Our Shop
        </NavLink>
      </li>
    </>

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
              {navList}
            </ul>
          </div>
          <Link className="text-white"><span className="font-semibold text-lg">BISTRO BOSS</span> <br /> <span className="tracking-widest">RESTAURENT</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navList}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-ghost text-white text-lg">Sign Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
