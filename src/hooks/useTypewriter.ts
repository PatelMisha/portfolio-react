import { useEffect, useState } from 'react';

export function useTypewriter(phrases: string[]) {
  const [text, setText] = useState('');

  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = phrases[phraseIdx];
      if (deleting) {
        charIdx--;
        setText(current.substring(0, charIdx));
        if (charIdx < 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timer = setTimeout(tick, 400);
          return;
        }
      } else {
        charIdx++;
        setText(current.substring(0, charIdx));
        if (charIdx > current.length) {
          deleting = true;
          timer = setTimeout(tick, 2000);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? 45 : 75);
    }

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return text;
}
