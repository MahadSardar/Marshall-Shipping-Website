import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import './ServiceDetail.css';

import air2 from '/src/assets/Air Freight 2.jpg';
import air3 from '/src/assets/Air Freight 3.jpg';
import ocean2 from '/src/assets/HomeBackground 2.jpg'; // fallback
import ocean3 from '/src/assets/HomeBackground 3.jpg'; // fallback
import warehouse2 from '/src/assets/Warehousing 2.jpg';
import supply2 from '/src/assets/Supplychain 2.jpg';
import consulting2 from '/src/assets/logistics consulting 2.jpg';
import land2 from '/src/assets/Land Transport 2.png';

const serviceData = {
    'ocean-freight': {
        title: 'Ocean Freight',
        banner: ocean2,
        image2: ocean3,
        overview: 'FCL (Full Container) and LCL (Less than Container) for import & export.',
        features: [
            'Cargo consolidation',
            'Door-to-door delivery',
            'Comprehensive documentation help'
        ],
        process: 'We handle your containerized shipments from the port of origin directly to the destination with seamless customs and handling.',
        benefits: 'Cost-effective for large volumes, secure transit, and global reach.'
    },
    'air-freight': {
        title: 'Air Freight',
        banner: air2,
        image2: air3,
        overview: 'Import & export, customs clearance, door to door, airport to airport.',
        features: [
            'Express options for urgent cargo',
            'Economy options for cost-saving',
            'Priority handling and customs clearance'
        ],
        process: 'Rapid transit via established air routes, ensuring your time-sensitive cargo reaches its destination exactly when needed.',
        benefits: 'Fastest delivery times, high security, and lower inventory holding costs.'
    },
    'break-bulk': {
        title: 'Break Bulk & Chartering',
        banner: land2,
        image2: ocean2,
        overview: 'Heavy cargo, oversized shipments, minerals, steel, wind mills, oil rigs, vessel chartering.',
        features: [
            'Specialized handling for non-containerized cargo',
            'Custom vessel chartering solutions',
            'Expertise in heavy machinery transport'
        ],
        process: 'Dedicated planning and engineering for lifting, stowing, and securing specialized or massive cargo loads.',
        benefits: 'Ability to move what others cannot, tailored shipping vessels, dedicated project management.'
    },
    'warehousing': {
        title: 'Warehousing',
        banner: warehouse2,
        image2: warehouse2,
        overview: '105,000 m² managed area, storage solutions, consignment warehouse, final ware processing.',
        features: [
            'Secure storage solutions',
            'Inventory management and processing',
            'Consignment services'
        ],
        process: 'Your goods are stored in state-of-the-art facilities, processed, and prepared for final distribution according to your schedules.',
        benefits: 'Scalable storage space, enhanced security, and streamlined distribution.'
    },
    'supply-chain': {
        title: 'Supply Chain Management',
        banner: supply2,
        image2: supply2,
        overview: 'End-to-end tracking, ERP system integration, web order system, tracking & tracing, shipment documents.',
        features: [
            'Comprehensive end-to-end tracking',
            'Seamless ERP integration',
            'Digital document management'
        ],
        process: 'We integrate with your business processes to manage the entire flow of goods, information, and documents from origin to consumer.',
        benefits: 'Increased efficiency, reduced overhead, and full transparency.'
    },
    'logistics-consulting': {
        title: 'Logistics Consulting',
        banner: consulting2,
        image2: consulting2,
        overview: 'Custom logistics plans, budget calculation, performance monitoring, IT planning support.',
        features: [
            'Tailored logistics strategy development',
            'Accurate budget calculation',
            'Ongoing performance monitoring'
        ],
        process: 'Our experts analyze your current supply chain, identify bottlenecks, and propose actionable, cost-effective improvements.',
        benefits: 'Optimized operations, cost reductions, and strategic advantage.'
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const service = serviceData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <Navigate to="/" />;
    }

    return (
        <div className="service-detail-page">
            <div className="service-hero" style={{ backgroundImage: `url("${service.banner}")` }}>
                <div className="service-hero-overlay"></div>
                <div className="container service-hero-content">
                    <h1>{service.title}</h1>
                </div>
            </div>

            <div className="container service-main-content">
                <div className="service-content-left">
                    <section className="service-section">
                        <h2>Overview</h2>
                        <p>{service.overview}</p>
                    </section>

                    <section className="service-section">
                        <h2>Key Features</h2>
                        <ul className="service-features-list">
                            {service.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="service-section">
                        <h2>Our Process</h2>
                        <p>{service.process}</p>
                    </section>

                    <section className="service-section">
                        <h2>Benefits</h2>
                        <p>{service.benefits}</p>
                    </section>
                    
                    <div style={{ marginTop: '2rem' }}>
                         <a href="/contact" className="btn btn-primary">Request a Quote</a>
                    </div>
                </div>

                <div className="service-content-right">
                    <img src={service.image2} alt={`${service.title} details`} className="service-side-img" />
                    
                    <div className="service-contact-card">
                        <h3>Need help with {service.title}?</h3>
                        <p>Our experts are ready to provide you with the best solutions.</p>
                        <a href="/contact" className="btn btn-outline-dark">Contact Us Today</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
