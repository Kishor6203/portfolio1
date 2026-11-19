import {
  Activity,
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Github,
  HeartPulse,
  Layers3,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { motion } from 'framer-motion';
import { projects, type Project } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';

const chartData = [
  { month: 'Jan', value: 24 },
  { month: 'Feb', value: 32 },
  { month: 'Mar', value: 29 },
  { month: 'Apr', value: 48 },
  { month: 'May', value: 43 },
  { month: 'Jun', value: 65 },
  { month: 'Jul', value: 58 },
  { month: 'Aug', value: 79 },
  { month: 'Sep', value: 73 },
  { month: 'Oct', value: 91 },
];

function FinancePreview() {
  return (
    <div className="mock-window finance-window">
      <div className="mock-top">
        <span />
        <span />
        <span />
        <b>Overview / Portfolio</b>
      </div>
      <div className="mock-content">
        <div className="mock-sidebar"><i /><i /><i /><i /></div>
        <div className="mock-main">
          <div className="mock-greeting">
            Good morning, Alex <small>Portfolio overview</small>
          </div>
          <div className="mock-stats">
            <div><small>Total balance</small><b>$248,560.80</b><em>↗ 12.8%</em></div>
            <div><small>Invested</small><b>$182,400</b></div>
            <div><small>Returns</small><b>+$18,240</b></div>
          </div>
          <div className="mock-chart">
            <div className="chart-label">Portfolio performance <b>+18.6%</b></div>
            <div className="portfolio-chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.42} />
                      <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#171827',
                      border: '1px solid rgba(167, 139, 250, 0.28)',
                      borderRadius: 12,
                      color: '#f8fafc',
                    }}
                    labelStyle={{ color: '#a1a1aa' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#a78bfa"
                    strokeWidth={2.5}
                    fill="url(#portfolioGradient)"
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthPreview() {
  return (
    <div className="mock-window health-window">
      <div className="health-head"><HeartPulse size={17} /> Care<span>Patient portal</span></div>
      <div className="health-body">
        <div className="health-welcome">Your health, <b>in good hands.</b><small>Here&apos;s your care overview.</small></div>
        <div className="appointment">
          <div className="doctor-avatar">DR</div>
          <div><small>UPCOMING APPOINTMENT</small><b>Dr. Emily Carter</b><span>Cardiology · 10:30 AM</span></div>
          <span className="appt-tag">Confirmed</span>
        </div>
        <div className="health-tiles">
          <div><HeartPulse /><b>Appointments</b><small>Manage visits</small></div>
          <div><CalendarDays /><b>My schedule</b><small>Upcoming care</small></div>
          <div><Activity /><b>Health records</b><small>Your documents</small></div>
        </div>
      </div>
    </div>
  );
}

function StreamingPreview() {
  return (
    <div className="mock-window stream-window">
      <div className="stream-head"><b>NETFLIX</b><span>Home　 Series　 Films　 My List</span></div>
      <div className="stream-hero">
        <small>FEATURED COLLECTION</small>
        <h3>Find your<br />next favourite.</h3>
        <p>Stories worth staying in for.</p>
        <span>▶ &nbsp; Play now</span>
      </div>
      <div className="movie-row"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

function Preview({ theme }: { theme: Project['theme'] }) {
  if (theme === 'finance') return <FinancePreview />;
  if (theme === 'health') return <HealthPreview />;
  return <StreamingPreview />;
}

export function Projects() {
  return (
    <section id="projects" className="section-pad section-alt">
      <div className="wrap">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="A closer look at what I build."
          description="Product-minded frontend work focused on clarity, performance and real-world workflows."
        />
        <div className="projects-list">
          {projects.map((project) => (
            <motion.article
              className={`project-card project-${project.theme}`}
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55 }}
            >
              <div className="project-preview">
                <div className="preview-label">
                  <span>FEATURED PROJECT / {project.number}</span>
                  <span><Layers3 size={14} /> PRODUCT UI</span>
                </div>
                <Preview theme={project.theme} />
              </div>
              <div className="project-info">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-features">
                  {project.features.map((feature) => <span key={feature}>{feature}</span>)}
                </div>
                <div className="project-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-actions">
                  {project.liveUrl ? (
                    <a className="button primary small" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live demo <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="case-study"><ArrowUpRight size={15} /> Project overview</span>
                  )}
                  {project.githubUrl ? (
                    <a className="button secondary small" href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github size={15} /> Source code
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
