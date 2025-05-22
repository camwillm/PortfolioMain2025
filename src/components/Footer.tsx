import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Cameron Williams. All rights reserved.</p>
        <p className="footer-credit">
          Built with 💻 React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
