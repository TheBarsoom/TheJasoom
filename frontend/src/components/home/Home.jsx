import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import PopularArtical from "./PopularArtical";
import { FaChevronRight } from "react-icons/fa";
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
                    <button className="btn btn-block">Search</button>
                  </div>
                </div>
                <div className="popular-artical">
                  <div className="title">
                    <h3>Popular Artical</h3>
                  </div>
                  <PopularArtical />
                </div>
                <div className="category">
                  <div className="title">
                    <h3>Category</h3>
                  </div>
                  <ul className="cate-list">
                    <div className="cate-item">
                      <li>
                        <FaChevronRight />
                        <Link to="/">Link</Link>
                      </li>
                      <span>1</span>
                    </div>
                  </ul>
                </div>

                <div className="tag">
                  <div className="title">
                    <h3>Tag</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to={`/artical/tag/`}>Tag Link</Link>
                    </li>
                  </ul>
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
