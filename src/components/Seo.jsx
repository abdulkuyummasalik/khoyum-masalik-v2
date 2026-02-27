import { Helmet } from "react-helmet";
import { seoConfig } from "../datas/seo";

export const Seo = ({ pageKey }) => {
  const pageSeo = seoConfig.pages[pageKey];

  if (!pageSeo) return null;

  const url = `${seoConfig.site.url}${pageSeo.path}`;
  const image = seoConfig.site.defaultImage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageSeo.title,
    description: pageSeo.description,
    url: url,
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageSeo.title}</title>
        <meta name="title" content={pageSeo.title} />
        <meta name="description" content={pageSeo.description} />
        {pageSeo.keywords && (
          <meta name="keywords" content={pageSeo.keywords.join(", ")} />
        )}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageSeo.title} />
        <meta property="og:description" content={pageSeo.description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={pageSeo.title} />
        <meta property="twitter:description" content={pageSeo.description} />
        <meta property="twitter:image" content={image} />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Seo;
