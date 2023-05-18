// import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <img
              src="https://i.ibb.co/ft8gVhY/image-2-Ihtuhl3-transformed.png"
              alt="Website Logo"
              className="w-36 "
            />
            <h3 className="text-white font-semibold text-2xl">Battle Zone Toys</h3>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h4 className="text-lg text-white font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 Main Street</p>
            <p className="text-gray-400">City, State ZIP</p>
            <p className="text-gray-400">Phone: 123-456-7890</p>
            <p className="text-gray-400">Email: info@example.com</p>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h4 className="text-lg text-white font-bold mb-4">Follow Us</h4>
            <div className="flex">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-white transition duration-300 mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-white transition duration-300 mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="bg-gray-800 text-white w-full px-4 py-2 rounded focus:outline-none focus:shadow-outline"
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 ml-auto block"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
