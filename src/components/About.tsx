import { stats } from '../data';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="fade-up">
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="section-divider" />
        </div>
        <div className={styles.grid}>
          <div className={`${styles.text} fade-up`}>
            <p>
              I'm a Software Engineer pursuing my{' '}
              <strong style={{ color: '#fff' }}>Master of Science in Software Engineering Systems</strong>{' '}
              at Northeastern University, Boston. I specialize in backend systems, API design, and
              scalable microservice architecture.
            </p>
            <p>
              With hands-on experience in enterprise-level .NET development, I've built ERP modules
              used in production, integrated real-world third-party APIs, and architected multi-tenant
              services. I'm comfortable owning systems end-to-end — from database design to IIS
              deployment.
            </p>
            <p>
              <span style={{ color: 'var(--cyan)' }}>▸</span>&nbsp; Northeastern University — M.S.
              Computer Software Engineering &nbsp;·&nbsp; Sept 2025 – May 2027
            </p>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--cyan)' }}>▸</span>&nbsp; SRM Institute of Science &amp;
              Technology — B.Tech Computer Science &nbsp;·&nbsp; July 2021 – June 2024
            </p>
          </div>
          <div className={`${styles.statsGrid} fade-up`}>
            {stats.map((s) => (
              <div key={s.label} className={`${styles.statCard} stat-card`}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
