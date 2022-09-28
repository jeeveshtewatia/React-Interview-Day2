import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <div>Home</div>
      </Link>
      <Link to="/contacts">
        <div>Contacts</div>
      </Link>
    </div>
  );
};

export default Navbar;
