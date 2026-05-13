import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  download?: boolean | string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon,
  download,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer select-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5',
    secondary:
      'glass border border-white/10 text-white/90 hover:border-indigo-500/40 hover:bg-white/5 hover:-translate-y-0.5',
    ghost: 'text-white/60 hover:text-white hover:bg-white/5 rounded-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={classes}
        whileTap={{ scale: 0.97 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {icon}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} whileTap={{ scale: 0.97 }}>
      {icon}
      {children}
    </motion.button>
  );
}
