import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './Hero.css';

import bg1 from '/src/assets/HomeBackground 1.png';
import bg2 from '/src/assets/HomeBackground 2.jpg';
import bg3 from '/src/assets/HomeBackground 3.jpg';

const Hero = () => {
    const navigate = useNavigate();

    const backgrounds = [bg1, bg2, bg3];

    return (
        <section id="home" className="hero-section">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                navigation={{
                    prevEl: '.hero-prev',
                    nextEl: '.hero-next',
                }}
                // autoplay={{
                //     delay: 0,
                //     disableOnInteraction: false,
                // }}
                // loop={true}
                className="hero-swiper"
            >
                <div className="custom-nav-arrow prev hero-prev">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </div>
                <div className="custom-nav-arrow next hero-next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                {backgrounds.map((bg, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-bg" style={{ backgroundImage: `url("${bg}")` }}>
                            <div className="hero-overlay"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="container hero-content-wrapper">
                <div className="hero-content">
                    <h1>Global Shipping <br /> Made Simple</h1>
                    <p>Reliable, fast, and secure logistics solutions for your business. We deliver excellence across the globe.</p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Get a Quote</a>
                        <a href="#services" className="btn btn-outline">Our Services</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
