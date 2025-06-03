import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { SiZig } from "react-icons/si";
import "./Navbar.scss";

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "blur" : ""}`}>
            <div className="nav-container">
                <div className="nav-logo">
    <Link to="/">
        <SiZig className="nav-icon react-icon" />
        Cam
    </Link>
</div>
                <ul className="nav-links">
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">
                            <AiOutlineHome className="nav-icon" />
                            Home
                        </Link>
                    </li>
                    <li className={location.pathname === "/about" ? "active" : ""}>
                        <Link to="/about">
                            <BsPerson className="nav-icon" />
                            About
                        </Link>
                    </li>
                    <li className={location.pathname === "/resume" ? "active" : ""}>
                        <Link to="/resume">
                            <CgFileDocument className="nav-icon" />
                            Resume
                        </Link>
                    </li>
                    <li className={location.pathname === "/projects" ? "active" : ""}>
                        <Link to="/projects">
                            <BsCodeSlash className="nav-icon" />
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
