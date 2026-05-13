interface BadgeProps {
  text: string;
  color?: 'indigo' | 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose' | 'default';
}

const colorMap = {
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  default: 'bg-white/5 text-white/60 border-white/10',
};

export default function Badge({ text, color = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${colorMap[color]}`}
    >
      {text}
    </span>
  );
}
