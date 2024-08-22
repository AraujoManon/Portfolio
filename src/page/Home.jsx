import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Projets from "../components/Projects";
import Contact from "../components/Contact";
import APropos from "../components/APropos";
import Modal from "../components/Modal";
const Home = () => {
  const isActive = useSelector((state) => state.button.isActive);

  return (
    <div
      className={`container ${
        isActive ? "cursor-custom-active" : "cursor-custom"
      }`}
    >
      <Header />
      <APropos />
     <Modal />
      <Projets />
      <Contact />
    </div>
  );
};

export default Home;
