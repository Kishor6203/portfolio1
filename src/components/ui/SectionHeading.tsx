
import { motion } from 'framer-motion';

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: Props) {
  return (
    <motion.div
      className={`section-heading ${centered ? 'center' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {
          opacity: 0,
          y: 18,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
          },
        },
      }}
    >
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}
