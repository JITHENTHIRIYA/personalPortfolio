import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy } from "lucide-react";
import {
  fadeUpVariants,
  staggerContainer,
  scaleFadeVariants,
  viewportConfig,
} from "@/lib/animations";

const projects = [
  {
    title: "MeetMind AI",
    badge: "Hackathon Winner 🏆",
    description:
      "AI-powered assistant that transcribes meetings, generates summaries, extracts action items and performs sentiment analysis using OpenAI Whisper and GPT models.",
    tech: ["FastAPI", "OpenAI", "SQL", "CI/CD", "Python"],
    link: "#",
    highlight: true,
  },
  {
    title: "CV Model Deployment & MLOps Pipeline",
    badge: null,
    description:
      "End-to-end computer vision MLOps pipeline with Dockerized model service, CI/CD via GitHub Actions, and AWS cloud-ready API-driven deployment.",
    tech: ["Docker", "AWS", "GitHub Actions", "Python", "CI/CD"],
    link: "#",
    highlight: false,
  },
  {
    title: "Real-time Gesture Recognition",
    badge: null,
    description:
      "3D CNN-LSTM hand gesture recognition model achieving 90.32% accuracy on dynamic gestures, trained on 20bn-jester video data with progressive dataset approach.",
    tech: ["CNN", "LSTM", "MediaPipe", "Transfer Learning", "Python"],
    link: "#",
    highlight: false,
  },
  {
    title: "Face Recognition Attendance System",
    badge: "IEEE Published",
    description:
      "Real-time face recognition system achieving 90% accuracy using HOG and CNN with Google Cloud Firestore deployment for attendance monitoring.",
    tech: ["HOG", "CNN", "GCP", "Firestore", "Python"],
    link: "https://ieeexplore.ieee.org/abstract/document/10073909/",
    highlight: false,
  },
  {
    title: "HDR Image Reconstruction",
    badge: "IEEE Published",
    description:
      "Deep learning model converting LDR to HDR images using GAN and CNN, enhancing brightness and exposure accuracy by over 35% across tone-mapping methods.",
    tech: ["GAN", "CNN", "Deep Learning", "Image Processing"],
    link: "https://ieeexplore.ieee.org/abstract/document/10200786/",
    highlight: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">Recent Works</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A selection of projects spanning ML, cloud computing, and full-stack engineering.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const isLink = project.link && project.link !== "#";
            
            const cardContent = (
              <>
                {project.badge && (
                  <div className="flex items-center gap-1.5 mb-3">
                    {project.badge.includes("Winner") ? (
                      <Trophy size={14} className="text-amber-500" />
                    ) : (
                      <ExternalLink size={14} className="text-emerald-500" />
                    )}
                    <span className="text-xs font-medium text-muted-foreground">{project.badge}</span>
                  </div>
                )}
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground group-hover:bg-accent/80 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            );

            if (isLink) {
              return (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={scaleFadeVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                  className={`glass-card p-6 group hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 flex flex-col cursor-pointer block ${
                    project.highlight ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={project.title}
                variants={scaleFadeVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className={`glass-card p-6 group hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 flex flex-col cursor-default ${
                  project.highlight ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.3}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/jithenthiriya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-foreground hover:bg-accent hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Github size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
