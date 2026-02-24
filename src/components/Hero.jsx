import { Mail } from "lucide-react";
import CurvedLoop from "./CurvedLoop";
import ProfileCard from "./ProfileCard";
import TextType from "./TextType";
import ElectricBorder from "./ElectricBorder";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center text-neutral-100 overflow-hidden scroll-mt-28 pt-24 sm:pt-28 md:pt-32"
    >
      {/* ── Background marquee ─────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 dark:opacity-25 select-none z-0 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 scale-[1.3] md:scale-[1.8] transition-transform duration-700">
          <CurvedLoop
            marqueeText="Khoyum ✦ Masalik ✦ Web ✦ Developer ✦"
            speed={3}
            curveAmount={40}
            direction="left"
            interactive={false}
            className="text-white/60 md:text-white/70"
          />
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────────────────── */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 z-10 w-full km-container">
        {/* Profile Card */}
        <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] transition-all duration-300 flex items-center justify-center z-20">
          <ProfileCard
            name="Khoyum Masalik"
            title="Frontend Web Developer"
            handle="khoyum_28"
            status="Online"
            contactText="Hubungi Saya"
            avatarUrl="https://www.khoyummasalik.my.id/khoyum.jpg"
            showUserInfo
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => console.log("Kontak diklik")}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/assets/demo/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg, #60496e8c 0%, #71C4FF44 100%)"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left w-full max-w-[90%] md:w-[550px] flex flex-col justify-center relative z-10">
          {/* ── Headline — cepat, sekali ketik, tidak loop ── */}
          <div className="min-h-[120px] sm:min-h-[160px] flex flex-col justify-center">
            <TextType
              text="Saya seorang Frontend Web Developer yang membangun website cepat, rapi, dan mudah digunakan."
              typingSpeed={18} // ← jauh lebih cepat dari 40
              showCursor={false} // ← cursor disembunyikan supaya tidak ganggu
              loop={false} // ← ketik sekali saja
              initialDelay={200} // ← sedikit delay awal supaya tidak langsung pop
              className="text-xl md:text-4xl font-bold font-heading"
              // variableSpeed DIHAPUS — ini penyebab utama keterlambatan
            />
          </div>

          {/* ── Subtitle — loop 2 kalimat, cepat ── */}
          <div className="min-h-[40px] sm:min-h-[60px] mt-3 sm:mt-4">
            <TextType
              text={[
                "Selamat datang di portofolio saya ✦",
                "Gulir ke bawah untuk melihat proyek saya.",
              ]}
              typingSpeed={22} // ← cukup cepat, masih terasa natural
              deletingSpeed={10} // ← hapus lebih cepat supaya tidak membosankan
              pauseDuration={1800} // ← jeda antar kalimat
              initialDelay={1400} // ← muncul setelah headline selesai ~sebagian
              showCursor
              cursorCharacter="_"
              loop
              className="text-sm md:text-xl font-mono text-neutral-400"
              // variableSpeed DIHAPUS
            />
          </div>

          {/* ── CTA Button ── */}
          <ElectricBorder
            color="#3b82f6"
            speed={1}
            chaos={0.12}
            style={{
              borderRadius: 16,
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <button
              className="w-full px-6 py-3 bg-transparent text-white rounded-lg transition-colors cursor-pointer hover:bg-white/5"
              onClick={() => window.open("mailto:khoyum28@gmail.com", "_blank")}
            >
              <Mail className="inline-block mr-2" />
              Hubungi Saya
            </button>
          </ElectricBorder>
        </div>
      </div>
    </div>
  );
};

export default Hero;
