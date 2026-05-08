import { certifications } from '../data';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <div className="fade-up">
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifi<span>cations</span></h2>
          <div className="section-divider" />
        </div>
        <div className={styles.grid}>
          {certifications.map((cert) => (
            <div key={cert.title} className={`${styles.card} cert-card fade-up`}>
              <div className={styles.icon}>{cert.icon}</div>
              <div>
                <div className={styles.title}>{cert.title}</div>
                <div className={styles.issuer}>{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
