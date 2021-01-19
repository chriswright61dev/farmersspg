import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderVenueDescription from "./HeaderVenueDescription";

function Header(props) {
  return (
    <div className="header">
      <HeaderLogo logo={props.logo} />
      <HeaderVenueDescription description={props.description} />
    </div>
  );
}

export default Header;
