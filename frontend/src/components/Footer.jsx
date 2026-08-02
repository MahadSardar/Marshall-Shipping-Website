import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col company-info">
                        <h3>Marshall Shipping Pakistan (Pvt.) Ltd.</h3>
                        <p>Delivering excellence across the globe. Your trusted partner in logistics and supply chain solutions.</p>
                        <p className="mt-2">We specialize in providing efficient, reliable, and cost-effective shipping services tailored to meet your unique business needs.</p>
                    </div>

                    <div className="footer-col contact-info1">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <span className="icon"><FontAwesomeIcon icon={faLocationDot} /></span>
                                Suite 809, 8th Floor, kawish crown plaza,Karachi
                            </li>
                            <li>
                                <span className="icon"><FontAwesomeIcon icon={faPhone} /></span>
                                +1 (555) 123-4567
                            </li>
                            <li>
                                <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                                support@marshall.cc
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col social-links">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <li>
                                <span><FontAwesomeIcon icon={faInstagram} /></span>
                                <a href="#" className="social-icon"> Instagram</a>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faFacebook} /> </span>
                                <a href="#" className="social-icon"> Facebook</a>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faLinkedin} /></span>
                                <a href="#" className="social-icon"> LinkedIn</a>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faXTwitter} /></span>
                                <a href="#" className="social-icon"> Twitter</a></li>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Marshall Shipping Pakistan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
