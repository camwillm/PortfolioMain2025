import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
