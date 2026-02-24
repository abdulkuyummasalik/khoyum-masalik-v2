import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import CardGlare from "./CardGlare";
import SectionHeader from "./SectionHeader";

// ─── Featured Data ────────────────────────────────────────────────────────────
const featuredProjects = [
  {
    title: "Sistem Manajemen Apotek",
    description:
      "Pengelolaan obat, stok, transaksi, dan laporan dengan antarmuka modern serta performa cepat.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
    tags: ["React", "UI/UX"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Perpustakaan Digital",
    description:
      "Katalog, peminjaman, reminder otomatis, fokus aksesibilitas dan performa tinggi.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
    tags: ["Next.js", "Fullstack"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "E-Commerce UMKM",
    description:
      "Katalog produk, keranjang, checkout, dan dashboard penjual dengan analitik sederhana.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1400&auto=format&fit=crop",
    tags: ["Next.js", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Manager Pro",
    description:
      "Kanban board, drag-drop, filter, dan notifikasi email untuk tim kecil yang produktif.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop",
    tags: ["React", "Supabase"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Landing Page Animatif",
    description:
      "Hero interaktif, parallax, dan micro-interaction yang halus untuk brand modern.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    tags: ["Vite", "GSAP"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "UI Components Kit",
    description:
      "Kumpulan komponen UI reusable dengan tema gelap dan fokus aksesibilitas.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
    tags: ["Storybook", "UI/UX"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

// ─── All Projects ─────────────────────────────────────────────────────────────
const categories = ["Semua", "Web App", "Fullstack", "UI/UX", "Tools"];

const allProjects = [
  {
    title: "Sistem Inventaris Sekolah",
    description:
      "Monitoring aset, mutasi, dan laporan dengan QR code dan role-based access.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Express", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    category: "Fullstack",
  },
  {
    title: "E-Commerce UMKM",
    description:
      "Katalog produk, keranjang, checkout, dan dashboard penjual dengan analitik.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
    category: "Web App",
  },
  {
    title: "Portal Siswa",
    description:
      "Auth, nilai, jadwal, kehadiran, dan pengumuman realtime terintegrasi.",
    image:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Firebase"],
    liveUrl: "#",
    repoUrl: "#",
    category: "Web App",
  },
  {
    title: "UI Components Kit",
    description:
      "Kumpulan komponen UI reusable dengan tema gelap, fokus aksesibilitas.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    tags: ["Storybook", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
    category: "UI/UX",
  },
  {
    title: "API Perpustakaan",
    description:
      "REST API untuk manajemen buku, sirkulasi, dan anggota dengan rate limit.",
    image:
      "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&auto=format&fit=crop",
    tags: ["Node.js", "Fastify", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    category: "Fullstack",
  },
  {
    title: "Landing Page Animatif",
    description:
      "Hero interaktif, parallax, dan micro-interaction halus untuk brand.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    tags: ["Vite", "GSAP"],
    liveUrl: "#",
    repoUrl: "#",
    category: "UI/UX",
  },
];

// ─── Featured Slider ──────────────────────────────────────────────────────────
const FeaturedSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [direction, setDirection] = useState(1); // 1=next, -1=prev
  const total = featuredProjects.length;
  const autoRef = useRef(null);
  const isPausedRef = useRef(false);

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setDirection(1);
        setCurrent((p) => (p + 1) % total);
        setAnimKey((k) => k + 1);
      }
    }, 4500);
  }, [total]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + total) % total);
    setAnimKey((k) => k + 1);
    startAuto();
  };
  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    setAnimKey((k) => k + 1);
    startAuto();
  };

  const proj = featuredProjects[current];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      <style>{`
        @keyframes sliderIn {
          from { opacity: 0; transform: scale(1.06); }
          to   { opacity: 1; transform: scale(1); }
        }
        .slider-img { animation: sliderIn 0.55s cubic-bezier(0.25,0.46,0.45,0.94) forwards; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .slide-content { animation: slideUp 0.45s ease forwards; animation-delay: 0.1s; opacity: 0; }
      `}</style>

      {/* ── Main Hero Card ──────────────────────────────────────────────── */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          aspectRatio: "16 / 7",
          minHeight: "240px",
          maxHeight: "520px",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)",
        }}
      >
        {/* BG image with animation */}
        <div key={animKey} className="absolute inset-0 slider-img">
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* Index badge — top left */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <span className="text-xs font-mono text-white/40 tracking-widest">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Tags — top right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 flex-wrap justify-end">
          {proj.tags.map((tag, ti) => (
            <span
              key={ti}
              className="text-xs px-2.5 py-1 rounded-full bg-black/50 border border-white/15 text-white/90 backdrop-blur-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content — bottom */}
        <div
          key={`content-${animKey}`}
          className="slide-content absolute bottom-0 inset-x-0 p-5 sm:p-8 md:p-10"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
            {proj.title}
          </h3>
          <p className="text-sm sm:text-base text-white/55 leading-relaxed max-w-xl hidden sm:block">
            {proj.description}
          </p>
          <div className="mt-4 sm:mt-5 flex items-center gap-3">
            <ElectricBorder
              color="#10b981"
              speed={1}
              chaos={0.1}
              style={{ borderRadius: 9999, display: "inline-block" }}
            >
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-600/80 hover:bg-emerald-500 transition-colors text-sm font-semibold text-white"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            </ElectricBorder>
            <ElectricBorder
              color="#3b82f6"
              speed={1}
              chaos={0.1}
              style={{ borderRadius: 9999, display: "inline-block" }}
            >
              <a
                href={proj.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition-colors text-sm text-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repo</span>
              </a>
            </ElectricBorder>
          </div>
        </div>

        {/* Nav buttons — overlay on image sides */}
        <button
          onClick={() => go(-1)}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 hover:border-white/30 backdrop-blur-sm flex items-center justify-center transition-all active:scale-90"
          aria-label="Previous"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 hover:border-white/30 backdrop-blur-sm flex items-center justify-center transition-all active:scale-90"
          aria-label="Next"
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* ── Thumbnail Strip + Dots ──────────────────────────────────────── */}
      <div className="mt-4 flex items-center gap-2 sm:gap-3">
        {/* Thumbnails — hidden on very small, shown sm+ */}
        <div className="hidden sm:flex gap-2 flex-1 overflow-hidden">
          {featuredProjects.map((p, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative flex-1 rounded-xl overflow-hidden transition-all duration-300 focus:outline-none"
              style={{
                aspectRatio: "16/9",
                minWidth: 0,
                opacity: i === current ? 1 : 0.4,
                transform: i === current ? "scale(1)" : "scale(0.95)",
                boxShadow: i === current ? "0 0 0 2px #10b981" : "none",
              }}
              aria-label={p.title}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Dark overlay for inactive */}
              {i !== current && (
                <div className="absolute inset-0 bg-black/40" />
              )}
            </button>
          ))}
        </div>

        {/* Dot indicators — shown on mobile, hidden sm+ */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 w-full py-1">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "7px",
                height: "7px",
                background:
                  i === current
                    ? "linear-gradient(90deg, #10b981, #34d399)"
                    : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ p }) => (
  <div className="flex flex-col h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm">
    <CardGlare className="h-full flex flex-col" roundedClass="rounded-2xl">
      <div className="w-full h-44 md:h-48 overflow-hidden flex-shrink-0">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h4 className="text-base sm:text-lg font-semibold text-white leading-snug">
          {p.title}
        </h4>
        <p className="mt-2 text-sm text-neutral-400 leading-relaxed flex-1">
          {p.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((t, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/75"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <ElectricBorder
            color="#10b981"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 10, display: "block" }}
          >
            <a
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-[10px] bg-white/10 hover:bg-white/20 transition-colors px-3 py-2 text-sm text-white"
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live
            </a>
          </ElectricBorder>
          <ElectricBorder
            color="#3b82f6"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 10, display: "block" }}
          >
            <a
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-white/10 hover:bg-white/10 transition-colors px-3 py-2 text-sm text-white"
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github className="w-3.5 h-3.5" /> Repo
            </a>
          </ElectricBorder>
        </div>
      </div>
    </CardGlare>
  </div>
);

