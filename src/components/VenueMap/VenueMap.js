import React from "react";
import "./VenueMap.css";
function VenueMap(props) {
  return (
    <div className="venue_map">
      <iframe
        title={props.title}
        src={props.src}
        width={props.width}
        height={props.height}
        frameborder={props.frameborder}
        // style="border:0"
      />
    </div>
  );
}

export default VenueMap;
