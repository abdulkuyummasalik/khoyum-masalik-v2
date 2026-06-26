
import LogoLoop from './LogoLoop';
import CardGlare from './CardGlare';
import SectionHeader from './SectionHeader';

import { skills, skillGroups } from '../datas/skills';

const Skills = () => {

  return (
    <section
      id="skills"
      className="w-full py-20 text-foreground relative overflow-hidden scroll-mt-28"
      aria-label="Teknologi dan Keahlian"
    >
      <SectionHeader
        titlePrefix="Teknologi &"
        titleHighlight="Keahlian"
        highlightClassName="text-emerald-400"
        description="Tumpukan teknologi yang saya gunakan untuk membangun pengalaman web yang cepat, rapi, dan elegan."
      />

      <div className="km-container mb-10 text-center">
        <LogoLoop
          logos={skills}
          speed={42}
          direction="left"
          logoHeight={52}
          gap={64}
          hoverSpeed={12}
          scaleOnHover={true}
          fadeOut={true}
          ariaLabel="Logo teknologi"
        />
      </div>

      <div className="km-container mt-14">
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <CardGlare key={idx} roundedClass="rounded-2xl">
              <div className="rounded-2xl border border-white/10 w-full p-6 md:p-7 bg-card">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <div className="flex items-center gap-2 text-2xl">
                    {group.icons.map((icon, i) => (
                      <span key={i} className="inline-flex">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground text-sm">{group.caption}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((it, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-muted border border-white/10 text-foreground/90">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </CardGlare>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
