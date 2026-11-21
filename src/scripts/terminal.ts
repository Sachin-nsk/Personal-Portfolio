export function initTerminal() {
  const L = (window as any).__LINKS__ as Record<string, string>;
  const root = document.getElementById('term')!;
  const out = document.getElementById('term-out')!;
  const input = document.getElementById('term-input') as HTMLInputElement;
  const history: string[] = [];
  let hi = 0;

  const files: Record<string, string> = {
    'about.md': 'Sachin Kumar N — backend engineer in Bangalore. Backend systems, reliability, observability, and AI-assisted engineering.',
    'experience.log': 'BFHL (Bengaluru)\n- Associate Software Development Engineer, full-time: Jul 2026 – present\n- SDE Intern: Jan 2026 – Jul 2026\n- ~66% fewer DB calls in bulk enrollment\n- DLQ, retries, partition keys, KEDA autoscaling on lag\n- Grafana/Prometheus alerts + AI health-agent POC\n- Claude sub-agent for automated RCA',
    'education.txt': 'VIT Vellore — B.Tech CSE, CGPA 9.05 (2022–2026)\nPeepal Prodigy School — CBSE XII, 94%',
    'stack.json': '{ "languages": ["Java","SQL","PL/SQL","Python","C","C++"], "backend": ["Spring Boot","Kafka"], "data": ["Oracle","MongoDB","PostgreSQL","MySQL"], "infra": ["Docker","Kubernetes","Helm","Argo CD"], "observability": ["Prometheus","Grafana","Micrometer"] }',
    'contact.txt': `email:    ${L.email}\ngithub:   ${L.github}\nlinkedin: ${L.linkedin}\nleetcode: ${L.leetcode}`,
  };

  const help = `commands:
  help               this list
  whoami             who is this
  ls                 list files
  cat <file>         read a file
  skills             tech stack
  projects           what I've built
  contact            how to reach me
  open <name>        github | linkedin | leetcode | trackify | email
  clear              clear screen
  exit               close terminal`;

  const print = (t: string, cls = '') => {
    const d = document.createElement('div'); if (cls) d.className = cls; d.textContent = t; out.appendChild(d); out.scrollTop = out.scrollHeight;
  };

  function run(raw: string) {
    const line = raw.trim(); if (!line) return;
    print('$ ' + line, 'cmd'); history.push(line); hi = history.length;
    const [cmd, ...args] = line.split(/\s+/); const a = args.join(' ');
    switch (cmd.toLowerCase()) {
      case 'help': print(help); break;
      case 'whoami': print(files['about.md']); break;
      case 'ls': print(Object.keys(files).join('  ')); break;
      case 'cat': files[a] ? print(files[a]) : print(`cat: ${a || '(missing)'}: no such file`, 'err'); break;
      case 'skills': print(files['stack.json']); break;
      case 'projects': print('trackify — AI-powered expense tracker (Next.js, Prisma, Supabase, Gemini, GCP)\n  try: open trackify'); break;
      case 'contact': print(files['contact.txt']); break;
      case 'open': {
        const m: Record<string, string> = { github: L.github, linkedin: L.linkedin, leetcode: L.leetcode, trackify: L.trackifyLive, email: `mailto:${L.email}` };
        if (m[a]) { print('opening ' + a + '…', 'hl'); window.open(m[a], m[a].startsWith('mailto') ? '_self' : '_blank', 'noopener'); }
        else print(`open: unknown target "${a}"`, 'err');
        break;
      }
      case 'clear': out.textContent = ''; break;
      case 'exit': close(); break;
      case 'sudo': print('nice try. permission denied.', 'err'); break;
      case 'rm': print('this is a portfolio, not production. (read-only, like my DB access.)', 'err'); break;
      default: print(`${cmd}: command not found. type "help".`, 'err');
    }
  }

  function open() {
    root.hidden = false; input.focus();
    if (!out.childElementCount) { print('Welcome. Type "help" to see commands.', 'hl'); }
  }
  function close() { root.hidden = true; }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { run(input.value); input.value = ''; }
    else if (e.key === 'ArrowUp') { hi = Math.max(0, hi - 1); input.value = history[hi] ?? ''; e.preventDefault(); }
    else if (e.key === 'ArrowDown') { hi = Math.min(history.length, hi + 1); input.value = history[hi] ?? ''; e.preventDefault(); }
  });
  document.getElementById('open-term')?.addEventListener('click', open);
  document.getElementById('open-term-2')?.addEventListener('click', open);
  document.getElementById('term-x')?.addEventListener('click', close);
  root.addEventListener('click', (e) => { if (e.target === root) close(); });
  addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); root.hidden ? open() : close(); }
    else if (e.key === 'Escape' && !root.hidden) close();
  });
}
