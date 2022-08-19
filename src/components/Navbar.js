import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import { MdReorder } from "react-icons/md";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src= {Logo} alt="logo"/>
        <div className="hiddenLinks">
          <Link to="/home"> Home</Link>
          <Link to="/menu"> Menu</Link>
          <Link to="/about"> About</Link>
          <Link to="/contacts"> Contacts</Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/home"> Home</Link>
          <Link to="/menu"> Menu</Link>
          <Link to="/about"> About</Link>
          <Link to="/contacts"> Contacts</Link>
        <button onClick={toggleNavbar}>
          <MdReorder />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
