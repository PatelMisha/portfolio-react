import { projects } from '../data';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="fade-up">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-divider" />
        </div>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={`${styles.card} project-card fade-up`}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{p.icon}</span>
                <div className={styles.links}>
                  <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
              </div>
              <div className={styles.title}>{p.title}</div>
              <div className={styles.desc}>{p.desc}</div>
              <div className="tech-tags">
                {p.tags.map((t) => (
                  <span key={t.label} className={`tech-tag ${t.color ?? ''}`}>{t.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
