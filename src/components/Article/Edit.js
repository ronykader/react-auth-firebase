import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [vfiInput, setVfi] = useState([]);
  const [errorInput, setError] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8001/api/v2/articles/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setVfi(response.data.data);
          setLoading(false);
        } else if (response.status === 404) {
          swal("Error", response.data.message, "error");
          navigate("/");
        }
      });
  }, [navigate]);

  const handleInput = (e) => {
    e.persist();
    setVfi({ ...vfiInput, [e.target.name]: e.target.value });
  };

  const handleArticleUpdate = (e) => {
    e.preventDefault();
    const data = {
      title: vfiInput.title,
      article: vfiInput.article,
    };
    axios
      .put(`http://127.0.0.1:8001/api/v2/articles/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          swal("Success!", res.data.message, "success");
          setError([]);
          navigate("/article");
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          swal("All fields are mandetory", "", "error");
          setError(error.response.data.validationErrors);
        }
      });
  };

  return (
    <div>
      <h1>Create Articles</h1>
      {loading ? (
        "Loading"
      ) : (
        <form onSubmit={handleArticleUpdate}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleInput}
              value={vfiInput.title ?? ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hello titile of article"
            />
            {/* <span className="text-red-700">{inputdata.error_list.title}</span> */}
          </div>
          <div className="mb-6">
            <label
              htmlFor="article"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Article
            </label>
            <textarea
              rows="4"
              onChange={handleInput}
              name="article"
              value={vfiInput.article}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
            {/* <span className="text-red-700">{inputdata.error_list.article}</span> */}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Article
          </button>
        </form>
      )}
    </div>
  );
};

export default Edit;
