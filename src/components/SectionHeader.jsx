import React from "react";
import AnimatedContent from "./AnimatedContent";

const SectionHeader = ({
  titlePrefix,
  titleHighlight,
  description,
  align = "center",
  className = "",
  descriptionClassName = "",
  highlightClassName = "text-sky-400",
}) => {
  const alignment = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";
  return (
    <AnimatedContent distance={40} duration={0.6} threshold={0.1} className={`km-container ${alignment} ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-1 text-white">
        {titlePrefix}
        {titleHighlight ? (
          <span className={`text-3xl sm:text-4xl md:text-5xl italic ${highlightClassName}`}> {titleHighlight}</span>
        ) : null}
      </h2>
      {description ? (
        <p className={`mt-3 text-sm sm:text-base text-neutral-300 km-text ${alignment !== "text-center" ? "mx-0" : ""} ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </AnimatedContent>
  );
};

export default SectionHeader;
