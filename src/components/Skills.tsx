import { skillCategories } from '../data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className="fade-up">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="section-divider" />
        </div>
        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className={`${styles.category} fade-up`}>
              <div className={styles.catTitle}>{cat.title}</div>
              <div className={styles.pills}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
