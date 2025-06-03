import {
  SiJavascript, SiPython, SiRust, SiZig,
  SiHtml5, SiCss3, SiReact, SiTailwindcss,
  SiDocker, SiSupabase, SiPostgresql, SiGithub
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import ParticlesBackground from "../components/ParticlesBackground";
import "./resume.scss";

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <ParticlesBackground />
      <h1 className="resume-title">Resume</h1>



      <div className="resume-line">
        <div className="resume-entry">
          <div className="dot" style={{ backgroundColor: "#a259ff" }}></div>
          <div className="resume-content">
            <h2>Timeline</h2>
            <div className="entry-group">
              <div>
                <strong>MASTERMND</strong> <span className="date">2023 – Present</span>
                <em>Software Development Intern</em>
                <ul>
                  <li>Built & maintained web apps using Node.js, React, and AWS.</li>
                </ul>
              </div>
              <div>
                <strong>Landscaping Business</strong> <span className="date">2017 – 2024</span>
                <em>Owner/Operator</em>
                <ul><li>Ran a 50+ client operation from scratch in Baltimore.</li></ul>
              </div>
              <div>
                <strong>Morgan State University</strong> <span className="date">2023 – 2026</span>
                <em>B.S. in Computer Science</em>
              </div>
              <div>
                <strong>CCBC</strong> <span className="date">2021 – 2023</span>
                <em>Dual Enrollment – General Education</em>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-entry">
          <div className="dot" style={{ backgroundColor: "#a259ff" }}></div>
          <div className="resume-content">
            <h2>Skills</h2>

            <div className="skill-group">
              <h3>Programming Languages</h3>
              <ul className="skill-icons">
                <li><SiPython /> Python</li>
                <li><SiJavascript /> JavaScript</li>
                <li><FaJava /> Java</li>
                <li><SiRust /> Rust</li>
                <li><SiZig /> Zig</li>
              </ul>
            </div>

            <div className="skill-group">
              <h3>Web Development</h3>
              <ul className="skill-icons">
                <li><SiHtml5 /> HTML</li>
                <li><SiCss3 /> CSS</li>
                <li><SiReact /> ReactJS</li>
                <li><SiTailwindcss /> Tailwind</li>
                <li><BsFiletypeScss /> SCSS</li>
              </ul>
            </div>

            <div className="skill-group">
              <h3>Cloud & Tooling</h3>
              <ul className="skill-icons">
                <li><SiDocker /> Docker</li>
                <li><SiSupabase /> Supabase</li>
                <li><SiPostgresql /> PostgreSQL</li>
                <li><FaAws /> AWS</li>
                <li><SiGithub /> GitHub</li>
              </ul>
            </div>
  
          <a
  href="/Cameron_Williams_Resume.pdf"
  download
  className="resume-download"
>
  <AiOutlineDownload style={{ marginRight: "0.5rem" }} />
  Download PDF
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
