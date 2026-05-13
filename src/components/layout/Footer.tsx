export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold gradient-text">VV</span>
            <p className="text-white/30 text-sm mt-1">
              Building scalable systems, one microservice at a time.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/vikasverma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-indigo-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vikasverma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-indigo-400 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="mailto:vikas@example.com"
              className="text-white/40 hover:text-indigo-400 transition-colors text-sm"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/20 text-xs font-mono">
            &copy; {currentYear} Vikas Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
