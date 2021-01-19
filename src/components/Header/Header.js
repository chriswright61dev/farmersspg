import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderVenueDescription from "./HeaderVenueDescription";

function Header() {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderVenueDescription />
    </div>
  );
}

export default Header;
