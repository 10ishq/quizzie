import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  // calculate the total number of items in the cart using each cart item's quantity

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <nav className="relative px-2 sm:px-4 py-1  bg-gray-900 shadow-2xl">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Quizzie
            </span>
          </a>
          <button
            onClick={() => {setIsOpen(!isOpen); console.log(isOpen)}}
            type="button"
            className={'inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600'}
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                
              ></path>
            </svg>
          </button>
          <div className={` w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`} id="navbar-default">
            <ul className="flex flex-col md:mr-2 p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
              <li>
                <Link
                  to="/"
                  className="block text-lg  py-2 pl-3 pr-4 transition-all duration-200  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-lg  py-2 pl-3 pr-4 transition-all duration-200  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              
              
              <li className="flex justify-center w-full">
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;