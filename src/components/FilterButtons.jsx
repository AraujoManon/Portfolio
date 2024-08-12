import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/reducers/FilterSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.filter.filter);
  const isActive = useSelector((state) => state.button.isActive); 

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="filter-buttons">
      <button
        onClick={() => handleFilterChange("all")}
        className={`drop-button ${selectedFilter === "all" ? "selected" : ""} ${selectedFilter === "all" && isActive ? "active" : ""}`}
      >
        Tous
      </button>
      <button
        onClick={() => handleFilterChange("html")}
        className={`drop-button ${selectedFilter === "html" ? "selected" : ""} ${selectedFilter === "html" && isActive ? "active" : ""}`}
      >
        HTML
      </button>
      <button
        onClick={() => handleFilterChange("redux")}
        className={`drop-button ${selectedFilter === "redux" ? "selected" : ""} ${selectedFilter === "redux" && isActive ? "active" : ""}`}
      >
        Redux
      </button>
      <button
        onClick={() => handleFilterChange("react")}
        className={`drop-button ${selectedFilter === "react" ? "selected" : ""} ${selectedFilter === "react" && isActive ? "active" : ""}`}
      >
        React
      </button>
      <button
        onClick={() => handleFilterChange("javascript")}
        className={`drop-button ${selectedFilter === "javascript" ? "selected" : ""} ${selectedFilter === "javascript" && isActive ? "active" : ""}`}
      >
        JavaScript
      </button>
      <button
        onClick={() => handleFilterChange("gestion de projet")}
        className={`drop-button ${selectedFilter === "gestion de projet" ? "selected" : ""} ${selectedFilter === "gestion de projet" && isActive ? "active" : ""}`}
      >
        Gestion de Projet
      </button>
      <button
        onClick={() => handleFilterChange("seo")}
        className={`drop-button ${selectedFilter === "seo" ? "selected" : ""} ${selectedFilter === "seo" && isActive ? "active" : ""}`}
      >
        SEO
      </button>
    </div>
  );
};

export default FilterButtons;
