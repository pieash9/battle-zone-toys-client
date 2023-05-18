// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/myToys">My Toys</Link>
      </li>
      <li>
        <Link to="/addAToy">Add A Toy</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar justify-between bg-base-100">
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
            className="menu menu-compact dropdown-content font-medium mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img
          className="md:w-20 w-16"
          src="https://i.ibb.co/ft8gVhY/image-2-Ihtuhl3-transformed.png"
          alt=""
        />
        <h3 className="font-semibold text-gray-700 text-lg  md:text-2xl ml-0.5 md:ml-2 text-center">
          <span className="whitespace-nowrap">Battle Zone</span> Toys
        </h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{navItems}</ul>
      </div>
      <div className=" ">
        {/* avatar */}

        {!user ? (
          <Link to="/login" >
            <button className="button-primary">Login</button>
          </Link>
        ) : (
          <>
            <div className="avatar mr-2">
              <div className="w-11 rounded-full border-2 border-blue-500">
                <img
                  src={`${
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/fSHmDMK/image.png"
                  }`}
                />
              </div>
            </div>
            <button onClick={handleLogout} className="button-primary">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
