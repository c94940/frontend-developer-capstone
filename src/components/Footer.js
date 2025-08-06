import { Link } from "react-router-dom";
import "./Footer.css";
import logo from '../assets/Logo.svg';

const Footer = () => {
    return (
        <footer className="footer" aria-label="Footer">
            <div className="logo-container">
                <img src={logo} alt="Little Lemon logo" />
            </div>
            <div className="footer-container" aria-label="Footer navigation">
                <h5 id="nav-heading">Navigation</h5>
                <ul aria-labelledby="nav-heading">
                    <li><Link to="/" aria-label="Home page">Home</Link></li>
                    <li><a href="#" aria-label="About page">About</a></li>
                    <li><a href="#" aria-label="Menu page">Menu</a></li>
                    <li><Link to="/reservations" aria-label="Reservations page">Reservations</Link></li>
                    <li><a href="#" aria-label="Order online page">Order Online</a></li>
                    <li><a href="#" aria-label="Login page">Login</a></li>
                </ul>
            </div>
            <div className="footer-container">
                <h5 id="contact-heading">Contact</h5>
                <ul aria-labelledby="contact-heading">
                    <li>123 Easy St, San Diego, CA, 92107</li>
                    <li><a href="tel:+16195555555" aria-label="Phone number">+1 (619) 555-5555</a></li>
                    <li><a href="mailto:info@littlelemon.com" aria-label="Email address">info@littlelemon.com</a></li>
                </ul>
            </div>
            <div className="footer-container">
                <h5 id="social-heading">Social Media</h5>
                <ul aria-labelledby="social-heading">
                    <li><a href="#" aria-label="Visit our Facebook page">Facebook</a></li>
                    <li><a href="#" aria-label="Visit our Instagram page">Instagram</a></li>
                    <li><a href="#" aria-label="Visit our TikTok page">TikTok</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;