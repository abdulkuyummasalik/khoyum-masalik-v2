import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";
import ElectricBorder from "./ElectricBorder";
import { galleryProjects } from "./Gallery";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const GalleryPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 text-white">
        <section className="w-full">
          <div className="km-container text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4">
              Galeri Lengkap
            </div>
            <SectionHeader
              titlePrefix="Eksplorasi"
              titleHighlight="visual"
              highlightClassName="text-sky-400"
              description="Kumpulan penuh cuplikan antarmuka, eksperimen desain, dan shot visual yang mewakili gaya desain saya."
            />
          </div>

          <div
            className="km-container"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(18px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {galleryProjects.map((img, i) => (
                <Link key={img.slug} to={`/gallery/${img.slug}`}>
                <CardGlare roundedClass="rounded-2xl">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col h-full">
                    <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="text-sm sm:text-base font-semibold">
                          {img.alt}
                        </h2>
                        <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/15 text-white/70">
                          Visual
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {img.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardGlare>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center">
              <ElectricBorder
                color="#3b82f6"
                speed={1}
                chaos={0.12}
                style={{ borderRadius: 9999, display: "inline-block" }}
              >
                <a
                  href="/#gallery"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs sm:text-sm font-medium"
                >
                  Kembali ke bagian galeri di beranda
                </a>
              </ElectricBorder>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
