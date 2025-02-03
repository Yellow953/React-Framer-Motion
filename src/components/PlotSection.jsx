import React from "react";
import { motion } from "framer-motion";

const PlotSection = () => {
  return (
    <motion.section
      id="plot"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={styles.plot}>
      <h2 style={styles.heading}>Our Journey</h2>
      <p style={styles.text}>
        At YellowTech, we blend innovative technology with creative design to
        empower businesses worldwide. Our solutions drive digital
        transformation, ensuring our clients are always ahead of the curve.
      </p>
    </motion.section>
  );
};

const styles = {
  plot: {
    minHeight: "100vh",
    backgroundColor: "#111",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#ffcc00",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "800px",
  },
};

export default PlotSection;
