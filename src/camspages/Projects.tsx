import ParticlesBackground from "../components/ParticlesBackground";
import './Projects.scss';
import { GiBearFace } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

const projects = [
  {
    title: "The Bear Rooms",
    description: "iOS-style web app that helps students find and join campus housing groups with personalized profile matching and live previews.",
    tech: ["React", "Vite", "SCSS", "TypeScript"],
    githubStars: "★ 1",
    link: "https://github.com/camwillm/ThebearRooms",
    icon: GiBearFace,
    image: null
  },
  {
    title: "Portfolio Website",
    description: "A web app built with React that helps users reduce food waste by distributing extra food. Developed for Morgan Hacks 2024.",
    tech: ["React", "TypeScript", "Vite", "SCSS", "AWS"],
    githubStars: "★ 1",
    link: "https://github.com/camwillm/PortfolioMain2025",
    icon: CgWebsite,
    image: null
  },
  {
  title: "Food Fix",
  description: "A React-based web app developed for Morgan Hacks 2024 to combat food waste by helping users discover extra food using ingredients companies have in excess.",
  tech: ["React"],
  githubStars: "★ 1",
  link: "https://github.com/camwillm/FOOD-FIX---Morgan-hacks-2024",
  icon: CgWebsite,
  image: null
    }

];

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <ParticlesBackground />

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              ) : project.icon ? (
                <div className="project-icon">
                  {project.icon && <project.icon size={64} />}
                </div>
              ) : null}

              <div className="project-content">
                <h3>{project.title} <span>↗</span></h3>
                <p>{project.description}</p>
                <p className="stars">{project.githubStars}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <a
          href="https://github.com/camwillm?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="archive-link"
        >
          View Full Project Archive →
        </a>
      </section>
    </div>
  );
}