// ─── Main Export ──────────────────────────────────────────────────────────────
const Projects = () => {
  const [active, setActive] = useState("Semua");
  const filtered = useMemo(() => {
    if (active === "Semua") return allProjects;
    return allProjects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section
      id="projects"
      className="w-full py-16 sm:py-20 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Proyek"
    >
      {/* Bg glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 20%, rgba(52,211,153,0.35), transparent 60%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="km-container text-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4 sm:mb-5">
            Proyek Unggulan
          </div>
          <SectionHeader
            titlePrefix="Things"
            titleHighlight="I've Built."
            highlightClassName="text-emerald-400"
            description="Proyek-proyek yang mencerminkan kualitas, performa, dan perhatian penuh pada detail."
          />
        </div>
      </div>

      {/* ── Featured Slider ────────────────────────────────────────────── */}
      <div className="km-container relative z-10 mb-20">
        <FeaturedSlider />
      </div>

      {/* ── All Projects ───────────────────────────────────────────────── */}
      <div className="km-container relative z-10">
        <SectionHeader
          titlePrefix="Daftar"
          titleHighlight="Proyek"
          highlightClassName="text-sky-400"
          description="Eksplorasi semua karya dengan tampilan modern, interaktif, dan responsif."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-sm px-4 py-1.5 rounded-full border transition-all duration-200"
              style={{
                background:
                  active === cat
                    ? "linear-gradient(135deg,rgba(59,130,246,0.25),rgba(52,211,153,0.2))"
                    : "transparent",
                borderColor:
                  active === cat
                    ? "rgba(255,255,255,0.25)"
                    : "rgba(255,255,255,0.1)",
                color: active === cat ? "#fff" : "rgba(255,255,255,0.6)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div key={`${p.title}-${i}`} className="flex">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <ElectricBorder
            color="#3b82f6"
            speed={1}
            chaos={0.1}
            style={{ borderRadius: 12, display: "inline-block" }}
          >
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              Lihat lebih banyak di GitHub
            </a>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
};

export default Projects;
