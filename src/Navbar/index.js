import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../assests/logo1.jpg";
import Footer from "../components/Footer";

// import logo from "../assests/test1.svg";

import { updateUser } from "../components/Redux/UserSlice";
import Head from "./Head";

const Navbar = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const user = useSelector((state) => state.user);
  console.log(user);

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateUser({ name, phone }));
  };

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <nav className="linear text-gray-100 ">
      <div>
        <div>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Head />
            <button
              data-collapse-toggle="mobile-menu"
              onClick={handleShowMenu}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${showMenu !== false && "hidden"} w-10 h-10`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`${showMenu == false && "hidden"} w-10 h-10`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              className={`${
                showMenu == false && "hidden"
              }  w-full md:block md:w-auto`}
              id="mobile-menu"
            >
              <ul className="flex flex-col p-10 mt-4 md:flex-row md:space-x-8  md:text-sm md:font-medium">
                <li>
                  <Link to="/admin_dashboard">
                    <ah
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white text-lg hover:text-yellow-500  rounded  md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </ah>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3  text-lg border-b border-gray-800 hover:text-yellow-500  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3  border-b text-lg border-gray-800 hover:text-yellow-500  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3  border-b text-lg border-gray-800 hover:text-yellow-500  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Quiz
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3  text-lg hover:text-yellow-500  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-pink-700 dark:hover:text-pink-500 md:dark:hover:bg-white"
                  >
                    Contact
                  </a>
                </li>

                <div className=" gap-2 flex flex-col md:hidden mt-10">
                  <div>
                    <button className="bg-yellow-500 w-full py-4 rounded-lg px-5  ">
                      Get Started
                    </button>
                  </div>
                  <div className="py-2  w-full">
                    <Link to="/login">
                      <button className="border-2 py-2 border-gray-100 w-full rounded-md text-white">
                        <span className="py-2 hover:text-yellow-500">
                          Sign In
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
            <div className=" gap-3 hidden md:flex">
              <div className="py-2">
                <Link to="/login">
                  <span className="py-2 hover:text-yellow-500">Sign In</span>
                </Link>
              </div>
              <div className="py-2">|</div>

              <div>
                <button className="bg-yellow-500 rounded-lg px-5 py-2 ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
