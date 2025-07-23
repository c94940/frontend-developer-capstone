import "./Footer.css";
import logo from '/Users/chriswilliams/Desktop/dev/coursera/frontend-development/capstone/src/assets/Logo.svg';

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="Little Lemon logo" />
            </div>
            <div className="footer-links">
                <div className="footer-section">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>123 Easy St, San Diego, CA, 92107</li>
                        <li>+1 (619) 555-5555</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;