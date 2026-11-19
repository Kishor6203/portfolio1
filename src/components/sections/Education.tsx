
import {
    GraduationCap,
    MapPin,
    CalendarDays,
    Award,
  } from 'lucide-react';
  
  import { motion } from 'framer-motion';
  import { SectionHeading } from '../ui/SectionHeading';
  
  export function Education() {
    return (
      <section
        id="education"
        className="section-pad section-alt"
      >
        <div className="wrap">
          <SectionHeading
            eyebrow="ACADEMIC FOUNDATION"
            title="Grounded in the fundamentals."
          />
  
          <motion.article
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="education-icon">
              <GraduationCap size={30} />
            </div>
  
            <div className="education-copy">
              <span className="eyebrow">
                POSTGRADUATE DEGREE
              </span>
  
              <h3>Master of Computer Applications</h3>
  
              <p>Vinoba Bhave University, Hazaribagh</p>
  
              <div className="education-meta">
                <span>
                  <CalendarDays size={15} /> 2024
                </span>
  
                <span>
                  <Award size={15} /> CGPA 7.2 / 10
                </span>
  
                <span>
                  <MapPin size={15} /> Hazaribagh, India
                </span>
              </div>
            </div>
  
            <span className="degree-mark">MCA</span>
          </motion.article>
        </div>
      </section>
    );
  }
  