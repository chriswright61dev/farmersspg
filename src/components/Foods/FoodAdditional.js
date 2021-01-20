import React from "react";

function FoodAdditional(props) {
  return props.description ? (
    <div className="food__additional_body">
      {props.description}
      <span className="additionPrice">{props.priceDescription}</span>
    </div>
  ) : null;
}

export default FoodAdditional;
