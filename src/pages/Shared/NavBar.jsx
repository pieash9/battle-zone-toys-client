// import React from 'react';

import { Link } from "react-router-dom";


const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const handleLogout = () => {
//     logOut()
//       .then(() => {})
//       .catch((err) => console.log(err));
//   };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/donation">Donation</Link>
      </li>
      <li>
        <Link to="/myEvents">My Events</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/addEvents">
          Add events
        </Link>
      </li>
      <li>
        <Link to="/volunteerList">
          Volunteer list
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img className="w-20" src="https://i.ibb.co/ft8gVhY/image-2-Ihtuhl3-transformed.png" alt="" />
        <h3 className="font-semibold text-gray-700 text-2xl ml-2">Battle Zone Toys</h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end ">
        {/* {!user ? (
          <Link to="/login" className="btn btn-primary mr-4">
            Login
          </Link>
        ) : (
          <Link
            onClick={handleLogout}
            to="/login"
            className="btn btn-error mr-4"
          >
            Logout
          </Link>
        )} */}
        
    
      </div>
    </div>
  );
};

export default NavBar;
