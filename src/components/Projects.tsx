"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Cpu, MessageCircle } from "lucide-react";
import {
  SiPython, SiPandas, SiNumpy, SiScikitlearn,
  SiStreamlit, SiDocker, SiOpenai, SiNetlify,
} from "react-icons/si";

// ── Custom SVGs ──────────────────────────────────────────────────────────────
const MatplotlibIcon = () => (
  <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor">
    <path d="M3 3h18v2H3zM3 7h18v2H3zM3 11h12v2H3zM3 15h18v2H3zM3 19h12v2H3z" />
  </svg>
);
const SeabornIcon = () => (
  <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor">
    <path d="M2 20h20v2H2zM4 14h2v6H4zM8 9h2v11H8zM12 4h2v16h-2zM16 10h2v10h-2zM20 6h2v14h-2z" />
  </svg>
);
const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
  </svg>
);

// ── Types ────────────────────────────────────────────────────────────────────
type SkillIcon = React.ComponentType<{ className?: string }>;

// ── Skills data ──────────────────────────────────────────────────────────────
const skills: { name: string; color: string; icon: SkillIcon }[] = [
  { name: "Python", color: "#3776AB", icon: SiPython },
  { name: "Pandas", color: "#150458", icon: SiPandas },
  { name: "NumPy", color: "#013243", icon: SiNumpy },
  { name: "Matplotlib", color: "#FF6B35", icon: MatplotlibIcon },
  { name: "Seaborn", color: "#4C9BE8", icon: SeabornIcon },
  { name: "Scikit-learn", color: "#F7931E", icon: SiScikitlearn },
  { name: "Streamlit", color: "#FF4B4B", icon: SiStreamlit },
  { name: "Docker", color: "#2496ED", icon: SiDocker },
  { name: "Claude", color: "#C96442", icon: ClaudeIcon },
  { name: "ChatGPT", color: "#10A37F", icon: SiOpenai },
  { name: "Netlify", color: "#00AD9F", icon: SiNetlify },
];

// ── Tech stack color map ─────────────────────────────────────────────────────
const techColors: Record<string, string> = {
  Python: "#3776AB",
  Pandas: "#150458",
  NumPy: "#013243",
  Matplotlib: "#FF6B35",
  Seaborn: "#4C9BE8",
  "Scikit-learn": "#F7931E",
  Streamlit: "#FF4B4B",
  Docker: "#2496ED",
  Claude: "#C96442",
  ChatGPT: "#10A37F",
  Netlify: "#00AD9F",
};

// ── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    label: "Machine Learning",
    title: "AI Assisted Marks Analyzer",
    description:
      "An intelligent system that analyzes student answers and automatically assigns marks using AI and machine learning models trained on historical grading data.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Docker"],
    github: "https://github.com/skchiragsingh/ai-assisted-marks-analyzer",
    accentFrom: "from-blue-900/25",
    accentTo: "to-purple-900/25",
    glowColor: "#3776AB",
  },
  // Add more projects here following the same shape
];

// ── Flip Card ────────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full cursor-pointer"
      style={{ perspective: "1400px", minHeight: "380px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d", minHeight: "380px" }}
      >
        {/* ── FRONT ── */}
        <div
          className={`absolute inset-0 rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl`}
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* ambient glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accentFrom} via-black ${project.accentTo} z-0`}
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 p-10 md:p-20 text-center min-h-[380px]">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-400 border border-blue-400/30 bg-blue-400/5">
              {project.label}
            </span>

            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              {project.title}
            </h3>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accentFrom} via-black ${project.accentTo} z-0`}
          />
          <div
            className="relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between p-10 md:p-16 lg:p-20 min-h-[380px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: info */}
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-400 border border-blue-400/30 bg-blue-400/5 mb-5">
                {project.label}
              </span>

              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                {project.description}
              </p>

              {/* Tech badges — same colors as defined in techColors */}
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm text-white font-medium border border-white/10 hover:scale-105 transition-transform duration-200"
                    style={{
                      backgroundColor: techColors[tech] ?? "#333",
                      boxShadow: `0 0 10px ${techColors[tech] ?? "#333"}44`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: actions */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section className="relative z-20 bg-black min-h-screen pt-32 pb-24 px-8 md:px-24 border-t border-neutral-900">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Header */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tighter flex items-center gap-6">
          <Cpu className="w-12 h-12 text-blue-500" />
          Featured Work
        </h2>

        {/* Project Cards */}
        <div className="flex flex-col gap-10 mb-32">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* Skills & Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mt-4 pb-16">
          {/* Skills */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
              Core Expertise
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map(({ name, color, icon: Icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-white text-base font-medium border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-white/20"
                  style={{ boxShadow: `0 0 12px ${color}22` }}
                >
                  <span style={{ color }} className="text-xl flex-shrink-0">
                    <Icon />
                  </span>
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="lg:text-right flex flex-col lg:items-end">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
              Connect
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-md font-light leading-relaxed">
              Open to new opportunities and exciting collaborations in AI &amp; Data Science.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/skchiragsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full bg-neutral-900 border border-white/10 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/chirag-singh-55149b277/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full bg-neutral-900 border border-white/10 text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://wa.me/8287746942"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full bg-neutral-900 border border-white/10 text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}