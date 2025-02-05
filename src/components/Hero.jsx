// components/Hero.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <motion.section
      ref={ref}
      style={{
        height: "200vh",
        position: "relative",
        overflow: "hidden",
      }}>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          scale,
          opacity,
          y,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, #000 0%, #111 100%)",
        }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.h1
            style={{
              fontSize: "clamp(2rem, 12vw, 15rem)",
              padding: "0 5%",
              color: "#FFD700", // Ensure yellow color
              textAlign: "center",
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "-0.05em",
              margin: 0,
              position: "relative",
              zIndex: 2, // Add z-index
            }}>
            Yellow
            <motion.span
              style={{
                display: "block",
                color: "#fff",
                WebkitTextStroke: "2px #FFD700",
                paddingLeft: "2vw",
              }}>
              Tech
            </motion.span>
          </motion.h1>
        </div>

        {/* Background elements for depth */}
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "30rem",
            opacity: 0.1,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
          🖥️
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "2rem",
            color: "#FFD700",
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}>
          ↓
        </motion.div>
      </motion.div>

      {/* Overlay gradient */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, transparent 70%, #000 90%)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
    </motion.section>
  );
};
