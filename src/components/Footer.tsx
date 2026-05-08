import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Designed &amp; Built by <span className={styles.accent}>Misha Patel</span> &nbsp;·&nbsp; 2025</p>
    </footer>
  );
}
