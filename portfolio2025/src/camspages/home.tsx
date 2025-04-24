import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
    return (
        <section className="home-page">
            <div className="social-sidebar fixed">
                <a href="https://github.com/camwillm" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/camwillm" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/camwillm" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://leetcode.com/your_leetcode" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
            </div>

            <div className="intro-text">
                <h1>Hey, I'm Cameron Williams</h1>
                <p>
                    A software developer passionate about building elegant web applications,
                    crafting smooth user experiences, and solving real-world problems with code.
                </p>
                <Link to="/projects" className="explore-btn">
                    Explore Projects <FaArrowRight className="icon" />
                </Link>
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
