
import { SectionHeading } from '../ui/SectionHeading';
import { MetricCard } from '../ui/MetricCard';

export function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="wrap">
        <SectionHeading
          eyebrow="MEASURABLE IMPACT"
          title="Small improvements. Meaningful outcomes."
          description="A few outcomes from shipping and improving production frontend experiences."
          centered
        />

        <div className="metrics-grid">
          <MetricCard
            value="3.5+"
            label="Years of experience"
            detail="Frontend engineering"
          />

          <MetricCard
            value="20–25%"
            label="Performance improvement"
            detail="Through frontend optimization"
          />

          <MetricCard
            value="25+"
            label="REST API endpoints"
            detail="Integrated into product flows"
          />

          <MetricCard
            value="30%"
            label="Less feature development effort"
            detail="Reusable UI architecture"
          />
        </div>
      </div>
    </section>
  );
}
