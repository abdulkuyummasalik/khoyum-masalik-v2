import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Hero,
  About,
  Skills,
  Services,
  Projects,
  ExperienceEducation,
  Gallery,
  Resume,
  Testimonials,
  CTA,
  Contact,
  Blog,
} from "./sections";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import DotGrid from "./components/DotGrid";
import "./App.css";

const Home = () => (
  <main className="relative z-10">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Services />
    <Projects />
    <ExperienceEducation />
    <Gallery />
    <Resume />
    <Testimonials />
    <CTA />
    <Contact />
    <Blog />
    <Footer />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <div className="fixed inset-0 z-0 bg-neutral-950">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <SplashCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
