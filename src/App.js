import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <div>
      <Header />

      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-3 sm:pt-38 sm:pb-4">
              <div>
                <div>
                  <div className="grid grid-flow-col">
                    <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                      <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/article" element={<Article />} />
                        <Route
                          path="/registration"
                          element={<Registration />}
                        />
                        <Route path="/login" element={<Login />} />
                      </Routes>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
