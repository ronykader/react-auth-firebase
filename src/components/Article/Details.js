import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8001/api/v2/articles/${id}`)
      .then((response) => {
        setArticle(response.data.data);
      });
  }, []);

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 mx-auto max-w-6xl pt-20">
      <div className="col-start-1">
        <h1 className="text-5xl font-extrabold dark:text-white pb-4">
          <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
            {article.title}
          </small>
        </h1>
        <div className="content">
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {article.article}
          </p>
        </div>
      </div>

      <div className="col-start-2">Sidebar dummy content</div>
    </div>
  );
};

export default Details;
