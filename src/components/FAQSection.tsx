import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUpVariants, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const faqs = [
  {
    q: "What kind of work are you looking for?",
    a: "I'm open to full-time Software Engineer, ML Engineer, or Backend Engineer roles. I'm also interested in research collaborations in computer vision and NLP.",
  },
  {
    q: "What's your tech stack preference?",
    a: "I'm most comfortable with Python, C++, TypeScript, and frameworks like React, FastAPI, and Django. For cloud, I work with AWS and GCP, and for ML, PyTorch and TensorFlow.",
  },
  {
    q: "Are you open to relocation?",
    a: "I'm currently based in Seattle, WA and open to opportunities across the US. I'm also open to remote positions.",
  },
  {
    q: "Do you have published research?",
    a: "Yes! I have two IEEE publications — one on HOG-based face recognition for attendance monitoring, and another on LDR to HDR image reconstruction using GANs.",
  },
  {
    q: "When do you graduate?",
    a: "I'm expected to graduate with my M.S. in Computer Science from Indiana University in May 2026.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container max-w-3xl">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">FAQ's</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">Answers</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={staggerItem}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="glass-card px-6 border border-border/50 rounded-xl overflow-hidden hover:border-foreground/20 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-foreground font-display font-medium text-left hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
