import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Article = () => {
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
    <div>
      <h3 className="text-3xl font-bold tracking-tight sm:text-center sm:text-4xl mb-10">
        Articles
      </h3>
      {loading ? (
        "Loading"
      ) : (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  SL
                </th>
                <th scope="col" className="py-3 px-6">
                  Title
                </th>
                <th scope="col" className="py-3 px-6">
                  Article
                </th>
                <th scope="col" className="py-3 px-6">
                  Created Time
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => {
                return (
                  <tr
                    key={article.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {++index}
                    </th>
                    <td className="py-4 px-6">{article.title}</td>
                    <td className="py-4 px-6">{article.article}</td>
                    <td className="py-4 px-6">{article.created_at}</td>
                    <td className="py-4 px-6">
                      <Link
                        to={`/article/${article.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Article;
