import { Github, Linkedin, Mail } from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import ImageTrail from "./ImageTrail";

const FOOTER_TRAIL_IMAGES = [
  "https://picsum.photos/id/287/300/300",
  "https://picsum.photos/id/1001/300/300",
  "https://picsum.photos/id/1025/300/300",
  "https://picsum.photos/id/1026/300/300",
  "https://picsum.photos/id/1027/300/300",
  "https://picsum.photos/id/1028/300/300",
  "https://picsum.photos/id/1029/300/300",
  "https://picsum.photos/id/1030/300/300",
  "https://picsum.photos/id/1031/300/300",
  "https://picsum.photos/id/1032/300/300",
];

const Footer = () => {
  const year = new Date().getFullYear();
  const nav = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Resume", href: "#resume" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "CTA", href: "#cta" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full text-white relative overflow-hidden border-t border-white/10 min-h-[420px]">
      {/* Background: ImageTrail (layer belakang, tetap terlihat) */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <ImageTrail items={FOOTER_TRAIL_IMAGES} variant={2} />
      </div>
      {/* Overlay tipis supaya teks terbaca, trail tetap kelihatan; pointer-events-none agar mouse ke trail */}
      <div className="absolute inset-0 z-[1] bg-neutral-950/75 pointer-events-none" aria-hidden />
      {/* Konten di atas; pointer-events-none, hanya link/tombol yang bisa diklik */}
      <div className="km-container py-14 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pointer-events-auto">
            <div className="text-xl font-semibold font-heading">Khoyum Masalik</div>
            <p className="mt-2 text-white/70">
              Web developer yang fokus pada UI modern, performa, dan pengalaman pengguna.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/abdulkuyummasalik"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:khoyum28@gmail.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 hover:bg-white/10"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pointer-events-auto">
            <div className="text-lg font-semibold mb-3 font-heading">Navigasi</div>
            <ul className="grid grid-cols-2 gap-2 text-white/80">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pointer-events-auto">
            <div className="text-lg font-semibold mb-3 font-heading">Ayo Mulai</div>
            <ElectricBorder color="#7df9ff" speed={1} chaos={0.12} style={{ borderRadius: 12 }}>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors px-5 py-3"
              >
                Hubungi Saya
              </a>
            </ElectricBorder>
            <a
              href="#projects"
              className="mt-3 w-full inline-flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/10 transition-colors px-5 py-3"
            >
              Lihat Proyek
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/60 text-sm">
          © {year} Khoyum Masalik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
