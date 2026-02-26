import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/portfolio-data";
import { useState } from "react";
import { PROJECTS_INITIAL_DISPLAY_COUNT } from "@/constants/cards";

const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_INITIAL_DISPLAY_COUNT);
  const hasMoreProjects = projectsData.length > visibleCount;
  const showingAll = visibleCount >= projectsData.length;
  const displayedProjects = projectsData.slice(0, visibleCount);

  const handleShowMore = () => {
    if (showingAll) setVisibleCount(PROJECTS_INITIAL_DISPLAY_COUNT);
    else setVisibleCount((prev) => Math.min(prev + PROJECTS_INITIAL_DISPLAY_COUNT, projectsData.length));
  };

  // Calculate how many blurred previews to show
  const remaining = projectsData.length - visibleCount;
  // For mobile: 1 preview, for md: up to 2, for lg: up to 3
  const previewCount = Math.min(remaining, 3);
  const previewProjects = Array.from({ length: previewCount }, (_, idx) => projectsData[visibleCount + idx]);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={`${project.title}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs bg-secondary border-border"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {hasMoreProjects && previewProjects.map((preview, idx) => (
            <motion.div
              key={`preview-${visibleCount + idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className={
                `group bg-card border border-border rounded-2xl overflow-hidden blur-sm pointer-events-none select-none opacity-50 h-full flex flex-col ` +
                (idx > 0 ? 'hidden ' : '') +
                (idx === 1 ? 'md:flex ' : '') +
                (idx === 2 ? 'lg:flex ' : '')
              }
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {preview?.title || ''}
                </h3>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {(preview?.tech || []).slice(0, 3).map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs bg-secondary border-border">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="h-8 bg-muted rounded w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {(hasMoreProjects || showingAll) && projectsData.length > PROJECTS_INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleShowMore}
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-medium">
                {showingAll
                  ? "Show Less"
                  : `Show ${Math.min(PROJECTS_INITIAL_DISPLAY_COUNT, projectsData.length - visibleCount)} More`}
              </span>
              <motion.div
                animate={{ rotate: showingAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-lg shadow-primary/30"
              >
                <ChevronDown className="h-5 w-5 text-white hover:scale-110 ease-in duration-100" />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
