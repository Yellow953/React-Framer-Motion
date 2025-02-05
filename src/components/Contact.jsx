import { motion } from "framer-motion";

export const Contact = () => (
  <motion.section
    style={{
      height: "100vh",
      backgroundColor: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "2rem",
    }}>
    <motion.h2
      style={{ fontSize: "4rem", color: "#FFD700" }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}>
      Let's Build Together
    </motion.h2>

    <motion.form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "min(90%, 400px)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
      <input
        type="email"
        placeholder="Your email"
        style={{
          padding: "1rem",
          background: "#1a1a1a",
          border: "none",
          color: "#fff",
        }}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "1rem 2rem",
          background: "#FFD700",
          color: "#000",
          border: "none",
          cursor: "pointer",
        }}>
        Contact Us
      </motion.button>
    </motion.form>
  </motion.section>
);
