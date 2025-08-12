import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Snowflake,
  Target,
  Timer,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Info,
} from "lucide-react";
import "./Services.css";

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Initial Consultation & Treatment",
      icon: <Snowflake />,
      duration: "30 minutes",
      price: "$75",
      description:
        "Your first visit includes a comprehensive consultation and personalized treatment plan",
      features: [
        "Medical history review",
        "Pain assessment",
        "Treatment demonstration",
        "First cryotherapy session",
        "Personalized recovery plan",
      ],
      popular: false,
    },
    {
      id: 1,
      title: "Single Treatment Session",
      icon: <Target />,
      duration: "15 minutes",
      price: "$50",
      description: "Perfect for maintenance or trying our service",
      features: [
        "Targeted cryotherapy treatment",
        "Professional guidance",
        "Progress tracking",
        "Post-treatment consultation",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "5-Session Package",
      icon: <Timer />,
      duration: "15 min each",
      price: "$225",
      originalPrice: "$250",
      savings: "Save $25",
      description: "Ideal for acute injuries and short-term recovery",
      features: [
        "5 treatment sessions",
        "Flexible scheduling",
        "Progress monitoring",
        "Treatment adjustments",
        "Priority booking",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "10-Session Package",
      icon: <DollarSign />,
      duration: "15 min each",
      price: "$400",
      originalPrice: "$500",
      savings: "Save $100",
      description: "Best value for chronic conditions and athletes",
      features: [
        "10 treatment sessions",
        "Maximum flexibility",
        "Comprehensive care",
        "VIP scheduling priority",
        "Free consultation updates",
        "20% savings",
      ],
      popular: false,
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Book Your Consultation",
      description: "Call us at 501-516-3128 to schedule your initial visit",
    },
    {
      step: "2",
      title: "Personalized Assessment",
      description:
        "Our experts evaluate your condition and create a custom treatment plan",
    },
    {
      step: "3",
      title: "Experience Treatment",
      description:
        "Receive targeted cryotherapy in our state-of-the-art facility",
    },
    {
      step: "4",
      title: "Track Your Progress",
      description: "Monitor improvements and adjust treatment as needed",
    },
  ];

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Treatment <span className="title-accent">Packages & Pricing</span>
          </h2>
          <p className="section-subtitle">
            Flexible options designed to meet your recovery needs and budget
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.popular ? "popular" : ""} ${
                activeService === service.id ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveService(service.id)}
              whileHover={{ y: -5 }}
            >
              {service.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>

              <div className="service-pricing">
                <span className="service-price">{service.price}</span>
                {service.originalPrice && (
                  <span className="original-price">
                    {service.originalPrice}
                  </span>
                )}
              </div>

              {service.savings && (
                <div className="savings-badge">{service.savings}</div>
              )}

              <p className="service-duration">
                <Timer size={16} /> {service.duration}
              </p>

              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="tel:5015163128" className="service-cta">
                Book Now <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="process-title">How It Works</h3>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="insurance-info"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Info size={24} />
          <div>
            <h4>Insurance & Payment Options</h4>
            <p>
              We accept cash, credit cards, and HSA/FSA cards. While insurance
              doesn't typically cover cryotherapy, many patients use their HSA
              or FSA funds for treatment. Contact us for more information about
              payment options.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
