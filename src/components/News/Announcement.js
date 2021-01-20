import React from "react";

function Announcement(props) {
  return (
    <div className="announcement">
      {/* there should only be one announcement
          - use the first one  */}
      <h3>{props.data[0].field_announcement}</h3>
    </div>
  );
}

export default Announcement;
