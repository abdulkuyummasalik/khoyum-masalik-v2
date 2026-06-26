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
  SiNodedotjs,
  SiExpress,
  SiCpanel,
} from 'react-icons/si';

export const skills = [
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
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress className="text-foreground" />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiGo className="text-[#00ADD8]" />, title: "Go", href: "https://go.dev" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
  { node: <SiFastapi className="text-[#009688]" />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="text-foreground" />, title: "GitHub", href: "https://github.com" },
  { node: <SiPostman className="text-[#FF6C37]" />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiSwagger className="text-[#85EA2D]" />, title: "Swagger", href: "https://swagger.io" },
  { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiVercel className="text-foreground" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiNetlify className="text-[#00C7B7]" />, title: "Netlify", href: "https://www.netlify.com" },
  { node: <SiCpanel className="text-[#FF6C2C]" />, title: "cPanel", href: "https://cpanel.net" },
];

export const skillGroups = [
  {
    title: "Frontend",
    caption: "UI interaktif, responsif, dan rapi",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Vue", "Flutter", "Tailwind CSS", "Bootstrap"],
    icons: [<SiHtml5 key="html" className="text-[#E34F26]" />, <SiCss3 key="css" className="text-[#1572B6]" />, <SiJavascript key="js" className="text-[#F7DF1E]" />, <SiReact key="react" className="text-[#61DAFB]" />, <SiVuedotjs key="vue" className="text-[#4FC08D]" />]
  },
  {
    title: "Backend",
    caption: "Membangun API, sistem bisnis, dan layanan backend",
    items: ["PHP", "Laravel", "Node.js", "Express.js", "Go", "Echo", "Python", "FastAPI"],
    icons: [<SiPhp key="php" className="text-[#777BB4]" />, <SiLaravel key="laravel" className="text-[#FF2D20]" />, <SiNodedotjs key="node" className="text-[#339933]" />, <SiGo key="go" className="text-[#00ADD8]" />, <SiPython key="py" className="text-[#3776AB]" />]
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
    items: ["Git", "GitHub", "Postman", "Swagger", "Figma"],
    icons: [<SiGit key="git" className="text-[#F05032]" />, <SiGithub key="github" className="text-foreground" />, <SiPostman key="postman" className="text-[#FF6C37]" />, <SiFigma key="fig" className="text-[#F24E1E]" />]
  },
  {
    title: "Deployment & Cloud",
    caption: "Rilis aplikasi ke publik dengan mudah",
    items: ["Vercel", "Netlify", "cPanel"],
    icons: [<SiVercel key="vercel" className="text-foreground" />, <SiNetlify key="netlify" className="text-[#00C7B7]" />, <SiCpanel key="cpanel" className="text-[#FF6C2C]" />]
  },
  {
    title: "AI Tools & Productivity",
    caption: "Kolaborasi dan produktivitas dengan AI",
    items: ["Antigravity AI", "Claude"],
    icons: []
  }
];
