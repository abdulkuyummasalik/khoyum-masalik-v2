import { FiUser, FiStar, FiMessageCircle } from "react-icons/fi";
import Carousel from "./Carousel";
import GlareHover from "./GlareHover";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    id: 1,
    name: "Rizky Pratama",
    role: "Product Manager",
    quote:
      "Kolaborasi yang solid, eksekusi cepat, dan perhatian pada detail UI/UX yang sangat baik.",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti Rahma",
    role: "CEO, EduTech",
    quote:
      "Aplikasi berjalan stabil, performa cepat, dan tim kami puas dengan hasil akhirnya.",
    avatar: "https://i.pravatar.cc/100?img=32",
    rating: 5,
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Lead Engineer",
    quote:
      "Kualitas kode rapi, scalable, dan dokumentasi jelas. Sangat direkomendasikan.",
    avatar: "https://i.pravatar.cc/100?img=7",
    rating: 5,
  },
  {
    id: 4,
    name: "Nadia F.",
    role: "Founder, Startup",
    quote:
      "Desain modern dan interaktif, peningkatan engagement pengguna terasa signifikan.",
    avatar: "https://i.pravatar.cc/100?img=46",
    rating: 5,
  },
];

const carouselItems = testimonials.map((t) => ({
  id: t.id,
  title: t.name,
  description: t.quote,
  icon: <FiMessageCircle className="h-[16px] w-[16px] text-white" />,
  imageUrl: (t.avatar || "").replace("/100", "/600"),
}));

// A self-contained testimonial card that fills its parent height
const TestimonialCard = ({ t }) => (
  <GlareHover
    className="rounded-2xl border-white/10 w-full h-full"
    width="100%"
    height="100%"
    background="#0b0b12"
    borderRadius="16px"
    borderColor="#1f1f2d"
    glareColor="#ffffff"
    glareOpacity={0.18}
    glareAngle={-20}
    glareSize={260}
    transitionDuration={700}
  >
    <div className="flex flex-col justify-between h-full w-full p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
      {/* Top: avatar + name */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10 flex-shrink-0"
          />
          <div>
            <div className="text-white font-semibold text-sm sm:text-base leading-tight">
              {t.name}
            </div>
            <div className="text-white/50 text-xs sm:text-sm">{t.role}</div>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 text-sky-400 mb-3">
          {Array.from({ length: t.rating }).map((_, i) => (
            <FiStar key={i} className="w-3.5 h-3.5 text-sky-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
          "{t.quote}"
        </p>
      </div>

      <div className="mt-5">
        <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[10px] bg-white/10 border border-white/10">
          <FiUser className="w-4 h-4 text-white/70" />
          <span className="text-sm text-white/80">Verified</span>
        </div>
      </div>
    </div>
  </GlareHover>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-16 sm:py-20 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Testimoni"
    >
      {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 50%, rgba(96,165,250,0.18), transparent 60%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="km-container text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4 sm:mb-5">
          Testimonials
        </div>
        <SectionHeader
          titlePrefix="Testimoni"
          description="Suara klien dan rekan kerja mengenai kualitas kerja dan kolaborasi."
        />
      </div>

      {/* Grid */}
      <div className="km-container relative z-10">
        {/*
          On mobile: stack vertically (carousel on top, cards below)
          On lg: side-by-side, equal height via items-stretch
          The key to equal height: both columns are flex children of a
          `flex` (or `grid`) container with `items-stretch`.
          The carousel wrapper uses h-full, and Carousel itself uses h-full.
        */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* LEFT — Carousel (takes 2/3 width on lg) */}
          <div className="w-full lg:flex-[2] min-w-0">
            {/*
              We need Carousel to match the right column height.
              Wrap it in a full-height div and let Carousel fill it.
            */}
            <div className="h-full min-h-[400px] sm:min-h-[460px]">
              <Carousel
                items={carouselItems}
                fluid
                autoplay
                autoplayDelay={3500}
                pauseOnHover
                loop
              />
            </div>
          </div>

          {/* RIGHT — Two stacked cards (takes 1/3 width on lg) */}
          <div className="w-full lg:flex-[1] flex flex-col gap-4 sm:gap-5 min-w-0">
            {testimonials.slice(0, 2).map((t) => (
              <div key={t.id} className="flex-1 min-h-0">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
