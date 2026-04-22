import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ChevronDown } from "lucide-react";
import iuLogo from "@/assets/logo-iu.png";
import boschLogo from "@/assets/logo-bosch.png";
import kctLogo from "@/assets/logo-kct.png";
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
    description: [
      "Engineered a student-facing RAG-powered AI assistant implementing agentic retrieval pipelines using LLM embeddings, vector retrieval and source-grounded generation via TypeScript-based REST APIs, bringing course-document intelligence into the website and expanding digital learning support for 3,500+ current undergraduates.",
      "Designed a scalable LLM integration pipeline with semantic search, retrieval grounding and hallucination mitigation, improving access to course support inside the platform for initiatives at US ranking #38 Public health graduate school.",
    ],
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Software Engineer",
    period: "2023-24",
    current: false,
    logo: boschLogo,
    logoContainerClass: "bg-white",
    logoClass: "w-8 h-8 object-contain",
    description: [
      "Developed production-grade backend validation services in Java to automate system verification within CI/CD pipelines, increasing test coverage by 33% and reducing execution time by 85%.",
      "Deployed containerized computer vision and OCR-based validation workflows using Docker for instrument cluster testing, reducing vehicle feature testing costs by 40%.",
      "Improved high-performance inter-process communication middleware using iceoryx in distributed systems, reducing build time by 15% and improving runtime efficiency.",
    ],
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Software Engineer Intern",
    period: "2022-23",
    current: false,
    logo: boschLogo,
    logoContainerClass: "bg-white",
    logoClass: "w-8 h-8 object-contain",
    description: [
      "Built a real-time data pipeline processing 2M+ gesture frames with automated validation and CI/CD integration using Python and TypeScript, achieving 90.32% classification accuracy across 5 dynamic gesture classes.",
      "Improved model robustness by experimenting with deep CNN, ResNeXt101 transfer learning, and MediaPipe pipelines, analyzing over 2 million gesture frames and identifying bottlenecks in temporal pattern detection and embedded deployment.",
    ],
  },
];

const ExperienceCard = ({ exp }: { exp: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDescription = exp.description && exp.description.length > 0;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onClick={() => hasDescription && setIsExpanded(!isExpanded)}
      className={`glass-card p-6 group transition-all duration-300 ${hasDescription ? "cursor-pointer hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5" : "hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5"}`}
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
        <div className="text-right flex flex-col items-end">
          {exp.current && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 mb-1 inline-block">
              Current
            </span>
          )}
          <p className="text-xs text-muted-foreground">{exp.period}</p>
          {hasDescription && (
            <ChevronDown 
              className={`w-4 h-4 text-muted-foreground mt-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
            />
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && hasDescription && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="list-disc list-outside ml-12 text-sm text-muted-foreground space-y-2 pr-4">
              {exp.description.map((desc: string, i: number) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const IUEducationCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="glass-card p-6 group cursor-pointer hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
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
        <div className="text-right flex flex-col items-end">
          <p className="text-xs text-muted-foreground">Aug 2024 – May 2026</p>
          <ChevronDown 
            className={`w-4 h-4 text-muted-foreground mt-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
          />
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-[52px] pr-4">
              <p className="text-xs font-semibold text-foreground mb-3">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Applied Machine Learning",
                  "Applied Algorithms (Arrays, Hash Maps, Trees, Graphs)",
                  "Engineering Cloud Computing",
                  "Software Engineering",
                  "Elements of Artificial Intelligence",
                  "Native Mobile App Development",
                  "Advanced Database Technologies",
                  "Database Design"
                ].map((course) => (
                  <span key={course} className="px-2.5 py-1 text-[11px] font-bold leading-tight rounded-md border border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors duration-300">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Work Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <h3 className="font-display font-semibold text-2xl text-foreground mb-6">Experience</h3>
            {experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </motion.div>

          {/* Education Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <h3 className="font-display font-semibold text-2xl text-foreground mb-6">Education</h3>
            <IUEducationCard />

            <motion.div
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="glass-card p-6 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0 mt-0.5 p-1 border border-border/50">
                  <img
                    src={kctLogo}
                    alt="Kumaraguru College of Technology logo"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">Anna University</h4>
                  <p className="text-sm font-medium text-foreground">Kumaraguru College of Technology</p>
                  <p className="text-sm text-muted-foreground mt-1">Bachelors of Science, Computer Science</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground ml-[52px]">Aug 2019 – May 2023</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
