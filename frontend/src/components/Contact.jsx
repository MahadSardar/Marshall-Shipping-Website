import { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [loading, setloading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9\s-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name)) {
        toast.error("Enter a valid name");
        return false;
    }

    if (!phoneRegex.test(formData.phone)) {
        toast.error("Enter a valid phone number");
        return false;
    }

    if (!emailRegex.test(formData.email)) {
        toast.error("Enter a valid email address");
        return false;
    }

    if (!formData.subject || formData.subject.trim() === "") {
        toast.error("Subject is required");
        return false;
    }

    return true;
};

    const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validateForm()){
                return;
        }

        setloading(true)
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                toast.success("Email sent successfully 🚀");
                setFormData({ name: '', email: '', subject:'', phone: '', message: '' });
            } else {
                toast.error(data.message || "Invalid input");
            }
        } catch (error) {
            console.log(error);
            toast.error("Email service is currently unavailable Please tryagain later")
            setFormData({ name: '', email: '', subject:'', phone: '', message: '' });
            setFormStatus('error')
        }
        setloading(false)
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Contact Us</h2>
                    <p>We provide the best logistic solutions for your business.</p>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>

                        <div className="info-item">
                            <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                            <div>
                                <h4>Location</h4>
                                <p>Suite 809, 8th Floor, kawish crown plaza,<br />Shahrah e Faisal Karachi</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                            <div>
                                <h4>Phone</h4>
                                <p>+92 21 32420114, 32410115, 32416325</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon"><FontAwesomeIcon icon={faFax} /></div>
                            <div>
                                <h4>Fax</h4>
                                <p>+92 21 32431154</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div>
                                <h4>Email</h4>
                                <p>info@marshal.cc</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3>Send a Message</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email address"
                                required
                            />
                        </div>

                            <div className="form-group">
                            <label htmlFor="email">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Your Subject"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your shipping needs..."
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                            {loading ? "Sending... please wait" : "Send Message"}
                        </button>

                        {formStatus === 'success' && <p className="success-msg">Message sent successfully!</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
