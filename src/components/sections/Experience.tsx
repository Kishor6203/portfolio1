
import {
    ArrowUpRight,
    CheckCircle2,
  } from 'lucide-react';
  
  import { motion } from 'framer-motion';
  
  import { experience } from '../../data/experience';
  import { SectionHeading } from '../ui/SectionHeading';
  
  export function Experience() {
    return (
      <section
        id="experience"
        className="section-pad"
      >
        <div className="wrap">
          <SectionHeading
            eyebrow="THE JOURNEY SO FAR"
            title="Experience that makes an impact."
            description="Building dependable products, improving the details and helping teams move faster."
          />
  
          <div className="experience-layout">
            <div className="timeline-rail">
              <span>2023</span>
              <div />
              <span>NOW</span>
            </div>
  
            <motion.article
              className="experience-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="experience-top">
                <div>
                  <span className="eyebrow">
                    MARCH 2023 — PRESENT
                  </span>
  
                  <h3>{experience.role}</h3>
  
                  <p>{experience.company}</p>
                </div>
  
                <span className="current-pill">
                  <i /> Current role
                </span>
              </div>
  
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
  
              <a
                className="text-link"
                href="#projects"
              >
                Explore selected work
                <ArrowUpRight size={15} />
              </a>
            </motion.article>
          </div>
        </div>
      </section>
    );
  }
  