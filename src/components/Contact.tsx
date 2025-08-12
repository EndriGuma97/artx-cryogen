import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Navigation,
} from "lucide-react";
import logo from "../assets/logo.png";
import "./Contact.css";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Phone />,
      title: "Call Us",
      info: "501-516-3128",
      link: "tel:5015163128",
    },
    {
      icon: <MapPin />,
      title: "Visit Us",
      info: "11525 Cantrell Rd, Suite 905, Little Rock, AR 72212",
      link: "https://maps.google.com/?q=11525+Cantrell+Rd+Suite+905+Little+Rock+AR+72212",
    },
    {
      icon: <Clock />,
      title: "Hours",
      info: "Mon-Fri: 9AM-6PM | Sat: 10AM-2PM",
      link: null,
    },
    {
      icon: <Mail />,
      title: "Email",
      info: "info@artxcryogen.com",
      link: "mailto:info@artxcryogen.com",
    },
  ];

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Start Your <span className="title-accent">Recovery Journey</span>{" "}
            Today
          </h2>
          <p className="section-subtitle">
            Located in West Little Rock, we're ready to help you achieve lasting
            pain relief
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p>{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="hours-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3>Business Hours</h3>
              <div className="hours-list">
                {businessHours.map((item, index) => (
                  <div key={index} className="hours-item">
                    <span className="day">{item.day}</span>
                    <span className="hours">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="cta-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3>Ready to Schedule?</h3>
              <p>
                Call us now for your initial consultation and take the first
                step toward pain-free living.
              </p>
              <a href="tel:5015163128" className="cta-phone">
                <Phone size={20} />
                Call 501-516-3128
              </a>
              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="social-link">
                  <Instagram size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="map-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.123456789!2d-92.12345678!3d34.12345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sARTX+Cryogen!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ARTX Cryogen Location"
              />
              <div className="map-overlay">
                <div className="map-info">
                  <Navigation size={24} />
                  <h4>ARTX Cryogen</h4>
                  <p>11525 Cantrell Rd, Suite 905</p>
                  <p>Little Rock, AR 72212</p>
                  <a
                    href="https://maps.google.com/?q=11525+Cantrell+Rd+Suite+905+Little+Rock+AR+72212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-link"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="footer-content">
            <div className="footer-logo">
              <img
                src={logo}
                alt="ARTX Cryogen Logo"
                className="footer-logo-image"
              />
              <span>ARTX CRYOGEN</span>
            </div>
            <p className="footer-text">
              © 2025 ARTX Cryogen. All rights reserved. | High Pressure Targeted
              Cryotherapy
            </p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span>|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
