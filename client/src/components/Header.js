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
    <header className={`header ${isOpen ? "is-open" : ""}`}>
      <a href="/">
        <img src={logo} alt="Blue Tarp Solutions Logo" className="logo" />
      </a>

      <div className='header-nav-wrapper'>
        <nav className="hamburger-nav" onClick={toggleMenu}>
          <a className={`hamburger ${isOpen ? "hide-me" : ""}`}>
            <box-icon name="menu" color="var(--logo-gold)"></box-icon>
          </a>
          <a className={`hamburger ${isOpen ? "show-me" : ""} hide-me`}>
            <box-icon name="x" color="var(--logo-gold)"></box-icon>
          </a>
        </nav>

        <nav className={`header-nav ${isOpen ? "is-open" : ""}`}>
          <NavLink to="/about" className="header-text" onClick={handleAbout}>
            <p>About Us</p>
          </NavLink>
          <NavLink to="/whatwedo" className="header-text">
            <p>What We Do</p>
          </NavLink>
          <NavLink to="/howwedoit" className="header-text">
            <p>How We Do It</p>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
