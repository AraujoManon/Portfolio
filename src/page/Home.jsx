import Header from "../components/Header";
import Projets from "../components/Projets";
import React from "react";

const Home = () => {
  return (
    <div className="cursor-custom">
      <div className="container">
        <Header />
        <Projets />
      </div>
    </div>
  );
};

export default Home;
