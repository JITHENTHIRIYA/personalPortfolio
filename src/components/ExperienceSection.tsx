import { motion } from "framer-motion";
import iuLogo from "@/assets/logo-iu.png";
import boschLogo from "@/assets/logo-bosch.png";
import {
  fadeUpVariants,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

const experience = [
  {
    company: "School of Public Health, Indiana University",
    role: "AI Software Engineer",
    period: "2026",
    current: true,
    logo: iuLogo,
    logoContainerClass: "bg-white",
    logoClass: "w-7 h-7 object-contain",
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Software Engineer",
    period: "2023-24",
    current: false,
    logo: boschLogo,
    logoContainerClass: "bg-white",
    logoClass: "w-8 h-8 object-contain",
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Software Engineer Intern",
    period: "2022-23",
    current: false,
    logo: boschLogo,
    logoContainerClass: "bg-white",
    logoClass: "w-8 h-8 object-contain",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">Experience</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Work & education
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Roles and studies that shaped how I build software.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-2xl mx-auto space-y-6"
        >
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="glass-card p-6 group hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden ${
                      exp.logoContainerClass ?? "bg-accent"
                    }`}
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className={exp.logoClass ?? "w-7 h-7 object-contain"}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{exp.company}</h4>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  {exp.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 mb-1 inline-block">
                      Current
                    </span>
                  )}
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="glass-card p-6 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center overflow-hidden">
                <img
                  src={iuLogo}
                  alt="Indiana University logo"
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">Indiana University</h4>
                <p className="text-sm text-muted-foreground">M.S. Computer Science</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground ml-[52px]">Aug 2024 – May 2026</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
