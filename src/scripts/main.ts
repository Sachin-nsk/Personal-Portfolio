import { initOrbit } from './orbit';
import { initTerminal } from './terminal';

// typed tagline
const lines = [
  'building an internal CDC tool',
  'exploring backend engineering and AI',
  'java · spring boot · kafka · oracle · mongodb',
];
const typed = document.getElementById('typed')!;
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  typed.textContent = lines[0];
} else {
  let li = 0, ci = 0, del = false;
  const step = () => {
    const s = lines[li];
    typed.textContent = s.slice(0, ci);
    if (!del && ci === s.length) { del = true; return setTimeout(step, 1800); }
    if (del && ci === 0) { del = false; li = (li + 1) % lines.length; }
    ci += del ? -1 : 1;
    setTimeout(step, del ? 18 : 42);
  };
  step();
}


initOrbit();

initTerminal();
