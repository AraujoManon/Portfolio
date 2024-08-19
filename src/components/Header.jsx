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
            text="Bienvenue sur le portfolio d'une développeuse web passionnée et diplômée d'un bac+2 en développement web. Avec une maîtrise approfondie de HTML, CSS, JavaScript, ainsi que des compétences avancées en React et Redux, je conçois des sites dynamiques, intuitifs et optimisés pour le SEO. Mon objectif : allier innovation et performance pour offrir des projets à fort impact. Curieuse et en quête constante de nouvelles idées, je vous invite à plonger dans mon univers et à découvrir mon travail !"
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
