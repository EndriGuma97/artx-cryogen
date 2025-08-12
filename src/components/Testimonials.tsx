import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import "./Testimonials.css";

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: "Sarah Johnson",
      condition: "Chronic Back Pain",
      rating: 5,
      text: "After years of dealing with chronic back pain, I finally found relief at ARTX Cryogen. The targeted cryotherapy treatments have been life-changing. I can now enjoy activities with my family that I hadn't been able to do in years.",
      date: "3 weeks ago",
    },
    {
      id: 1,
      name: "Michael Chen",
      condition: "Sports Recovery",
      rating: 5,
      text: "As a marathon runner, recovery is crucial. ARTX Cryogen has become an essential part of my training routine. The treatments help me recover faster between runs and have significantly reduced my injury downtime.",
      date: "1 month ago",
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      condition: "Arthritis",
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. My arthritis pain has decreased dramatically, and I've reduced my pain medication by half. The staff is incredibly knowledgeable and caring.",
      date: "2 months ago",
    },
    {
      id: 3,
      name: "David Thompson",
      condition: "Post-Surgery Recovery",
      rating: 5,
      text: "Following knee surgery, my physical therapist recommended ARTX Cryogen. The treatments accelerated my recovery timeline significantly. I was back to normal activities weeks ahead of schedule.",
      date: "2 weeks ago",
    },
    {
      id: 4,
      name: "Lisa Martinez",
      condition: "Fibromyalgia",
      rating: 5,
      text: "Living with fibromyalgia is challenging, but ARTX Cryogen has given me hope. The pain relief is immediate and lasting. I've experienced more good days in the past month than I had all of last year.",
      date: "1 month ago",
    },
  ];

  const stats = [
    { number: "95%", label: "Patient Satisfaction" },
    { number: "7,000+", label: "Treatments Delivered" },
    { number: "4.9", label: "Google Rating" },
    { number: "500+", label: "Happy Patients" },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Patient Stories</span>
          <h2 className="section-title">
            Real Results from{" "}
            <span className="title-accent">Real Patients</span>
          </h2>
          <p className="section-subtitle">
            Discover how ARTX Cryogen is transforming lives across Central
            Arkansas
          </p>
        </motion.div>

        <div className="testimonials-content">
          <motion.div
            className="testimonial-main"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Quote className="quote-icon" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card-main"
              >
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star key={i} className="star-icon" fill="#ffd700" />
                    )
                  )}
                </div>

                <p className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    <User />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="author-condition">
                      {testimonials[currentTestimonial].condition}
                    </p>
                    <p className="testimonial-date">
                      {testimonials[currentTestimonial].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-controls">
              <button onClick={prevTestimonial} className="control-button">
                <ChevronLeft />
              </button>

              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${
                      index === currentTestimonial ? "active" : ""
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <button onClick={nextTestimonial} className="control-button">
                <ChevronRight />
              </button>
            </div>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card-small"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-rating-small">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffd700" />
                  ))}
                </div>
                <p className="testimonial-text-small">
                  "{testimonial.text.substring(0, 100)}..."
                </p>
                <p className="testimonial-author-small">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="review-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>Join hundreds of satisfied patients experiencing pain relief</p>
          <a href="tel:5015163128" className="review-button">
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
