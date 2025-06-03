import ParticlesBackground from "../Components/ParticlesBackground";
import './Projects.scss';

const projects = [
  {
    title: "Roommate Matcher",
    description: "Web app that helps students find compatible roommates and affordable housing using search by budget, compatibility scores, and more.",
    tech: ["React", "TypeScript", "Vite", "SCSS", "LocalStorage"],
    githubStars: "★ 24",
    link: "https://github.com/camwillm/roommate-matcher",
    image: "/project-thumbnails/roommate.png", // update to match actual file path
  },
  {
    title: "Zig HTML Table Extractor",
    description: "A Zig-based CLI tool to extract HTML tables to CSVs with both sequential and multithreaded modes. Includes Docker support and timing logs.",
    tech: ["Zig", "Docker", "CSV", "Multithreading"],
    githubStars: "★ 8",
    link: "https://github.com/camwillm/zig-html-table-extractor",
    image: "/project-thumbnails/zig-extractor.png",
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
