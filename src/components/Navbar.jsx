import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import ElectricBorder from "./ElectricBorder";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

const LOGO = "https://www.khoyummasalik.my.id/khoyum.jpg";
const CONTACT_HREF = "#contact";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  /* ── Scroll spy ── */
  useEffect(() => {
    const ids = [
      "services",
      "projects",
      "experience",
      "gallery",
      "testimonials",
      "blog",
      "contact",
    ];
    const handler = () => {
      setScrolled(window.scrollY > 20);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(`#${ids[i]}`);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Close mobile on outside click ── */
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target))
        setMobileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  /* ── Smooth scroll ── */
  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(href);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-[1000]">
      <div className="km-container">
        {/* ══ Main bar ══ */}
        <nav
        className="relative flex items-center justify-between gap-3 px-3 py-2.5"
        style={{
          borderRadius: "18px",
          background: scrolled ? "rgba(8,8,14,0.75)" : "rgba(10,10,18,0.55)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 24px rgba(0,0,0,0.3),  0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* ── Avatar ── */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          aria-label="Home"
          className="flex-shrink-0 overflow-hidden transition-all duration-200 hover:opacity-80"
          style={{
            width: 38,
            height: 38,
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src={LOGO}
            alt="Khoyum"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </a>

        {/* ── Desktop nav ── */}
        <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center list-none m-0 p-0">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 flex items-center gap-1"
                  style={{
                    borderRadius: "10px",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                    background: isActive
                      ? "rgba(255,255,255,0.08)"
                      : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Right side ── */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Dark toggle */}
          <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.10)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
            >
              {dark ? (
                <Moon className="w-[15px] h-[15px] text-white/60" />
              ) : (
                <Sun className="w-[15px] h-[15px] text-amber-300" />
              )}
            </button>

          {/* Contact */}
          <ElectricBorder color="#3b82f6" speed={1} chaos={0.1} style={{ borderRadius: 10, display: "inline-block" }}>
            <a
              href={CONTACT_HREF}
              onClick={(e) => handleClick(e, CONTACT_HREF)}
              className="hidden sm:inline-flex items-center px-5 py-2 text-xs font-bold text-white tracking-widest uppercase transition-all duration-200"
              style={{
                borderRadius: "10px",
                background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
                boxShadow:
                  "0 0 18px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)";
                e.currentTarget.style.boxShadow =
                  "0 0 28px rgba(59,130,246,0.55), inset 0 1px 0 rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact
            </a>
          </ElectricBorder>

          {/* Hamburger */}
          <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="md:hidden flex items-center justify-center transition-all duration-200"
              style={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.10)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
            >
              {mobileOpen ? (
                <X className="w-[15px] h-[15px] text-white/75" />
              ) : (
                <Menu className="w-[15px] h-[15px] text-white/75" />
              )}
            </button>
        </div>
        </nav>

        {/* ══ Mobile dropdown ══ */}
        <div
        ref={mobileRef}
        className="md:hidden absolute left-0 right-0 overflow-hidden"
        style={{
          top: "calc(100% + 6px)",
          borderRadius: "18px",
          background: "rgba(8,8,14,0.82)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen
            ? "translateY(0) scale(1)"
            : "translateY(-6px) scale(0.98)",
          transformOrigin: "top center",
          transition: "opacity 0.22s ease, transform 0.22s ease",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div className="p-2 flex flex-col gap-1">
          {[...NAV_ITEMS, { label: "Contact", href: CONTACT_HREF }].map(
            (item) => {
              const isContact = item.href === CONTACT_HREF;
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="px-4 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-150"
                  style={{
                    borderRadius: "12px",
                    color: isContact
                      ? "#fff"
                      : isActive
                        ? "#fff"
                        : "rgba(255,255,255,0.6)",
                    background: isContact
                      ? "linear-gradient(135deg, #1d4ed8, #3b82f6)"
                      : isActive
                        ? "rgba(255,255,255,0.08)"
                        : "transparent",
                    boxShadow: isContact
                      ? "0 0 16px rgba(59,130,246,0.3)"
                      : "none",
                  }}
                >
                  {item.label}
                </a>
              );
            },
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
