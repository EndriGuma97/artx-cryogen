import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import heroVideo from "../assets/hero.mp4";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/path-to-poster-image.jpg"
        >
          <source src={heroVideo} type="video/quicktime" />
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge-text">Revolutionary Pain Relief</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ARTX <span className="hero-accent">CRYOGEN</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          High Pressure Targeted Cryotherapy
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Revolutionary pain management and athletic rehabilitation in West
          Little Rock. Experience the future of recovery with our patented
          high-pressure cryotherapy technology.
        </motion.p>

        <motion.div
          className="hero-cta-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="tel:5015163128" className="hero-cta-primary">
            <Phone size={18} />
            <span>Call 501-516-3128</span>
          </a>
          <a href="#contact" className="hero-cta-secondary">
            <MapPin size={18} />
            <span>Visit Our Clinic</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="hero-feature">
            <span className="feature-number">7,000+</span>
            <span className="feature-text">Treatments</span>
          </div>
          <div className="hero-feature">
            <span className="feature-number">15 min</span>
            <span className="feature-text">Sessions</span>
          </div>
          <div className="hero-feature">
            <span className="feature-number">100%</span>
            <span className="feature-text">Non-Invasive</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={30} />
      </motion.div>
    </section>
  );
};

export default Hero;
