import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";
import ElectricBorder from "./ElectricBorder";
import { galleryProjects } from "./Gallery";

const GalleryDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const { current, others } = useMemo(() => {
    const list = galleryProjects;
    const item = list.find((p) => p.slug === slug) || list[0];
    const rest = list.filter((p) => p.slug !== item.slug);
    return { current: item, others: rest };
  }, [slug]);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 text-white">
        <section className="w-full">
          <div className="km-container mb-6 sm:mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white/90 px-0.5 py-1 rounded-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali</span>
            </button>
          </div>

          <div className="km-container mb-8 sm:mb-10">
            <SectionHeader
              titlePrefix="Detail"
              titleHighlight="visual"
              highlightClassName="text-sky-400"
              description="Satu tampilan yang difokuskan untuk menangkap nuansa warna, komposisi, dan suasana dari sebuah konsep."
            />
          </div>

          <div
            className="km-container mb-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(18px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <CardGlare roundedClass="rounded-[28px]">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: "16/8" }}>
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-5 sm:bottom-7 flex flex-col gap-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-white/70">
                      <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
                        Visual Exploration
                      </span>
                      {current.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-white/5 border border-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                      {current.alt}
                    </h1>
                    <p className="text-sm sm:text-base text-white/75 max-w-2xl">
                      Visual ini dirancang untuk mengeksplorasi ritme, warna, dan
                      komposisi yang bisa diterapkan pada landing page, hero section,
                      maupun halaman kampanye khusus.
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-3">
                  <div className="space-y-3 text-sm sm:text-base text-white/75 leading-relaxed">
                    <h2 className="text-sm font-semibold text-white/80 tracking-wide uppercase">
                      Tujuan visual
                    </h2>
                    <p>
                      Fokus utama dari visual ini adalah menyampaikan kesan pertama
                      yang kuat tanpa mengorbankan keterbacaan elemen utama seperti
                      judul, tombol aksi, dan navigasi.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm sm:text-base text-white/75 leading-relaxed">
                    <h2 className="text-sm font-semibold text-white/80 tracking-wide uppercase">
                      Palet & suasana
                    </h2>
                    <p>
                      Kombinasi warna dipilih agar tetap kontras di mode gelap, namun
                      tetap memberikan nuansa lembut dan modern ketika digunakan pada
                      layout yang kaya ilustrasi.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm sm:text-base text-white/75 leading-relaxed">
                    <h2 className="text-sm font-semibold text-white/80 tracking-wide uppercase">
                      Potensi penggunaan
                    </h2>
                    <p>
                      Visual ini dapat diterjemahkan menjadi hero section, banner
                      kampanye, atau background interaktif yang bergerak halus ketika
                      pengguna melakukan scroll.
                    </p>
                  </div>
                </div>
              </div>
            </CardGlare>
          </div>

          <div className="km-container">
            <SectionHeader
              titlePrefix="Cuplikan"
              titleHighlight="lainnya"
              highlightClassName="text-emerald-400"
              description="Beberapa visual lain yang dapat dipadukan untuk membentuk satu sistem desain yang konsisten."
            />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {others.map((img) => (
                <CardGlare key={img.slug} roundedClass="rounded-2xl">
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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GalleryDetailPage;

