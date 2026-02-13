import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experience = {
  role: "Full Stack Developer (Coop)",
  company: "Takamol Holding",
  period: "2024 – Present · 6 months",
  description: [
    "Developed and maintained full-stack web applications using React and Spring Boot",
    "Collaborated with cross-functional teams to deliver features on schedule",
    "Implemented RESTful APIs and integrated them with modern frontend interfaces",
    "Participated in code reviews and contributed to best practices documentation",
  ],
  tech: ["React", "TypeScript", "Spring Boot", "Java", "REST APIs", "Git", "PostgreSQL"],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
            <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary shadow-lg shadow-primary/30" />

            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{experience.role}</h3>
                  <p className="text-primary font-medium">{experience.company}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{experience.period}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-secondary border-border text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
