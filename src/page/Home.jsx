import Header from "../components/Header";
import Projets from "../components/Projets";
import Modal from "../components/Modal"
import Particle from "../components/Particle"
import React from "react";

const Home = () => {
  return (
    <div className="cursor-custom">
      <div className="container">
      <Particle/>
        <Header />
        <Projets />
        <Modal />
        
      </div>
    </div>
  );
};

export default Home;
