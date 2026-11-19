
import { motion } from 'framer-motion';
import {
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  CalendarDays
} from 'lucide-react';

import { personal } from '../../data/personal';
import { SectionHeading } from '../ui/SectionHeading';

const facts = [
  ['Name', personal.name, Code2],
  ['Role', personal.role, BriefcaseBusiness],
  ['Experience', '3.5+ Years', CalendarDays],
  ['Location', personal.location, MapPin],
  ['Education', 'MCA, 2024', GraduationCap],
  ['Current company', personal.company, BriefcaseBusiness]
] as const;

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title="Turning ideas into powerful digital experiences."
          description="A thoughtful engineer with a product mindset and a passion for building things that work beautifully."
        />

        <div className="about-grid">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="quote-mark">“</span>

            <p>
              I'm a Frontend Engineer with <b>3.5+ years of experience</b>{' '}
              building scalable, production-grade web applications. I
              specialize in React.js, TypeScript, JavaScript, Redux Toolkit,
              and modern frontend architecture.
            </p>

            <p>
              I enjoy creating reusable UI systems, integrating complex APIs,
              optimizing application performance, and developing intuitive
              user experiences.
            </p>

            <p>
              I focus on writing maintainable code and building applications
              that are scalable, reliable, and easy to use.
            </p>

            <div className="signature">
              Kishor Kumar <span>— Frontend Engineer</span>
            </div>
          </motion.div>

          <div className="facts-grid">
            {facts.map(([label, value, Icon], i) => (
              <motion.div
                className="fact-card"
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Icon size={18} />

                <small>{label}</small>

                <b>{value}</b>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
