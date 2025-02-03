// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import PlotSection from "./components/PlotSection";
import Test from "./components/Test";

const App = () => {
  return (
    <div>
      <Test />
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="plot">
        <PlotSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
