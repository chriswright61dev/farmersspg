import React from "react";
import "./HeaderVenueDescription.css";
function HeaderVenueDescription(props) {
  return <div className="header-venue-description">{props.description}</div>;
}

export default HeaderVenueDescription;
