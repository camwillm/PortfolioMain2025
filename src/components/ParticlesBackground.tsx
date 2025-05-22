import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";
import "./ParticlesBackground.scss";

type ParticlesBackgroundProps = {
  id?: string;
};

const ParticlesBackground = ({ id = "tsparticles" }: ParticlesBackgroundProps) => {
  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: "#070014" // Deep galaxy navy
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 500,
        density: {
          enable: true,
          area: 900
        }
      },
      color: {
        value: [
          "#6e6e85",
          "#5a5a80",
          "#7c7c9c",
          "#646480", 
          "#8a8aa8", 
          "#a0a0c0"  
        ]
      },      
      shape: {
        type: "circle"
      },
      opacity: {
        value: {
          min: 0.2,
          max: 0.5
        },
        random: {
          enable: true,
          minimumValue: 0.2
        }
      },
      size: {
        value: {
          min: 0.5,
          max: 2.5
        },
        random: true
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out"
        }
      }
    },
    detectRetina: true,
    interactivity: {
      events: {
        onHover: {
          enable: false
        },
        onClick: {
          enable: false
        }
      },
      modes: {}
    }
  }), []);

  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="particles-container">
      <Particles id={id} init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesBackground;
