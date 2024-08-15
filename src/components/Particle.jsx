import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useSelector } from "react-redux";

const Particle = () => {
  const isActive = useSelector((state) => state.button.isActive);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Charge les fonctionnalités slim de tsparticles
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); 
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: isActive ? "linear-gradient(45deg, #87ceeb, #ffb6c1, #ffeb3b)" : "#000000", // Dégradé bleu, rose, jaune pour l'état actif
        },
      },
      fpsLimit: 120, 
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse", 
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isActive ? "#ffffff" : "#ffffff", // Couleur des particules (blanc)
        },
        links: {
          color: isActive ? "#ffeb3b" : "#ffffff", // Jaune pour les liens lorsqu'actif
          distance: 150, 
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", 
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          value: 0.5, 
        },
        shape: {
          type: "circle", 
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true, 
    }),
    [isActive] 
  );

  return (
    <div className={`particle-container ${isActive ? 'active' : ''}`}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default Particle;
