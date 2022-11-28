import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

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

  const handleDelete = (e, id) => {
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios
      .delete(`http://127.0.0.1:8001/api/v2/articles/${id}`)
      .then((response) => {
        if (response.status === 200) {
          swal("Deleted!", response.data.message, "success");
          thisClicked.closest("tr").remove();
        }
      });
  };

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
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                      >
                        Details
                      </Link>

                      <Link
                        to={`/article/edit/${article.id}`}
                        className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={(e) => handleDelete(e, article.id)}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
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
