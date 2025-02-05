import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "#0a0a0a",
        padding: "6rem 5% 3rem",
        marginTop: "auto",
      }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "4rem",
          borderBottom: "1px solid rgba(255,215,0,0.1)",
          paddingBottom: "4rem",
        }}>
        <div>
          <h3
            style={{
              color: "#FFD700",
              fontSize: "1.8rem",
              marginBottom: "1.5rem",
            }}>
            Yellow.Tech
          </h3>
          <p style={{ color: "#888", lineHeight: 1.6 }}>
            Building tomorrow's technology today. Specializing in AI solutions,
            enterprise software, and transformative digital experiences.
          </p>
        </div>

        <div>
          <h4 style={{ color: "#fff", marginBottom: "1.5rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Careers", "Projects", "Press", "Blog"].map((link) => (
              <motion.li
                key={link}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href="#"
                  style={{
                    color: "#888",
                    textDecoration: "none",
                    display: "block",
                    padding: "0.5rem 0",
                    transition: "color 0.3s",
                  }}>
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "#fff", marginBottom: "1.5rem" }}>Connect</h4>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["LinkedIn", "Twitter", "GitHub", "Dribbble"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -5 }}
                style={{
                  color: "#FFD700",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}>
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "3rem",
          textAlign: "center",
          color: "#444",
        }}>
        © {new Date().getFullYear()} YellowTech. All rights reserved.
      </div>
    </motion.footer>
  );
};
