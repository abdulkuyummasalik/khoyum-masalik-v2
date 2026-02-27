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
    <AnimatedContent
      distance={40}
      duration={0.6}
      threshold={0.1}
      className={`km-container ${alignment} mb-10 sm:mb-12 md:mb-14 ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-3 sm:pb-4 text-white font-heading">
        {titlePrefix}
        {titleHighlight ? (
          <span className={`text-3xl sm:text-4xl md:text-5xl font-bold italic ml-2 ${highlightClassName}`}>
            {titleHighlight}
          </span>
        ) : null}
      </h2>
      {description ? (
        <p className={`mt-4 sm:mt-5 text-sm sm:text-base text-neutral-300 km-text ${alignment !== "text-center" ? "mx-0" : ""} ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </AnimatedContent>
  );
};

export default SectionHeader;
