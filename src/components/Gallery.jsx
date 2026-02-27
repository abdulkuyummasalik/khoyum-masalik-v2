import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import ElectricBorder from "./ElectricBorder";
import CardGlare from "./CardGlare";
import { galleryProjects } from "../datas/gallery";

// 3D perspective carousel — inspired by the reference image
// Center card faces forward, side cards tilt away with depth

const CARD_WIDTH = 280;    // px, base
const CARD_GAP = 24;       // px between card centers offset
const AUTO_INTERVAL = 3000; // ms

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedMap, setLoadedMap] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(null);
  const autoRef = useRef(null);
  const total = galleryProjects.length;

  const markLoaded = (i) => setLoadedMap((m) => ({ ...m, [i]: true }));

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(next, AUTO_INTERVAL);
  }, [next]);

  useEffect(() => {
    autoRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(autoRef.current);
  }, [next]);

  // Drag / swipe support
  const onPointerDown = (e) => {
    setIsDragging(false);
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX;
  };
  const onPointerUp = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX;
    const delta = endX - dragStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
      resetAuto();
    }
    dragStartX.current = null;
  };

  // Compute visual position offset relative to active: -2 … +2
  const getOffset = (i) => {
    let diff = i - activeIndex;
    // Wrap around
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Card style based on offset from center
  const cardStyle = (offset) => {
    const absOff = Math.abs(offset);
    const visible = absOff <= 2;

    const translateX = offset * (CARD_WIDTH * 0.72 + CARD_GAP);
    const rotateY = offset * -38; // degrees
    const scale = offset === 0 ? 1 : absOff === 1 ? 0.82 : 0.66;
    const translateZ = offset === 0 ? 0 : absOff === 1 ? -120 : -260;
    const opacity = offset === 0 ? 1 : absOff === 1 ? 0.85 : absOff === 2 ? 0.5 : 0;
    const zIndex = offset === 0 ? 10 : absOff === 1 ? 8 : 6;

    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: CARD_WIDTH,
      transform: `
        translate(-50%, -50%)
        translateX(${translateX}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `,
      opacity,
      zIndex,
      visibility: visible ? "visible" : "hidden",
      transition: "all 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      cursor: offset === 0 ? "pointer" : "pointer",
    };
  };

  return (
    <section
      id="gallery"
      className="w-full py-16 sm:py-20 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Galeri Proyek"
    >
      {/* Background glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-25"
          style={{
            background:
              "radial-gradient(900px 600px at 50% 40%, rgba(96,165,250,0.25), transparent 60%)",
          }}
        />
      </div> */}

      {/* Header */}
      <div className="km-container text-center relative z-10">
        <SectionHeader
          titlePrefix="Kreativitas dan"
          titleHighlight="eksplorasi visual"
          description="Kumpulan cuplikan antarmuka, eksperimen desain, dan proyek visual yang mewakili gaya dan pendekatan saya."
        />
      </div>

      {/* 3D Carousel Stage */}
      <div className="km-container relative z-10">
        <div className="relative  overflow-hidden">

          {/* Carousel area */}
          <div
            className="relative w-full select-none"
            style={{
              height: 440,
              perspective: "1200px",
              perspectiveOrigin: "50% 50%",
            }}
            onMouseDown={onPointerDown}
            onMouseUp={onPointerUp}
            onTouchStart={onPointerDown}
            onTouchEnd={onPointerUp}
          >
            {galleryProjects.map((img, i) => {
              const offset = getOffset(i);
              const isCenter = offset === 0;

              return (
                <div
                  key={img.slug}
                  style={cardStyle(offset)}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(i);
                      resetAuto();
                    }
                  }}
                >
                  <CardGlare roundedClass="rounded-[20px]">
                    <Link
                      to={isCenter ? `/gallery/${img.slug}` : "#"}
                      onClick={(e) => !isCenter && e.preventDefault()}
                      className="group block relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03]"
                      style={{
                        width: CARD_WIDTH,
                        boxShadow: isCenter
                          ? "0 0 40px rgba(96,165,250,0.4), 0 20px 60px rgba(0,0,0,0.6)"
                          : "0 8px 32px rgba(0,0,0,0.5)",
                      }}
                    >
                      {/* Image */}
                      <div
                        className="relative bg-slate-900 overflow-hidden"
                        style={{ height: 380 }}
                      >
                        {!loadedMap[i] && (
                          <div className="absolute inset-0 animate-pulse bg-slate-800/80" />
                        )}
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          onLoad={() => markLoaded(i)}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Tags */}
                        <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1.5 max-w-[80%]">
                          {img.tags.map((tag, ti) => (
                            <span
                              key={ti}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-black/50 border border-white/20 text-white/85 backdrop-blur-sm whitespace-nowrap"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Bottom info */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                          <span className="text-white font-bold text-base drop-shadow-md leading-tight max-w-[75%]">
                            {img.alt}
                          </span>
                          {isCenter && (
                            <div className="w-8 h-8 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0">
                              <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>

                        {/* Active glow overlay */}
                        {isCenter && (
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                "radial-gradient(ellipse 60% 40% at 50% 90%, rgba(96,165,250,0.2), transparent 70%)",
                            }}
                          />
                        )}
                      </div>
                    </Link>
                  </CardGlare>
                </div>
              );
            })}

            {/* Left / Right nav arrows — positioned over carousel */}
            <button
              onClick={() => { prev(); resetAuto(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => { next(); resetAuto(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-3 mb-1">
            {galleryProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); resetAuto(); }}
                className="transition-all duration-300"
                style={{
                  width: i === activeIndex ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === activeIndex
                    ? "rgba(96,165,250,0.9)"
                    : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl">
              <ElectricBorder
                color="#3b82f6"
                speed={1}
                chaos={0.1}
                style={{ borderRadius: 9999, display: "inline-block" }}
              >
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-600/80 hover:bg-sky-500/90 transition-colors text-sm font-semibold text-white"
                >
                  Lihat semua galeri
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;