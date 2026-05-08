import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const follower = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + 'px';
        cursorRef.current.style.top = e.clientY - 6 + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let raf: number;
    function animate() {
      follower.current.x += (mouse.current.x - 20 - follower.current.x) * 0.35;
      follower.current.y += (mouse.current.y - 20 - follower.current.y) * 0.35;
      if (followerRef.current) {
        followerRef.current.style.left = follower.current.x + 'px';
        followerRef.current.style.top = follower.current.y + 'px';
      }
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(2.5)';
      if (followerRef.current) {
        followerRef.current.style.transform = 'scale(1.4)';
        followerRef.current.style.borderColor = 'rgba(0,240,255,0.8)';
      }
    };
    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(1)';
      if (followerRef.current) {
        followerRef.current.style.transform = 'scale(1)';
        followerRef.current.style.borderColor = 'rgba(0,240,255,0.4)';
      }
    };

    const interactives = document.querySelectorAll('a, button, .project-card, .stat-card, .cert-card');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={followerRef} className={styles.follower} />
    </>
  );
}
