import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h3>Articel</h3>
            </div>
            <div className="col-4">
              <div className="search-category-tag">
                <div className="search">
                  <h2>Search</h2>
                  <div className="form-group">
                    <input
                      
                      className="form-control"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-block">
                      Search
                    </button>
                  </div>
                </div>
                <div className="popular-artical">
                  <div className="title">
                    <h3>Popular Artical</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
