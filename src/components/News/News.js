import React from "react";
import "./News.css";

import NewsItems from "./NewsItems";
function News(props) {
  return (
    <div className="news">
      {props.data.map((news) => {
        return <NewsItems key={news.nid} data={news.body} />;
      })}
    </div>
  );
}

export default News;
