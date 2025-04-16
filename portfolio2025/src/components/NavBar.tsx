import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">
                <Link to="/">MyPortfolio</Link>
            </h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
