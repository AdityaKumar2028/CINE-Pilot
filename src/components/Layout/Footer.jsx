import React from "react";

const LinkedInIcon = () => (
  <svg width="16" height="16" fill="#0A66C2" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" fill="rgba(255,255,255,0.8)" viewBox="0 0 24 24">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="#e50914"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="#facc15"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const StackIcon = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SocialLink = ({ href, icon, label, accentColor, bgColor }) => (
  <a
    href={href}
    target={href.startsWith("mailto") ? undefined : "_blank"}
    rel="noopener noreferrer"
    className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.08]
               bg-white/[0.02] text-white/70 text-sm font-medium no-underline
               hover:text-white hover:bg-white/[0.05] hover:border-white/20
               transition-all duration-200 hover:translate-x-1"
    style={{ textDecoration: "none" }}
  >
    {/* Icon bubble */}
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: bgColor }}
    >
      {icon}
    </div>

    <span>{label}</span>

    {/* Hover arrow */}
    <span
      className="ml-auto opacity-0 group-hover:opacity-60 transition-all duration-200
                     group-hover:translate-x-0.5 text-white/60"
    >
      <ArrowIcon />
    </span>
  </a>
);

// ─── Meta Row ─────────────────────────────────────────────────────────────────
const MetaRow = ({ icon, text }) => (
  <div className="flex items-center gap-2.5 text-[13px] text-white/40 font-light">
    <span className="opacity-60 flex-shrink-0">{icon}</span>
    {text}
  </div>
);

// ─── Main Footer ─────────────────────────────────────────────────────────────
export const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d0d0d 0%, #111 100%)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "56px 0 24px",
      }}
    >
      {/* Red top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #e50914 30%, #e50914 70%, transparent)",
        }}
      />

      {/* Ghost watermark */}
      <div
        className="absolute right-[-20px] bottom-[-40px] pointer-events-none select-none"
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(80px, 15vw, 180px)",
          color: "rgba(255,255,255,0.018)",
          letterSpacing: "4px",
          lineHeight: 1,
        }}
      >
        ADITYA
      </div>

      {/* ── Inner container ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10 border-b border-white/[0.07]">
          {/* ── Col 1: Brand ── */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div
              className="mb-4 text-3xl tracking-wide"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              <span className="text-white">CINE</span>
              <span style={{ color: "#e50914" }}>P</span>
              <span className="italic text-white">ilot</span>
            </div>

            <p className="text-[13.5px] text-white/50 leading-relaxed font-light mb-5 max-w-xs">
              A cinematic movie discovery platform — browse trending titles,
              explore curated categories, and get AI-powered recommendations
              tailored to your taste.
            </p>

            {/* Ask Pilot badge */}
            <div
              className="inline-flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-[13px] text-white/80"
              style={{
                background:
                  "linear-gradient(135deg, rgba(229,9,20,0.12), rgba(229,9,20,0.04))",
                border: "1px solid rgba(229,9,20,0.3)",
              }}
            >
              {/* Pulsing dot */}
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background: "#e50914",
                  boxShadow: "0 0 6px #e50914",
                  animation: "pulse 2s infinite",
                }}
              />
              <span>
                <strong style={{ color: "#e50914" }}>Ask Pilot</strong>
                {" — "}AI movie search via Gemini API
              </span>
            </div>
          </div>

          {/* ── Col 2: Builder info ── */}
          <div>
            <p
              className="text-[11px] tracking-[3px] text-white/30 uppercase mb-5"
              style={{ fontFamily: "inherit" }}
            >
              Built by
            </p>

            <div
              className="text-[26px] text-white mb-0.5"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: "1px",
              }}
            >
              Aditya Kumar
            </div>
            <div
              className="text-[13px] font-medium mb-5"
              style={{ color: "#e50914" }}
            >
              Frontend Developer · ECE @ MAIT
            </div>

            <div className="flex flex-col gap-2.5">
              <MetaRow icon={<LocationIcon />} text="Noida, India" />
              <MetaRow
                icon={<StackIcon />}
                text="React · Redux · Firebase · Vite"
              />
              <MetaRow
                icon={<ClockIcon />}
                text="Open to Frontend Internships · 2025"
              />
              <MetaRow icon={<StarIcon />} text="9.5 CGPA · B.Tech 2nd Year" />
            </div>
          </div>

          {/* ── Col 3: Connect ── */}
          <div>
            <p className="text-[11px] tracking-[3px] text-white/30 uppercase mb-5">
              Connect
            </p>

            <div className="flex flex-col gap-3">
              <SocialLink
                href="https://linkedin.com/in/your-profile" // ← replace
                icon={<LinkedInIcon />}
                label="LinkedIn"
                bgColor="rgba(10,102,194,0.18)"
              />
              <SocialLink
                href="https://github.com/your-username" // ← replace
                icon={<GitHubIcon />}
                label="GitHub"
                bgColor="rgba(255,255,255,0.08)"
              />
              <SocialLink
                href="mailto:your@email.com" // ← replace
                icon={<MailIcon />}
                label="Email Me"
                bgColor="rgba(229,9,20,0.12)"
              />
              <SocialLink
                href="https://cine-pilot.vercel.app/browse"
                icon={<GlobeIcon />}
                label="Live Demo"
                bgColor="rgba(250,204,21,0.1)"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-white/25 font-light">
            © 2025{" "}
            <strong className="text-white/45 font-medium">Aditya Kumar</strong>{" "}
            — Designed & Developed with passion
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {["React", "Redux", "Firebase", "Gemini API"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-white/30 border border-white/[0.08] rounded px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
            <span
              className="text-[11px] rounded px-2 py-0.5"
              style={{
                color: "rgba(229,9,20,0.65)",
                border: "1px solid rgba(229,9,20,0.2)",
              }}
            >
              Open to Intern
            </span>
          </div>
        </div>
      </div>

      {/* Pulse keyframe — injected once */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
