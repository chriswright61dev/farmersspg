import React from "react";
import "./VenueStreetView.css";
function VenueStreetView(props) {
  return (
    <div className="venue_street-view">
      <iframe
        title={props.title}
        src={props.src}
        width="100%"
        height="400"
        frameborder="0"
        // width={props.width}
        // height={props.height}
        // frameborder={props.frameborder}
        // style="border:0"
      />
    </div>
  );
}

export default VenueStreetView;
