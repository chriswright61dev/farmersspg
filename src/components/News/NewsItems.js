import React from "react";
import "./NewsItems.css";
function NewsItems(props) {
  //   console.log("news", props.data);

  return (
    <div className="news">
      {props.data.map((news) => {
        return (
          <div key={news.nid}>
            <div
              className="newsbody"
              dangerouslySetInnerHTML={{ __html: news.body }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default NewsItems;
