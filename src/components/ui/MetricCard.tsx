
import { motion } from 'framer-motion';

interface Props {
  value: string;
  label: string;
  detail?: string;
}

export function MetricCard({
  value,
  label,
  detail,
}: Props) {
  return (
    <motion.div
      className="metric-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <strong>{value}</strong>

      <span>{label}</span>

      {detail && <small>{detail}</small>}
    </motion.div>
  );
}
