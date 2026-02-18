import { Mail } from 'lucide-react';
import CurvedLoop from './CurvedLoop';
import ProfileCard from './ProfileCard';
import TextType from './TextType';
import ElectricBorder from './ElectricBorder';

const Hero = () => {
  return (
    <div id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center text-neutral-100 overflow-hidden px-4 md:px-0 scroll-mt-28">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 dark:opacity-25 select-none z-0 overflow-hidden">
        <div className="w-full km-container scale-[1.3] md:scale-[1.8] transition-transform duration-700">
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

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 z-10 w-full km-container">
        {/* Profile Card Container - Controlled width instead of scaling */}
        <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] transition-all duration-300 flex items-center justify-center z-20">
          <ProfileCard
            name="Khoyum Masalik"
            title="Web Developer"
            handle="khoyum_28"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://www.khoyummasalik.my.id/khoyum.jpg"
            showUserInfo
            enableTilt={true}
            enableMobileTilt={true} // Enabled for better mobile experience
            onContactClick={() => console.log("Contact clicked")}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/assets/demo/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg, #60496e8c 0%, #71C4FF44 100%)"
          />
        </div>

        <div className="text-center md:text-left w-full max-w-[90%] md:w-[550px] flex flex-col justify-center relative z-10">
          <div className="min-h-[160px] flex flex-col justify-center">
            <TextType
              text={
                "I'm a Web Developer\nI build beautiful and functional websites.\nHappy coding!"
              }
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="_"
              loop={false}
              className="text-4xl font-bold"
              variableSpeed={{ min: 30, max: 50 }}
            />
          </div>

          <div className="min-h-[60px] mt-4">
            <TextType
              text={[
                "Welcome to React Bits! Good to see you!",
                "Build some amazing experiences!",
              ]}
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={1000}
              showCursor
              cursorCharacter="_"
              className="text-xl font-mono"
              variableSpeed={{ min: 30, max: 50 }}
            />
          </div>
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            style={{
              borderRadius: 16,
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <button className="w-full px-6 py-3 bg-transparent text-white rounded-lg transition-colors cursor-pointer hover:bg-white/5">
              <Mail className="inline-block mr-2" />
              Get in Touch
            </button>
          </ElectricBorder>
        </div>
      </div>
    </div>
  );
};

export default Hero;
