import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="nav" aria-label="Main navigation">
            <ul className="nav-list">
                <li><Link to="/" aria-label="Home page">Home</Link></li>
                <li><Link to="/about" aria-label="About page">About</Link></li>
                <li><Link to="/menu" aria-label="Menu page">Menu</Link></li>
                <li><Link to="/reservations" aria-label="Reservations page">Reservations</Link></li>
                <li><Link to="/order-online" aria-label="Order online page">Order Online</Link></li>
                <li><Link to="/login" aria-label="Login page">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;