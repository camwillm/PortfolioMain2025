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
            color: "#0a0114"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: 150,
                density: { enable: true, area: 1000 }
            },
            color: {
                value: [
                    "#ffffff",
                    "#b4d2ff",
                    "#d1bfff",
                    "#a259ff",
                    "#7e5bef"
                ]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: { min: 0.1, max: 0.6 }
            },
            size: {
                value: { min: 0.5, max: 2.5 },
                random: true
            },
            move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" }
            }
        },
        detectRetina: true,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble"
                }
            },
            modes: {
                bubble: {
                    distance: 100,
                    duration: 2,
                    size: 4,
                    opacity: 0.8
                }
            }
        }
    }), []);

    const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
        await loadSlim(engine);
    }, []);

    return <Particles id={id} init={particlesInit} options={options} />;
};

export default ParticlesBackground;
