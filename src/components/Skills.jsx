import {
  SiReact,
  SiVuedotjs,
  SiFlutter,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiLaravel,
  SiGo,
  SiPython,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiVercel,
  SiNetlify,
  SiFigma,
} from 'react-icons/si';
import LogoLoop from './LogoLoop';
import CardGlare from './CardGlare';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const skills = [
    { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 className="text-[#1572B6]" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
    { node: <SiVuedotjs className="text-[#4FC08D]" />, title: "Vue", href: "https://vuejs.org" },
    { node: <SiFlutter className="text-[#02569B]" />, title: "Flutter", href: "https://flutter.dev" },
    { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiBootstrap className="text-[#7952B3]" />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiPhp className="text-[#777BB4]" />, title: "PHP", href: "https://www.php.net" },
    { node: <SiLaravel className="text-[#FF2D20]" />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiGo className="text-[#00ADD8]" />, title: "Go", href: "https://go.dev" },
    { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
    { node: <SiFastapi className="text-[#009688]" />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
    { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub className="text-white" />, title: "GitHub", href: "https://github.com" },
    { node: <SiPostman className="text-[#FF6C37]" />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiSwagger className="text-[#85EA2D]" />, title: "Swagger", href: "https://swagger.io" },
    { node: <SiVercel className="text-white" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiNetlify className="text-[#00C7B7]" />, title: "Netlify", href: "https://www.netlify.com" },
    { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", href: "https://www.figma.com" },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      caption: "UI interaktif, responsif, dan rapi",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Vue", "Flutter", "Tailwind CSS", "Bootstrap"],
      icons: [<SiHtml5 key="html" className="text-[#E34F26]" />, <SiCss3 key="css" className="text-[#1572B6]" />, <SiJavascript key="js" className="text-[#F7DF1E]" />, <SiReact key="react" className="text-[#61DAFB]" />, <SiVuedotjs key="vue" className="text-[#4FC08D]" />]
    },
    {
      title: "Backend",
      caption: "REST API, logika bisnis, dan keamanan",
      items: ["PHP", "Laravel", "Go", "Echo", "Python", "FastAPI"],
      icons: [<SiPhp key="php" className="text-[#777BB4]" />, <SiLaravel key="laravel" className="text-[#FF2D20]" />, <SiGo key="go" className="text-[#00ADD8]" />, <SiPython key="py" className="text-[#3776AB]" />]
    },
    {
      title: "Database",
      caption: "Penyimpanan data relasional dan efisien",
      items: ["MySQL", "PostgreSQL"],
      icons: [<SiMysql key="mysql" className="text-[#4479A1]" />, <SiPostgresql key="pg" className="text-[#4169E1]" />]
    },
    {
      title: "Tools & Version Control",
      caption: "Kolaborasi kode dan pengujian API",
      items: ["Git", "GitHub", "Postman", "Swagger"],
      icons: [<SiGit key="git" className="text-[#F05032]" />, <SiGithub key="github" className="text-white" />, <SiPostman key="postman" className="text-[#FF6C37]" />]
    },
    {
      title: "Deployment & Hosting",
      caption: "Rilis aplikasi ke publik dengan mudah",
      items: ["Vercel", "Netlify"],
      icons: [<SiVercel key="vercel" className="text-white" />, <SiNetlify key="netlify" className="text-[#00C7B7]" />]
    },
    {
      title: "Lainnya",
      caption: "Desain purwarupa dan kolaborasi dengan AI",
      items: ["Figma", "Antigravity AI", "Claude"],
      icons: [<SiFigma key="fig" className="text-[#F24E1E]" />]
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
