import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";
import ElectricBorder from "./ElectricBorder";
import { posts } from "../datas/blog";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const { current, others } = useMemo(() => {
    const article = posts.find((p) => p.slug === slug) || posts[0];
    const rest = posts.filter((p) => p.slug !== article.slug).slice(0, 3);
    return { current: article, others: rest };
  }, [slug]);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 text-white">
        <section className="w-full">
          <div className="km-container mb-6 sm:mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white/90 px-0.5 py-1 rounded-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali</span>
            </button>
          </div>

          <div className="km-container mb-8 sm:mb-10">
            <SectionHeader
              titlePrefix="Detail"
              titleHighlight="artikel"
              highlightClassName="text-emerald-400"
              description="Versi lengkap dari artikel dengan konteks tambahan dan penjelasan yang lebih runtut."
            />
          </div>

          <div
            className="km-container mb-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(18px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <CardGlare roundedClass="rounded-2xl">
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-5 sm:bottom-7">
                    <div className="flex flex-col gap-3 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-white/70">
                        <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
                          {current.tags?.[0] || "Artikel"}
                        </span>
                        <span>{current.date}</span>
                        <span>{current.readTime}</span>
                      </div>
                      <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        {current.title}
                      </h1>
                      <p className="text-sm sm:text-base text-white/70 max-w-2xl">
                        {current.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {current.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-black/50 border border-white/20 text-white/85"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 max-w-3xl space-y-4 text-sm sm:text-base text-white/75 leading-relaxed">
                  <p>
                    Artikel ini ditulis sebagai rangkuman praktik yang sering digunakan
                    ketika membangun antarmuka modern. Fokus utamanya adalah membuat
                    setiap interaksi terasa halus, responsif, dan selaras dengan
                    identitas brand.
                  </p>
                  <p>
                    Pendekatan yang digunakan menyeimbangkan antara sisi visual dan
                    teknis. Setiap animasi, komponen, dan layout dipikirkan agar tidak
                    mengorbankan performa, terutama di perangkat mobile dengan koneksi
                    terbatas.
                  </p>
                  <p>
                    Selain itu, struktur komponen dan penamaan juga dibuat rapi agar
                    mudah dipelihara dan dikembangkan oleh tim di masa depan. Dengan
                    demikian, artikel ini bukan hanya bicara tampilan, tetapi juga
                    bagaimana menjaganya tetap scalable.
                  </p>
                </div>
              </article>
            </CardGlare>
          </div>

          <div className="km-container">
            <SectionHeader
              titlePrefix="Artikel"
              titleHighlight="lainnya"
              highlightClassName="text-sky-400"
              description="Beberapa tulisan lain yang masih berkaitan dengan topik desain dan pengembangan antarmuka."
            />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {others.map((p) => (
                <CardGlare key={p.id} roundedClass="rounded-2xl">
                  <article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col h-full">
                    <div className="w-full h-40 sm:h-44 overflow-hidden">
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
                      <h2 className="text-sm sm:text-base font-semibold leading-snug">
                        {p.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-white/65 leading-relaxed flex-1">
                        {p.excerpt}
                      </p>
                      <div className="text-[11px] sm:text-xs text-white/55">
                        {p.date}
                      </div>
                    </div>
                  </article>
                </CardGlare>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
