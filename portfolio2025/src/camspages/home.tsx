import "./Home.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="home-page">
      <div className="hero-container">
        <div className="intro-text">
          <h1>Hey, I'm Cameron Williams</h1>
          <p>
            A software developer passionate about building elegant web applications,
            crafting smooth user experiences, and solving real-world problems with code.
          </p>
          <div className="button-group">
            <Link to="/projects" className="explore-btn">
              Explore Projects <FaArrowRight className="icon" />
            </Link>
            <Link to="/resume" className="explore-btn">
              Explore Resume <FaArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <div className="code-profile-box">
          <pre>
            <Typewriter
              words={[`CameronWilliams = {\n  fullstack: true,\n  frontend: ['React', 'Tailwind'],\n  backend: ['Node.js', 'Supabase'],\n  learning: ['Zig', 'Rust'],\n  experience: {\n    years: 3,\n    internships: ['MASTERMND'],\n  },\n  tools: ['Git', 'Docker', 'AWS'],\n  preferredEditor: 'VSCode',\n  status: '🚀 Ready to build'\n};`]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={40}
              deleteSpeed={22}
              delaySpeed={3000}
            />
          </pre>
        </div>
      </div>

      <div className="background-visual">
        <div className="blur-circle circle1"></div>
        <div className="blur-circle circle2"></div>
        <div className="blur-circle circle3"></div>
      </div>
    </section>
  );
};

export default Home;
