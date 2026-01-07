import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const email = "msridharansundaram@hawk.illinoistech.edu";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setIsLoading(false), 1500);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Account for bottom navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      name: "TrustCart - AI E-Commerce Fraud Detection",
      shortDesc: "Real-time fraud detection across multiple platforms",
      description: "AI-powered fraud detection system for e-commerce using FastAPI and Groq LLM. Analyzes products across Google Shopping and eBay with statistical anomaly detection, achieving <5s response time and 95%+ precision.",
      tags: ["FastAPI", "Groq LLM", "ML", "REST API"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      github: "https://github.com/Msundara19/Trustcart",
      live: "https://web-production-e61ac.up.railway.app/",
      icon: "🛡️",
      caseStudy: {
        challenge: "E-commerce platforms struggle with fraud detection at scale. Traditional rule-based systems miss sophisticated scams, while manual review is too slow for millions of listings.",
        approach: "Built a hybrid system combining statistical anomaly detection with Groq LLM analysis. Used percentile-based price classification, outlier removal, and trusted seller recognition. Optimized LLM calls to top 5 risky items for sub-5 second response times.",
        results: ["95%+ fraud detection precision", "Sub-5 second response time", "Multi-platform support (Google Shopping, eBay)", "Deployed on Railway with CI/CD"],
        techStack: ["FastAPI", "Groq API (Llama 3.1)", "SerpAPI", "NumPy", "Tailwind CSS", "Railway"]
      }
    },
    {
      name: "FPGA-Accelerated VGG Neural Network",
      shortDesc: "49.8x faster CNN inference on edge hardware",
      description: "ReducedVGG CNN for CIFAR-10 with 85.69% accuracy using INT16 quantization. Accelerated inference by 49.8x on Zynq-7020 FPGA.",
      tags: ["FPGA", "Vitis HLS", "PyTorch", "Quantization"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      github: "https://github.com/Msundara19/fpga_cnn_accelerator",
      results: "https://msundara19.github.io/fpga_cnn_accelerator/",
      live: null,
      icon: "⚡",
      caseStudy: {
        challenge: "Edge devices need real-time CNN inference but lack GPU compute power. Standard models are too slow and power-hungry for embedded deployment.",
        approach: "Designed a reduced VGG architecture optimized for FPGA constraints. Implemented INT16 quantization to reduce memory bandwidth while preserving accuracy. Used Vitis HLS pragmas for loop unrolling and pipelining.",
        results: ["85.69% accuracy (only 1.35% drop from FP32)", "49.8x inference speedup", "70% BRAM utilization on Zynq-7020", "466ms end-to-end latency"],
        techStack: ["PyTorch", "Vitis HLS", "PYNQ", "Zynq-7020 FPGA"]
      }
    },
    {
      name: "MediTrack - AI Wound Healing Monitor",
      shortDesc: "Hack With Chicago 2.0 - AI medical imaging",
      description: "Built at Hack With Chicago 2.0 (Microsoft Office, Chicago). App analyzing post-surgical wounds with OpenCV segmentation and Groq/Gemini LLMs for patient-friendly assessments.",
      tags: ["OpenCV", "LLM", "Streamlit", "Hackathon"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
      github: "https://github.com/Msundara19/AskMe---post-surgery-wound-care",
      live: "https://askme---post-surgery-wound-care.streamlit.app/",
      icon: "🏥",
      hackathon: { name: "Hack With Chicago 2.0", link: "https://lu.ma/66n9fy2x", location: "Microsoft Office, Chicago" },
      caseStudy: {
        challenge: "Post-surgical patients struggle to assess wound healing progress at home. Medical jargon in online resources creates anxiety and confusion.",
        approach: "Built in 8 hours at Hack With Chicago 2.0 hosted at Microsoft Office. Combined OpenCV for wound segmentation with Groq/Gemini LLMs to generate patient-friendly healing assessments.",
        results: ["Sub-5 second analysis time", "Patient-friendly language output", "Real-time monitoring via Pathway", "Deployed on Streamlit Cloud"],
        techStack: ["OpenCV", "Groq API", "Gemini API", "Pathway", "Streamlit"]
      }
    },
    {
      name: "Wallet Wealth - LLM Financial Advisor",
      shortDesc: "Full-stack AI wealth management platform",
      description: "Full-stack wealth advisory platform with React, FastAPI, JWT auth, and multi-provider LLM architecture via LangChain.",
      tags: ["React", "FastAPI", "LangChain", "WebSocket"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      github: "https://github.com/Msundara19/LLM-wealth-advisor",
      live: "https://llm-wealth-advisor.vercel.app/",
      icon: "💰",
      caseStudy: {
        challenge: "Individual investors need personalized financial guidance but cannot afford dedicated advisors.",
        approach: "Architected multi-provider LLM system using LangChain for intelligent routing between Groq and OpenAI based on query complexity.",
        results: ["<3 second response time", "JWT-secured authentication", "Real-time WebSocket updates", "Appointment scheduling system"],
        techStack: ["React", "FastAPI", "LangChain", "WebSocket", "JWT", "Vercel"]
      }
    },
    {
      name: "Gesture-Controlled IoT for Accessibility",
      shortDesc: "95%+ accuracy gesture recognition on $40 hardware",
      description: "Gesture-based control for voice-assistant devices achieving 95%+ accuracy with 33ms latency on Raspberry Pi.",
      tags: ["MediaPipe", "Raspberry Pi", "Edge AI", "IoT"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      github: "https://github.com/Msundara19/Home_appliance_control",
      live: null,
      icon: "🤚",
      caseStudy: {
        challenge: "Voice-assistant devices are inaccessible to users with speech or hearing impairments.",
        approach: "Designed distributed architecture with PC handling MediaPipe inference and Raspberry Pi controlling GPIO outputs.",
        results: ["95%+ gesture recognition accuracy", "33ms median latency", "<$40 total hardware cost", "Works with Siri, Alexa, Google Home"],
        techStack: ["MediaPipe", "Raspberry Pi", "Python", "GPIO", "WebSocket"]
      }
    },
    {
      name: "Smart Grid Load Forecasting",
      shortDesc: "45% error reduction in power prediction",
      description: "ML system processing 100+ data points across 20 grid zones with 45% error reduction using Gradient Boosting.",
      tags: ["XGBoost", "Time Series", "Python", "ML Pipeline"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      github: "https://github.com/Msundara19/Power_Load_predictor",
      live: null,
      icon: "⚡",
      caseStudy: {
        challenge: "City power grids face blackout risks due to inaccurate load forecasting.",
        approach: "Built ensemble ML pipeline combining Gradient Boosting with parallelized KNN with advanced feature engineering.",
        results: ["45% reduction in prediction error", "Processes 100+ data points", "Covers 20 grid zones", "Real-time prediction pipeline"],
        techStack: ["XGBoost", "Scikit-learn", "Pandas", "NumPy", "Multiprocessing"]
      }
    }
  ];

  const experience = [
    {
      role: "ML Developer Intern",
      company: "National Institute of Ocean Technology",
      location: "Chennai, India",
      period: "Jan 2023 - Apr 2023",
      logo: "🌊",
      description: "Built underwater object detection pipeline using CLAHE preprocessing and AdaBoost, achieving 80% accuracy on 500+ images.",
      highlights: ["80% detection accuracy", "500+ images processed", "IEEE Published"],
      links: { github: "https://github.com/Msundara19/Underwater-Resourse-Detection", paper: "https://ieeexplore.ieee.org/document/10421038" }
    }
  ];

  const research = {
    title: "Underwater Resource Detection using Image Processing",
    date: "July 2023",
    abstract: "Developed real-time underwater detection system achieving 80% accuracy using Haar Cascade classifiers enhanced with CLAHE preprocessing.",
    contributions: ["Novel CLAHE preprocessing pipeline", "Optimized Haar Cascade training", "GUI reducing setup time by 40%", "25% robustness improvement"],
    links: { paper: "https://ieeexplore.ieee.org/document/10421038", github: "https://github.com/Msundara19/Underwater-Resourse-Detection" }
  };

  const writing = [
    {
      title: "Machines vs. Us: A Real Conversation About Artificial Intelligence",
      publication: "TechNews - Illinois Tech",
      date: "April 2025",
      excerpt: "An opinion piece exploring why AI receives unwarranted hatred, addressing concerns about job displacement, hallucinations, privacy, and why machines can never truly replace humans.",
      link: "https://technews.iit.edu/2025/04/10/machines-vs-us-a-real-conversation-about-artificial-intelligence/",
      icon: "✍️"
    },
    {
      title: "FPGA vs GPU: When Hardware Acceleration Actually Matters",
      publication: "Medium",
      date: "December 2025",
      excerpt: "Lessons from deploying a VGG network on both platforms - and why the results surprised me.",
      link: "https://medium.com/@msridharansundaram/fpga-vs-gpu-when-hardware-acceleration-actually-matters-bd91e594c854",
      icon: "🔧"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Artificial Intelligence",
      school: "Illinois Institute of Technology",
      period: "Sep 2024 - Dec 2025",
      logo: "IIT",
      courses: ["Hardware Acceleration for ML", "Secure ML", "Computer Vision", "Deep Learning", "Machine Learning", "Intro to Cybersecurity", "Cloud Computing and Cloud native systems", "AI in Smart Grids", "Object Oriented Programming for Machine Learning"]
    }
  ];

  const certifications = [
    {
      title: "Structuring Machine Learning Projects",
      issuer: "deeplearning.ai",
      date: "May 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/NA2FQV6TPVPD",
      icon: "🎓"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "Aug 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/LTLD9M9JVHEH",
      icon: "🐍"
    }
  ];

  const skills = {
    "Languages": ["Python", "C++", "JavaScript", "SQL", "Verilog", "VHDL"],
    "ML/AI": ["PyTorch", "TensorFlow", "Scikit-Learn", "Keras", "Deep Learning", "Neural Networks", "CNNs", "Model Training"],
    "LLMs & GenAI": ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "APIs", "HuggingFace Transformers"],
    "Computer Vision": ["OpenCV", "MediaPipe", "Image Segmentation", "Object Detection", "Image Processing"],
    "MLOps": ["Docker", "FastAPI", "Streamlit", "Flask", "Model Serving", "REST APIs", "WebSocket", "Model Deployment"],
    "Cloud": ["AWS (EC2, S3, Lambda)", "Vercel", "Git/GitHub"],
    "Data": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Data Pipeline", "Feature Engineering", "Data Preprocessing"],
    "Hardware": ["FPGA (Vitis HLS, PYNQ)", "Raspberry Pi", "Model Quantization", "Hardware Acceleration"]
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border border-zinc-700 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border border-zinc-600 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}></div>
          </div>
          <div className="relative z-10 text-center">
            <div className="text-6xl font-bold text-white animate-pulse">MS</div>
            <div className="mt-4 text-zinc-600 text-sm tracking-[0.3em] uppercase">Loading</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <div className="fixed w-96 h-96 rounded-full pointer-events-none z-0" style={{ background: darkMode ? 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)', left: mousePosition.x - 192, top: mousePosition.y - 192 }} />
      <div className="fixed inset-0 pointer-events-none z-0"><div className={`absolute inset-0 ${darkMode ? 'opacity-[0.02]' : 'opacity-[0.03]'}`} style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} /></div>

      <nav className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-md">
        <div className={`flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl backdrop-blur-xl border ${darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white/80 border-zinc-200 shadow-xl'}`}>
          <button onClick={() => scrollToSection('home')} className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-all ${activeSection === 'home' ? (darkMode ? 'bg-zinc-800' : 'bg-zinc-200') : ''}`}><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></button>
          <button onClick={() => scrollToSection('experience')} className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-all ${activeSection === 'experience' ? (darkMode ? 'bg-zinc-800' : 'bg-zinc-200') : ''}`}><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></button>
          <button onClick={() => scrollToSection('projects')} className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-all ${activeSection === 'projects' ? (darkMode ? 'bg-zinc-800' : 'bg-zinc-200') : ''}`}><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg></button>
          <div className={`w-px h-5 sm:h-6 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}></div>
          <a href="https://github.com/Msundara19" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl"><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="https://www.linkedin.com/in/meenakshi-sridharan-89133b261/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl"><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl">{darkMode ? <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> : <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>}</button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative z-10 pt-20 pb-12 md:pt-0">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span><span className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>Open to opportunities</span></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">Hi, I'm Meenakshi 👋</h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>AI Enthusiast blending logic, empathy, and code to make machines a little more human.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="https://drive.google.com/file/d/1zMsqmJKWkRBS8dQZmFEz3pOVWc3cMdKH/view" target="_blank" rel="noopener noreferrer" className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all hover:scale-105 text-sm sm:text-base ${darkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>View Resume</a>
              <button onClick={copyEmail} className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all border-2 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base ${darkMode ? 'border-zinc-700 hover:border-zinc-500' : 'border-zinc-300 hover:border-zinc-400'}`}>
                {copied ? <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>Copied!</> : <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>Copy Email</>}
              </button>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-2 justify-center lg:justify-start">{['Machine Learning and Deep Learning', 'Hardware Accelerators', 'Computer Vision', 'LLMs', 'Python'].map((tech, idx) => <span key={idx} className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm ${darkMode ? 'bg-zinc-900 text-zinc-500 border border-zinc-800' : 'bg-white text-zinc-500 border border-zinc-200'}`}>{tech}</span>)}</div>
          </div>
          <div className="flex-shrink-0 relative mt-8 lg:mt-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 opacity-50 blur-sm"></div>
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-zinc-800 relative"><img src="https://avatars.githubusercontent.com/Msundara19" alt="Meenakshi" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="w-full h-full bg-zinc-800 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-white">MS</div>'; }} /></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">About</h2>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Pursuing M.Eng in AI at Illinois Institute of Technology. I love working with robust ML models and deploying them on resource-constrained hardware like FPGAs. Passionate about building AI systems that address real-world constraints.</p>
        </div>
      </section>

      {/* Featured Writing Section - Title before publication */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Featured Writing</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {writing.map((article, idx) => (
              <a key={idx} href={article.link} target="_blank" rel="noopener noreferrer" className={`block p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all hover:scale-[1.01] ${darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-lg'}`}>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>{article.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-2">{article.title}</h3>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                      <span className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-700'}`}>{article.publication}</span>
                      <span className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{article.date}</span>
                    </div>
                    <p className={`mb-3 sm:mb-4 text-xs sm:text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{article.excerpt}</p>
                    <span className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>Read Article <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Role before company */}
      <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12">Work Experience</h2>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {experience.map((exp, idx) => (
              <div key={idx} className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-lg'}`}>
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>{exp.logo}</div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 break-words">{exp.role}</h3>
                    <p className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.company}</p>
                    <p className={`text-xs ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>{exp.period}</p>
                  </div>
                </div>
                <p className={`mb-4 sm:mb-6 text-sm sm:text-base ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">{exp.highlights.map((h, i) => <span key={i} className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{h}</span>)}</div>
                <div className="flex gap-4">
                  <a href={exp.links.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm ${darkMode ? 'text-zinc-500 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>Code</a>
                  <a href={exp.links.paper} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm ${darkMode ? 'text-zinc-500 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>Paper</a>
                </div>
              </div>
            ))}
            <div className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-lg'}`}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6"><div className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold uppercase ${darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-900 text-white'}`}>IEEE Published</div><span className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{research.date}</span></div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">{research.title}</h3>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{research.abstract}</p>
              <div className="mb-4 sm:mb-6"><h4 className={`text-xs uppercase tracking-wider mb-2 sm:mb-3 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Key Contributions</h4><div className="space-y-1.5 sm:space-y-2">{research.contributions.map((c, i) => <div key={i} className="flex items-start gap-2"><svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>{c}</span></div>)}</div></div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={research.links.paper} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium ${darkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}><svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>Read Paper</a>
                <a href={research.links.github} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl border text-xs sm:text-sm ${darkMode ? 'border-zinc-700' : 'border-zinc-300'}`}><svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>Code</a>
              </div>
            </div>
          </div>
          {/* Education - Degree before school */}
          <div className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Education</h2>
            {education.map((edu, idx) => (
              <div key={idx} className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border ${darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0 ${darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-zinc-700'}`}>{edu.logo}</div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg break-words">{edu.degree}</h3>
                    <p className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{edu.school}</p>
                    <p className={`text-xs ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>{edu.period}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">{edu.courses.map((course, i) => <span key={i} className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-white text-zinc-600 border border-zinc-200'}`}>{course}</span>)}</div>
              </div>
            ))}
          </div>
          {/* Certifications */}
          <div className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert, idx) => (
                <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className={`block p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300'}`}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}>{cert.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm sm:text-base mb-1 break-words">{cert.title}</h3>
                      <p className={`text-xs sm:text-sm mb-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{cert.issuer}</p>
                      <p className={`text-xs ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>{cert.date}</p>
                    </div>
                    <svg className={`w-4 h-4 flex-shrink-0 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-lg'}`}>
                <h3 className={`font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{category}</h3>
                <div className="flex flex-wrap gap-2">{items.map((skill, i) => <span key={i} className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Projects</h2>
          <p className={`text-sm sm:text-base md:text-lg mb-8 sm:mb-12 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Click any project to view the case study</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className={`group rounded-2xl sm:rounded-3xl overflow-hidden transition-all hover:scale-[1.02] cursor-pointer ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200 shadow-xl'}`} onClick={() => setSelectedProject(project)}>
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-xl ${darkMode ? 'bg-zinc-800/80' : 'bg-white/80'} backdrop-blur-sm`}>{project.icon}</div>
                  {project.hackathon && <a href={project.hackathon.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 py-1 rounded-lg text-xs font-medium bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">🏆 {project.hackathon.name}</a>}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4"><h3 className="font-bold text-white text-sm sm:text-base md:text-lg line-clamp-2">{project.name}</h3><p className="text-zinc-300 text-xs sm:text-sm line-clamp-1">{project.shortDesc}</p></div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">{project.tags.slice(0, 3).map((tag, i) => <span key={i} className={`px-2 py-0.5 sm:py-1 rounded-lg text-xs ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{tag}</span>)}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 sm:gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`p-1.5 sm:p-2 rounded-lg ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                      {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`p-1.5 sm:p-2 rounded-lg ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>}
                    </div>
                    <span className={`text-xs hidden sm:inline ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>View Case Study →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div className={`relative w-full sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl ${darkMode ? 'bg-zinc-900' : 'bg-white'}`} onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 sm:h-64"><img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div><button onClick={() => setSelectedProject(null)} className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white"><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg></button><div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6"><div className="flex items-center gap-2 sm:gap-3 mb-2"><span className="text-2xl sm:text-3xl">{selectedProject.icon}</span><h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{selectedProject.name}</h2></div>{selectedProject.hackathon && <a href={selectedProject.hackathon.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 mb-2">🏆 Built at {selectedProject.hackathon.name} - {selectedProject.hackathon.location}</a>}<div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">{selectedProject.tags.map((tag, i) => <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">{tag}</span>)}</div></div></div>
            <div className="p-5 sm:p-6 md:p-8">
              <p className={`text-base sm:text-lg mb-6 sm:mb-8 ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>{selectedProject.description}</p>
              <div className="mb-6 sm:mb-8"><h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">The Challenge</h3><p className={`text-sm sm:text-base ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{selectedProject.caseStudy.challenge}</p></div>
              <div className="mb-6 sm:mb-8"><h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">The Approach</h3><p className={`text-sm sm:text-base ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{selectedProject.caseStudy.approach}</p></div>
              <div className="mb-6 sm:mb-8"><h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Results</h3><div className="grid sm:grid-cols-2 gap-2 sm:gap-3">{selectedProject.caseStudy.results.map((r, i) => <div key={i} className={`p-3 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}><span className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>{r}</span></div>)}</div></div>
              <div className="mb-6 sm:mb-8"><h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Tech Stack</h3><div className="flex flex-wrap gap-2">{selectedProject.caseStudy.techStack.map((t, i) => <span key={i} className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>{t}</span>)}</div></div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-medium text-sm sm:text-base ${darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-zinc-900'}`}><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>View Code</a>
                {selectedProject.live && <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-medium text-sm sm:text-base ${darkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>Live Demo</a>}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className={`py-12 sm:py-16 px-4 sm:px-6 border-t relative z-10 pb-24 sm:pb-28 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left"><h3 className="text-xl sm:text-2xl font-bold mb-2">Let's build something amazing</h3><p className={`text-sm sm:text-base ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Always open to new opportunities.</p></div>
            <button onClick={copyEmail} className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}>{copied ? <><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>Copied!</> : <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Get In Touch</>}</button>
          </div>
          <div className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-200'} flex flex-col md:flex-row items-center justify-between gap-4`}>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>© 2025 Meenakshi Sridharan</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Msundara19" target="_blank" rel="noopener noreferrer" className={darkMode ? 'text-zinc-600 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
              <a href="https://www.linkedin.com/in/meenakshi-sridharan-89133b261/" target="_blank" rel="noopener noreferrer" className={darkMode ? 'text-zinc-600 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
