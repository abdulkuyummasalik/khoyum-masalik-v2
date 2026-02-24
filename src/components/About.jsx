import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Code,
  Trophy,
  ChevronRight,
  Layers,
  GitBranch,
  Globe,
  Server,
  Zap,
  Star,
} from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";

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
      { threshold: 0.3 },
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
      className={`h-full flex flex-col items-start justify-between p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-emerald-400/40 transition-all duration-500 group ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-4 group-hover:bg-emerald-400/20 transition-colors">
        <Star className="w-5 h-5 text-emerald-400" />
      </div>
      <div>
        <div className="text-4xl font-bold text-white tabular-nums">
          {count}+
        </div>
        <div className="mt-1 text-sm text-neutral-400 font-medium">{label}</div>
      </div>
    </div>
  );
};

// ─── Tech Stack Data ──────────────────────────────────────────────────────────
const techStack = [
  {
    icon: <Globe className="w-4 h-4" />,
    label: "React & Tailwind",
    color: "#7df9ff",
  },
  {
    icon: <Server className="w-4 h-4" />,
    label: "PHP & Laravel",
    color: "#34d399",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    label: "FastAPI & REST",
    color: "#a78bfa",
  },
  {
    icon: <GitBranch className="w-4 h-4" />,
    label: "Git & GitHub",
    color: "#fb923c",
  },
  {
    icon: <Layers className="w-4 h-4" />,
    label: "MySQL & DB",
    color: "#f472b6",
  },
  {
    icon: <Code className="w-4 h-4" />,
    label: "Vercel Deploy",
    color: "#7df9ff",
  },
];

// ─── About Section ────────────────────────────────────────────────────────────
/*
  BENTO GRID — 12 cols × 6 rows
  col:  1  2  3  4  5  6  7  8  9 10 11 12
  row1: 0  0  0  0  0  1  1  1  1  1  1  1
  row2: 0  0  0  0  0  1  1  1  1  1  1  1
  row3: 0  0  0  0  0  3  3  3  5  5  5  5
  row4: 2  2  2  2  2  3  3  3  5  5  5  5
  row5: 2  2  2  2  2  4  4  4  6  6  6  6
  row6: 2  2  2  2  2  4  4  4  6  6  6  6

  [0] About     → col 1–5,  row 1–4  (gridRow: 1/4)
  [1] Visi/Misi → col 6–12, row 1–3  (gridRow: 1/3)
  [2] Tech      → col 1–5,  row 4–7  (gridRow: 4/7)
  [3] Stat 1    → col 6–8,  row 3–5  (gridRow: 3/5)
  [4] Stat 2    → col 6–8,  row 5–7  (gridRow: 5/7)
  [5] Stat 3    → col 9–12, row 3–5  (gridRow: 3/5)
  [6] Stat 4    → col 9–12, row 5–7  (gridRow: 5/7)
*/

const ROW_H = 110; // px — each row height

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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 z-10 scroll-mt-28"
    >
      <div className="km-container">
        <SectionHeader
          titlePrefix="Tentang"
          titleHighlight="Saya"
          highlightClassName="text-emerald-400"
          description="Membangun solusi digital yang indah, fungsional, dan berdampak."
        />

        {/* ── BENTO GRID ──────────────────────────────────────────────────── */}
        <div
          className="mt-12 grid gap-4"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: `repeat(7, ${ROW_H}px)`,
          }}
        >
          {/* [0] About — col 1–5, row 1–5 */}
          <div
            className="h-full"
            style={{ gridColumn: "1 / 6", gridRow: "1 / 5" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <div
                className={`h-full rounded-2xl bg-neutral-900 border border-white/10 hover:border-emerald-400/30 transition-all duration-700 p-8 flex flex-col justify-between ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Perjalanan Saya
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Sebagai siswa SMK Wikrama Bogor jurusan Pengembangan
                    Perangkat Lunak dan Game, saya telah mengembangkan berbagai
                    sistem aplikasi yang menyelesaikan masalah nyata di dunia
                    pendidikan dan bisnis.
                  </p>
                  <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                    Dari sistem manajemen apotek hingga perpustakaan digital,
                    setiap proyek adalah langkah menuju visi menjadi developer
                    yang menghadirkan teknologi terdepan.
                  </p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-emerald-400/40 via-cyan-400/20 to-transparent" />
              </div>
            </CardGlare>
          </div>

          {/* [1] Visi/Misi — col 6–12, row 1–4 */}
          <div
            className="h-full"
            style={{ gridColumn: "6 / 13", gridRow: "1 / 4" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <div
                className={`h-full rounded-2xl border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-700 p-8 flex flex-col justify-between relative overflow-hidden ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: "100ms",
                  background:
                    "linear-gradient(135deg, rgba(52,211,153,0.12) 0%, rgba(17,17,17,0.95) 60%, rgba(125,249,255,0.05) 100%)",
                }}
              >
                {/* glow blob */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, #34d399, transparent)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-400/15 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-emerald-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        Visi & Misi
                      </h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Menjadi web developer profesional yang mampu menciptakan
                      solusi teknologi inovatif untuk memajukan digitalisasi
                      Indonesia.
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {[
                        "Konsisten dalam kualitas kode",
                        "Kolaboratif & komunikatif",
                        "Problem-solver yang adaptif",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-neutral-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ElectricBorder pas di button — borderRadius=12 sesuai rounded-xl */}
                  <div className="mt-4 self-start">
                    <ElectricBorder
                      color="#34d399"
                      speed={1.2}
                      chaos={0.08}
                      borderRadius={12}
                    >
                      <button
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 text-sm font-medium transition-colors"
                        onClick={() =>
                          window.open("mailto:khoyum28@gmail.com", "_blank")
                        }
                      >
                        <Mail className="w-4 h-4" />
                        <span>Mari berkolaborasi</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </ElectricBorder>
                  </div>
                </div>
              </div>
            </CardGlare>
          </div>

          {/* [3] Stat — Proyek Selesai — col 6–8, row 4–6 */}
          <div
            className="h-full"
            style={{ gridColumn: "6 / 9", gridRow: "4 / 6" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={15} label="Proyek Selesai" delay={2} />
            </CardGlare>
          </div>

          {/* [5] Stat — Teknologi Dikuasai — col 9–12, row 4–6 */}
          <div
            className="h-full"
            style={{ gridColumn: "9 / 13", gridRow: "4 / 6" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={8} label="Teknologi Dikuasai" delay={3} />
            </CardGlare>
          </div>

          {/* [2] Tech Stack — col 1–5, row 5–8 */}
          <div
            className="h-full"
            style={{ gridColumn: "1 / 6", gridRow: "5 / 8" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <div
                className={`h-full rounded-2xl bg-neutral-900 border border-white/10 hover:border-cyan-400/30 transition-all duration-700 p-8 flex flex-col ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Tech Stack
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-800 border border-white/5 hover:border-white/20 transition-all group cursor-default"
                    >
                      <span
                        style={{ color: tech.color }}
                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                      >
                        {tech.icon}
                      </span>
                      <span className="text-sm text-neutral-300 font-medium">
                        {tech.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardGlare>
          </div>

          {/* [4] Stat — Tahun Pengalaman — col 6–8, row 6–8 */}
          <div
            className="h-full"
            style={{ gridColumn: "6 / 9", gridRow: "6 / 8" }}
          >
            <CardGlare roundedClass="rounded-2xl" className="h-full">
              <StatCard number={2} label="Tahun Pengalaman" delay={4} />
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
