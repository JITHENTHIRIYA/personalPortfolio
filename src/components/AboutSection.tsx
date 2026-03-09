import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import {
  slideLeftVariants,
  slideRightVariants,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

const skills = [
  "C++", "Python", "TypeScript", "React", "AWS", "Docker",
  "Machine Learning", "FastAPI", "Node.js", "PostgreSQL",
  "CI/CD", "LangChain",
];

const experience = [
  { company: "Surviving Breast Cancer", role: "Software Developer Intern", period: "2025", current: true },
  { company: "Bosch Global Software", role: "Software Engineer", period: "2023-24", current: false },
  { company: "Bosch Global Software", role: "Software Engineer Intern", period: "2022-23", current: false },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">About Me</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Meet Jithenthiriya
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Software Engineer and M.S. Computer Science student at Indiana University, Bloomington.
              I specialize in building production-grade backend systems, ML pipelines, and cloud-native applications.
              With experience at Bosch and nonprofit tech, I blend engineering rigor with real-world impact.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5"><MapPin size={14} /> Seattle, WA</span>
              <span className="flex items-center gap-1.5"><GraduationCap size={14} /> Indiana University</span>
            </div>

            {/* Skill tags with stagger */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={staggerItem}
                  className="skill-tag text-foreground hover:scale-105 hover:border-foreground/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Experience */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
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
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Briefcase size={18} className="text-foreground" />
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

            {/* Education */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="glass-card p-6 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <GraduationCap size={18} className="text-foreground" />
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
      </div>
    </section>
  );
};
