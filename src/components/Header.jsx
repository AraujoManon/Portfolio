import React from "react";
import { useSelector } from "react-redux";
import ToggleButton from "./ToggleButton";
import lightOwl from "../assets/images/lightOwl.svg";
import darkOwl from "../assets/images/darkOwl.svg";
import Typewriter from "./Typewriter";


const Header = () => {
  const isActive = useSelector((state) => state.button.isActive);

  return (
    <header className={isActive ? "active" : ""}>
      <div className="text">
        <h1 className={isActive ? "active" : ""}>Bienvenue !</h1>
        <p className={isActive ? "active" : "title-description"}>
          <Typewriter
            text="Sur le portfolio d'une développeuse web passionnée, spécialisée dans la création de sites responsives performants. Avec une maîtrise des technologies telles que HTML, CSS, JavaScript, et React, je suis déterminée à développer des solutions innovantes tout en optimisant le référencement (SEO) des projets. Mon expertise comprend également l'utilisation de Redux pour la gestion d'état, ainsi que la gestion de versions avec Git & GitHub. Découvrez-moi !"
            delay={50}
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
