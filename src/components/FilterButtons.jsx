import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/reducers/FilterSlice";


const FilterButtons = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.filter.filter);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
    
  };

  return (
    <div className="filter-buttons">
      <button
        onClick={() => handleFilterChange("all")}
        className={`drop-button ${selectedFilter === "all" ? "active" : ""}`}
      >
        Tous
      </button>
      <button
        onClick={() => handleFilterChange("html")}
        className={`drop-button ${selectedFilter === "html" ? "active" : ""}`}
      >
        HTML
      </button>
      <button
        onClick={() => handleFilterChange("redux")}
        className={`drop-button ${selectedFilter === "redux" ? "active" : ""}`}
      >
        Redux
      </button>
      <button
        onClick={() => handleFilterChange("react")}
        className={`drop-button ${selectedFilter === "react" ? "active" : ""}`}
      >
        React
      </button>
      <button
        onClick={() => handleFilterChange("javascript")}
        className={`drop-button ${selectedFilter === "javascript" ? "active" : ""}`}
      >
        JavaScript
      </button>
      <button
        onClick={() => handleFilterChange("gestion de projet")}
        className={`drop-button ${selectedFilter === "gestion de projet" ? "active" : ""}`}
      >
        Gestion de Projet
      </button>
      <button
        onClick={() => handleFilterChange("seo")}
        className={`drop-button ${selectedFilter === "seo" ? "active" : ""}`}
      >
        SEO
      </button>
    </div>
  );
};

export default FilterButtons;
