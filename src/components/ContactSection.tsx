import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { contactData, socialLinks } from "@/data/portfolio-data";
import { useContactSection } from "@/hooks/useContactSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { isLoading, handleSubmit } = useContactSection({ setForm });

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-heading font-bold mb-4 text-foreground">
              {contactData.heading}
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {contactData.description}
            </p>

            <div className="space-y-4">
              <a
                href={socialLinks.email}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                {contactData.email}
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                {contactData.location}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary border border-border rounded-xl p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary border border-border rounded-xl p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.email}
                className="bg-secondary border border-border rounded-xl p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-card border-border"
            />
            <Button
              type="submit"
              className="w-full gap-2 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          {contactData.footer}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
