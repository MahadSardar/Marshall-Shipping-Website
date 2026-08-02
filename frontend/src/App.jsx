import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutDetail from './components/AboutDetail';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutDetail />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
            <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </Router>
  )
}

export default App
