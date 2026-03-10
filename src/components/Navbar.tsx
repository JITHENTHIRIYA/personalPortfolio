import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeHintDismissed, setThemeHintDismissed] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // If the user scrolls and hasn't interacted with the theme toggle,
  // automatically fade the hint away after 2 seconds.
  useEffect(() => {
    if (themeHintDismissed) return;
    if (window.scrollY === 0) return;

    const timeoutId = window.setTimeout(() => {
      setThemeHintDismissed(true);
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [themeHintDismissed, scrolled]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display font-bold text-xl text-foreground hover:opacity-70 transition-opacity duration-300">
          JCK<span className="text-muted-foreground">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-4px] after:left-0 
                after:bg-foreground after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.label}
            </a>
          ))}
          <div className="relative">
            <ThemeToggle onToggle={() => setThemeHintDismissed(true)} />
            <AnimatePresence>
              {!themeHintDismissed && (
                <motion.div 
                  key="desktop-theme-hint"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.94 }}
                  transition={{ delay: 0.6, duration: 0.35, ease: "easeOut" }}
                  className="absolute top-10 right-2 w-64 pointer-events-none"
                >
                  <div className="relative flex flex-col items-end">
                    <svg 
                      className="w-10 h-10 text-muted-foreground/40 mr-12 -mb-2 z-10" 
                      viewBox="0 0 100 100" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    >
                      {/* Curved arrow pointing up and right toward toggle */}
                      <path d="M40 90 Q 40 40 80 20 M80 20 L65 20 M80 20 L75 35" />
                    </svg>
                    <div
                      style={{ fontFamily: 'var(--font-handwriting)' }}
                      className="text-xl text-muted-foreground -rotate-2 leading-tight drop-shadow-sm text-right pr-4 mt-1 select-none"
                    >
                      <span className="text-yellow-400 font-bold mr-1 text-2xl inline-block -rotate-12">⚡</span>
                      <span className="text-foreground text-2xl">Save your eyes!</span><br />
                      <span>Toggle theme here</span><br/>
                      <span>before you proceed.</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="mailto:jicoim@iu.edu"
            className="px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3 relative">
          <div className="relative">
            <ThemeToggle onToggle={() => setThemeHintDismissed(true)} />
            <AnimatePresence>
              {!themeHintDismissed && (
                <motion.div 
                  key="mobile-theme-hint"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.94 }}
                  transition={{ delay: 0.6, duration: 0.35, ease: "easeOut" }}
                  className="absolute top-10 right-2 w-48 pointer-events-none"
                >
                  <div className="relative flex flex-col items-end">
                    <svg 
                      className="w-6 h-6 text-muted-foreground/40 mr-2 -mb-2 z-10" 
                      viewBox="0 0 100 100" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    >
                      <path d="M20 90 Q 20 40 80 20 M80 20 L65 20 M80 20 L75 35" />
                    </svg>
                    <div
                      style={{ fontFamily: 'var(--font-handwriting)' }}
                      className="text-lg text-muted-foreground -rotate-2 leading-tight drop-shadow-sm text-right pr-0 mt-1 select-none"
                    >
                      <span className="text-yellow-400 font-bold mr-1 text-xl inline-block -rotate-12">⚡</span>
                      <span className="text-foreground text-xl">Save your eyes!</span><br />
                      <span className="text-base">Toggle theme here.</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="mailto:jicoim@iu.edu"
                className="px-5 py-3 text-center text-sm font-medium rounded-full bg-primary text-primary-foreground"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
