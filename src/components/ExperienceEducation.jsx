import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'motion/react';
import SectionHeader from './SectionHeader';
import { Briefcase, GraduationCap, Calendar, ArrowUpRight } from 'lucide-react';
import CardGlare from './CardGlare';

const timelineData = [
  {
    id: 1,
    type: 'experience',
    role: 'Freelance Web Developer',
    company: 'Independen / Klien Beragam',
    period: '2025 - Sekarang',
    description: 'Menyediakan jasa pembuatan aplikasi web kustom, maintenance sistem, serta setup hosting untuk berbagai klien sesuai kebutuhan spesifik mereka.',
    skills: ['React/Vue', 'Go/PHP', 'Fullstack'],
    link: '#'
  },
  {
    id: 2,
    type: 'experience',
    role: 'Backend Developer Intern',
    company: 'PT. INOVASI GENERASI INDONESIA - Tangerang',
    period: '2026',
    description: 'Terlibat dalam revamp UI/UX serta migrasi sistem backend berskala produksi dari arsitektur Laravel menuju backend berbasis arsitektur Go (Echo).',
    skills: ['Flutter', 'Go (Echo)', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    type: 'experience',
    role: 'Fullstack Developer Intern',
    company: 'PT. EXORTY INDONESIA - Bogor',
    period: '2025',
    description: 'Bertanggung jawab dalam pengembangan web app secara end-to-end, pembaruan fitur, perbaikan bug, hingga manajemen dan analisis data sistem.',
    skills: ['React JS', 'FastAPI', 'MySQL'],
    link: '#'
  },
  {
    id: 4,
    type: 'education',
    role: 'Pengembangan Perangkat Lunak & Gim (PPLG)',
    company: 'SMK WIKRAMA BOGOR',
    period: '2023 - 2026',
    description: 'Mempelajari dasar-dasar IT, logika pemrograman, serta pengembangan web menggunakan berbagai bahasa seperti HTML, CSS, JavaScript, dan PHP sambil melatih kemampuan problem solving (berpikir kritis).',
    skills: ['HTML/CSS', 'JavaScript', 'PHP'],
    link: '#'
  }
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center justify-between md:justify-normal w-full mb-12 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''
        }`}
    >
      {/* Content Block */}
      <div className="w-full md:w-5/12 pl-12 md:pl-0 md:px-8">
        <CardGlare className="rounded-xl">
          <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} gap-2 p-4 rounded-xl border border-white/10 bg-white/[0.03] h-full`}>
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono tracking-wider">{item.period}</span>
            </div>

            <h3 className={`text-2xl font-bold text-white mb-1 flex items-center gap-2 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {item.role}
              {item.link !== '#' && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </h3>

            <div className={`flex items-center gap-2 text-gray-400 text-sm mb-3 font-medium ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {item.type === 'experience' ? <Briefcase className="w-4 h-4 text-emerald-400" /> : <GraduationCap className="w-4 h-4 text-purple-400" />}
              {item.company}
            </div>

            <p className={`text-gray-400 leading-relaxed text-sm md:text-base max-w-md ${isEven ? 'text-left' : 'md:text-right'}`}>
              {item.description}
            </p>

            <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CardGlare>
      </div>

      {/* Center Line Node */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="relative w-4 h-4">
          <div className={`absolute inset-0 rounded-full blur-md opacity-60 ${item.type === 'experience' ? 'bg-emerald-500' : 'bg-purple-500'}`}></div>
          <div className={`relative w-4 h-4 rounded-full border-2 bg-[#0a0a0a] ${item.type === 'experience' ? 'border-emerald-500' : 'border-purple-500'}`}></div>
        </div>
      </div>

      {/* Spacer for desktop layout balance */}
      <div className="hidden md:block w-5/12" />
    </Motion.div>
  );
};

const ExperienceEducation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="w-full py-24 relative overflow-hidden" id="experience">
      <div className="km-container relative z-10">
        <div>
          <SectionHeader
            titlePrefix="Jejak"
            titleHighlight="Perjalanan"
            highlightClassName="text-emerald-400"
            description="Gabungan pengalaman profesional dan latar belakang akademik yang membentuk keahlian saya saat ini."
          />
        </div>

        <div className="relative">
          {/* Main Vertical Line (Background) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>

          {/* Animated Vertical Line (Progress) */}
          <Motion.div
            style={{ height }}
            className="absolute left-0 md:left-1/2 top-0 w-px bg-emerald-500 transform -translate-x-1/2 origin-top"
          />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
