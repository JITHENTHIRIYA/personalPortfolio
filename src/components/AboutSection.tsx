import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import {
  slideLeftVariants,
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
        <motion.div
          variants={slideLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl"
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
      </div>
    </section>
  );
};
