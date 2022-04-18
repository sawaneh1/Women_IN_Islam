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
    <nav className="linear bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-3xl shadow-xl  shadow-gray-100  navbar  m-5 sm:m-10 mt-10">
      <div>
        <div>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Head />
            <button
              data-collapse-toggle="mobile-menu"
              onClick={handleShowMenu}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${showMenu !== false && "hidden"} w-6 h-6`}
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
                className={`${showMenu == false && "hidden"} w-6 h-6`}
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
              <ul className="flex flex-col p-10 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link to="/admin_dashboard">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white text-lg bg-blue-700 rounded md:bg-transparent md:text-yellow-600 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Tests
                  </a>
                </li>
                <li>
                  <Link to="/login">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 text-lg hover:text-pink-500 md:hover:text-pink-500 md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-pink-700 dark:hover:text-pink-500 md:dark:hover:bg-white"
                    >
                      Login
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse  sm:flex-row place-items-center items-center ">
          <div className="p-5  w-full  sm:w-4/5">
            <h1 className=" mb-3 text-center sm:text-left sm:text-2xl font-bold text-blue-600 sm:-mt-32  text-xl">
              Test your islamic Knowledge...
            </h1>

            <p className="w-full text-sm  sm:text-lg header-p">
              We offer a range of quizes, rangin from the saying of Allah The
              Most High and His Prophet and Messenger Peace Be Upon Him, and
              other things with related to the Dean.
            </p>
            <div className="flex sm:block justify-center">
              <Link to="/quiz">
                <button className="bg-blue-900 font-bold rounded-lg p-2 text-white w-48 mt-10">
                  Take test
                </button>
              </Link>
            </div>
          </div>

          <div className=" flex justify-start mt-5 sm:flex">
            <img src={img} alt="" className="md:h-4/5 h-1/4 sm:w-full w-96" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
