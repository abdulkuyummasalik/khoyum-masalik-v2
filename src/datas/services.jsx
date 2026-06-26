import { Code2, Layers, Rocket, RefreshCw } from "lucide-react";

export const services = [
  {
    icon: <Code2 className="w-5 h-5 text-blue-300" />,
    title: "Custom Software Development",
    number: "01",
    desc: "Membangun aplikasi web custom dari tahap perencanaan hingga deployment. Mulai dari website perusahaan, sistem informasi, dashboard aplikasi, hingga REST API — semuanya dirancang agar fungsional, cepat, dan siap mendukung kebutuhan bisnis Anda.",
    chips: ["Fullstack", "REST API", "Sistem Informasi"],
    bg: "linear-gradient(135deg, #050d1c 0%, #091628 55%, #050d1c 100%)",
    accent: "rgba(59,130,246,0.22)",
    glow: "#3b82f6",
    chipColor: "rgba(59,130,246,0.15)",
  },
  {
    icon: <Layers className="w-5 h-5 text-emerald-300" />,
    title: "Fullstack Development",
    number: "02",
    desc: "Mengembangkan aplikasi secara menyeluruh mulai dari frontend, backend, database, hingga integrasi sistem. Saya memastikan setiap layer aplikasi bekerja harmonis dan sesuai standar pengembangan modern.",
    chips: ["React/Vue", "Go/Laravel", "PostgreSQL"],
    bg: "linear-gradient(135deg, #041210 0%, #082820 55%, #041210 100%)",
    accent: "rgba(52,211,153,0.18)",
    glow: "#34d399",
    chipColor: "rgba(52,211,153,0.12)",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-amber-300" />,
    title: "Maintenance & Pengembangan Sistem",
    number: "03",
    desc: "Membantu meningkatkan dan menjaga kualitas aplikasi yang sudah berjalan. Mulai dari perbaikan bug, penambahan fitur baru, optimasi performa, hingga refactoring kode agar sistem tetap stabil dan mutakhir.",
    chips: ["Bug Fixing", "Optimasi", "Refactoring"],
    bg: "linear-gradient(135deg, #120f04 0%, #1a1508 55%, #120f04 100%)",
    accent: "rgba(252,211,77,0.15)",
    glow: "#fcd34d",
    chipColor: "rgba(252,211,77,0.10)",
  },
  {
    icon: <Rocket className="w-5 h-5 text-sky-400" />,
    title: "Deployment & Infrastruktur",
    number: "04",
    desc: "Membantu proses publikasi aplikasi agar siap digunakan. Saya menangani seluruh proses deployment mulai dari setup hosting, konfigurasi server, pengaturan domain dan SSL, hingga memastikan aplikasi berjalan optimal di production.",
    chips: ["Deployment", "SSL Setup", "Server Config"],
    bg: "linear-gradient(135deg, #040e1e 0%, #081525 55%, #040e1e 100%)",
    accent: "rgba(56,189,248,0.18)",
    glow: "#38bdf8",
    chipColor: "rgba(56,189,248,0.12)",
  }
];
