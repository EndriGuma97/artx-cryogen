import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Featured from "./components/Featured";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Featured />
      <About />
      <Benefits />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
