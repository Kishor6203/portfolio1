
import { motion } from 'framer-motion';

import { skillGroups } from '../../data/skills';
import { SkillCard } from '../ui/SkillCard';
import { SectionHeading } from '../ui/SectionHeading';

export function Skills() {
  return (
    <section
      id="skills"
      className="section-pad section-alt"
    >
      <div className="wrap">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="The tools behind the craft."
          description="A practical, evolving toolkit for shipping accessible, performant and maintainable interfaces."
        />

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
            hidden: {},
          }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <SkillCard group={group} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
