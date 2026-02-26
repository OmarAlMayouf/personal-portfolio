import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
            My <span className="text-gradient-gold">Skills</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillsData.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-heading font-bold text-primary mb-4 tracking-wide text-center">{cat.title}</h3>
              <div className="w-full flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.13, rotate: -3 }}
                    whileTap={{ scale: 0.97, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="inline-block"
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm bg-secondary border-border px-3 py-1 rounded-full cursor-pointer transition-colors duration-200 hover:bg-primary/80 hover:text-white"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
