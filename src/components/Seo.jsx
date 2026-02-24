import { useEffect } from "react";
import { seoConfig } from "../datas/seo";

const getPageSeo = (key) => {
  return seoConfig.pages[key] || null;
};

export const Seo = ({ pageKey }) => {
  const pageSeo = getPageSeo(pageKey);

  useEffect(() => {
    if (!pageSeo) return;
    document.title = pageSeo.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", pageSeo.description);
    }
  }, [pageSeo]);

  if (!pageSeo) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageSeo.title,
    description: pageSeo.description,
    url: `${seoConfig.site.url}${pageSeo.path}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default Seo;

