// App.js
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        position: "relative",
      }}>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
