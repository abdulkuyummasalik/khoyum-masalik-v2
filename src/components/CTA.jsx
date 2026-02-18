import { useEffect, useRef } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import SectionHeader from "./SectionHeader";

const CTA = () => {
  const wa =
    "https://wa.me/6280000000000?text=Halo%20Khoyum%2C%20saya%20tertarik%20kolaborasi";
  const mail =
    "mailto:khoyum28@gmail.com?subject=Kolaborasi%20Proyek&body=Hai%20Khoyum%2C";

  const sectionRef = useRef(null);

  // Fade-in on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0px)";
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="cta"
      className="text-center py-16 sm:py-24 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Ajak Kolaborasi"
    >
      {/* Page-level glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-30"
          style={{
            background:
              "radial-gradient(800px 400px at 50% 50%, rgba(59,130,246,0.25), transparent 65%)",
          }}
        />
      </div>

      <div className="km-container relative z-10">
        {/* ── Banner card ── */}
        <div
          ref={sectionRef}
          className="relative rounded-[28px] overflow-hidden border border-white/10"
          style={{
            background:
              "linear-gradient(135deg, #061a12 0%, #0a281c 40%, #082016 70%, #061a12 100%)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
            opacity: 0,
            transform: "translateY(28px)",
            transition:
              "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Inner glow — top center */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.2), transparent 70%)",
            }}
          />
          {/* Inner glow — bottom corners */}
          <div
            className="absolute bottom-0 left-0 w-64 h-48 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, rgba(34,211,238,0.1), transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-48 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, rgba(168,85,247,0.1), transparent 60%)",
            }}
          />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 80% 100% at 50% 50%, black 20%, transparent 80%)",
            }}
          />

          {/* ── Content ── */}
          <div className="relative z-10 py-14 sm:py-20 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>

            {/* Headline + Subtext — margin override agar di dalam card tidak terlalu besar */}
            <div>
              <SectionHeader
                titlePrefix="Your story,"
                titleHighlight="well designed."
                highlightClassName="text-emerald-400"
                description="Every brand has a story worth telling — let's design yours with intention and style."
                className="mb-10"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary — Let's Collaborate */}
              <ElectricBorder
                color="#10b981"
                speed={1}
                chaos={0.1}
                style={{ borderRadius: 12, display: "inline-block" }}
              >
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] text-sm sm:text-base font-semibold text-white transition-all duration-200"
                  style={{ background: "#059669" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#10b981";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#059669";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Let's Collaborate
                </a>
              </ElectricBorder>

              {/* Secondary — View Portfolio */}
              <ElectricBorder
                color="#3b82f6"
                speed={1}
                chaos={0.1}
                style={{ borderRadius: 12, display: "inline-block" }}
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] text-sm sm:text-base font-semibold text-white/85 transition-all duration-200 border border-white/15 hover:border-white/30 hover:text-white group"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </ElectricBorder>
            </div>

            {/* Footer note */}
            <p className="mt-8 text-xs text-white/25 tracking-wide">
              Or reach me directly at{" "}
              <a
                href={mail}
                className="text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
              >
                khoyum28@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
