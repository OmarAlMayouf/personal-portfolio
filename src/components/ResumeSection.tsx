import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/portfolio-data";
import resume from "@/assets/resume.pdf";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Get My <span className="text-gradient-gold">Resume</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-8" />
          <p className="text-muted-foreground mb-8">
            {resumeData.description}
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href={resume} download>
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
