import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Newspaper } from "lucide-react";
import "./Featured.css";

const Featured: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="featured" ref={ref}>
      <div className="featured-container">
        <motion.div
          className="featured-content"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-badge">
            <Award className="badge-icon" />
            <span>Featured Story</span>
          </div>

          <h2 className="featured-title">
            Stay Cool: ARTX Cryogen Featured in
            <span className="featured-accent"> Little Rock City Lifestyle</span>
          </h2>

          <p className="featured-description">
            Discover how our revolutionary high-pressure cryotherapy is
            transforming pain management and recovery in Little Rock. Learn
            about our unique approach to targeted cold therapy and why patients
            across Central Arkansas are choosing ARTX Cryogen for their recovery
            needs.
          </p>

          <a
            href="https://issuu.com/lifestylepubs/docs/little_rock_ar_january_2025"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-cta"
          >
            <Newspaper size={20} />
            Read Full Article
          </a>
        </motion.div>

        <motion.div
          className="featured-image"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://artxcryogen.com/wp-content/uploads/2025/01/mag-cover.png"
            alt="Little Rock City Lifestyle Magazine Cover"
            className="magazine-cover"
          />
          <div className="image-glow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
