import React, { useEffect, useState } from "react";
import "./News.css";

import NewsItems from "./NewsItems";
import Announcement from "./Announcement";

function News() {
  const [newsState, setNewsState] = useState({
    loading: false,
    newsData: null,
  });

  useEffect(() => {
    setNewsState({ loading: true });
    const newsApiUrl = "http://levenshulmelife.com/drupal9//news-farmers-api";
    fetch(newsApiUrl)
      .then((res) => res.json())
      .then((loadedData) => {
        setNewsState({ loading: false, newsData: loadedData });
      });
  }, [setNewsState]);

  const ns = newsState.newsData;
  if (ns) {
    const announcements = ns.filter((news) => news.field_announcement);
    const newsitems = ns.filter((news) => news.body);

    return (
      <>
        <Announcement data={announcements} />
        <NewsItems data={newsitems} />
      </>
    );
  } else {
    return "loading";
  }
}

export default News;
