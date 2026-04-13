import { motion } from "framer-motion";
import { heroTextVariants, ease } from "@/lib/animations";

export const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
      <div className="relative z-10 section-container text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: ease.smooth }}
          className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-md animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)] animate-pulse" />
          <span className="text-xs font-bold text-foreground tracking-widest uppercase">
            Software Engineer & ML Enthusiast
          </span>
        </motion.div>

        {/* Headline with layered text animation */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-hero"
          >
            Building what
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            custom={1.0}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-hero-muted"
          >
            matters most
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: ease.smooth }}
          className="text-hero-muted text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          M.S. Computer Science at Indiana University. Passionate about scalable systems,
          machine learning, and crafting software that makes an impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: ease.smooth }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-3.5 rounded-full bg-foreground text-background font-medium text-sm overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-muted-foreground scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full border border-muted-foreground/30 text-muted-foreground text-sm font-medium 
              hover:border-muted-foreground/60 hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-300"
          >
            See Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-6">
            <span className="text-xs text-hero-muted tracking-wider">Scroll down</span>
            <div className="scroll-indicator border-muted-foreground/40">
              <div className="scroll-dot bg-muted-foreground/60 animate-scroll-down" />
            </div>
            <span className="text-xs text-hero-muted tracking-wider">to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
