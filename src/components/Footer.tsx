import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} NestVillas. All rights reserved.
        </p>
        <p className="footer-sub">
          Cozy Nest • Mangrove Nest • Sri Lanka
        </p>
      </div>
    </footer>
  );
};

export default Footer;
