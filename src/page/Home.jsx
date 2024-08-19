import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Projets from "../components/Projects";
import Modal from "../components/Modal";
import Contact from "../components/Contact";
import APropos from "../components/APropos";

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
      <Projets />
      <Modal />
      <Contact />
    </div>
  );
};

export default Home;
