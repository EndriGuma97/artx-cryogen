import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Activity,
  Heart,
  Brain,
  TrendingUp,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import "./Benefits.css";

const Benefits: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Zap />,
      title: "Instant Pain Relief",
      description:
        "Experience immediate reduction in pain and discomfort through targeted cold therapy",
      color: "#00d4ff",
    },
    {
      icon: <Activity />,
      title: "Reduced Inflammation",
      description:
        "Powerful anti-inflammatory effects that accelerate natural healing processes",
      color: "#00ffea",
    },
    {
      icon: <Heart />,
      title: "Improved Circulation",
      description: "Enhances blood flow and oxygen delivery to treated areas",
      color: "#ff00d4",
    },
    {
      icon: <Brain />,
      title: "Nerve Pain Management",
      description:
        "Effectively treats neuropathy and chronic nerve-related conditions",
      color: "#d4ff00",
    },
    {
      icon: <TrendingUp />,
      title: "Faster Recovery",
      description:
        "Accelerates athletic recovery and post-surgery rehabilitation",
      color: "#00ffd4",
    },
    {
      icon: <Shield />,
      title: "Non-Invasive",
      description: "100% drug-free treatment with no side effects or downtime",
      color: "#ff00ff",
    },
    {
      icon: <Clock />,
      title: "Quick Treatment",
      description: "15-minute sessions that easily fit into your daily routine",
      color: "#00d4ff",
    },
    {
      icon: <Sparkles />,
      title: "Long-Lasting Results",
      description:
        "Cumulative benefits that improve with regular treatment sessions",
      color: "#00ffea",
    },
  ];

  const conditions = [
    "Arthritis & Joint Pain",
    "Sports Injuries",
    "Chronic Back Pain",
    "Neuropathy",
    "Post-Surgery Recovery",
    "Migraines",
    "Fibromyalgia",
    "Plantar Fasciitis",
    "Tennis Elbow",
    "Carpal Tunnel",
    "Sciatica",
    "Muscle Strains",
  ];

  return (
    <section id="benefits" className="benefits" ref={ref}>
      <div className="benefits-container">
        <motion.div
          className="benefits-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Why Choose Cryotherapy</span>
          <h2 className="section-title">
            Transform Your{" "}
            <span className="title-accent">Recovery Journey</span>
          </h2>
          <p className="section-subtitle">
            Discover the scientifically-proven benefits of high-pressure
            cryotherapy
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div
                className="benefit-icon"
                style={{
                  background: `linear-gradient(135deg, ${benefit.color}22, ${benefit.color}11)`,
                  color: benefit.color,
                }}
              >
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="conditions-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="conditions-title">Conditions We Treat</h3>
          <div className="conditions-grid">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                className="condition-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {condition}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="cta-title">Ready to Experience the Benefits?</h3>
          <p className="cta-subtitle">
            Join thousands of satisfied patients who have discovered the power
            of cryotherapy
          </p>
          <a href="tel:5015163128" className="cta-button">
            Schedule Your First Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
