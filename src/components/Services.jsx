import { useRef } from "react";
import {
  Code2,
  Layout,
  Rocket,
  Database,
  Shield,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import CardGlare from "./CardGlare";
import SectionHeader from "./SectionHeader";


// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: <Code2 className="w-5 h-5 text-blue-300" />,
    title: "Custom Web Development",
    number: "01",
    desc: "Saya membangun website custom dari konsep awal hingga siap rilis (live). Baik itu landing page, company profile, atau aplikasi sistem berbasis web, saya merancangnya agar fungsional, cepat, responsif, dan siap mendukung pertumbuhan bisnis Anda.",
    chips: ["Fullstack", "Responsive", "Custom Web"],
    bg: "linear-gradient(135deg, #050d1c 0%, #091628 55%, #050d1c 100%)",
    accent: "rgba(59,130,246,0.22)",
    glow: "#3b82f6",
    chipColor: "rgba(59,130,246,0.15)",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-amber-300" />,
    title: "Maintenance & Pembaruan Sistem",
    number: "02",
    desc: "Produk digital membutuhkan perawatan berkelanjutan agar performanya tidak menurun. Saya siap melanjutkan pengembangan proyek Anda yang sudah berjalan, menambahkan fitur baru, memperbaiki bug, maupun menjaga agar kode dan sistem tetap mutakhir.",
    chips: ["Update", "Bug Fixing", "Refactoring"],
    bg: "linear-gradient(135deg, #120f04 0%, #1a1508 55%, #120f04 100%)",
    accent: "rgba(252,211,77,0.15)",
    glow: "#fcd34d",
    chipColor: "rgba(252,211,77,0.10)",
  },
  {
    icon: <Rocket className="w-5 h-5 text-sky-400" />,
    title: "Jasa Hosting & Domain",
    number: "03",
    desc: "Tidak perlu pusing dengan urusan teknis untuk meluncurkan website. Saya menangani seluruh proses deployment, mulai dari konfigurasi server, pemilihan layanan hosting yang optimal, hingga proses menghubungkan dan pengaturan domain kustom.",
    chips: ["Deployment", "SSL Setup", "Server Config"],
    bg: "linear-gradient(135deg, #040e1e 0%, #081525 55%, #040e1e 100%)",
    accent: "rgba(56,189,248,0.18)",
    glow: "#38bdf8",
    chipColor: "rgba(56,189,248,0.12)",
  },
  {
    icon: <Layout className="w-5 h-5 text-cyan-300" />,
    title: "Desain UI/UX",
    number: "04",
    desc: "Desain yang memukau bukan sekadar tentang estetika, tapi juga kemudahan pemakaian. Saya memetakan pengalaman (user journey) dan merancang desain antarmuka interaktif menggunakan Figma yang mudah dinavigasi dan langsung sesuai dengan standar web modern.",
    chips: ["Figma Design", "Prototyping", "A11y"],
    bg: "linear-gradient(135deg, #050e1d 0%, #091722 55%, #050e1d 100%)",
    accent: "rgba(34,211,238,0.18)",
    glow: "#22d3ee",
    chipColor: "rgba(34,211,238,0.12)",
  }
];

// ─── Constants ────────────────────────────────────────────────────────────────
const STICKY_TOP_BASE = 88; // px below viewport top where first card pins
const STICKY_OFFSET = 14; // px extra offset per card (stack peek)
const CARD_GAP = 20; // px gap between cards in flow

// ─── Animated Card ────────────────────────────────────────────────────────────
const ServiceCard = ({ s, index }) => {
  const cardRef = useRef(null);
  return (
    <div
      ref={cardRef}
      className="relative w-full rounded-[28px] overflow-hidden border border-white/[0.08]"
      style={{
        position: "sticky",
        top: `${STICKY_TOP_BASE + index * STICKY_OFFSET}px`,
        zIndex: 10 + index,
        marginBottom: `${CARD_GAP}px`,
        background: s.bg,
        boxShadow: `
          0 4px 6px rgba(0,0,0,0.3),
          0 20px 60px rgba(0,0,0,0.55),
          0 0 0 1px rgba(255,255,255,0.05),
          inset 0 1px 0 rgba(255,255,255,0.06)
        `,
      }}
    >
      {/* ── Accent glow corner ── */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${s.accent}, transparent 60%)`,
        }}
      />

      {/* ── Subtle bottom glow ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${s.accent.replace(/[\d.]+\)$/, "0.08)")}, transparent)`,
        }}
      />

      {/* ── Ghost number ── */}
      <div
        className="absolute bottom-0 right-0 leading-none pointer-events-none select-none font-black"
        style={{
          fontSize: "clamp(90px, 14vw, 200px)",
          color: "transparent",
          WebkitTextStroke: `1.5px rgba(255,255,255,0.055)`,
          lineHeight: 0.9,
          paddingRight: "32px",
          paddingBottom: "16px",
          letterSpacing: "-0.05em",
        }}
      >
        {s.number}
      </div>

      <CardGlare roundedClass="rounded-2xl">
        <div className="relative z-10 p-8 sm:p-10 md:p-12 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
          {/* Top row: icon box + counter */}
          <div className="flex items-start justify-between mb-7">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))`,
                boxShadow: `0 0 20px ${s.accent}`,
              }}
            >
              {s.icon}
            </div>
            <span
              className="text-xs font-mono mt-1.5 px-2.5 py-1 rounded-full border border-white/10"
              style={{
                color: "rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.03)",
                letterSpacing: "0.12em",
              }}
            >
              {s.number} / 04
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {s.title}
          </h3>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-7">
            {s.chips.map((c, ci) => (
              <span
                key={ci}
                className="text-xs px-3 py-1 rounded-full border border-white/10 font-medium"
                style={{
                  background: s.chipColor,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-7"
            style={{
              background: `linear-gradient(90deg, ${s.accent}, rgba(255,255,255,0.04) 60%, transparent)`,
            }}
          />

          {/* Description + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-7">
            <p className="text-sm sm:text-base text-neutral-300/90 leading-[1.85] flex-1 max-w-2xl">
              {s.desc}
            </p>
            <div className="flex-shrink-0">
              <ElectricBorder
                color={s.glow}
                speed={1}
                chaos={0.1}
                style={{ borderRadius: 14, display: "inline-block" }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[14px] text-sm font-semibold text-white transition-all duration-200 whitespace-nowrap group"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Kolaborasi
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </CardGlare>
    </div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full pt-20 pb-40 overflow-visible scroll-mt-28 text-white"
      aria-label="Layanan"
    >
      {/* Header */}
      <div className="relative z-10 km-container text-center">
        <SectionHeader
          titlePrefix="Apa yang bisa"
          titleHighlight="saya bantu"
          description="Mulai dari perancangan antarmuka, implementasi aplikasi, optimasi kinerja, hingga perawatan berkelanjutan."
        />
      </div>

      {/* ── Sticky stack ── */}
      <div className="km-container relative z-10">
        {services.map((s, i) => (
          <ServiceCard key={i} s={s} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Services;
