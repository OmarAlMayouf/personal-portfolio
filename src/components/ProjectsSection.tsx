import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A full-stack admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Chart.js"],
    image: "🛒",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with drag-and-drop boards, real-time updates, and team management features.",
    tech: ["React", "TypeScript", "REST API", "Tailwind"],
    image: "📋",
  },
  {
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and 7-day predictions.",
    tech: ["React", "API Integration", "CSS3", "Geolocation"],
    image: "🌤️",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
            My <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-secondary flex items-center justify-center text-5xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent group-hover:from-primary/10 transition-all" />
                {project.image}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs bg-secondary border-border">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
