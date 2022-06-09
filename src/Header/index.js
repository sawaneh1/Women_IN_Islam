import React from "react";
import Home from "../components/Home";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div className="linear text-gray-100 relative sm:-mt-3">
      <Navbar />
      <Home />
    </div>
  );
};

export default Header;
