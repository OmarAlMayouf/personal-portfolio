import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiencesData } from "@/data/portfolio-data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { EXPERIENCES_INITIAL_DISPLAY_COUNT } from "@/constants/cards";

const ExperienceSection = () => {
  const [visibleCount, setVisibleCount] = useState(EXPERIENCES_INITIAL_DISPLAY_COUNT);
  const hasMoreExperiences = experiencesData.length > visibleCount;
  const showingAll = visibleCount >= experiencesData.length;
  const displayedExperiences = experiencesData.slice(0, visibleCount);

  const handleShowMore = () => {
    if (showingAll) setVisibleCount(EXPERIENCES_INITIAL_DISPLAY_COUNT);
    else setVisibleCount((prev) => Math.min(prev + 1, experiencesData.length));
  };

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

        <div className="max-w-3xl mx-auto space-y-8 relative">
          {displayedExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary shadow-lg shadow-primary/30" />

                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {experience.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                      {experience.period}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {experience.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-muted-foreground text-sm"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-secondary border-border text-xs"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Preview of next experience when not showing all */}
          {hasMoreExperiences && experiencesData[visibleCount] && (
            <motion.div
              key={`preview-${visibleCount}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="relative pl-8 border-l-2 border-primary/30 blur-sm pointer-events-none select-none">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary shadow-lg shadow-primary/30" />
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 opacity-50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {experiencesData[visibleCount].role}
                      </h3>
                      <p className="text-primary font-medium">
                        {experiencesData[visibleCount].company}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Show More/Less Button */}
          {(hasMoreExperiences || showingAll) && experiencesData.length > EXPERIENCES_INITIAL_DISPLAY_COUNT && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center -mt-4"
            >
              <button
                onClick={handleShowMore}
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium">
                  {showingAll
                    ? "Show Less"
                    : `Show ${experiencesData.length - visibleCount} More`}
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
      </div>
    </section>
  );
};

export default ExperienceSection;
