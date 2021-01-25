import React from "react";
import "./NewsItems.css";
function NewsItems(props) {
  console.log("news", props.data);

  return (
    <div
      className="newsbody"
      dangerouslySetInnerHTML={{ __html: props.data }}
    />
  );
}

export default NewsItems;
