import { useRef, useState, useEffect, useCallback } from "react";
import CardGlare from "./CardGlare";
import ElectricBorder from "./ElectricBorder";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

export const posts = [
  {
    id: 1,
    title: "Meningkatkan UX dengan Animasi Halus di React",
    excerpt:
      "Membahas micro-interaction, aksesibilitas, dan performa animasi pada UI modern.",
    image:
      "https://images.unsplash.com/photo-1520092352210-985948d4a87e?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 2026",
    tags: ["React", "UI/UX", "Motion"],
    readTime: "5 min read",
    url: "#",
    slug: "animasi-halus-react-ux",
  },
  {
    id: 2,
    title: "Membangun Design System Kecil untuk Tim",
    excerpt:
      "Strategi komponen reusable, naming, dan dokumentasi ringkas untuk skala kecil.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    date: "Jan 2026",
    tags: ["Design System", "Tailwind"],
    readTime: "7 min read",
    url: "#",
    slug: "design-system-kecil-untuk-tim",
  },
  {
    id: 3,
    title: "Optimasi Web: Bundle, Caching, dan Lazy Loading",
    excerpt:
      "Praktik terbaik mengurangi ukuran bundle dan meningkatkan skor performa.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    date: "Des 2025",
    tags: ["Performance", "Vite"],
    readTime: "6 min read",
    url: "#",
    slug: "optimasi-web-bundle-caching-lazy-loading",
  },
  {
    id: 4,
    title: "Memahami CSS Grid & Flexbox Secara Mendalam",
    excerpt:
      "Panduan lengkap penggunaan Grid dan Flexbox untuk layout modern yang fleksibel.",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
    date: "Nov 2025",
    tags: ["CSS", "Layout"],
    readTime: "8 min read",
    url: "#",
    slug: "memahami-css-grid-flexbox-mendalam",
  },
];

const CARD_GAP = 24; // px, matches gap-6
const AUTO_PLAY_INTERVAL = 3500; // ms

const Blog = () => {
  const filtered = posts;

  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const isPausedRef = useRef(false);

  // Get card width dynamically
  const getCardWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 300;
    // Find first card element
    const firstCard = el.querySelector("[data-card]");
    if (!firstCard) return 300;
    return firstCard.offsetWidth;
  }, []);

  // Scroll to a specific index
  const scrollToIndex = useCallback(
    (index) => {
      const el = trackRef.current;
      if (!el) return;
      const total = filtered.length;
      const clamped = Math.max(0, Math.min(index, total - 1));
      const cardWidth = getCardWidth();
      el.scrollTo({
        left: clamped * (cardWidth + CARD_GAP),
        behavior: "smooth",
      });
      setCurrentIndex(clamped);
    },
    [filtered.length, getCardWidth],
  );

  // Auto-play
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (isPausedRef.current) return;
      setCurrentIndex((prev) => {
        const next = (prev + 1) % filtered.length;
        const el = trackRef.current;
        if (el) {
          const cardWidth = getCardWidth();
          el.scrollTo({
            left: next * (cardWidth + CARD_GAP),
            behavior: "smooth",
          });
        }
        return next;
      });
    }, AUTO_PLAY_INTERVAL);
  }, [filtered.length, getCardWidth]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  const handlePrev = () => {
    const prev = (currentIndex - 1 + filtered.length) % filtered.length;
    scrollToIndex(prev);
    // Restart autoplay timer
    startAutoPlay();
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % filtered.length;
    scrollToIndex(next);
    startAutoPlay();
  };

  const handleDotClick = (i) => {
    scrollToIndex(i);
    startAutoPlay();
  };

  // Sync currentIndex when user manually scrolls
  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    const idx = Math.round(el.scrollLeft / (cardWidth + CARD_GAP));
    setCurrentIndex(idx);
  };

  return (
    <section
      id="blog"
      className="w-full py-16 sm:py-20 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Blog"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 0%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(800px 400px at 60% 10%, rgba(20,184,166,0.18), transparent 60%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="km-container text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4 sm:mb-5">
          Blog & Artikel
        </div>
        <SectionHeader
          titlePrefix="Catatan seputar"
          titleHighlight="desain & pengembangan"
          highlightClassName="text-emerald-400"
          description="Kumpulan tulisan singkat seputar UI, UX, performa web, dan cara membangun produk digital yang lebih baik."
        />
      </div>

      {/* Card Container */}
      <div className="km-container relative z-10">
        <div className="relative rounded-[24px] sm:rounded-[28px] border border-white/10 p-4 sm:p-6 lg:p-8 overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.04]">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px)",
              maskImage:
                            "radial-gradient(600px 300px at 50% 0%, black, transparent 70%)",
            }}
          />

          {/* Scrollable Track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="snap-x snap-mandatory overflow-x-auto pb-4 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {filtered.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`}>
                  <CardGlare roundedClass="rounded-2xl">
                    <div
                      data-card
                      className="w-[260px] xs:w-[280px] sm:w-[320px] md:w-[360px] rounded-2xl overflow-hidden"
                    >
                      <div className="w-full h-44 sm:h-48 md:h-56 overflow-hidden p-3">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="px-4 pb-5">
                        <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                            {p.tags?.[0] || "Article"}
                          </span>
                          <span>{p.readTime}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-1">
                          {p.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/50 line-clamp-2">
                          {p.excerpt}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs text-emerald-400/80">
                          <span>{p.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardGlare>
                </Link>
              ))}
            </div>
          </div>

          {/* Controls Row */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 relative z-10">
            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:bg-white/15 transition-colors"
                  aria-label="Scroll left"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:bg-white/15 transition-colors"
                  aria-label="Scroll right"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5 ml-2">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: currentIndex === i ? "20px" : "6px",
                      height: "6px",
                      background:
                        currentIndex === i
                            ? "linear-gradient(90deg, #34d399, #60a5fa)"
                          : "rgba(255,255,255,0.2)",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* See All Button */}
            <ElectricBorder
              color="#3b82f6"
              speed={1}
              chaos={0.12}
              style={{ borderRadius: 9999, display: "inline-block" }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium whitespace-nowrap"
              >
                Lihat semua tulisan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ElectricBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
