import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import ElectricBorder from "./ElectricBorder";
import CardGlare from "./CardGlare";

export const galleryProjects = [
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    alt: "BrightNest",
    tags: ["UI/UX Design", "Branding"],
    slug: "brightnest",
  },
  {
    src: "https://images.unsplash.com/photo-1531297461734-290552feb79f?q=80&w=1200&auto=format&fit=crop",
    alt: "StellarWorks",
    tags: ["Branding & Marketing", "Brand Strategy"],
    slug: "stellarworks",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    alt: "NovaLaunch",
    tags: ["SEO & Growth", "Technical SEO"],
    slug: "novalaunch",
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    alt: "PixelWave",
    tags: ["Branding & Marketing", "Bid Optimisation"],
    slug: "pixelwave",
  },
];

const Gallery = () => {
  const [highlighted, setHighlighted] = useState(null);
  const [loadedMap, setLoadedMap] = useState({});

  useEffect(() => {
    const id = setInterval(() => {
      setHighlighted((h) => (h === null ? 0 : (h + 1) % projects.length));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const markLoaded = (i) => setLoadedMap((m) => ({ ...m, [i]: true }));

  return (
    <section
      id="gallery"
      className="w-full py-16 sm:py-20 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Galeri Proyek"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-25"
          style={{
            background:
              "radial-gradient(900px 600px at 50% 40%, rgba(96,165,250,0.25), transparent 60%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="km-container text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4 sm:mb-5">
          Galeri Proyek
        </div>
        <SectionHeader
          titlePrefix="Kreativitas dan"
          titleHighlight="eksplorasi visual"
          description="Kumpulan cuplikan antarmuka, eksperimen desain, dan proyek visual yang mewakili gaya dan pendekatan saya."
        />
      </div>

      {/* Cards Container */}
      <div className="km-container relative z-10">
        {/* Outer container with border + grid overlay — matches reference */}
        <div className="relative rounded-[28px] border border-white/10 p-3 sm:p-4 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
          {/* Subtle dot grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
            }}
          />

          {/* 2×2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {galleryProjects.map((img, i) => {
            const isActive = i === highlighted;
            return (
              <Link
                key={img.slug}
                to={`/gallery/${img.slug}`}
                className="group relative overflow-hidden rounded-[18px] cursor-pointer border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                style={{
                  boxShadow: isActive
                    ? "0 0 24px rgba(96,165,250,0.35)"
                    : "0 0 0 1px rgba(255,255,255,0.06)",
                  transition: "box-shadow 0.5s ease",
                }}
                onMouseEnter={() => setHighlighted(i)}
                onMouseLeave={() => setHighlighted(null)}
              >
                <CardGlare roundedClass="rounded-[18px]">
                    {/* Image */}
                    <div className="aspect-[4/3] relative bg-slate-900 overflow-hidden">
                      {!loadedMap[i] && (
                        <div className="absolute inset-0 animate-pulse bg-slate-800/80" />
                      )}
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        onLoad={() => markLoaded(i)}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />

                      {/* Gradient overlay — bottom fade for text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {/* Top-right tags */}
                      <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                        {img.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-black/50 border border-white/20 text-white/85 backdrop-blur-sm whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom-left project name */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <span className="text-white font-bold text-base sm:text-lg drop-shadow-md">
                          {img.alt}
                        </span>
                        {/* Arrow icon on hover */}
                        <div className="w-8 h-8 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Active glow overlay */}
                      <div
                        className="absolute inset-0 rounded-[18px] transition-opacity duration-500 pointer-events-none"
                        style={{
                          opacity: isActive ? 1 : 0,
                          background:
                            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(96,165,250,0.18), transparent 70%)",
                        }}
                      />
                    </div>
                  </CardGlare>
                </Link>
              );
            })}
          </div>

          {/* View All Button Group — inside main container */}
          <div className="mt-4 flex items-center justify-end">
            <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl">
              <ElectricBorder
                color="#3b82f6"
                speed={1}
                chaos={0.1}
                style={{ borderRadius: 9999, display: "inline-block" }}
              >
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-600/80 hover:bg-sky-500/90 transition-colors text-sm font-semibold text-white"
                >
                  Lihat semua galeri
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
