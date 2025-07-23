import Nav from './Nav';
import logo from '/Users/chriswilliams/Desktop/dev/coursera/frontend-development/capstone/src/assets/Logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Little Lemon logo"/>
            </div>
            <Nav />
        </header>
    );
};

export default Header;