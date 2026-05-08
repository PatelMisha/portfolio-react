import { experiences } from '../data';
import styles from './Experience.module.css';

const dotColors = {
  cyan: 'var(--cyan)',
  purple: 'var(--purple)',
  pink: 'var(--pink)',
};

export default function Experience() {
  return (
    <section id="experience" className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className="fade-up">
          <p className="section-label">Where I've Worked</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="section-divider" />
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.role + exp.period} className={`${styles.item} fade-up`}>
              <div
                className={styles.dot}
                style={{
                  background: dotColors[exp.color],
                  boxShadow: `0 0 15px ${dotColors[exp.color]}`,
                }}
              />
              <div className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.role}>{exp.role}</div>
                  <div className={styles.period}>{exp.period}</div>
                </div>
                <div className={styles.company}>
                  {exp.company} &nbsp;·&nbsp; {exp.location}
                </div>
                <ul className={styles.points}>
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
