import React from "react";
import logo from "../images/mobile logo.webp";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="main-menu">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Mobile House
            </h1>
          </div>
          <div className="menu">
            <a href="/">Home</a>
            <a href="/">Gadgets</a>
            <a href="/">Electronics</a>
            <a href="/">Offers</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
