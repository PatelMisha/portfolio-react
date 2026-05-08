import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className={`${styles.wrapper} fade-up`}>
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-divider" style={{ margin: '0 auto 2rem' }} />
          <p className={styles.desc}>
            I'm actively looking for internship and full-time opportunities in software engineering.
            Whether you want to build something together, discuss a role, or just say hello — my
            inbox is always open.
          </p>
          <div className={styles.links}>
            <a href="mailto:patel.misha@northeastern.edu" className={styles.link}>
              <span>✉️</span>
              patel.misha@northeastern.edu
            </a>
            <a
              href="https://www.linkedin.com/in/misha-patel-6020mp"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <span>💼</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/PatelMisha"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <span>🐙</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
