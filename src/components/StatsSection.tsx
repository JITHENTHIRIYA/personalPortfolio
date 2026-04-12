import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "2", label: "IEEE Publications" },
  { value: "90%+", label: "ML Model Accuracy" },
  { value: "300K+", label: "Users impacted" },
];

export const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <h3 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
