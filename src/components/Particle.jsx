import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 


const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Charge les fonctionnalités slim de tsparticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); 
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", 
        },
      },
      fpsLimit: 120, 
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Mode d'interaction au clic
          },
          onHover: {
            enable: true,
            mode: "repulse", 
          },
        },
        modes: {
          push: {
            quantity: 4, // Quantité de particules ajoutées au clic
          },
          repulse: {
            distance: 100, // Distance de répulsion au survol
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff", 
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
          value: 400, // Nombre de particules
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
    []
  );

  if (init) {
    return (
      <div className="particle-container">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return null; 
};

export default Particle;
