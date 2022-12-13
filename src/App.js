import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./components/Article/Article";
import Create from "./components/Article/Create";
import Details from "./components/Article/Details";
import Edit from "./components/Article/Edit";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <div>
      <Header />

      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="/article/create" element={<Create />} />
            <Route path="/article/:id" element={<Details />} />
            <Route path="/article/edit/:id" element={<Edit />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
