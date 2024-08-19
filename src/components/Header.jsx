import React from "react";
import { useSelector } from "react-redux";
import ToggleButton from "./ToggleButton";
import lightOwl from "../assets/images/lightOwl.svg";
import darkOwl from "../assets/images/darkOwl.svg";
import Typewriter from "./Typewriter";
import Nav from "./Nav";


const Header = () => {
  const isActive = useSelector((state) => state.button.isActive);

  return (
    <header className={isActive ? "active" : ""}>
      <Nav />
      <div className="text">
        <h1 className={isActive ? "active" : ""}>Bienvenue !</h1>
        <p className={isActive ? "active" : "title-description"}>
          <Typewriter
            text="Chez une développeuse Web en pleine croissance, prête à révolutionner vos projets avec des solutions innovantes et percutantes !"
            delay={30}
            infinite={false}
          />
        </p>
      </div>
      <div className="container-header-button">
        <div className={`owl ${isActive ? "active" : ""}`}>
          <img src={lightOwl} alt="Light Owl Icon" />
          <img src={darkOwl} alt="Dark Owl Icon" />
        </div>
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
