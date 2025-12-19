import React, { useState } from 'react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      name: "FPGA-Accelerated VGG Neural Network",
      description: "ReducedVGG CNN for CIFAR-10 with 85.69% accuracy using INT16 quantization. Accelerated inference by 49.8× on Zynq-7020 FPGA.",
      tags: ["FPGA", "Vitis HLS", "PyTorch", "Quantization"],
      image: "https://raw.githubusercontent.com/Msundara19/Fpga-accelerated-cnn/main/docs/architecture.png",
      github: "https://github.com/Msundara19/Fpga-accelerated-cnn",
      live: null
    },
    {
      name: "MediTrack – AI Wound Healing Monitor",
      description: "Hackathon-winning app analyzing post-surgical wounds with OpenCV segmentation and Groq/Gemini LLMs for patient-friendly assessments.",
      tags: ["OpenCV", "LLM", "Streamlit", "Pathway"],
      image: "https://raw.githubusercontent.com/Msundara19/MediTrack/main/assets/demo.png",
      github: "https://github.com/Msundara19/MediTrack",
      live: "https://meditrack-demo.streamlit.app"
    },
    {
      name: "Wallet Wealth – LLM Financial Advisor",
      description: "Full-stack wealth advisory platform with React, FastAPI, JWT auth, and multi-provider LLM architecture via LangChain.",
      tags: ["React", "FastAPI", "LangChain", "WebSocket"],
      image: "https://raw.githubusercontent.com/Msundara19/wallet-wealth-frontend/main/demo.png",
      github: "https://github.com/Msundara19/wallet-wealth-frontend",
      live: "https://wallet-wealth.vercel.app"
    },
    {
      name: "Gesture-Controlled IoT for Accessibility",
      description: "Gesture-based control for voice-assistant devices achieving 95%+ accuracy with 33ms latency on Raspberry Pi.",
      tags: ["MediaPipe", "Raspberry Pi", "Edge AI", "IoT"],
      image: "https://raw.githubusercontent.com/Msundara19/Home-Appliance-Control/main/demo.gif",
      github: "https://github.com/Msundara19/Home-Appliance-Control",
      live: null
    },
    {
      name: "Underwater Resource Detection",
      description: "IEEE published research. Real-time detection achieving 80% accuracy using CLAHE preprocessing and AdaBoost.",
      tags: ["OpenCV", "AdaBoost", "CLAHE", "IEEE"],
      image: "https://raw.githubusercontent.com/Msundara19/Underwater-Resourse-Detection/main/output.png",
      github: "https://github.com/Msundara19/Underwater-Resourse-Detection",
      live: "https://ieeexplore.ieee.org/document/10421038"
    },
    {
      name: "Smart Grid Load Forecasting",
      description: "ML system processing 100+ data points across 20 grid zones with 45% error reduction using Gradient Boosting.",
      tags: ["XGBoost", "Time Series", "Python", "ML Pipeline"],
      image: "https://raw.githubusercontent.com/Msundara19/Power_Load_predictor/main/results.png",
      github: "https://github.com/Msundara19/Power_Load_predictor",
      live: null
    }
  ];

  const experience = [
    {
      role: "ML Developer Intern",
      company: "National Institute of Ocean Technology",
      location: "Chennai, India",
      period: "Jan 2023 – Apr 2023",
      logo: "🌊",
      description: "Built underwater object detection pipeline using CLAHE preprocessing and AdaBoost, achieving 80% accuracy on 500+ images."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Artificial Intelligence",
      school: "Illinois Institute of Technology",
      location: "Chicago, IL",
      period: "Sep 2024 – Dec 2025",
      logo: "🎓"
    }
  ];

  const skills = {
    "Languages": ["Python", "C++", "JavaScript", "Verilog", "VHDL", "SQL"],
    "ML/AI": ["PyTorch", "TensorFlow", "LangChain", "OpenCV", "MediaPipe", "HuggingFace"],
    "Tools": ["Docker", "FastAPI", "React", "AWS", "GitHub Actions", "Streamlit"],
    "Hardware": ["FPGA (Vitis HLS)", "Raspberry Pi", "INT8/16 Quantization", "Edge Computing"]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* Navigation Dock */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className={`flex items-center gap-2 px-4 py-3 rounded-2xl backdrop-blur-xl ${darkMode ? 'bg-zinc-900/80 border border-zinc-800' : 'bg-white/80 border border-gray-200 shadow-lg'}`}>
          <button onClick={() => scrollToSection('home')} className={`p-2.5 rounded-xl transition-all ${activeSection === 'home' ? (darkMode ? 'bg-zinc-800' : 'bg-gray-200') : 'hover:bg-zinc-800/50'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </button>
          <button onClick={() => scrollToSection('projects')} className={`p-2.5 rounded-xl transition-all ${activeSection === 'projects' ? (darkMode ? 'bg-zinc-800' : 'bg-gray-200') : 'hover:bg-zinc-800/50'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          </button>
          <a href="https://github.com/Msundara19" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl transition-all hover:bg-zinc-800/50">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/meenakshi-sridharan-89133b261/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl transition-all hover:bg-zinc-800/50">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2.5 rounded-xl transition-all hover:bg-zinc-800/50">
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm Meenakshi 👋
            </h1>
            <p className={`text-xl md:text-2xl ${darkMode ? 'text-zinc-400' : 'text-gray-600'} mb-8`}>
              ML Engineer building intelligent systems<br/>with computer vision & edge AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className={`px-6 py-3 rounded-full font-medium transition-all ${darkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}
              >
                View Resume
              </a>
              <a 
                href="mailto:msridharansundaram@hawk.illinoistech.edu"
                className={`px-6 py-3 rounded-full font-medium transition-all border ${darkMode ? 'border-zinc-700 hover:border-zinc-500' : 'border-gray-300 hover:border-gray-500'}`}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-zinc-800">
              <img 
                src="https://avatars.githubusercontent.com/u/123456789?v=4" 
                alt="Meenakshi Sridharan"
                className="w-full h-full object-cover bg-zinc-800"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-6xl font-bold text-white">MS</div>';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
            MS in AI student at Illinois Institute of Technology with research experience in computer vision and edge computing. 
            I specialize in deploying ML models on resource-constrained hardware like FPGAs and Raspberry Pi. 
            Published researcher with IEEE, passionate about building AI systems that work in the real world.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="flex gap-4 mb-8">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                {exp.logo}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="font-semibold text-lg">{exp.company}</h3>
                  <span className={`text-sm ${darkMode ? 'text-zinc-500' : 'text-gray-500'}`}>{exp.period}</span>
                </div>
                <p className={`text-sm mb-2 ${darkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{exp.role}</p>
                <p className={`text-sm ${darkMode ? 'text-zinc-500' : 'text-gray-500'}`}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} className="flex gap-4 mb-8">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                {edu.logo}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="font-semibold text-lg">{edu.school}</h3>
                  <span className={`text-sm ${darkMode ? 'text-zinc-500' : 'text-gray-500'}`}>{edu.period}</span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className={`text-sm font-medium mb-3 ${darkMode ? 'text-zinc-500' : 'text-gray-500'}`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className={`px-3 py-1.5 rounded-lg text-sm ${darkMode ? 'bg-zinc-900 text-zinc-300' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl overflow-hidden transition-all hover:scale-[1.02] ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-gray-50 border border-gray-200'}`}
              >
                <div className={`h-40 ${darkMode ? 'bg-zinc-800' : 'bg-gray-200'} flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="text-4xl opacity-30">🔧</div>`;
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-200 text-gray-600'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-sm ${darkMode ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Code
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm ${darkMode ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Publication</h2>
          <a 
            href="https://ieeexplore.ieee.org/document/10421038"
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-6 rounded-2xl transition-all hover:scale-[1.01] ${darkMode ? 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700' : 'bg-gray-50 border border-gray-200 hover:border-gray-300'}`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Underwater Resource Detection using Image Processing</h3>
                <p className={`text-sm ${darkMode ? 'text-zinc-500' : 'text-gray-500'}`}>IEEE Conference • July 2023</p>
              </div>
              <svg className={`w-5 h-5 ${darkMode ? 'text-zinc-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${darkMode ? 'border-zinc-900' : 'border-gray-200'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-zinc-600' : 'text-gray-500'}`}>
            © 2025 Meenakshi Sridharan · Built with React
          </p>
        </div>
      </footer>

      {/* Bottom padding for nav */}
      <div className="h-24"></div>
    </div>
  );
}
