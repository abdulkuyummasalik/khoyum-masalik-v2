import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Trophy,
  ChevronRight,
  Star,
  Zap,
  Code
} from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";
import { techStack } from "../datas/about";

// ─── Stat Card ────────────────────────────────────────────────────────────────
const StatCard = ({ number = 0, label = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const step = Math.max(1, Math.ceil(number / 25));
    const timer = setInterval(() => {
      setCount((p) => {
        const n = p + step;
        return n >= number ? number : n;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [visible, number]);

  return (
    <div
      ref={ref}
      className={`h-full flex flex-col items-start justify-between p-5 sm:p-6 rounded-2xl bg-card border border-white/10 hover:border-emerald-400/40 transition-all duration-500 group ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-emerald-400/20 transition-colors">
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
      </div>
      <div>
        <div className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
          {count}+
        </div>
        <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};


// ─── About Section ────────────────────────────────────────────────────────────
/*
  RESPONSIVE LAYOUT:

  📱 Mobile  (<768px)  → full-width stack, urutan: About → Visi → Stats 2x2 → Tech
  📟 Tablet  (768–1279px) → 2-col grid, 6 rows
  🖥  Desktop (≥1280px) → 12-col bento grid persis seperti sebelumnya

  BENTO (desktop):
  col:  1  2  3  4  5  6  7  8  9 10 11 12
  row1: 0  0  0  0  0  1  1  1  1  1  1  1
  row2: 0  0  0  0  0  1  1  1  1  1  1  1
  row3: 0  0  0  0  0  1  1  1  1  1  1  1
  row4: 0  0  0  0  0  3  3  3  5  5  5  5
  row5: 2  2  2  2  2  3  3  3  5  5  5  5
  row6: 2  2  2  2  2  4  4  4  6  6  6  6
  row7: 2  2  2  2  2  4  4  4  6  6  6  6
*/

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const fadeUp = (delay = 0) =>
    `transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`;

  // ── Shared card contents ──────────────────────────────────────────────────

  const AboutContent = () => (
    <div
      className={`h-full rounded-2xl bg-card border border-white/10 hover:border-emerald-400/30 transition-all duration-700 p-6 sm:p-8 flex flex-col justify-between ${fadeUp(0)}`}
      style={{ transitionDelay: "0ms" }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
            Perjalanan Saya
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Saya adalah lulusan SMK Wikrama Bogor tahun 2026 dari jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).
        </p>
        <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
          Saat ini saya aktif sebagai Freelance Web Developer dengan fokus membangun aplikasi web, sistem informasi, dan solusi digital. Saya berpengalaman membangun aplikasi end-to-end baik di sisi frontend maupun backend.
        </p>
      </div>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-emerald-400/40 via-cyan-400/20 to-transparent" />
    </div>
  );

  const VisiContent = () => (
    <div
      className={`h-full rounded-2xl border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-700 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden ${fadeUp(1)}`}
      style={{
        transitionDelay: "100ms",
        background:
          "linear-gradient(135deg, rgba(52,211,153,0.12) 0%, rgba(17,17,17,0.95) 60%, rgba(125,249,255,0.05) 100%)",
      }}
    >
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #34d399, transparent)" }}
      />
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-400/15 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              Visi & Misi
            </h3>
          </div>
          <p className="text-foreground/80 text-sm leading-relaxed">
            Menciptakan produk dan layanan digital yang fungsional, inovatif, dan mampu memberikan dampak positif yang nyata bagi penggunanya.
          </p>
          <ul className="mt-3 space-y-1.5">
            {[
              "Problem solving dalam pengembangan software",
              "Membangun sistem yang scalable",
              "Mengikuti perkembangan teknologi modern",
              "Menjaga kualitas dan maintainability kode",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 self-start">
          <ElectricBorder
            color="#10b981"
            speed={1.2}
            chaos={0.08}
            borderRadius={12}
          >
            <button
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 text-sm font-medium transition-colors"
              onClick={() => window.open("mailto:khoyummasalik@gmail.com", "_blank")}
            >
              <Mail className="w-4 h-4" />
              <span>Mari berkolaborasi</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </ElectricBorder>
        </div>
      </div>
    </div>
  );

  const TechContent = () => (
    <div
      className={`h-full rounded-2xl bg-card border border-white/10 hover:border-cyan-400/30 transition-all duration-700 p-6 sm:p-8 flex flex-col ${fadeUp(2)}`}
      style={{ transitionDelay: "200ms" }}
    >
      <div className="flex items-center gap-3 mb-5 sm:mb-6">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
          <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground">
          Tech Stack
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-white/5 hover:border-white/20 transition-all group cursor-default"
          >
            <span
              style={{ color: tech.color }}
              className="opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0"
            >
              {tech.icon}
            </span>
            <span className="text-xs sm:text-sm text-foreground/80 font-medium truncate">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 xl:py-24 z-10 scroll-mt-28"
    >
      <div className="km-container">
        <SectionHeader
          titlePrefix="Tentang"
          titleHighlight="Saya"
          highlightClassName="text-emerald-400"
          description="Membangun solusi digital yang indah, fungsional, dan berdampak."
        />

        {/* ╔══════════════════════════════════════════════════════════════════╗
            ║  📱 MOBILE  — full-width vertical stack                         ║
            ╚══════════════════════════════════════════════════════════════════╝ */}
        <div className="mt-8 flex flex-col gap-4 md:hidden">
          {/* About */}
          <CardGlare roundedClass="rounded-2xl">
            <AboutContent />
          </CardGlare>

          {/* Visi/Misi */}
          <CardGlare roundedClass="rounded-2xl">
            <VisiContent />
          </CardGlare>

          {/* Stats 2×2 */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: 5, l: "Proyek Selesai", d: 2 },
              { n: 10, l: "Teknologi Dikuasai", d: 3 },
              { n: 3, l: "Tahun Pengalaman", d: 4 },
              { n: 10, l: "Sertifikat", d: 5 },
            ].map(({ n, l, d }) => (
              <CardGlare key={l} roundedClass="rounded-2xl" className="h-full">
                <StatCard number={n} label={l} delay={d} />
              </CardGlare>
            ))}
          </div>

          {/* Tech */}
          <CardGlare roundedClass="rounded-2xl">
            <TechContent />
          </CardGlare>
        </div>

        {/* ╔══════════════════════════════════════════════════════════════════╗
            ║  📟 TABLET  — 2-col grid                                        ║
            ╚══════════════════════════════════════════════════════════════════╝ */}
        <div className="mt-8 hidden md:grid xl:hidden grid-cols-2 gap-4">
          {/* Row 1: About + Visi (equal height via grid rows) */}
          <div className="row-span-2">
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <AboutContent />
            </CardGlare>
          </div>
          <CardGlare roundedClass="rounded-2xl">
            <VisiContent />
          </CardGlare>

          {/* Row 2 kanan: stats 2x1 */}
          <div className="grid grid-cols-2 gap-4">
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={10} label="Proyek Selesai" delay={2} />
            </CardGlare>
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={10} label="Teknologi Dikuasai" delay={3} />
            </CardGlare>
          </div>

          {/* Row 3: Tech + stats 2x1 */}
          <div className="row-span-2">
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <TechContent />
            </CardGlare>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={1} label="Tahun Pengalaman" delay={300} />
            </CardGlare>
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={20} label="Sertifikat" delay={400} />
            </CardGlare>
          </div>
        </div>

        {/* ╔══════════════════════════════════════════════════════════════════╗
            ║  🖥  DESKTOP  — full 12-col bento grid                          ║
            ╚══════════════════════════════════════════════════════════════════╝ */}
        <div
          className="mt-12 hidden xl:grid gap-4"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(7, 110px)",
          }}
        >
          {/* [0] About — col 1–5, row 1–5 */}
          <div
            className="h-full"
            style={{ gridColumn: "1 / 6", gridRow: "1 / 5" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <AboutContent />
            </CardGlare>
          </div>

          {/* [1] Visi/Misi — col 6–12, row 1–4 */}
          <div
            className="h-full"
            style={{ gridColumn: "6 / 13", gridRow: "1 / 4" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <VisiContent />
            </CardGlare>
          </div>

          {/* [3] Stat — Proyek Selesai — col 6–8, row 4–6 */}
          <div
            className="h-full"
            style={{ gridColumn: "6 / 9", gridRow: "4 / 6" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={5} label="Proyek Selesai" delay={2} />
            </CardGlare>
          </div>

          {/* [5] Stat — Teknologi Dikuasai — col 9–12, row 4–6 */}
          <div
            className="h-full"
            style={{ gridColumn: "9 / 13", gridRow: "4 / 6" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={10} label="Teknologi Dikuasai" delay={3} />
            </CardGlare>
          </div>

          {/* [2] Tech Stack — col 1–5, row 5–8 */}
          <div
            className="h-full"
            style={{ gridColumn: "1 / 6", gridRow: "5 / 8" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <TechContent />
            </CardGlare>
          </div>

          {/* [4] Stat — Tahun Pengalaman — col 6–8, row 6–8 */}
          <div
            className="h-full"
            style={{ gridColumn: "6 / 9", gridRow: "6 / 8" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={3} label="Tahun Pengalaman" delay={4} />
            </CardGlare>
          </div>

          {/* [6] Stat — Sertifikat — col 9–12, row 6–8 */}
          <div
            className="h-full"
            style={{ gridColumn: "9 / 13", gridRow: "6 / 8" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={10} label="Sertifikat" delay={5} />
            </CardGlare>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
