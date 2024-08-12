import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Projets from "../components/Projects";
import Modal from "../components/Modal";
import Particle from "../components/Particle";
import Contact from "../components/Contact";

const Home = () => {
  const isActive = useSelector((state) => state.button.isActive);

  return (
    <div className={`container ${isActive ? 'cursor-custom-active' : 'cursor-custom'}`}>
      <Particle />
      <Header />
      <Projets />
      <Modal />
      <Contact />
    </div>
  );
};

export default Home;
