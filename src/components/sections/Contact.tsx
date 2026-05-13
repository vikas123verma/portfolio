import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: 'vikasvermasde@gmail.com',
      href: 'mailto:vikasvermasde@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 9161083119',
      href: 'tel:+919161083119',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/mrvikasverma',
      href: 'https://www.linkedin.com/in/mrvikasverma',
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="orb orb-indigo w-[500px] h-[500px] bottom-0 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get in Touch"
          title="Let's Build Something"
          description="Have a project in mind or want to discuss backend architecture? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <GlassCard key={info.label} delay={i * 0.1} className="p-6">
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group/link"
                >
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover/link:bg-indigo-500/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] mb-1 tracking-widest uppercase">{info.label}</p>
                    <p className="text-white/80 text-sm font-semibold group-hover/link:text-indigo-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              </GlassCard>
            ))}
          </div>

          {/* Availability & Social */}
          <div className="space-y-4">
            <GlassCard delay={0.3} className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/30" />
                <div>
                  <p className="text-white/80 text-sm font-bold">Available for work</p>
                  <p className="text-white/30 text-xs mt-1">
                    Open to full-time roles & consulting
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5">
                <p className="text-white/40 text-sm leading-relaxed">
                  Looking for a software engineer to help build your next scalable system? 
                  Reach out via email or LinkedIn.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
