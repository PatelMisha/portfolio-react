import { typewriterPhrases } from '../data';
import { useTypewriter } from '../hooks/useTypewriter';
import styles from './Hero.module.css';

export default function Hero() {
  const text = useTypewriter(typewriterPhrases);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.content}>
        <div className={styles.badge}>Open to Opportunities</div>
        <h1 className={styles.name}>
          Misha <span>Patel</span>
        </h1>
        <div className={styles.typewriter}>
          <span className={styles.typewriterText}>{text}</span>
        </div>
        <div className={styles.btns}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
