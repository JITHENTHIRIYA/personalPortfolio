import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, ZoomIn } from "lucide-react";
import { fadeUpVariants, scaleFadeVariants, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import cvMlopsPreview from "@/assets/cv-mlops-preview.png";
import meetmindPreview from "@/assets/meetmind-preview.png";
import resolvlyPreview from "@/assets/resolvly-preview.png";

type Project = {
  title: string;
  badge: string | null;
  description: string;
  tech: string[];
  highlight: boolean;
  /** Project write-up, hackathon submission, etc. (shown as primary-style pill) */
  externalUrl?: string;
  externalLabel?: string;
  githubUrl?: string;
  demoUrl?: string;
  previewImage?: string;
  previewAlt?: string;
};

const actionPillBase =
  "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const demoPillClass = `${actionPillBase} bg-primary/10 text-primary hover:bg-primary/15 border-primary/20`;
const githubPillClass = `${actionPillBase} bg-accent text-accent-foreground hover:bg-accent/80 border-border`;

const projects: Project[] = [
  {
    title: "MeetMind AI",
    badge: "Hackathon Winner 🏆",
    description:
      "AI-powered assistant that transcribes meetings, generates summaries, extracts action items and performs sentiment analysis using OpenAI Whisper and GPT models.",
    tech: ["FastAPI", "OpenAI", "SQL", "CI/CD", "Python"],
    externalUrl: "https://devpost.com/software/meet-mind-ai",
    externalLabel: "Project",
    githubUrl: "https://github.com/Ctrl-Alt-Defeat-Hackathon/MeetMind-AI",
    demoUrl: "https://meetmindai-beta.vercel.app",
    previewImage: meetmindPreview,
    previewAlt: "MeetMind AI landing page — media upload and meeting analysis",
    highlight: true,
  },
  {
    title: "CV Model Deployment & MLOps Pipeline",
    badge: null,
    description:
      "End-to-end computer vision MLOps pipeline with Dockerized model service, CI/CD via GitHub Actions, and AWS cloud-ready API-driven deployment.",
    tech: ["Docker", "AWS", "GitHub Actions", "Python", "CI/CD"],
    githubUrl: "https://github.com/JITHENTHIRIYA/cv-mlops-pipeline",
    previewImage: cvMlopsPreview,
    previewAlt: "CV Pipeline object detection dashboard — Faster R-CNN inference UI",
    highlight: false,
  },
  {
    title: "Ask My PDF-LangChain",
    badge: null,
    description:
      "A local LLM-powered app to ask questions about any PDF using LangChain, Ollama, and FAISS with no OpenAI key required.",
    tech: ["LangChain", "Ollama", "FAISS", "Python", "Local LLM"],
    githubUrl: "https://github.com/JITHENTHIRIYA/askMyPDF-Langchain",
    highlight: false,
  },
  {
    title: "Resolvly",
    badge: "Claude Builder Hackathon",
    description:
      "AI-powered insurance denial analyzer that decodes opaque denial letters into actionable appeal plans using live regulatory lookups and multi-agent orchestration.",
    tech: ["FastAPI", "React", "TypeScript", "LangChain", "Groq", "Docker"],
    githubUrl: "https://github.com/Ctrl-Alt-Defeat-Hackathon/Resolvly",
    demoUrl: "https://resolvly.vercel.app",
    previewImage: resolvlyPreview,
    previewAlt: "Resolvly landing page — Indiana insurance denial analyzer",
    highlight: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
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
            const hasExternal = Boolean(project.externalUrl);
            const hasGithub = Boolean(project.githubUrl);
            const hasDemo = Boolean(project.demoUrl);
            const linkRow = (hasExternal || hasGithub || hasDemo) && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/60">
                {hasExternal && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={demoPillClass}
                  >
                    <ExternalLink size={14} aria-hidden />
                    {project.externalLabel ?? "View project"}
                  </a>
                )}
                {hasDemo && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={demoPillClass}
                  >
                    <ExternalLink size={14} aria-hidden />
                    Live demo
                  </a>
                )}
                {hasGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={githubPillClass}
                  >
                    <Github size={14} aria-hidden />
                    GitHub
                  </a>
                )}
              </div>
            );

            return (
              <motion.div
                key={project.title}
                variants={scaleFadeVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className={`glass-card p-6 group hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 flex flex-col ${project.highlight ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
              >
                {project.badge && (
                  <div className="flex items-center gap-1.5 mb-3">
                    {project.badge.includes("Winner") && (
                      <Trophy size={14} className="text-amber-500 shrink-0" aria-hidden />
                    )}
                    <span className="text-xs font-medium text-muted-foreground">{project.badge}</span>
                  </div>
                )}
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.previewImage && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="relative mb-4 w-full overflow-hidden rounded-xl border border-border/60 bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group/preview"
                        aria-label={`View ${project.title} screenshot`}
                      >
                        <img
                          src={project.previewImage}
                          alt={project.previewAlt ?? `${project.title} preview`}
                          className="w-full h-auto object-cover object-top max-h-48 sm:max-h-56 transition-transform duration-300 group-hover/preview:scale-[1.02]"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/preview:bg-black/40 transition-colors duration-300">
                          <span className="flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 shadow-sm">
                            <ZoomIn size={14} aria-hidden />
                            Click to enlarge
                          </span>
                        </span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[min(95vw,64rem)] p-2 sm:p-3 gap-0 border-border/60 overflow-hidden">
                      <DialogTitle className="sr-only">
                        {project.title} screenshot
                      </DialogTitle>
                      <div
                        className={cn(
                          "relative rounded-lg overflow-hidden",
                          project.demoUrl && "group/dialog-lightbox",
                        )}
                      >
                        <img
                          src={project.previewImage}
                          alt={project.previewAlt ?? `${project.title} preview`}
                          className={cn(
                            "w-full h-auto rounded-lg",
                            project.demoUrl &&
                              "transition-all duration-300 group-hover/dialog-lightbox:blur-sm group-hover/dialog-lightbox:scale-[1.01]",
                          )}
                        />
                        {project.demoUrl && (
                          <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/dialog-lightbox:bg-black/40 transition-colors duration-300">
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white text-sm font-semibold shadow-lg opacity-0 group-hover/dialog-lightbox:opacity-100 pointer-events-none group-hover/dialog-lightbox:pointer-events-auto hover:bg-black/65 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                            >
                              Visit demo 🚀
                            </a>
                          </span>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
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
                {linkRow}
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
