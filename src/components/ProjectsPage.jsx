import { useMemo, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";
import ElectricBorder from "./ElectricBorder";
import { ProjectCard } from "./Projects";
import { allProjects, projectCategories } from "../datas/projects";

const ProjectsPage = () => {
  const [active, setActive] = useState("Semua");

  const filtered = useMemo(() => {
    if (active === "Semua") return allProjects;
    return allProjects.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 text-white">
        <section className="w-full">
          <div className="km-container text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4">
              Semua Proyek
            </div>
            <SectionHeader
              titlePrefix="Koleksi"
              titleHighlight="Proyek"
              highlightClassName="text-emerald-400"
              description="Daftar lengkap proyek yang pernah saya kerjakan, dengan fokus pada pengalaman pengguna, performa, dan detail visual."
            />
          </div>

          <div className="km-container mb-6 sm:mb-8">
            <CardGlare roundedClass="rounded-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-3.5 sm:px-5 py-3.5 sm:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="text-xs sm:text-sm text-white/70 text-left">
                  <div className="font-medium text-white/90 mb-0.5">
                    Filter berdasarkan jenis proyek
                  </div>
                  <div>
                    Pilih kategori untuk fokus pada tipe solusi yang ingin Anda lihat.
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 justify-start md:justify-end">
                  {projectCategories.map((cat) => {
                    const isActive = active === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className="text-xs sm:text-[13px] px-3.5 py-1.5 rounded-full border transition-all duration-200"
                        style={{
                          background: isActive
                            ? "linear-gradient(135deg,rgba(16,185,129,0.24),rgba(56,189,248,0.22))"
                            : "rgba(15,23,42,0.7)",
                          borderColor: isActive
                            ? "rgba(255,255,255,0.32)"
                            : "rgba(148,163,184,0.4)",
                          color: isActive ? "#fff" : "rgba(226,232,240,0.86)",
                        }}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </CardGlare>
          </div>

          <div className="km-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <ProjectCard key={`${p.slug}-${i}`} p={p} />
              ))}
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60">
              <div>
                Menampilkan{" "}
                <span className="text-white font-medium">
                  {filtered.length}
                </span>{" "}
                dari{" "}
                <span className="text-white font-medium">
                  {allProjects.length}
                </span>{" "}
                proyek.
              </div>
              <ElectricBorder
                color="#3b82f6"
                speed={1}
                chaos={0.12}
                style={{ borderRadius: 9999, display: "inline-block" }}
              >
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs sm:text-sm font-medium"
                >
                  Kembali ke bagian proyek di beranda
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

export default ProjectsPage;
