import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo1.jpg";

const Head = () => {
  return (
    <Link to="/">
      <a className="flex items-center gap-1  sm:ml-8">
        <img
          src={logo}
          width="80"
          height="80"
          className="rounded-3xl "
          alt=""
        />
        <span className="self-center name text-sm text-yellow-500  font-extrabold  whitespace-nowrap dark:text-pink-50">
          AN NISA UL ISLAM
        </span>
      </a>
    </Link>
  );
};

export default Head;
