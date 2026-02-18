import React, { useEffect, useRef, useState } from 'react';
import { Mail, Code, Trophy, ChevronRight } from 'lucide-react';
import BlurText from './BlurText';
import ElectricBorder from './ElectricBorder';
import AnimatedList from './AnimatedList';
import SectionHeader from './SectionHeader';

const StatCard = ({ number = 0, label = '', delay = 0 }) => {
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
      { threshold: 0.3 }
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
    <ElectricBorder color="#7df9ff" speed={1} chaos={0.1} style={{ borderRadius: 16 }}>
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center p-6 rounded-xl bg-neutral-900/60 border border-white/10 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ transitionDelay: `${delay * 80}ms` }}
      >
        <div className="text-4xl font-bold text-white">{count}+</div>
        <div className="mt-2 text-sm text-neutral-300">{label}</div>
      </div>
    </ElectricBorder>
  );
};

const highlightItems = [
  'Frontend: React, Tailwind, UI modern dan responsif',
  'Backend: PHP, Laravel, MySQL untuk sistem terstruktur',
  'API & Tools: FastAPI, Postman, Swagger',
  'Versioning: Git & GitHub dengan alur rapi',
  'Deploy: Vercel untuk performa tinggi',
  'Nilai kerja: konsisten, kolaboratif, problem-solver',
];

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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full py-20 px-4 z-10 scroll-mt-28">
      <div className="km-container">
        <SectionHeader
          titlePrefix="Tentang"
          titleHighlight="Saya"
          highlightClassName="text-emerald-400"
          description="Membangun solusi digital yang indah, fungsional, dan berdampak."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div
            className={`transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <ElectricBorder
              color="#34d399"
              speed={1}
              chaos={0.12}
              style={{ borderRadius: 20 }}
            >
              <div className="p-8 rounded-2xl bg-neutral-900/60 border border-white/10">
                <div className="flex items-center gap-3 text-white">
                  <Trophy className="w-6 h-6 text-emerald-300" />
                  <h3 className="text-2xl font-semibold">Perjalanan Saya</h3>
                </div>
                <p className="mt-4 text-neutral-300">
                  Sebagai siswa SMK Wikrama Bogor jurusan Pengembangan Perangkat
                  Lunak dan Game, saya telah mengembangkan berbagai sistem
                  aplikasi yang menyelesaikan masalah nyata di dunia pendidikan
                  dan bisnis.
                </p>
                <p className="mt-3 text-neutral-300">
                  Dari sistem manajemen apotek hingga perpustakaan digital,
                  setiap proyek adalah langkah menuju visi untuk menjadi
                  developer yang menghadirkan teknologi terdepan.
                </p>
              </div>
            </ElectricBorder>

            <div className="mt-8">
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.1}
                style={{ borderRadius: 20 }}
              >
                <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10">
                  <AnimatedList
                    items={highlightItems}
                    className="mx-auto"
                    itemClassName="bg-neutral-800 border border-white/10"
                    showGradients
                    enableArrowNavigation
                    displayScrollbar={false}
                  />
                </div>
              </ElectricBorder>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              <StatCard number={15} label="Proyek Selesai" delay={0} />
              <StatCard number={2} label="Tahun Pengalaman" delay={1} />
              <StatCard number={8} label="Teknologi Dikuasai" delay={2} />
              <StatCard number={10} label="Sertifikat" delay={3} />
            </div>

            <div className="mt-8">
              <ElectricBorder
                color="#34d399"
                speed={1}
                chaos={0.12}
                style={{ borderRadius: 20 }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-emerald-400/20 text-white border border-white/10 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <Code className="w-6 h-6" />
                      <h3 className="text-2xl font-semibold">Visi & Misi</h3>
                    </div>
                    <p className="mt-4 text-white/90">
                      Menjadi web developer profesional yang mampu menciptakan
                      solusi teknologi inovatif untuk memajukan digitalisasi
                      Indonesia.
                    </p>
                    <button
                      className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={() =>
                        window.open("mailto:khoyum28@gmail.com", "_blank")
                      }
                    >
                      <span>Mari berkolaborasi</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
