import ElectricBorder from "./ElectricBorder";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";

// PDF dari folder public — letakkan file CV-ABDULKUYUMMASALIK.pdf di /public
const CV_URL = "/CV-ABDULKUYUMMASALIK.pdf";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 text-white relative overflow-hidden scroll-mt-28" aria-label="Resume">
      <div className="km-container text-center">
        <SectionHeader
          titlePrefix="Resume /"
          titleHighlight="CV"
          description="Ringkasan pengalaman, keterampilan, dan proyek dalam satu dokumen."
        />
      </div>
      <div className="km-container">
          <CardGlare className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm" roundedClass="rounded-2xl">
            <div className="p-4 flex flex-wrap items-center justify-center gap-3 border-b border-white/10">
              <ElectricBorder color="#10b981" speed={1} chaos={0.12} style={{ borderRadius: 12 }}>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Buka CV di tab baru"
                >
                  Buka di Tab Baru
                </a>
              </ElectricBorder>
              <ElectricBorder color="#3b82f6" speed={1} chaos={0.12} style={{ borderRadius: 12 }}>
                <a
                  href={CV_URL}
                  download="CV-AbdulKuyumMasalik.pdf"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  aria-label="Unduh CV PDF"
                >
                  Unduh PDF
                </a>
              </ElectricBorder>
            </div>
            <div className="relative w-full bg-neutral-900/50" style={{ minHeight: "min(70vh, 520px)" }}>
              <iframe
                src={`${CV_URL}#toolbar=0`}
                title="Pratinjau CV / Resume"
                className="w-full border-0 rounded-b-2xl"
                style={{ height: "min(70vh, 520px)" }}
              />
              <noscript>
                <div className="p-6 text-center text-neutral-300">
                  <p className="mb-4">Aktifkan JavaScript atau buka CV lewat tombol di atas.</p>
                  <a href={CV_URL} target="_blank" rel="noreferrer noopener" className="text-emerald-400 underline">
                    Buka CV
                  </a>
                </div>
              </noscript>
            </div>
          </CardGlare>
      </div>
    </section>
  );
};

export default Resume;
