import React from "react";
import logo from "../../logos/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="main-menu">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
            <h1>My Type Buyer</h1>
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
