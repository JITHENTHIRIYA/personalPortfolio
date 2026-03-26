import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Database, Wrench } from "lucide-react";
import {
  fadeUpVariants,
  scaleFadeVariants,
  viewportConfig,
} from "@/lib/animations";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      "Python",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "C",
      "C#",
      "Kotlin",
      "Swift",
      "HTML",
    ],
  },
  {
    icon: Wrench,
    title: "Frameworks & Libraries",
    skills: [
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "Angular",
      "LangChain",
      "Git",
      "REST APIs",
      "OAuth",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    skills: ["AWS", "GCP", "Docker", "CI/CD", "Lambda", "SQS", "Amplify", "Jetstream2 Cloud"],
  },
  {
    icon: Database,
    title: "Databases & Data Engineering",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Snowflake",
      "Vector Databases",
      "Apache Airflow",
      "Data Warehousing",
      "Batch Processing",
      "ETL/ELT",
      "Dimensional Modeling",
      "dbt",
      "Spark",
    ],
  },
  {
    icon: Brain,
    title: "ML/AI",
    skills: [
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "CNN",
      "Embeddings",
      "LLMs",
      "RAG",
      "Semantic Search",
      "Vector Search",
      "MLOps",
      "Retrieval Pipelines",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="section-container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">Skills</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Technologies and tools I use to build scalable, production-grade software.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={scaleFadeVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-card p-6 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <cat.icon size={20} className="text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-accent/60 text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...skillCategories.flatMap((c) => c.skills), ...skillCategories.flatMap((c) => c.skills)].map(
              (skill, i) => (
                <span
                  key={i}
                  className="mx-2 text-sm text-foreground/80 font-display font-semibold px-3 py-1 rounded-full bg-accent/50 border border-border/60"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
