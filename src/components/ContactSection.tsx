import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import {
  fadeUpVariants,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

const links = [
  { icon: Mail, label: "jicoim@iu.edu", isEmail: true },
  { icon: Github, label: "GitHub", href: "https://github.com/jithenthiriya" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jithenthiriya/" },
];

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (email: string) => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API not available");
      }

      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy email to clipboard", error);
      toast.error("Could not copy email. Please try again.");
    } finally {
      // Reset visual state after a short delay, regardless of outcome
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30">
      <div className="section-container text-center">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
            Let's build something
            <br />
            <span className="text-muted-foreground">together</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12">
            Open to full-time opportunities, collaborations, and interesting projects.
            Let's connect and create something impactful.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {links.map((link) => {
            const isEmail = link.isEmail;

            return isEmail ? (
              <motion.button
                key={link.label}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCopyEmail(link.label)}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-border glass-card
                  hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 group cursor-pointer"
              >
                <link.icon size={18} className="text-foreground" />
                <span className="text-sm text-foreground">{copied ? "Copied!" : "jicoim@iu.edu"}</span>
                {copied ? (
                  <Check
                    size={14}
                    className="text-green-500 transition-all duration-300"
                  />
                ) : (
                  <Copy
                    size={14}
                    className="text-muted-foreground group-hover:text-foreground transition-all duration-300"
                  />
                )}
              </motion.button>
            ) : (
              <motion.a
                key={link.label}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.97 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-border glass-card
                  hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 group cursor-pointer"
              >
                <link.icon size={18} className="text-foreground" />
                <span className="text-sm text-foreground">{link.label}</span>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
