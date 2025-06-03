import ParticlesBackground from "../components/ParticlesBackground";
import './Projects.scss';

const projects = [
  {
    title: "The Bear Rooms",
    description: "iOS-style web app that helps students find and join campus housing groups with personalized profile matching and live previews.",
    tech: ["React", "Vite", "SCSS", "TypeScript"],
    githubStars: "★ 1", // update if needed
    link: "https://github.com/camwillm/ThebearRooms",
    image: "/project-thumbnails/bear-rooms.png", // ensure this image exists
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and SCSS, deployed on AWS with custom domain support and animated UI components.",
    tech: ["React", "TypeScript", "Vite", "SCSS", "AWS"],
    githubStars: "★ 3", // update if needed
    link: "https://github.com/camwillm/PortfolioMain2025",
    image: "/project-thumbnails/portfolio.png", // ensure this image exists
  },
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
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
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
