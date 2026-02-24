import { useRef } from "react";

const CardGlare = ({
  children,
  className = "",
  style = {},
  roundedClass = "",
  glareColor = "#ffffff",
  glareOpacity = 0.35,
  glareAngle = -45,
  glareSize = 220,
  transitionDuration = 600,
  playOnce = false,
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const overlayRef = useRef(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.backgroundPosition = "-120% -120%, 0 0";
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = "120% 120%, 0 0";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    if (playOnce) {
      el.style.transition = "none";
      el.style.backgroundPosition = "-120% -120%, 0 0";
    } else {
      el.style.transition = `${transitionDuration}ms ease`;
      el.style.backgroundPosition = "-120% -120%, 0 0";
    }
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    zIndex: 2,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${rgba} 72%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-120% -120%, 0 0",
    pointerEvents: "none",
  };

  return (
    <div
      className={`relative overflow-hidden ${roundedClass} ${className}`}
      style={{ ...style }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      {children}
      <div ref={overlayRef} style={overlayStyle} />
    </div>
  );
};

export default CardGlare;
