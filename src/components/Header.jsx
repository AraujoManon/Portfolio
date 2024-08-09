import React from "react";
import { useSelector } from "react-redux";
import ToggleButton from "./ToggleButton";
import lightOwl from "../assets/images/lightOwl.svg";
import darkOwl from "../assets/images/darkOwl.svg";
import Typewriter from "./Typewriter";

const Header = () => {
  const isActive = useSelector((state) => state.buttonReducer?.isActive);

  return (
    <header>
      <div className="text">
        <h1>Bienvenue !</h1>
        <p className="title-description">
          <Typewriter
            text="Oups! On dirais que vous êtes tombez sur une développeuse junior qui construis des sites responsives avec HTML, CSS, React et Redux, tout en optimisant le SEO pour que votre visibilité soit aussi éclatante qu’un feu d’artifice ! "
            delay={100}
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
