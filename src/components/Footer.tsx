import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { toast } from "sonner";

export const Footer = () => {
  const handleCopyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API not available");
      }

      await navigator.clipboard.writeText("jicoim@iu.edu");
      toast.success("Email copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy email to clipboard", error);
      toast.error("Could not copy email. Please try again.");
    }
  };

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display font-bold text-lg text-foreground">
            JCK<span className="text-muted-foreground">.</span>
          </span>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Jithenthiriya CK. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/jithenthiriya" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/jithenthiriya/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
            <Linkedin size={16} />
          </a>
          <a href="https://scholar.google.com/citations?user=a0LJJfYAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
            <GraduationCap size={16} />
          </a>
          <button onClick={handleCopyEmail}
            className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all cursor-pointer">
            <Mail size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
