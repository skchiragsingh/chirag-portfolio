import { ArrowUpRight, Github, Linkedin, Cpu } from "lucide-react";

export default function Projects() {
  const skills = [
    "Python", "Pandas", "NumPy", "Matplotlib",
    "Seaborn", "Scikit-learn", "Streamlit", "Docker", "AI/ML"
  ];

  const skillColors: { [key: string]: string } = {
    "Python": "#3776AB",
    "Pandas": "#150458",
    "NumPy": "#013243",
    "Matplotlib": "#FF6B35",
    "Seaborn": "#4C9BE8",
    "Scikit-learn": "#F7931E",
    "Streamlit": "#FF4B4B",
    "Docker": "#2496ED",
    "AI/ML": "#8B5CF6"
  };

  return (
    <section className="relative z-20 bg-black min-h-screen pt-32 pb-24 px-8 md:px-24 border-t border-neutral-900">
      {/* Glassmorphism gradient separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Project Section */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tighter flex items-center gap-6">
          <Cpu className="w-12 h-12 text-blue-500" />
          Featured Work
        </h2>

        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 w-full mb-32 shadow-2xl border border-white/10 transition-all duration-700 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] hover:border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10 z-0"></div>

          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col md:flex-row gap-12 justify-between items-center">
            <div className="flex-1">
              <p className="text-sm md:text-base font-semibold text-blue-400 mb-4 tracking-widest uppercase">Machine Learning</p>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">AI Assisted Marks Analyzer</h3>
              <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-10 max-w-3xl">
                An intelligent system that analyzes student answers and automatically assigns marks using AI and machine learning.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Docker"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-5 py-2.5 rounded-full text-sm text-white font-medium border border-white/10 transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: skillColors[tech] || '#333'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-auto flex items-center justify-start md:justify-end mt-8 md:mt-0 gap-6">
              <a 
                href="https://github.com/skchiragsingh/ai-assisted-marks-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                title="View Source on GitHub"
                className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer hover:scale-110"
              >
                <Github className="w-7 h-7 opacity-70 hover:opacity-100 transition-opacity" />
              </a>
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer group-hover:scale-110">
                <ArrowUpRight className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Connect Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mt-12 pb-16">
          {/* Skills */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">Core Expertise</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-6 py-3 rounded-2xl text-white text-lg font-medium border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: skillColors[skill] || '#333'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="lg:text-right flex flex-col lg:items-end">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">Connect</h2>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-md font-light leading-relaxed">
              Open to new opportunities and exciting collaborations in AI & Data Science.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/skchiragsingh/ai-assisted-marks-analyzer"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
