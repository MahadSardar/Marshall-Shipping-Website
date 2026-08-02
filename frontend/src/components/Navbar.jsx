import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logoMsp from '/src/assets/logo_msp.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${location.pathname !== '/' ? 'inner-page' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
                    <img src={logoMsp} alt="Marshall Shipping logo" className="logo-mark" />
                    <span className="logo-text">
                        Marshall<span>Shipping</span>
                    </span>
                </Link>

                <div className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="/#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                    <li><a href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
                    <li><a href="/#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
                    <li><a href="/#contact" className="btn-contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
