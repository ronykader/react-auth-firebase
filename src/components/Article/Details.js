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
    <div>
      <h1>{article.title}</h1>
      <hr />
      <p>{article.article}</p>
    </div>
  );
};

export default Details;
