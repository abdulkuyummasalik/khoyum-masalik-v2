import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardGlare from "./CardGlare";
import ElectricBorder from "./ElectricBorder";
import SectionHeader from "./SectionHeader";
import { featuredProjects, allProjects, ProjectCard } from "./Projects";

const buildProjectData = () => {
  const map = new Map();
  [...featuredProjects, ...allProjects].forEach((p) => {
    if (!map.has(p.slug)) {
      map.set(p.slug, p);
    }
  });
  return Array.from(map.values());
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { current, others } = useMemo(() => {
    const list = buildProjectData();
    const proj = list.find((p) => p.slug === slug) || list[0];
    const rest = list.filter((p) => p.slug !== proj.slug).slice(0, 3);
    return { current: proj, others: rest };
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

          <div className="km-container mb-10 sm:mb-14">
            <SectionHeader
              titlePrefix="Detail"
              titleHighlight="Proyek"
              highlightClassName="text-emerald-400"
              description="Ringkasan menyeluruh tentang konteks, tujuan, dan teknologi yang digunakan dalam proyek ini."
            />
          </div>

          <div className="km-container mb-10">
            <CardGlare roundedClass="rounded-2xl">
              <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] backdrop-blur-sm">
                <div className="relative w-full" style={{ aspectRatio: "16/8" }}>
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-5 sm:bottom-7">
                    <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
                      <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-white/70">
                        <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
                          Case Study
                        </span>
                        {current.category && (
                          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                            {current.category}
                          </span>
                        )}
                      </div>
                      <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        {current.title}
                      </h1>
                      <p className="text-sm sm:text-base text-white/70 max-w-2xl">
                        {current.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {current.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-black/50 border border-white/15 text-white/85 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <ElectricBorder
                        color="#10b981"
                        speed={1}
                        chaos={0.1}
                        style={{ borderRadius: 9999, display: "inline-block" }}
                      >
                        <a
                          href={current.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-full bg-emerald-500/90 hover:bg-emerald-400 transition-colors text-xs sm:text-sm font-semibold text-white"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Lihat Live</span>
                        </a>
                      </ElectricBorder>
                      <ElectricBorder
                        color="#3b82f6"
                        speed={1}
                        chaos={0.1}
                        style={{ borderRadius: 9999, display: "inline-block" }}
                      >
                        <a
                          href={current.repoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-xs sm:text-sm text-white"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Lihat Kode</span>
                        </a>
                      </ElectricBorder>
                    </div>
                  </div>
                </div>

                <div className="px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-3">
                  <div className="space-y-3">
                    <h2 className="text-sm font-semibold text-white/80 tracking-wide uppercase">
                      Gambaran umum
                    </h2>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      Proyek ini dirancang sebagai studi kasus untuk menampilkan
                      bagaimana sebuah antarmuka modern dapat membantu pengguna
                      berinteraksi dengan data secara nyaman, terstruktur, dan
                      efisien di berbagai ukuran layar.
                    </p>
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                      Fokus utama berada pada pengalaman pengguna, kecepatan
                      render, serta konsistensi visual antara bagian publik dan
                      dashboard internal.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-sm font-semibold text-white/80 tracking-wide uppercase">
                      Teknologi
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {current.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                      Setiap teknologi dipilih agar mudah dirawat, mendukung
                      pengembangan jangka panjang, dan nyaman untuk kolaborasi
                      dengan developer lain.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-sm font-semibold text-white/80 tracking-wide uppercase">
                      Peran dan fokus
                    </h2>
                    <ul className="space-y-1.5 text-sm sm:text-base text-white/70 leading-relaxed">
                      <li>Perancangan struktur layout dan komponen UI.</li>
                      <li>Implementasi state dan alur interaksi utama.</li>
                      <li>Optimasi performa untuk halaman dengan konten dinamis.</li>
                      <li>Penyesuaian tampilan responsif di berbagai perangkat.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardGlare>
          </div>

          <div className="km-container">
            <SectionHeader
              titlePrefix="Proyek"
              titleHighlight="lainnya"
              highlightClassName="text-sky-400"
              description="Beberapa proyek lain yang memiliki pendekatan serupa dalam hal desain dan pengalaman pengguna."
            />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;

