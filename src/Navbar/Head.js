import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpeg";

const Head = () => {
  return (
    <Link to="/">
      <a className="flex items-center gap-2 ml-3  sm:ml-4 mt-2">
        <img
          src={logo}
          width="60"
          height="50"
          className="rounded-full "
          alt=""
        />
        <span className="self-center name text-lg text-gray-100  font-extrabold  whitespace-nowrap dark:text-pink-50">
          AN NISA UL ISLAM
        </span>
      </a>
    </Link>
  );
};

export default Head;
