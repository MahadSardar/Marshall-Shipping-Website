import { Link } from 'react-router-dom';
import './About.css';
import aboutImg from '/src/assets/about_containers.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header2">
                    <h2>About Us</h2>
                    <p>Delivering Promises, Connecting Worlds</p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <h3>About Marshall Shipping</h3>
                        <p>
                            Marshall Shipping Pakistan (Private) Limited, founded in 1998 in Karachi, is a trusted logistics and freight forwarding company. As a recognized Master SIP operator in Pakistan, we provide reliable and efficient end-to-end shipping solutions.
                        </p>
                        <p>
                            With branches in Karachi, Lahore, and Faisalabad, our experienced team ensures your cargo is handled safely and delivered efficiently across local and global destinations.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">1998</span>
                                <span className="stat-label">Since</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">141+</span>
                                <span className="stat-label">Staff</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3</span>
                                <span className="stat-label">Branches</span>
                            </div>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <a href="/about-us" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src={aboutImg} alt="Logistics Warehouse" />
                        <div className="experience-badge">
                            <span className="highlight">25+</span> Years Experience
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
