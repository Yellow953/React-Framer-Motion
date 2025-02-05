// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { useState } from "react";

// export const Header = () => {
//   const { scrollY } = useScroll();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 50);
//   });

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         padding: "1.5rem 5%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         zIndex: 1000,
//         background: isScrolled ? "rgba(0,0,0,0.9)" : "transparent",
//         backdropFilter: "blur(8px)",
//         borderBottom: isScrolled ? "1px solid rgba(255,215,0,0.1)" : "none",
//       }}>
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         style={{
//           fontSize: "1.8rem",
//           fontWeight: 700,
//           color: "#FFD700",
//           letterSpacing: "-0.03em",
//         }}>
//         YELLOW.TECH
//       </motion.div>

//       <nav style={{ display: "flex", gap: "2.5rem" }}>
//         {["Services", "Work", "About", "Contact"].map((item) => (
//           <motion.a
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             style={{
//               color: "#fff",
//               textDecoration: "none",
//               fontSize: "1.1rem",
//               position: "relative",
//             }}
//             whileHover={{ color: "#FFD700" }}
//             transition={{ duration: 0.3 }}>
//             {item}
//             <motion.div
//               style={{
//                 position: "absolute",
//                 bottom: "-5px",
//                 left: 0,
//                 right: 0,
//                 height: "1px",
//                 background: "#FFD700",
//                 scaleX: 0,
//                 transformOrigin: "left",
//               }}
//               whileHover={{ scaleX: 1 }}
//             />
//           </motion.a>
//         ))}
//       </nav>
//     </motion.header>
//   );
// };

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "1.5rem 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        background: isScrolled ? "rgba(0,0,0,0.9)" : "transparent",
        backdropFilter: "blur(8px)",
        borderBottom: isScrolled ? "1px solid rgba(255,215,0,0.1)" : "none",
      }}>
      {!isMobile && (
        <nav style={{ display: "flex", gap: "2.5rem" }}>
          {["Services", "Work", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.1rem",
                position: "relative",
              }}
              whileHover={{ color: "#FFD700" }}
              transition={{ duration: 0.3 }}>
              {item}
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "#FFD700",
                  scaleX: 0,
                  transformOrigin: "left",
                }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.a>
          ))}
        </nav>
      )}

      {isMobile && (
        <motion.button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
          }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24">
            <motion.path
              stroke="#FFD700"
              strokeWidth="2"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { d: "M2 6h20M2 12h20M2 18h20" },
                open: { d: "M4 4L20 20M4 20L20 4" },
              }}
            />
          </svg>
        </motion.button>
      )}

      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: "4.5rem",
              right: 0,
              bottom: 0,
              width: "70%",
              background: "rgba(0,0,0,0.95)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              zIndex: 999,
            }}>
            {["Services", "Work", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                }}
                whileHover={{ color: "#FFD700" }}>
                {item}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
