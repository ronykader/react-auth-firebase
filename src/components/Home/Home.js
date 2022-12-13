import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoadin] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8001/api/v2/articles").then((response) => {
      if (response.status === 200) {
        setArticles(response.data.data);
        setLoadin(false);
      }
    });
  }, []);

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 mx-auto max-w-6xl pt-20">
      {loading ? (
        "Loading..."
      ) : (
        <div className="col-start-1">
          {articles.map((article, index) => {
            return (
              <div key={article.id}>
                <h1 className="text-5xl font-extrabold dark:text-white pb-10">
                  {article.title.substring(0, 1)}.
                  <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </small>
                </h1>
                <div className="content">
                  <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    {article.article}
                  </p>
                  <strong>{article.createdAt}</strong>
                </div>
                <hr className="mt-10 pb-10" />
              </div>
            );
          })}
        </div>
      )}

      <div className="col-start-2">Sidebar dummy content</div>
    </div>
  );
};

export default Home;
