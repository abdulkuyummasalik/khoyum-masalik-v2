import ElectricBorder from "./ElectricBorder";
import pdfUrl from "@/assets/CV-ABDULKUYUMMASALIK.pdf";
import SectionHeader from "./SectionHeader";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 text-white relative overflow-hidden scroll-mt-28" aria-label="Resume">
      <div className="km-container mb-10 text-center">
        <SectionHeader
          titlePrefix="Resume /"
          titleHighlight="CV"
          description="Ringkasan pengalaman, keterampilan, dan proyek dalam satu dokumen."
        />
      </div>
      <div className="km-container">
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <div className="p-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ElectricBorder color="#10b981" speed={1} chaos={0.12} style={{ borderRadius: 12 }}>
                  <a
                    href={pdfUrl}
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
                    href={pdfUrl}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                    aria-label="Unduh CV PDF"
                  >
                    Unduh PDF
                  </a>
                </ElectricBorder>
              </div>
            </div>
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-[70vh] md:h-[78vh]"
              aria-label="Pratinjau CV"
            >
              <div className="p-6 text-center">
                <p className="text-neutral-300 mb-4">Browser tidak mendukung pratinjau PDF.</p>
                <ElectricBorder color="#10b981" speed={1} chaos={0.12} style={{ borderRadius: 12, display: "inline-block" }}>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    Buka CV
                  </a>
                </ElectricBorder>
              </div>
            </object>
          </div>
      </div>
    </section>
  );
};

export default Resume;
