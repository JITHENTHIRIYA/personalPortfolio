import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.png";
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

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
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

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5"><MapPin size={14} /> Seattle, WA</span>
              <span className="flex items-center gap-1.5"><GraduationCap size={14} /> Indiana University</span>
            </div>

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

          {/* Right — portrait card (reference-style: rounded, soft shadow) */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-sm rounded-[1.75rem] overflow-hidden border border-border/60 bg-card/40 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-black/5 dark:ring-white/10"
            >
              <img
                src={aboutPortrait}
                alt="Jithenthiriya — portrait in the snow"
                className="w-full h-auto object-cover aspect-[3/4] sm:aspect-[4/5] object-[center_20%] select-none pointer-events-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
