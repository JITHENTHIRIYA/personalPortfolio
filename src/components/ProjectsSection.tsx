import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy } from "lucide-react";
import { fadeUpVariants, scaleFadeVariants, viewportConfig } from "@/lib/animations";

type Project = {
  title: string;
  badge: string | null;
  description: string;
  tech: string[];
  highlight: boolean;
  githubUrl?: string;
  demoUrl?: string;
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
    highlight: true,
  },
  {
    title: "CV Model Deployment & MLOps Pipeline",
    badge: null,
    description:
      "End-to-end computer vision MLOps pipeline with Dockerized model service, CI/CD via GitHub Actions, and AWS cloud-ready API-driven deployment.",
    tech: ["Docker", "AWS", "GitHub Actions", "Python", "CI/CD"],
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
    title: "AI Agent Orchestration Platform",
    badge: null,
    description:
      "Multi-agent AI orchestration platform with RAG pipelines, MCP tool integration, and cloud-native deployment — FastAPI backend, ReAct agents with Groq (LLaMA 3.3), Pinecone vector search, plus React dashboard and AWS Lambda, SQS, and Kubernetes for scale.",
    tech: ["FastAPI", "LangChain", "Groq", "Pinecone", "MCP", "React", "AWS", "Kubernetes"],
    githubUrl: "https://github.com/JITHENTHIRIYA/ai-agent-orchestration-platform",
    highlight: false,
  },
  {
    title: "Movie Memory",
    badge: null,
    description:
      "Full-stack movie app with Google OAuth, AI-generated fun facts about your favorite film, optimistic UI, and PostgreSQL-backed profiles — Next.js App Router, Prisma, NextAuth, and OpenAI.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "OpenAI", "NextAuth", "Tailwind"],
    githubUrl: "https://github.com/JITHENTHIRIYA/movie-memory",
    demoUrl: "https://movie-memory-sigma.vercel.app",
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
            const hasGithub = Boolean(project.githubUrl);
            const hasDemo = Boolean(project.demoUrl);
            const linkRow = (hasGithub || hasDemo) && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/60">
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
                className={`glass-card p-6 group hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 flex flex-col ${
                  project.highlight ? "md:col-span-2 lg:col-span-2" : ""
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
