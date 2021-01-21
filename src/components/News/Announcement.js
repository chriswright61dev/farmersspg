import React from "react";
import "./Announcement.css";
function Announcement(props) {
  return (
    <div className="announcement">
      <h3>{props.data}</h3>
    </div>
  );
}

export default Announcement;
