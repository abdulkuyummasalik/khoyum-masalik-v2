import { useState, useEffect } from "react";

const loaders = [
  () => (
    <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-1.5 h-8 rounded-full bg-emerald-400/90"
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
      className="w-12 h-12 rounded-full border-2 border-white/20 border-t-emerald-400"
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

export default function PageLoader() {
  const [phase, setPhase] = useState("visible"); // visible -> fading -> gone
  const [loaderIndex, setLoaderIndex] = useState(0);
  const Loader = loaders[loaderIndex];

  useEffect(() => {
    let hide;
    const start = requestAnimationFrame(() => {
      setLoaderIndex(Math.floor(Math.random() * loaders.length));
      hide = setTimeout(() => setPhase("fading"), 700);
    });
    return () => {
      cancelAnimationFrame(start);
      if (hide) clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const id = setTimeout(() => setPhase("gone"), 400);
    return () => clearTimeout(id);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-neutral-950 text-white"
      style={{
        transition: "opacity 0.4s ease-out",
        opacity: phase === "visible" ? 1 : 0,
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
      role="status"
      aria-label="Memuat"
    >
      <Loader />
      <span className="sr-only">Memuat...</span>
    </div>
  );
}
