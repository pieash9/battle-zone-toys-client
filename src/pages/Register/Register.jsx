// import React from 'react';

import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import GoogleLogin from "../Shared/GoogleLogin";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {createUser} = useContext(AuthContext)
  const [show, setShow] = useState(true);
  const [error, setError] = useState(" ");

  const handleShowPass = () => {
    setShow(!show);
  };

  const handleRegister = (e) => {
    setError(" ");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setError("Password Must be more than 6 characters");
      return
    }else if(!/(?=.*[0-9].*[0-9])/.test(password)){
        setError("Password should have at least one Number")
        return
    }else{
        singInWithEmail(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .then(err=>{
            console.log(err)
            setError("Something went wrong please try again!")
        })
    }
  };
  return (
    <div className="mt-5 mb-10">
      <div className="card flex-shrink-0 md:w-1/2 w-full mx-auto  shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-3xl font-semibold text-gray-600 mb-3">Register Now</h2>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input-form"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Email <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input-form"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">
                Password <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="password"
              type={show ? "password" : "text"}
              placeholder="Password"
              className="input-form mb-2"
              required
            />
            <small className="text-gray-500">Password must be more than 6 characters and at least one number</small>
            <div className="absolute mt-12 right-5 cursor-pointer">
              {show ? (
                <FaEyeSlash
                  onClick={handleShowPass}
                  className="w-5 h-5 text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={handleShowPass}
                  className="w-5 h-5 text-gray-600"
                />
              )}
            </div>
            {/* Show error  */}
            {error && <p className="text-warning ">{error}</p>}
            {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Photo URL <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="photoURL"
              type="url"
              placeholder="Photo URL"
              className="input-form"
              required
            />
          </div>
            <div className="label">
              <input
                className="checkbox checkbox-accent checkbox-sm mr-2"
                type="checkbox"
                required
              />
              <p>
                Accept{" "}
                <span className="text-blue-500 font-medium cursor-pointer">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-blue-500 font-medium cursor-pointer">
                  Conditions
                </span>
              </p>
            </div>
          </div>
          <div className="form-control">
            <button type="submit" className="button-primary w-full">
            Register
            </button>
          </div>
          <p className="mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 link-hover cursor-pointer"
            >
              Sign in
            </Link>
          </p>

          <GoogleLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
