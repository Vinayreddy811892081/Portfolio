import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Particle() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60, // reduced for performance
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: "#fbd9ad",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.4,
            random: true,
          },

          size: {
            value: { min: 1, max: 3 },
          },

          links: {
            enable: true,
            distance: 120,
            color: "#b77cff",
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },

          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 3,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
