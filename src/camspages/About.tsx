import "./About.scss";

const About = () => {
    return (
        <div className="about-page">
            <h1>About Me</h1>
            <p className="about-intro">
                I'm Cameron Williams — a passionate software developer, real estate enthusiast, finance student, and entrepreneur. I love creating digital solutions, exploring new industries, and building businesses that solve real-world problems.
            </p>

            <section className="about-section">
                <h2>Software Development, Real Estate, and Finance</h2>
                <p>
                    As a computer science student, I specialize in building modern web applications using React, TypeScript, and cloud technologies. I'm equally passionate about real estate — studying property investment strategies and markets — and finance, where I constantly seek to understand wealth-building and smart money management principles.
                </p>
            </section>

            <section className="about-section">
                <h2>Hobbies</h2>
                <p>
                    Outside of work and academics, you’ll find me skating at local parks, diving into computer hardware projects, or enjoying competitive sports. Skating sharpens my focus, tinkering with computers satisfies my curiosity, and sports fuel my competitive drive.
                </p>
            </section>

            <section className="about-section">
                <h2>Business</h2>
                <p>
                    I founded and successfully operated a landscaping business, serving over 50 clients regularly. Running my own company taught me resilience, customer relationship management, and how to scale operations. I carry this entrepreneurial spirit into every project I tackle.
                </p>
            </section>
        </div>
    );
};

export default About;
