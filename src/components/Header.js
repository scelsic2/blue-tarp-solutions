import logo from "../assets/logo.png";
import "boxicons";
import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const navigate = useNavigate();

  const handleAbout = () => {
    navigate('/about')
  }

  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="Blue Tarp Solutions Logo" className="logo" />
      </a>

      <div className="header-nav-wrapper">
        <nav className="hamburger-nav" onClick={toggleMenu}>
          <a className="hamburger">
            <box-icon name="menu" color="var(--logo-gold)"></box-icon>
          </a>
        </nav>

        <nav className={`header-nav ${isOpen ? "is-open" : ""}`}>
          <a href="/about" className="header-text" onClick={handleAbout}>
            <p>About Us</p>
          </a>
          <a href="/whatwedo" className="header-text">
            <p>What We Do</p>
          </a>
          <a href="/howwedoit" className="header-text">
            <p>How We Do It</p>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
