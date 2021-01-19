import React from "react";
import "./HeaderLogo.css";
function HeaderLogo(props) {
  return (
    <div className="header_logo">
      <img src={props.logo} alt={props.name} />
    </div>
  );
}

export default HeaderLogo;
