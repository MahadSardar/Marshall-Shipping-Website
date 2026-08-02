import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Services.css';

import oceanImg from '/src/assets/Ocean Freight 1.png';
import airImg from '/src/assets/Air Freight 1.png';
import landImg from '/src/assets/Land Transport 1.jpg'; // Using as break bulk fallback
import warehousingImg from '/src/assets/Warehousing 1.jpg';
import supplyChainImg from '/src/assets/SupplyChain 1.jpg';
import consultingImg from '/src/assets/logistics consulting 1.jpg';

const Services = () => {
    const services = [
        {
            id: 'ocean-freight',
            title: "Ocean Freight",
            description: "Cost-effective shipping solutions for large volume cargo across all global routes.",
            image: oceanImg,
            alt: "Container ship at sea"
        },
        {
            id: 'air-freight',
            title: "Air Freight",
            description: "Fast and reliable air transport for time-critical shipments to any destination.",
            image: airImg,
            alt: "Cargo airplane in flight"
        },
        {
            id: 'break-bulk',
            title: "Break Bulk & Chartering",
            description: "Heavy cargo, oversized shipments, and vessel chartering for specialized needs.",
            image: landImg,
            alt: "Heavy machinery transport"
        },
        {
            id: 'warehousing',
            title: "Warehousing",
            description: "105,000 m² managed area, storage solutions, and consignment warehouse.",
            image: warehousingImg,
            alt: "Warehouse interior"
        },
        {
            id: 'supply-chain',
            title: "Supply Chain Management",
            description: "End-to-end tracking, web order system, and comprehensive tracing.",
            image: supplyChainImg,
            alt: "Supply chain network map"
        },
        {
            id: 'logistics-consulting',
            title: "Logistics Consulting",
            description: "Custom logistics plans, budget calculation, and performance monitoring.",
            image: consultingImg,
            alt: "Logistics experts consulting"
        }
    ];

    return (
        <section id="services" className="services" style={{ position: 'relative' }}>
            <div className="custom-nav-arrow prev services-prev">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </div>
            <div className="custom-nav-arrow next services-next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
            <div className="container">
                <div className="section-header text-center">
                    <h2>Our Services</h2>
                    <p>Comprehensive logistics solutions designed for your needs</p>
                </div>

                <div className="services-carousel-container">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.services-prev',
                            nextEl: '.services-next',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            968: {
                                slidesPerView: 3,
                            }
                        }}
                        className="services-swiper"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="service-card">
                                    <div className="service-image-container">
                                        <img src={service.image} alt={service.alt} />
                                    </div>
                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <Link to={`/services/${service.id}`} className="read-more">Learn More &rarr;</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Services;
