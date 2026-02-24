import { useState, useEffect } from "react";

const loaders = [
  () => (
    <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-1.5 h-6 rounded-full bg-emerald-400/90"
          style={{
            animation: "pageLoaderBar 0.6s ease-in-out infinite",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  ),
  () => (
    <div
      className="w-8 h-8 rounded-full border-2 border-white/20 border-t-emerald-400"
      style={{ animation: "pageLoaderSpin 0.8s linear infinite" }}
      aria-hidden="true"
    />
  ),
  () => (
    <div className="flex items-center gap-2" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full bg-sky-400"
          style={{
            animation: "pageLoaderBounce 0.5s ease-in-out infinite",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  ),
];

const AVATAR_URL = "https://www.khoyummasalik.my.id/khoyum.jpg";

export default function PageLoader({ variant = "initial" }) {
  const [phase, setPhase] = useState("visible");
  const [loaderIndex, setLoaderIndex] = useState(0);
  const Loader = loaders[loaderIndex];
  const isInitial = variant === "initial";
  const showDuration = isInitial ? 900 : 450;
  const fadeDuration = isInitial ? 400 : 250;

  useEffect(() => {
    let hide;
    const start = requestAnimationFrame(() => {
      setLoaderIndex(Math.floor(Math.random() * loaders.length));
      hide = setTimeout(() => setPhase("fading"), showDuration);
    });
    return () => {
      cancelAnimationFrame(start);
      if (hide) clearTimeout(hide);
    };
  }, [showDuration]);

  useEffect(() => {
    if (phase !== "fading") return;
    const id = setTimeout(() => setPhase("gone"), fadeDuration);
    return () => clearTimeout(id);
  }, [phase, fadeDuration]);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-neutral-950 text-white"
      style={{
        transition: "opacity 0.4s ease-out",
        opacity: phase === "visible" ? 1 : 0,
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
      role="status"
      aria-label="Memuat"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(900px 600px at 10% 0%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(900px 600px at 90% 100%, rgba(129,140,248,0.20), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(148,163,184,0.08) 0px, rgba(148,163,184,0.08) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, rgba(148,163,184,0.06) 0px, rgba(148,163,184,0.06) 1px, transparent 1px, transparent 26px)",
            maskImage:
              "radial-gradient(700px 700px at 50% 50%, black, transparent 70%)",
          }}
        />
      </div>

      {isInitial ? (
        <div className="relative z-10 w-full max-w-sm sm:max-w-md px-6">
          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl px-6 py-6 sm:px-8 sm:py-8 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(600px 300px at 0% 0%, rgba(45,212,191,0.18), transparent 60%), radial-gradient(500px 260px at 100% 100%, rgba(59,130,246,0.25), transparent 60%)",
                opacity: 0.9,
              }}
            />

            <div className="relative flex items-center gap-4 sm:gap-5 mb-6">
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-2xl bg-emerald-400/30 blur-xl"
                  style={{ animation: "pageLoaderGlow 1.8s ease-in-out infinite" }}
                />
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-white/25 bg-neutral-900/80">
                  <img
                    src={AVATAR_URL}
                    alt="Khoyum Masalik"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/50">
                  Loading Portfolio
                </p>
                <p className="font-heading text-lg sm:text-xl font-semibold">
                  Khoyum Masalik
                </p>
                <p className="text-xs sm:text-sm text-white/65">
                  Frontend Web Developer
                </p>
              </div>
            </div>

            <div className="relative mb-5">
              <div className="mb-2 flex items-center justify-between text-[10px] sm:text-xs text-white/55">
                <span>Menyiapkan pengalaman interaktif</span>
                <span>01 · 03</span>
              </div>
              <div className="relative h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 w-1/2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(45,212,191,1), rgba(59,130,246,1), rgba(129,140,248,1))",
                    animation: "pageLoaderProgress 1.35s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            <div className="relative flex items-center justify-between text-[10px] sm:text-xs text-white/45">
              <span>Mengoptimalkan animasi dan layout</span>
              <span>Harap tunggu sebentar...</span>
            </div>

            <div className="relative mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"
                  style={{ animationDelay: "0.18s" }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"
                  style={{ animationDelay: "0.32s" }}
                />
              </div>

              <div className="flex items-center gap-3 text-[11px] sm:text-xs text-white/60">
                <Loader />
              </div>
            </div>

            <span className="sr-only">Memuat...</span>
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full px-6 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm">
            <div className="rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs text-white/70">
                  Berpindah halaman
                </span>
              </div>
              <div className="relative w-16 sm:w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 w-1/2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(45,212,191,1), rgba(59,130,246,1))",
                    animation: "pageLoaderProgress 0.9s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
