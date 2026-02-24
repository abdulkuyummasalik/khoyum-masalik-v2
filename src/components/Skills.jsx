import { 
  SiReact, 
  SiVite, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiFigma,
  SiPostgresql
} from 'react-icons/si';
import LogoLoop from './LogoLoop';
import CardGlare from './CardGlare';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const skills = [
    { node: <SiReact className="text-sky-400" />, title: "React", href: "https://react.dev" },
    { node: <SiVite className="text-sky-400" />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiTailwindcss className="text-sky-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript className="text-white/80" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTypescript className="text-sky-400" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiNextdotjs className="text-white/90" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiHtml5 className="text-white/80" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 className="text-white/80" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiGit className="text-white/80" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiNodedotjs className="text-white/80" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiFigma className="text-white/80" />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiPostgresql className="text-white/80" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      caption: "UI modern, aksesibel, dan responsif",
      items: ["React", "Vite", "Tailwind", "JavaScript", "TypeScript"],
      icons: [<SiReact key="r" className="text-[#61DAFB]" />, <SiVite key="v" className="text-[#646CFF]" />, <SiTailwindcss key="t" className="text-[#06B6D4]" />, <SiJavascript key="js" className="text-[#F7DF1E]" />, <SiTypescript key="ts" className="text-[#3178C6]" />]
    },
    {
      title: "Framework",
      caption: "Routing, data fetching, performa",
      items: ["Next.js"],
      icons: [<SiNextdotjs key="n" className="text-white" />]
    },
    {
      title: "Backend",
      caption: "REST API, validasi, autentikasi",
      items: ["Node.js"],
      icons: [<SiNodedotjs key="node" className="text-[#339933]" />]
    },
    {
      title: "Database",
      caption: "Relasional, indexing, query efisien",
      items: ["PostgreSQL"],
      icons: [<SiPostgresql key="pg" className="text-[#4169E1]" />]
    },
    {
      title: "Tools",
      caption: "Versioning & kolaborasi rapi",
      items: ["Git", "GitHub", "Postman"],
      icons: [<SiGit key="git" className="text-[#F05032]" />, <SiFigma key="fig" className="text-[#F24E1E]" />]
    },
    {
      title: "UI/UX",
      caption: "Desain ke kode, prototyping cepat",
      items: ["Figma"],
      icons: [<SiFigma key="fig2" className="text-[#F24E1E]" />]
    }
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Teknologi dan Keahlian"
    >
      <SectionHeader
        titlePrefix="Teknologi &"
        titleHighlight="Keahlian"
        highlightClassName="text-emerald-400"
        description="Tumpukan teknologi yang saya gunakan untuk membangun pengalaman web yang cepat, rapi, dan elegan."
      />

      <div className="km-container mb-10 text-center">
        <LogoLoop
          logos={skills}
          speed={42}
          direction="left"
          logoHeight={52}
          gap={64}
          hoverSpeed={12}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#0a0a0a"
          ariaLabel="Logo teknologi"
        />
      </div>

      <div className="km-container mt-14">
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <CardGlare key={idx} roundedClass="rounded-2xl">
              <div className="rounded-2xl border border-white/10 w-full p-6 md:p-7 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <div className="flex items-center gap-2 text-2xl">
                    {group.icons.map((icon, i) => (
                      <span key={i} className="inline-flex">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-neutral-400 text-sm">{group.caption}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((it, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </CardGlare>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
