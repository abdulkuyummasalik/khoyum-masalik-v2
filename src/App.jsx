import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
import PageLoader from "./components/PageLoader";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import GalleryPage from "./components/GalleryPage";
import GalleryDetailPage from "./components/GalleryDetailPage";
import BlogPage from "./components/BlogPage";
import BlogDetailPage from "./components/BlogDetailPage";
import Seo from "./components/Seo";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const target = location.state && location.state.scrollTo;
    if (!target) return;
    const id = target;
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [location.key, location.state]);

  return (
    <main className="relative z-10">
      <Navbar />
      <Seo pageKey="home" />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <ExperienceEducation />
      <Gallery />
      <Resume />
      <Testimonials />
      <Blog />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [isInitial, setIsInitial] = useState(true);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // Apabila path berubah dari nilai awal, matikan mode 'initial'
    if (location.pathname !== prevPathRef.current) {
      setIsInitial(false);
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  const loaderKey = isInitial ? "initial-loader" : `route-loader-${location.pathname}`;

  return (
    <>
      <ScrollToTop />
      <PageLoader
        key={loaderKey}
        variant={isInitial ? "initial" : "route"}
      />
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
      <SplashCursor
        SPLAT_RADIUS={0.1}
        SPLAT_FORCE={3000}
        DENSITY_DISSIPATION={5.0}
        VELOCITY_DISSIPATION={4.0}
        CURL={0.5}
        COLOR_UPDATE_SPEED={15}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <>
              <Seo pageKey="projects" />
              <ProjectsPage />
            </>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <>
              <Seo pageKey="projects" />
              <ProjectDetailPage />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Seo pageKey="gallery" />
              <GalleryPage />
            </>
          }
        />
        <Route
          path="/gallery/:slug"
          element={
            <>
              <Seo pageKey="gallery" />
              <GalleryDetailPage />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Seo pageKey="blog" />
              <BlogPage />
            </>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <>
              <Seo pageKey="blog" />
              <BlogDetailPage />
            </>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
