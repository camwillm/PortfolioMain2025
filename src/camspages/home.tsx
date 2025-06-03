import "./Home.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  return (
      <section className="home-page">
      <ParticlesBackground />
        <div className="hero-container">
          <div className="intro-text">
            <h1>Hey, I'm Cameron Williams</h1>
            <p>
              A dedicated software developer with a passion for building elegant web applications, health technologies, and financial solutions—committed to delivering seamless user experiences and addressing real-world challenges through innovative code.
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
                words={[`camwillm = {\n  fullstack: true,\n  frontend: ['React', 'Tailwind'],\n  backend: ['Node.js', 'Supabase'],\n  learning: ['Zig', 'Rust'],\n  experience: {\n    years: 3,\n    internships: ['MASTERMND'],\n  },\n  tools: ['Git', 'Docker', 'AWS'],\n  preferredEditor: 'VSCode',\n  status: '🚀 Ready to build'\n};`]}
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
