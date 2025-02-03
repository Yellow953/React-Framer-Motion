// src/components/Services.js
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={styles.services}>
      <h2 style={styles.title}>Our Services</h2>
      <div style={styles.serviceContainer}>
        <motion.div
          className="service-item"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.serviceItem}>
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68" // Laptop Image
            alt="Laptop"
            style={styles.image}
          />
          <h3>Custom Development</h3>
          <p>
            We build scalable, high-performance applications tailored to your
            needs.
          </p>
        </motion.div>

        <motion.div
          className="service-item"
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.serviceItem}>
          <img
            src="https://images.unsplash.com/photo-1581325387588-53e28f49f69b" // AI Image
            alt="AI"
            style={styles.image}
          />
          <h3>Artificial Intelligence</h3>
          <p>
            Leverage AI to optimize your business processes and decision-making.
          </p>
        </motion.div>

        <motion.div
          className="service-item"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.serviceItem}>
          <img
            src="https://images.unsplash.com/photo-1603383217594-4586e4c9c8b9" // Mobile Image
            alt="Mobile"
            style={styles.image}
          />
          <h3>Mobile Solutions</h3>
          <p>Engage your customers through top-notch mobile app development.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

const styles = {
  services: {
    padding: "60px 20px",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "30px",
  },
  serviceContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  serviceItem: {
    width: "30%",
    backgroundColor: "#222",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default Services;
