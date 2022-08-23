import React, { useState, useEffect } from 'react';
import "../index.css";
import "../assets/css/category.css";
import axios from "axios";
// import { allMovies } from "../utils/ApiRoutes";

function Category() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await axios.get("http://localhost:5000/offline");
      setMovies(moviesData.data);
    }
    fetchMovies();
  }, []);

  console.log(movies);
  
  return (
    <section className="category">
      <div className="container">
        <div className="row">
          <button>
            All
          </button>
          {
            movies.map((Category, index) => (
              <button key={index}>
                {Category.category}
              </button>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Category