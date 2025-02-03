// src/components/Header.js
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>YellowTech</div>
      <nav>
        <ul style={styles.navList}>
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              style={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="plot"
              smooth={true}
              duration={500}
              style={styles.navItem}>
              Plot
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              style={styles.navItem}>
              Services
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              style={styles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              style={styles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#111",
    padding: "20px 0",
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  logo: {
    fontSize: "1.5rem",
    color: "#ffcc00",
    fontWeight: "bold",
  },
  navList: {
    display: "flex",
    listStyle: "none",
  },
  navItem: {
    color: "#fff",
    fontSize: "1rem",
    marginLeft: "20px",
    cursor: "pointer",
    transition: "color 0.3s",
  },
};

export default Header;
