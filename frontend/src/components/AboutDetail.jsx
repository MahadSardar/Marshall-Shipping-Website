import { useEffect } from 'react';
import './AboutDetail.css';
import aboutBanner from '/src/assets/HomeBackground 2.jpg'; // Using as banner
import operationsImg from '/src/assets/Warehousing 2.jpg'; // Using for operations
import piffaLogo from '/src/assets/Piffa.png';
import fiataLogo from '/src/assets/Fiata.png';
import iataLogo from '/src/assets/Iata.png';

const AboutDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-detail-page">
            <div className="about-hero" style={{ backgroundImage: `url("${aboutBanner}")` }}>
                <div className="about-hero-overlay"></div>
                <div className="container about-hero-content">
                    <h1>About Us</h1>
                    <p>Pakistan's Trusted Shipping & Logistics Partner Since 1998</p>
                </div>
            </div>

            <div className="container about-main-content">
                <section className="about-section">
                    <h2>Company Overview</h2>
                    <p>
                       Marshall Shipping Pakistan (Private) Limited, founded in 1998 in Karachi, is a trusted logistics and freight forwarding company providing reliable and efficient shipping solutions. Over the years, we have built a strong reputation for handling diverse logistics operations with professionalism and consistency.<br/>
                       With branches in Karachi, Lahore, and Faisalabad, and a skilled team of 141 professionals nationwide, we support both local and international clients. Our capabilities include managing over 105,000 m² of warehouse space and handling complex supply chain requirements with a focus on safety, efficiency, and timely delivery.
                    </p>
                </section>

                <section className="about-mission-vision">
                    <div className="mv-card">
                        <h3>Our Mission</h3>
                        <p>To deliver reliable, efficient, and end-to-end logistics solutions that ensure speed, trust, and customer satisfaction in every shipment.</p>
                    </div>
                    <div className="mv-card">
                        <h3>Our Vision</h3>
                        <p>To be a leading and trusted logistics partner, expanding globally while maintaining excellence in service and innovation.</p>
                    </div>
                </section>

                <section className="about-facts-section">
                    <h2>Key Facts & Licenses</h2>
                    <div className="facts-grid">
                        <div className="fact-box">
                            <h4>Since 1998</h4>
                            <p>Years of Trust</p>
                        </div>
                        <div className="fact-box">
                            <h4>141+ Staff</h4>
                            <p>Dedicated Professionals</p>
                        </div>
                        <div className="fact-box">
                            <h4>3 Branches</h4>
                            <p>Strategic Locations</p>
                        </div>
                        <div className="fact-box">
                            <h4>Worldwide</h4>
                            <p>Global Coverage</p>
                        </div>
                    </div>
                    <div className="licenses-box">
                        <h3>Certifications & Licenses</h3>
                        <ul>
                            <li><strong>Govt. Shipping License:</strong> SA-461 (Since 2004)</li>
                            <li><strong>Chamber of Commerce:</strong> 69481</li>
                            <li><strong>Freight Forwarding License:</strong> SK-0085 (PIFFA)</li>
                            <li><strong>National Tax Number:</strong> 1219692-2</li>
                        </ul>
                    </div>
                </section>

                <section className="about-values">
                    <h2>Our Values & Strengths</h2>
                    <ul className="values-list">
                        <li><strong>Trust & Reliability:</strong> Building long-term relationships through transparent operations.</li>
                        <li><strong>Speed & Efficiency:</strong> Optimizing routes and processes for faster delivery.</li>
                        <li><strong>Global Reach:</strong> Connecting businesses across continents seamlessly.</li>
                        <li><strong>Customer Focus:</strong> Tailoring solutions to meet specific client needs.</li>
                    </ul>
                </section>

                <section className="about-gallery">
                    <h2>Operations & Infrastructure</h2>
                    <img src={operationsImg} alt="Logistics Operations" className="operations-img" />
                </section>

                <section className="about-memberships">
                    <h2>Memberships & Affiliations</h2>
                    <div className="memberships-grid">
                        <div className="membership-item">
                            <img src={piffaLogo} alt="PIFFA Logo" className="membership-logo" />
                            <p>Pakistan International Freight Forwarders Association</p>
                        </div>
                        <div className="membership-item">
                            <img src={fiataLogo} alt="FIATA Logo" className="membership-logo" />
                            <p>International Federation of Freight Forwarders Associations</p>
                        </div>
                        <div className="membership-item">
                            <img src={iataLogo} alt="IATA Logo" className="membership-logo" />
                            <p>International Air Transport Association</p>
                        </div>
                    </div>
                </section>

                {/* <div className="about-statement">
                    <p><strong>Marshall Shipping Pakistan</strong> is a Private Limited Company registered in Pakistan.</p>
                </div> */}
            </div>
        </div>
    );
};

export default AboutDetail;
