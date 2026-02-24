import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";
import ElectricBorder from "./ElectricBorder";
import { posts } from "./Blog";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 text-white">
        <section className="w-full">
          <div className="km-container text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4">
              Blog & Artikel
            </div>
            <SectionHeader
              titlePrefix="Tulisan seputar"
              titleHighlight="desain & pengembangan"
              highlightClassName="text-emerald-400"
              description="Kumpulan artikel pendek yang merangkum insight tentang UI, UX, performa web, dan workflow pengembangan."
            />
          </div>

          <div
            className="km-container"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(18px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {posts.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`}>
                <CardGlare roundedClass="rounded-2xl">
                  <article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col h-full">
                    <div className="w-full h-44 sm:h-52 md:h-56 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                      <div className="flex items-center justify-between text-[11px] sm:text-xs text-white/60">
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/75">
                          {p.tags?.[0] || "Artikel"}
                        </span>
                        <span>{p.readTime}</span>
                      </div>
                      <h2 className="text-base sm:text-lg font-semibold leading-snug">
                        {p.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-white/65 leading-relaxed flex-1">
                        {p.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-[11px] sm:text-xs text-white/55">
                        <span>{p.date}</span>
                        <span className="flex flex-wrap gap-1">
                          {p.tags?.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </article>
                </CardGlare>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center">
              <ElectricBorder
                color="#3b82f6"
                speed={1}
                chaos={0.12}
                style={{ borderRadius: 9999, display: "inline-block" }}
              >
                <a
                  href="/#blog"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs sm:text-sm font-medium"
                >
                  Kembali ke bagian blog di beranda
                </a>
              </ElectricBorder>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
