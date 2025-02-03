// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={styles.about}>
      <motion.h2 style={styles.title}>About YellowTech</motion.h2>
      <motion.p style={styles.text}>
        YellowTech is a leading software solutions company focused on building
        innovative applications to empower businesses and drive digital
        transformation.
      </motion.p>
    </motion.section>
  );
};

const styles = {
  about: {
    padding: "50px 20px",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1601922626690-7c9f4aee85f1")', // Office Space Image
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "1.2rem",
  },
};

export default About;
