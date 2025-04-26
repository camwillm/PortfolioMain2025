import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./SocialSideBar.scss";

const SocialSidebar = () => {
    return (
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
            <a href="https://instagram.com/camwillm" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://leetcode.com/your_leetcode" target="_blank" rel="noopener noreferrer">
                <SiLeetcode />
            </a>
        </div>
    );
};

export default SocialSidebar;
