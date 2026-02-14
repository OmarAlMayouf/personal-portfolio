import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Calendar } from "lucide-react";
import { aboutData, personalInfo } from "@/data/portfolio-data";
import avatar from "@/assets/avatar.png";

const iconMap = {
  Calendar,
  Briefcase,
  Code2,
  MapPin,
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
            About <span className="text-gradient-gold">Me</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <img src={avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat) => {
                const Icon = iconMap[stat.icon as keyof typeof iconMap];
                return (
                  <div
                    key={stat.label}
                    className="bg-secondary/50 border border-border rounded-xl p-4 text-center"
                  >
                    <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-sm font-heading font-semibold text-foreground">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
