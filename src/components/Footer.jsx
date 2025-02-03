// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 YellowTech. All rights reserved.</p>
      <p>Contact us: hello@yellowtech.dev</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
};

export default Footer;
