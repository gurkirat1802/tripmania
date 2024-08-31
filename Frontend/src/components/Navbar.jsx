import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/home" className="text-white font-bold text-xl">
              TripMania
            </NavLink>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <NavLink
                to="/home"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutus"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </NavLink>
              <NavLink
                to="/review"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Reviews
              </NavLink>
              <NavLink
                to="/contactus"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">

            <div className="flex space-x-4">
              {!props.isLoggedIn && (
                <NavLink
                  to="/signup"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </NavLink>
              )}
              {!props.isLoggedIn && (
                <NavLink
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <button>Login</button>
                </NavLink>
              )}
              {props.isLoggedIn && (
                <NavLink
                  to="/home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  LogOut
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;