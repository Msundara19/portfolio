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
      const navbarHeight = 80;
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
      name: "MediTrack v2.0 - AI Wound Healing Monitor",
      shortDesc: "Clinical-grade wound analysis with multi-patient tracking",
      description: "Full-stack healthcare application classifying 7 wound types with 6-factor computer vision pipeline. Real-time wound healing monitor using OpenCV and multi-provider LLMs with sub-5s latency.",
      tags: ["OpenCV", "LLM", "Next.js", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
      github: "https://github.com/Msundara19/meditrack-v2",
      live: "https://meditrack-v2.vercel.app/",
      icon: "🏥",
      caseStudy: {
        challenge: "Post-surgical wound monitoring requires frequent clinical visits, increasing healthcare costs. Patients lack tools to track healing progress at home with clinical-grade accuracy, leading to delayed complication detection.",
        approach: "Built full-stack production application with 6-factor computer vision pipeline using HSV/LAB segmentation for wound boundary detection, color analysis, and tissue classification. Integrated multi-provider LLMs (Groq, Gemini) for natural language wound reports. Implemented multi-patient tracking with automatic healing score calculation and historical trend analysis.",
        results: ["7 wound type classification", "Sub-5 second end-to-end latency", "6-factor analysis (size, color, tissue, exudate, edges, surrounding)", "Multi-patient tracking with healing scores"],
        techStack: ["Next.js", "OpenCV", "Groq API", "Gemini API", "Vercel", "HSV/LAB Processing", "Python", "FastAPI"]
      }
    },
    {
      name: "FPGA-Accelerated VGG Neural Network",
      shortDesc: "49.8x faster CNN inference on edge hardware",
      description: "ReducedVGG CNN for CIFAR-10 with 85.69% accuracy using INT16 quantization. Accelerated inference by 49.8x on Zynq-7020 FPGA.",
      tags: ["FPGA", "Vitis HLS", "PyTorch", "Quantization"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      github: "https://github.com/Msundara19/fpga_cnn_accelerator",
      icon: "⚡",
      caseStudy: {
        challenge: "CNNs demand significant computational resources. Edge devices need real-time inference without compromising accuracy—a challenge GPUs can't solve alone due to power constraints.",
        approach: "Designed ReducedVGG (7 layers, 3.5M params) with INT16 quantization for FPGA. Implemented HLS C++ accelerators for conv layers. Optimized with array partitioning, loop pipelining, and dataflow pragmas. Deployed on PYNQ-Z2 board.",
        results: ["85.69% test accuracy on CIFAR-10", "49.8x speedup vs Python baseline", "INT16 quantization (minimal accuracy loss)", "Full hardware deployment on Zynq-7020"],
        techStack: ["Vitis HLS", "PyTorch", "PYNQ-Z2", "C++", "Python", "Zynq-7020 FPGA"]
      }
    },
    {
      name: "Wallet Wealth - LLM Financial Advisor",
      shortDesc: "Agentic AI platform with sub-3s response times",
      description: "RAG-powered financial advisor with real-time market data and multi-provider LLM routing. Production agentic AI platform delivering personalized investment recommendations with conversational memory.",
      tags: ["React", "FastAPI", "LangChain", "RAG"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      github: "https://github.com/Msundara19/LLM-wealth-advisor",
      live: "https://llm-wealth-advisor.vercel.app/",
      icon: "💰",
      caseStudy: {
        challenge: "Retail investors lack access to personalized financial advice. Traditional wealth management is expensive and inaccessible for small portfolios. Generic robo-advisors fail to understand individual risk profiles and market context.",
        approach: "Developed production agentic AI platform using LangChain with multi-provider LLM routing for optimal performance. Implemented RAG-based retrieval from financial knowledge base. Built responsive React frontend with real-time streaming responses. Added JWT authentication, conversational memory, and portfolio tracking. Deployed on Vercel with FastAPI backend.",
        results: ["Sub-3 second response times", "Multi-provider LLM routing", "RAG-based financial knowledge retrieval", "Full-stack deployment with authentication"],
        techStack: ["React", "FastAPI", "LangChain", "OpenAI API", "Groq API", "PostgreSQL", "JWT", "Vercel"]
      }
    },
    {
      name: "Gesture-Controlled IoT for Accessibility",
      shortDesc: "95%+ accuracy gesture recognition with 33ms latency",
      description: "MediaPipe-based gesture control system for IoT devices. Enables touchless home automation on Raspberry Pi—addressing accessibility needs for motor-impaired users with real-time performance.",
      tags: ["MediaPipe", "Raspberry Pi", "Edge AI", "IoT"],
      image: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=800",
      github: "https://github.com/Msundara19/Home_appliance_control",
      icon: "🤚",
      caseStudy: {
        challenge: "Motor-impaired individuals struggle with traditional IoT controls. Existing gesture systems require expensive hardware or cloud connectivity, raising privacy concerns and adding latency.",
        approach: "Deployed MediaPipe on Raspberry Pi 4 for on-device inference. Implemented custom gesture recognition with 15 control commands for voice assistants and home automation. Optimized pipeline for real-time performance with sub-100ms latency. Integrated with MQTT for IoT device control. Privacy-first design with no cloud dependency.",
        results: ["95%+ gesture recognition accuracy", "33ms median latency", "Privacy-first (no cloud dependency)", "15 custom gestures for home automation"],
        techStack: ["MediaPipe", "Raspberry Pi 4", "OpenCV", "MQTT", "Python", "TensorFlow Lite"]
      }
    },
    {
      name: "Smart Grid Load Forecasting",
      shortDesc: "45% error reduction in power prediction",
      description: "XGBoost-based time series forecasting for smart grid optimization. Analyzed 4.5M+ records to predict electricity demand—reducing MAPE by 45% vs baseline ARIMA.",
      tags: ["XGBoost", "Time Series", "Python", "Smart Grid"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      github: "https://github.com/Msundara19/Smart-Grid-Load-Forecasting",
      icon: "⚡",
      caseStudy: {
        challenge: "Power grids face inefficiency due to poor demand forecasting. Traditional statistical models (ARIMA) fail to capture complex patterns in consumption data, leading to wastage or shortfalls.",
        approach: "Engineered features from 4.5M+ records including lag variables, rolling averages, and temporal patterns. Implemented XGBoost with hyperparameter tuning. Performed extensive EDA to identify consumption patterns. Compared vs ARIMA, LSTM baselines.",
        results: ["45% reduction in MAPE vs ARIMA", "Processed 4.5M+ records", "Feature engineering with 30+ predictors", "Deployment-ready XGBoost model"],
        techStack: ["XGBoost", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Python"]
      }
    }
  ];

  const workExperience = [
    {
      title: "ML Developer Intern",
      company: "National Institute of Ocean Technology",
      period: "Jan 2023 - Apr 2023",
      description: "Built underwater object detection pipeline using CLAHE preprocessing and AdaBoost, achieving 80% accuracy on 500+ images.",
      achievements: ["80% detection accuracy", "500+ images processed", "IEEE Published"],
      github: "https://github.com/Msundara19/Underwater-Resourse-Detection",
      paper: "https://ieeexplore.ieee.org/document/10421038",
      icon: "🌊"
    }
  ];

  const publications = [
    {
      title: "Underwater Resource Detection using Image Processing",
      conference: "IEEE Published",
      date: "July 2023",
      description: "Developed real-time underwater detection system achieving 80% accuracy using Haar Cascade classifiers enhanced with CLAHE preprocessing.",
      highlights: ["Novel CLAHE preprocessing pipeline", "Optimized Haar Cascade training", "GUI reducing setup time by 40%", "25% robustness improvement"],
      link: "https://ieeexplore.ieee.org/document/10421038",
      github: "https://github.com/Msundara19/Underwater-Resourse-Detection"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Artificial Intelligence",
      school: "Illinois Institute of Technology",
      period: "Sep 2024 - Dec 2025",
      courses: ["Hardware Acceleration for ML", "Secure ML", "Computer Vision", "Deep Learning", "Machine Learning", "Intro to Cybersecurity", "Cloud Computing and Cloud native systems", "AI in Smart Grids", "Object Oriented Programming for Machine Learning"],
      logo: "IIT"
    }
  ];

  const writing = [
    {
      title: "Machines vs. Us: A Real Conversation About Artificial Intelligence",
      publication: "TechNews - Illinois Tech",
      date: "April 2025",
      description: "An opinion piece exploring why AI receives unwarranted hatred, addressing concerns about job displacement, hallucinations, privacy, and why machines can never truly replace humans.",
      link: "#",
      icon: "✍️"
    },
    {
      title: "FPGA vs GPU: When Hardware Acceleration Actually Matters",
      publication: "Medium",
      date: "December 2025",
      description: "Lessons from deploying a VGG network on both platforms - and why the results surprised me.",
      link: "#",
      icon: "🔧"
    }
  ];

  const certifications = [
    {
      title: "Structuring Machine Learning Projects",
      issuer: "deeplearning.ai",
      date: "May 2020",
      link: "https://coursera.org/share/91b974c5adb09c83631a9d6f3562dd15",
      icon: "🎓"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "Aug 2020",
      link: "https://coursera.org/share/7a5285796de00639e2fd5a930a302bb7",
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

      {/* Compact Navigation */}
      <nav className="fixed bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-md">
        <div className={`flex items-center gap-0.5 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-xl backdrop-blur-xl border ${darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white/80 border-zinc-200 shadow-xl'}`}>
          <button onClick={() => scrollToSection('home')} className={`p-1.5 sm:p-2 rounded-lg transition-all ${activeSection === 'home' ? (darkMode ? 'bg-zinc-800' : 'bg-zinc-200') : ''}`}><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></button>
          <button onClick={() => scrollToSection('experience')} className={`p-1.5 sm:p-2 rounded-lg transition-all ${activeSection === 'experience' ? (darkMode ? 'bg-zinc-800' : 'bg-zinc-200') : ''}`}><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></button>
          <button onClick={() => scrollToSection('projects')} className={`p-1.5 sm:p-2 rounded-lg transition-all ${activeSection === 'projects' ? (darkMode ? 'bg-zinc-800' : 'bg-zinc-200') : ''}`}><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg></button>
          <a href="https://github.com/Msundara19" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="https://www.linkedin.com/in/meenakshi-sridharan-89133b261/" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          <button onClick={() => setDarkMode(!darkMode)} className="p-1.5 sm:p-2 rounded-lg">{darkMode ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>}</button>
        </div>
      </nav>

      {/* Compact Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-6 sm:py-8 relative z-10">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs mb-3 ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>Open to opportunities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 leading-tight">Hi, I'm Meenakshi 👋</h1>
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 leading-snug ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>AI Enthusiast blending logic, empathy, and code to make machines a little more human.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              <a href="https://drive.google.com/file/d/1zMsqmJKWkRBS8dQZmFEz3pOVWc3cMdKH/view" target="_blank" rel="noopener noreferrer" className={`px-5 py-2.5 rounded-lg font-medium transition-all hover:scale-105 text-sm ${darkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>View Resume</a>
              <button onClick={copyEmail} className={`px-5 py-2.5 rounded-lg font-medium transition-all border-2 hover:scale-105 flex items-center justify-center gap-1.5 text-sm ${darkMode ? 'border-zinc-700 hover:border-zinc-500' : 'border-zinc-300 hover:border-zinc-400'}`}>
                {copied ? <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>Copied!</> : <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>Copy Email</>}
              </button>
            </div>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {['Machine Learning and Deep Learning', 'Hardware Accelerators', 'Computer Vision', 'LLMs', 'Python'].map((tech, idx) => 
                <span key={idx} className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-zinc-900 text-zinc-500 border border-zinc-800' : 'bg-white text-zinc-500 border border-zinc-200'}`}>{tech}</span>
              )}
            </div>
          </div>
          <div className="flex-shrink-0 relative mt-6 lg:mt-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 opacity-50 blur-sm"></div>
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-zinc-800 relative">
              <img src="https://avatars.githubusercontent.com/Msundara19" alt="Meenakshi" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="w-full h-full bg-zinc-800 flex items-center justify-center text-4xl font-bold text-white">MS</div>'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* Compact About Section - UPDATED */}
      <section className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Meenakshi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-base mb-2">About</h3>
              <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                I'm fascinated by the gap between what AI can do in a Jupyter notebook and what it can do in production. Early in my journey, I learned that impressive accuracy means nothing if users can't actually deploy your system. That insight has driven everything since.
              </p>
              <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Now pursuing my M.Eng at Illinois Tech, I build AI systems that work under real-world pressure. I've deployed a fraud detection API processing thousands of daily requests with sub-5 second latency, built a wound monitoring platform delivering clinical-grade analysis in real-time, created a financial advisory system routing between multiple LLMs for optimal responses, and accelerated neural networks 50× on resource-constrained FPGA hardware. My work has been published in IEEE and deployed to production environments serving real users.
              </p>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                What drives me are the constraints themselves. The strict latency requirements. The limited hardware budgets. The scalability challenges. These aren't obstacles—they're what make the engineering interesting. When you can't just add more compute, you have to build something truly efficient. That's where innovation happens, and that's what keeps me motivated.
              </p>
            </div>
            
            {/* Featured Writing */}
            <div>
              <h3 className="font-semibold text-base mb-2 flex items-center gap-1.5">Featured Writing ✍️</h3>
              <div className="space-y-3">
                {writing.map((article, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">{article.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-0.5">{article.title}</h4>
                        <p className={`text-xs mb-1 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{article.publication} • {article.date}</p>
                        <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{article.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Experience Section */}
      <section id="experience" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-4">
            {workExperience.map((exp, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="font-bold text-base">{exp.title}</h3>
                        <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.company}</p>
                      </div>
                      <span className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{exp.period}</span>
                    </div>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {exp.achievements.map((achievement, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded text-xs ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>{achievement}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a href={exp.github} target="_blank" rel="noopener noreferrer" className={`text-xs px-2.5 py-1 rounded-lg border ${darkMode ? 'border-zinc-700 hover:border-zinc-500' : 'border-zinc-300 hover:border-zinc-400'}`}>Code</a>
                      <a href={exp.paper} target="_blank" rel="noopener noreferrer" className={`text-xs px-2.5 py-1 rounded-lg border ${darkMode ? 'border-zinc-700 hover:border-zinc-500' : 'border-zinc-300 hover:border-zinc-400'}`}>Paper</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Publications */}
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-base">📄</span> IEEE Published
            </h3>
            {publications.map((pub, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-sm">{pub.title}</h4>
                  <span className={`text-xs whitespace-nowrap ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{pub.date}</span>
                </div>
                <p className={`text-xs mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{pub.description}</p>
                <div className="mb-2">
                  <p className={`text-xs font-medium mb-1 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>Key Contributions</p>
                  <div className="grid sm:grid-cols-2 gap-1">
                    {pub.highlights.map((highlight, i) => (
                      <div key={i} className={`flex items-start gap-1.5 text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        <span className="text-emerald-500 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className={`text-xs px-2.5 py-1 rounded-lg ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>Read Paper</a>
                  <a href={pub.github} target="_blank" rel="noopener noreferrer" className={`text-xs px-2.5 py-1 rounded-lg border ${darkMode ? 'border-zinc-700' : 'border-zinc-300'}`}>Code</a>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-3">Education</h3>
            {education.map((edu, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{edu.logo}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <div>
                        <h4 className="font-bold text-sm">{edu.degree}</h4>
                        <p className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{edu.school}</p>
                      </div>
                      <span className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{edu.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {edu.courses.map((course, i) => (
                        <span key={i} className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-3">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300'}`}>
                  <div className="flex items-start gap-2">
                    <span className="text-lg">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-0.5">{cert.title}</h4>
                      <p className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compact Projects Section */}
      <section id="projects" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-1">Projects</h2>
            <p className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Click any project to view the case study</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {projects.map((project, idx) => (
              <div key={idx} className={`group rounded-xl overflow-hidden transition-all hover:scale-[1.02] cursor-pointer ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200 shadow-xl'}`} onClick={() => setSelectedProject(project)}>
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className={`absolute top-2 left-2 w-7 h-7 rounded-lg flex items-center justify-center text-sm ${darkMode ? 'bg-zinc-800/80' : 'bg-white/80'} backdrop-blur-sm`}>{project.icon}</div>
                  {project.hackathon && <a href={project.hackathon.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-xs font-medium bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">🏆 {project.hackathon.name}</a>}
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-white text-xs sm:text-sm line-clamp-2 mb-0.5">{project.name}</h3>
                    <p className="text-zinc-300 text-xs line-clamp-1">{project.shortDesc}</p>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`p-1 rounded ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`p-1 rounded ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      )}
                    </div>
                    <span className={`text-xs hidden sm:inline ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>View →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Compact */}
      <section className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className={`p-3 rounded-xl ${darkMode ? 'bg-zinc-900/50 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
                <h3 className="font-semibold text-sm mb-2">{category}</h3>
                <div className="flex flex-wrap gap-1">
                  {items.map((skill, i) => (
                    <span key={i} className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal - Compact */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div className={`relative w-full sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl ${darkMode ? 'bg-zinc-900' : 'bg-white'}`} onClick={(e) => e.stopPropagation()}>
            <div className="relative h-40 sm:h-48">
              <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{selectedProject.icon}</span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">{selectedProject.name}</h2>
                </div>
                {selectedProject.hackathon && (
                  <a href={selectedProject.hackathon.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 mb-1">
                    🏆 Built at {selectedProject.hackathon.name} - {selectedProject.hackathon.location}
                  </a>
                )}
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <p className={`text-sm mb-4 ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>{selectedProject.description}</p>
              <div className="mb-4">
                <h3 className="font-bold text-sm mb-1.5">The Challenge</h3>
                <p className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{selectedProject.caseStudy.challenge}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-sm mb-1.5">The Approach</h3>
                <p className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{selectedProject.caseStudy.approach}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-sm mb-1.5">Results</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.caseStudy.results.map((r, i) => (
                    <div key={i} className={`p-2 rounded-lg ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                      <span className={`text-xs ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-sm mb-1.5">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.caseStudy.techStack.map((t, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-medium text-sm ${darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-zinc-900'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View Code
                </a>
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-medium text-sm ${darkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compact Footer */}
      <footer className={`py-6 sm:py-8 px-4 border-t relative z-10 pb-16 sm:pb-20 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-1">Let's build something amazing</h3>
              <p className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Always open to new opportunities.</p>
            </div>
            <button onClick={copyEmail} className={`px-5 py-2.5 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-1.5 text-sm ${darkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}>
              {copied ? (
                <><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>Copied!</>
              ) : (
                <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Get In Touch</>
              )}
            </button>
          </div>
          <div className={`mt-5 pt-4 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-200'} flex flex-col md:flex-row items-center justify-between gap-3`}>
            <p className={`text-xs ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>© 2025 Meenakshi Sridharan</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Msundara19" target="_blank" rel="noopener noreferrer" className={darkMode ? 'text-zinc-600 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/meenakshi-sridharan-89133b261/" target="_blank" rel="noopener noreferrer" className={darkMode ? 'text-zinc-600 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
