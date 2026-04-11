import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import Contact from "../contact/contact";

const NavBar = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="desktopMenu">
          <Link to="home" smooth duration={500} offset={-80} className="desktopMenuItem">
            Home
          </Link>
          <Link to="about" smooth duration={500} offset={-80} className="desktopMenuItem">
            About
          </Link>
          <Link to="projects" smooth duration={500} className="desktopMenuItem">
            Projects
          </Link>
        </div>

        <button
          className="desktopMenuButton"
          onClick={() => setShowContact(true)}
        >
          Contact me
        </button>
      </nav>

      {showContact && (
        <Contact onClose={() => setShowContact(false)} />
      )}
    </>
  );
};

export default NavBar;