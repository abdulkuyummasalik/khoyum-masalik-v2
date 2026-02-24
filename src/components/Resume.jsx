import ElectricBorder from "./ElectricBorder";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";
import { useState } from "react";
import { ExternalLink, Download, FileText } from "lucide-react";

// ── Google Drive ──────────────────────────────────────────────────────────────
const FILE_ID = "1COEkK-j47JoWD9KfBH_u7AVGci3kZKRf";
const PREVIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
const OPEN_URL = `https://drive.google.com/file/d/${FILE_ID}/view`;

// ── Component ─────────────────────────────────────────────────────────────────
const Resume = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="resume"
      className="w-full py-20 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Resume"
    >
      <div className="km-container text-center">
        <SectionHeader
          titlePrefix="CV /"
          titleHighlight="Resume"
          description="Ringkasan singkat pengalaman, keterampilan, dan proyek dalam satu dokumen."
        />
      </div>

      <div className="km-container mt-10">
        <CardGlare
          className="w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/40 backdrop-blur-sm"
          roundedClass="rounded-2xl"
        >
          {/* ── Top bar ─────────────────────────────────────────────────── */}
          <div className="px-5 py-4 flex items-center justify-between border-b border-white/8 bg-neutral-950/60">
            {/* Label kiri */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white leading-none">
                  CV-Frontend-Developer.pdf
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Google Drive · PDF
                </p>
              </div>
            </div>

            {/* Tombol kanan */}
            <div className="flex items-center gap-2">
              <ElectricBorder
                color="#10b981"
                speed={1}
                chaos={0.09}
                style={{ borderRadius: 10 }}
              >
                <a
                  href={OPEN_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 text-xs font-medium transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Buka
                </a>
              </ElectricBorder>

              <ElectricBorder
                color="#3b82f6"
                speed={1}
                chaos={0.09}
                style={{ borderRadius: 10 }}
              >
                <a
                  href={DOWNLOAD_URL}
                  download
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] bg-blue-400/10 hover:bg-blue-400/20 text-blue-300 text-xs font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Unduh
                </a>
              </ElectricBorder>
            </div>
          </div>

          {/* ── PDF Viewer ──────────────────────────────────────────────── */}
          <div
            className="relative w-full"
            style={{ height: "min(78vh, 680px)" }}
          >
            {/* Loading spinner */}
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-950/60 z-10">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/20" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-400 animate-spin" />
                </div>
                <p className="text-xs text-neutral-500 tracking-wide">
                  Memuat dokumen…
                </p>
              </div>
            )}

            <iframe
              src={PREVIEW_URL}
              title="Pratinjau CV / Resume"
              className="w-full h-full border-0 rounded-b-2xl"
              onLoad={() => setLoaded(true)}
              allow="autoplay"
              style={{ background: "transparent" }}
            />
          </div>
        </CardGlare>
      </div>
    </section>
  );
};

export default Resume;
