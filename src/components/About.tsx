import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Snowflake, Shield, Clock, Users } from "lucide-react";
import "./About.css";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Snowflake />,
      title: "Patented Technology",
      description:
        "Revolutionary high-pressure cryotherapy delivering targeted pain relief",
    },
    {
      icon: <Shield />,
      title: "FDA Registered",
      description: "Safe, non-invasive treatment with proven clinical results",
    },
    {
      icon: <Clock />,
      title: "Quick Sessions",
      description: "15-minute treatments that fit into your busy schedule",
    },
    {
      icon: <Users />,
      title: "Expert Care",
      description: "Experienced professionals dedicated to your recovery",
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            Revolutionizing{" "}
            <span className="title-accent">Pain Management</span> in Arkansas
          </h2>
          <p className="section-subtitle">
            ARTX Cryogen brings cutting-edge cryotherapy technology to West
            Little Rock, offering a breakthrough alternative to traditional pain
            management methods.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about-heading">The Future of Recovery is Here</h3>
            <p className="about-description">
              Located in the heart of West Little Rock, ARTX Cryogen specializes
              in high-pressure targeted cryotherapy—a revolutionary treatment
              that delivers precise, therapeutic cold therapy to specific areas
              of pain and inflammation.
            </p>
            <p className="about-description">
              Our patented technology goes beyond traditional ice therapy,
              penetrating deep into tissues to provide rapid pain relief, reduce
              inflammation, and accelerate healing. Whether you're an athlete
              seeking faster recovery, someone managing chronic pain, or
              recovering from an injury, our treatments offer a non-invasive,
              drug-free solution.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">7,000+</span>
                <span className="stat-label">Treatments Performed</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Patient Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">5★</span>
                <span className="stat-label">Google Reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="https://artxcryogen.com/wp-content/uploads/2024/04/office.jpg"
              alt="ARTX Cryogen Clinic Interior"
              className="clinic-image"
            />
            <div className="image-overlay"></div>
          </motion.div>
        </div>

        <div className="about-features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
