import Nav from './Nav';
import logo from '../assets/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header" role="banner">
            <div className="header__logo">
                <img src={logo} alt="Little Lemon logo"/>
            </div>
            <Nav className="header__nav" />
        </header>
    );
};

export default Header;