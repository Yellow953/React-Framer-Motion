import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    title: "AI Solutions",
    icon: "🤖",
    bg: "#1a1a1a",
  },
  {
    title: "Mobile Apps",
    icon: "📱",
    bg: "#2a2a2a",
  },
  {
    title: "Web Platforms",
    icon: "💻",
    bg: "#3a3a3a",
  },
];

export const Services = () => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      ref={ref}
      style={{
        minHeight: isMobile ? "100vh" : "300vh",
        position: "relative",
      }}>
      {services.map((service, index) => (
        <motion.div
          key={index}
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 5%",
          }}>
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: isMobile ? "0px" : "-30% 0px" }}
            style={{
              flex: 1,
              textAlign: isMobile ? "center" : "left",
              order: isMobile ? 2 : 1,
            }}>
            <h2
              style={{
                fontSize: isMobile ? "2.5rem" : "4rem",
                color: "#FFD700",
              }}>
              {service.title}
            </h2>
            <p
              style={{
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                marginTop: "2rem",
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ margin: isMobile ? "0px" : "-30% 0px" }}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              fontSize: isMobile ? "8rem" : "20rem",
              order: isMobile ? 1 : 2,
            }}>
            {service.icon}
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
};
