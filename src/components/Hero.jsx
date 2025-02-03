import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useViewportScroll();

  // Background zoom effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);

  // Text opacity for different states
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

  return (
    <section style={styles.hero}>
      {/* Background Zoom Effect */}
      <motion.div style={{ ...styles.background, scale }} />

      {/* Text Changes as you Scroll */}
      <div style={styles.content}>
        <motion.h1 style={{ ...styles.title, opacity: opacity1 }}>
          Welcome to YellowTech
        </motion.h1>
        <motion.h1 style={{ ...styles.title, opacity: opacity2 }}>
          We Build Future-Ready Software
        </motion.h1>
        <motion.h1 style={{ ...styles.title, opacity: opacity3 }}>
          AI-Powered Solutions for You
        </motion.h1>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1568873413-ccf775f6db67?auto=format&fit=crop&w=1950&q=80")', // Replace with a real image
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  },
  content: {
    position: "relative",
    zIndex: 2,
  },
  title: {
    fontSize: "3rem",
    color: "#ffcc00",
    margin: "10px 0",
    position: "absolute",
    width: "100%",
  },
};

export default Hero;
