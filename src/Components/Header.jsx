import Link from "next/link"
import "../Styles/Header.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

    return(
        <>
  <div className="container1_Header">
    <div className="row1_Header">
      <div className="col1_Header">
       <img src="./images/Transbolt-logo.png" width={230} alt="Transbolt-logo" />
      </div>


             {/* Hamburger Icon for Mobile */}
        <div className="col3_Header" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div
          className={`col2_Header ${menuVisible ? "visible" : "hidden"}`}
        >
      <ul className="menu">
        <li><Link href="/">Home</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span>About Us</span>

          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link href="/About">Leadership</Link></li>
              <li><Link href="/CompanyProfile">Company Profile</Link></li>
            </ul>
          )}
        </li>

        <li><Link href="/Solutions">Solutions</Link></li>
        <li><Link href="/Services">Services</Link></li>
        <li><Link href="/Projects">Projects</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>
    </div>
 </div>
  </div>
        </>
    )
}
