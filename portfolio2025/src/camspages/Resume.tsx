import React from "react";
import "./Resume.scss";

const Resume = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <p>| Baltimore, MD, 21128 | camwillmofficial@gmail.com |</p>

            <section className="resume-section">
                <h2>Summary</h2>
                <p>
                    A motivated computer science student with a 3.51 GPA at Morgan State University. Experienced in full-stack development,
                    cloud deployment, and Agile methodologies. Passionate about building impactful, scalable solutions in team environments.
                </p>
            </section>

            <section className="resume-section">
                <h2>Education</h2>
                <div className="resume-item">
                    <h3>Morgan State University</h3>
                    <p>Bachelor of Computer Science: Software Development – May 2026</p>
                </div>
                <div className="resume-item">
                    <h3>The Community College of Baltimore County</h3>
                    <p>General Education: Dual Enrollment – May 2023</p>
                </div>
            </section>

            <section className="resume-section">
                <h2>Programming Skills</h2>
                <ul className="skills-list">
                    <li><strong>Programming Languages:</strong> Python, JavaScript, Java, SQL, Rust, Zig</li>
                    <li><strong>Web Development:</strong> HTML, CSS, ReactJS, Tailwind, SCSS, REST APIs, Web Services</li>
                    <li><strong>Developer Tooling:</strong> Git, GitHub, Docker</li>
                    <li><strong>Databases and Cloud:</strong> MySQL, Supabase, PostgreSQL, AWS</li>
                </ul>
            </section>

            <section className="resume-section">
                <h2>Work Experience</h2>
                <div className="resume-item">
                    <h3>Intern – MASTERMND</h3>
                    <p>May 2023 – Present | Upper Marlboro, MD</p>
                    <ul>
                        <li>Developed and managed 3 web applications using Node.js, React, and SCSS.</li>
                        <li>Integrated backend services with AWS, including EC2, S3, and RDS.</li>
                        <li>Participated in Agile sprints, contributing to planning, development, and retrospectives.</li>
                    </ul>
                </div>

                <div className="resume-item">
                    <h3>Waiter – Kobe Steaks Japanese Restaurant</h3>
                    <p>Feb 2025 – Present | White Marsh, MD</p>
                    <ul>
                        <li>Delivered exceptional customer service, managing large parties up to 20 guests.</li>
                        <li>Recommended high-margin items to maximize sales and guest satisfaction.</li>
                    </ul>
                </div>

                <div className="resume-item">
                    <h3>Owner/Operator – Landscaping Business</h3>
                    <p>Apr 2017 – Jan 2024 | Baltimore, MD</p>
                    <ul>
                        <li>Founded and operated a landscaping business with 50+ recurring clients.</li>
                        <li>Managed all aspects from scheduling to invoicing and service delivery.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Resume;
