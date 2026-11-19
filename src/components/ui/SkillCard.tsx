
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

import type { SkillGroup } from '../../data/skills';

export function SkillCard({
  group,
}: {
  group: SkillGroup;
}) {
  const Icon = Icons[
    group.icon as keyof typeof Icons
  ] as typeof Icons.Code2;

  return (
    <motion.article
      className="skill-card"
      whileHover={{ y: -5 }}
    >
      <div className="skill-icon">
        <Icon size={19} />
      </div>

      <h3>{group.title}</h3>

      <div className="skill-tags">
        {group.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </motion.article>
  );
}
