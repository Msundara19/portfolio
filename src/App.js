import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu, Brain, Zap, TrendingUp, Shield, Radio, Droplet, Download, Award, BookOpen, X, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const skills = [
    { 
      category: "Machine Learning & AI", 
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "JAX", "HuggingFace", "LLM Fine-tuning", "GPT/BERT", "Prompt Engineering"], 
      level: 95 
    },
    { 
      category: "Computer Vision", 
      items: ["OpenCV", "CNNs", "Real-time Processing", "Object Detection", "Image Segmentation", "Pose Estimation"], 
      level: 90 
    },
    { 
      category: "MLOps & Cloud", 
      items: ["Kubernetes", "Docker", "GCP", "AWS", "CI/CD", "FastAPI", "REST/gRPC", "Distributed Systems"], 
      level: 85 
    },
    { 
      category: "Programming", 
      items: ["Python", "C++", "SQL", "JavaScript", "Verilog", "CUDA"], 
      level: 90 
    },
    { 
      category: "Data & Analytics", 
      items: ["Data Structures", "Algorithms", "Statistics", "Big Data", "Time Series", "Feature Engineering"], 
      level: 88 
    }
  ];

  const certifications = [
    { 
      name: "IEEE Publication", 
      org: "IEEE Xplore", 
      year: "2023", 
      desc: "Underwater Resource Detection using Image Processing",
      link: "https://ieeexplore.ieee.org/document/10421038"
    },
    { 
      name: "Structuring Machine Learning Projects", 
      org: "Coursera - DeepLearning.AI", 
      year: "2024", 
      desc: "ML project best practices, error analysis, and production deployment strategies",
      link: "https://www.coursera.org/account/accomplishments/certificate/NA2FQV6TPVPD"
    },
    { 
      name: "Python Data Structures", 
      org: "Coursera - University of Michigan", 
      year: "2024", 
      desc: "Advanced Python programming with data structures and algorithms",
      link: "https://www.coursera.org/account/accomplishments/certificate/LTLD9M9JVHEH"
    },
    { 
      name: "Programming for Everybody (Getting Started with Python)", 
      org: "Coursera - University of Michigan", 
      year: "2024", 
      desc: "Fundamentals of Python programming and computational thinking",
      link: "https://www.coursera.org/account/accomplishments/certificate/ZQGPRP6RTRPS"
    }
  ];

  const projects = [
    {
      name: "Wallet Wealth LLM Advisor",
      repo: "wallet-wealth-llm-advisor",
      description: "Production-grade RAG service for financial advisory using FastAPI. Provides intelligent portfolio analysis and risk-based recommendations with local-first architecture.",
      tags: ["LLM", "RAG", "FastAPI", "Production"],
      concepts: ["Retrieval Augmented Generation", "Financial ML", "Prompt Engineering", "Risk Profiling"],
      icon: <Brain className="w-5 h-5" />,
      impact: "Reduced query response time by 40% while maintaining accuracy",
      caseStudy: {
        challenge: "Traditional financial advisory systems couldn't provide personalized, real-time portfolio recommendations at scale. Needed to process complex ETF data and deliver accurate, contextual advice.",
        solution: "Built a RAG-based system combining vector embeddings of financial data with LLM reasoning. Implemented FastAPI microservices with efficient caching and parallel processing.",
        results: ["40% faster query response times", "95% user satisfaction rate", "Handled 10+ daily queries", "Zero hallucination incidents in production"],
        technical: ["Used FAISS for vector similarity search", "Implemented prompt engineering for financial accuracy", "Built custom risk profiling algorithms", "Deployed on Kubernetes with auto-scaling"]
      }
    },
    {
      name: "Smart Grid Load Forecasting",
      repo: "Power_Load_predictor",
      description: "Enterprise ML system processing 100+ data points across 20 grid zones. Achieved 45% error reduction using parallelized KNN and Gradient Boosting algorithms.",
      tags: ["ML Pipeline", "Big Data", "Python", "Production"],
      concepts: ["Gradient Boosting", "Feature Engineering", "Parallel Processing", "Time Series"],
      icon: <TrendingUp className="w-5 h-5" />,
      impact: "Improved distribution efficiency by 25% for city-wide grids",
      caseStudy: {
        challenge: "City power grids needed accurate load forecasting to prevent blackouts and optimize energy distribution. Legacy systems had high error rates and couldn't scale.",
        solution: "Developed a prototype of an ensemble ML pipeline using Gradient Boosting and parallelized KNN. Implemented advanced feature engineering for temporal patterns and weather correlations.",
        results: ["45% reduction in prediction error", "25% improvement in distribution efficiency", "Processed 10+ data points daily", "Prevented 2+ potential blackouts"],
        technical: ["Used XGBoost with custom loss functions", "Parallel processing with multiprocessing library", "Rolling window validation for time series", "Real-time pipeline with automated workflows"]
      }
    },
    {
      name: "Driver Distraction Detection System",
      repo: "Home-Appliance-Control",
      description: "Real-time CNN-based detection achieving 94.3% accuracy on 100+ video frames. Deployed on Raspberry Pi with instant GPIO alerts for commercial drivers.",
      tags: ["Computer Vision", "Edge AI", "CNN", "IoT"],
      concepts: ["Convolutional Neural Networks", "PnP Pose Estimation", "Edge Computing", "Real-time Processing"],
      icon: <Shield className="w-5 h-5" />,
      impact: "Cut projected accident risk by 30% for fleet operations",
      caseStudy: {
        challenge: "Commercial fleet operators needed real-time distraction detection to improve driver safety, but existing solutions were too expensive and required cloud connectivity.",
        solution: "Built lightweight CNN model optimized for Raspberry Pi edge deployment. Integrated GPIO alerts and real-time video processing at 30 FPS with robustness in varied lighting conditions.",
        results: ["94.3% detection accuracy", "30 FPS real-time processing", "Works offline (edge-first)", "Deployed in 2+ commercial vehicles"],
        technical: ["MobileNet-based CNN for efficient inference", "TensorFlow optimization for edge devices", "OpenCV for video pipeline", "Custom GPIO LED alert system"]
      }
    },
    {
      name: "VoiceFun - Audio Transformation Engine",
      repo: "VoiceFun",
      description: "Scalable audio processing system handling 250K+ concurrent streams. Built with optimized I/O and REST APIs for real-time voice transformation with 40% throughput increase.",
      tags: ["Audio ML", "Signal Processing", "Scalability", "REST API"],
      concepts: ["DSP", "Pitch Shifting", "Concurrent Systems", "Streaming Architecture"],
      icon: <Radio className="w-5 h-5" />,
      impact: "Supported 100+ concurrent users with 40% throughput increase",
      caseStudy: {
        challenge: "Needed to build scalable voice transformation system that could handle real-time processing for entertainment applications without latency or quality degradation.",
        solution: "Designed streaming architecture with optimized DSP algorithms. Implemented concurrent processing with efficient memory management and REST API endpoints for low-latency delivery.",
        results: ["2 streams processed", "1+ concurrent users", "40% throughput improvement", "15% error rate reduction"],
        technical: ["NumPy/SciPy for DSP operations", "Asyncio for concurrent processing", "FastAPI with streaming responses", "Modular pipelines for real-time effects"]
      }
    },
    {
      name: "Underwater Resource Detection",
      repo: "Underwater-Resourse-Detection",
      description: "Real-time underwater detection system achieving 80% accuracy on noisy datasets using Haar Cascade and CLAHE. Published in IEEE with GUI for rapid deployment.",
      tags: ["OpenCV", "Python", "Image Processing", "IEEE Publication"],
      concepts: ["Haar Cascade", "CLAHE", "Marine Robotics", "Real-time Detection"],
      icon: <Droplet className="w-5 h-5" />,
      impact: "Published research enabling marine resource identification",
      caseStudy: {
        challenge: "Underwater environments have poor visibility and high noise, making traditional computer vision techniques ineffective for resource detection in marine research.",
        solution: "Combined CLAHE for contrast enhancement with Haar Cascade classifiers. Built GUI with Tkinter for real-time deployment, improving system robustness by 25% and reducing setup time by 40%.",
        results: ["80% detection accuracy on noisy datasets", "IEEE publication accepted", "25% robustness improvement", "40% faster setup for researchers"],
        technical: ["OpenCV Haar Cascade training", "CLAHE histogram equalization preprocessing", "Tkinter GUI for broad adoption", "Optimized for underwater camera systems"]
      }
    }
  ];

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1m4rhFX65nSKreZuU60ROfDp29tMzTHbS/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-cyan-400" />
            <span className="font-mono text-lg font-semibold">MS</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-lg transition-all hover:scale-105"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Resume</span>
            </button>
            <div className="flex gap-4">
              <a href="https://github.com/Msundara19" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/meenakshi-sridharan-89133b261/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:msridharansundaram@hawk.illinoistech.edu" className="hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-mono">
            Machine Learning Engineer
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Meenakshi Sridharan
          </h1>
          <p className="text-2xl text-slate-400 font-light max-w-3xl">
            Shipping production ML systems from <span className="text-cyan-400 font-medium">LLMs</span> to <span className="text-cyan-400 font-medium">computer vision</span> to <span className="text-cyan-400 font-medium">edge AI</span>
          </p>
          <div className="flex gap-3 text-sm text-slate-500 font-mono flex-wrap">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Master of Eng in AI for Computer Vision & Control @ Illinois Tech
            </span>
            <span>•</span>
            <span>Chicago, IL</span>
            <span>•</span>
            <span>Prev: Wallet Wealth (SWE Intern)</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
          <p className="text-slate-400">Production-ready ML systems with measurable business impact</p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 hover:scale-[1.01]"
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                  <div className="w-full h-full p-6 flex items-center justify-center">
                    {idx === 0 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="rag-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e1b4b" />
                            <stop offset="100%" stopColor="#1e3a8a" />
                          </linearGradient>
                          <radialGradient id="db-glow">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <rect width="400" height="300" fill="url(#rag-bg)" />
                        <circle cx="80" cy="150" r="60" fill="url(#db-glow)">
                          <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="80" cy="150" r="30" fill="#7c3aed" stroke="#22d3ee" strokeWidth="3" />
                        <text x="80" y="155" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">ETF DB</text>
                        <path d="M 110 150 L 160 150" stroke="#22d3ee" strokeWidth="3" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite" />
                        </path>
                        <rect x="170" y="110" width="80" height="80" rx="10" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="3" />
                        <circle cx="195" cy="140" r="6" fill="#22d3ee">
                          <animate attributeName="fill" values="#22d3ee;#ec4899;#22d3ee" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="225" cy="140" r="6" fill="#ec4899">
                          <animate attributeName="fill" values="#ec4899;#22d3ee;#ec4899" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <path d="M 185 160 Q 210 170 235 160" stroke="#fbbf24" strokeWidth="2" fill="none" />
                        <text x="210" y="185" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="monospace" fontWeight="bold">RAG</text>
                        <path d="M 250 150 L 300 150" stroke="#10b981" strokeWidth="3" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" begin="0.5s" repeatCount="indefinite" />
                        </path>
                        <rect x="310" y="125" width="70" height="50" rx="5" fill="#7c3aed" stroke="#22d3ee" strokeWidth="3" />
                        <text x="345" y="145" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="monospace" fontWeight="bold">Portfolio</text>
                        <text x="345" y="158" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="monospace" fontWeight="bold">Analysis</text>
                        {[0, 1, 2].map((i) => (
                          <circle key={i} r="3" fill="#22d3ee">
                            <animate attributeName="cx" values="110;160" dur="2s" begin={i * 0.7} repeatCount="indefinite" />
                            <animate attributeName="cy" values={`${145 + i * 5};${145 + i * 5}`} dur="2s" begin={i * 0.7} repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;1;0" dur="2s" begin={i * 0.7} repeatCount="indefinite" />
                          </circle>
                        ))}
                      </svg>
                    )}
                    
                    {idx === 1 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="grid-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e3a8a" />
                            <stop offset="100%" stopColor="#7c2d12" />
                          </linearGradient>
                          <linearGradient id="actual" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f87171" />
                            <stop offset="100%" stopColor="#fbbf24" />
                          </linearGradient>
                          <linearGradient id="predict" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#a78bfa" />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="300" fill="url(#grid-bg)" />
                        {[0,1,2,3,4].map(i => (
                          <line key={i} x1="50" y1={70 + i*40} x2="350" y2={70 + i*40} stroke="#475569" strokeWidth="1" opacity="0.3" />
                        ))}
                        <path d="M 50 200 Q 120 170 200 180 T 350 140" stroke="url(#actual)" strokeWidth="4" fill="none">
                          <animate attributeName="d" 
                            values="M 50 200 Q 120 170 200 180 T 350 140;M 50 200 Q 120 180 200 170 T 350 150;M 50 200 Q 120 170 200 180 T 350 140"
                            dur="4s" repeatCount="indefinite" />
                        </path>
                        <text x="360" y="145" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold">Actual</text>
                        <path d="M 50 200 Q 120 175 200 185 T 350 145" stroke="url(#predict)" strokeWidth="4" fill="none" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
                        </path>
                        <text x="360" y="160" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold">Predict</text>
                        {[70, 170, 270, 350].map((x, i) => (
                          <g key={i}>
                            <circle cx={x} cy={190 - i*12} r="8" fill="#22d3ee" opacity="0.2">
                              <animate attributeName="r" values="8;14;8" dur="2s" begin={i * 0.3} repeatCount="indefinite" />
                            </circle>
                            <circle cx={x} cy={190 - i*12} r="4" fill="#fbbf24">
                              <animate attributeName="r" values="4;6;4" dur="2s" begin={i * 0.3} repeatCount="indefinite" />
                            </circle>
                          </g>
                        ))}
                        <text x="200" y="35" textAnchor="middle" fill="#a78bfa" fontSize="14" fontFamily="monospace" fontWeight="bold">
                          20 Zones | 1M+ Points
                        </text>
                      </svg>
                    )}
                    
                    {idx === 2 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="driver-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e3a8a" />
                            <stop offset="100%" stopColor="#831843" />
                          </linearGradient>
                          <radialGradient id="alert">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <rect width="400" height="300" fill="url(#driver-bg)" />
                        <rect x="50" y="50" width="300" height="200" rx="5" fill="none" stroke="#a78bfa" strokeWidth="3" />
                        <circle cx="200" cy="120" r="30" fill="#312e81" stroke="#22d3ee" strokeWidth="3" />
                        <rect x="170" y="145" width="60" height="70" rx="8" fill="#312e81" stroke="#22d3ee" strokeWidth="3" />
                        <rect x="150" y="85" width="100" height="140" rx="5" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="10,5">
                          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                        </rect>
                        <circle cx="310" cy="80" r="35" fill="url(#alert)">
                          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="310" cy="80" r="10" fill="#10b981">
                          <animate attributeName="r" values="10;12;10" dur="1s" repeatCount="indefinite" />
                        </circle>
                        <text x="270" y="85" fill="#10b981" fontSize="12" fontFamily="monospace" fontWeight="bold">ALERT</text>
                        <rect x="60" y="255" width="100" height="30" rx="5" fill="#7c3aed" opacity="0.9" />
                        <text x="110" y="275" textAnchor="middle" fill="#fbbf24" fontSize="12" fontFamily="monospace" fontWeight="bold">94.3% ACC</text>
                        <rect x="250" y="255" width="85" height="30" rx="5" fill="#ec4899" opacity="0.9" />
                        <text x="292" y="275" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace" fontWeight="bold">30 FPS</text>
                        <line x1="50" y1="100" x2="350" y2="100" stroke="#22d3ee" strokeWidth="1" opacity="0.5">
                          <animate attributeName="y1" values="50;250;50" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="y2" values="50;250;50" dur="3s" repeatCount="indefinite" />
                        </line>
                      </svg>
                    )}
                    
                    {idx === 3 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="audio-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#581c87" />
                            <stop offset="100%" stopColor="#1e3a8a" />
                          </linearGradient>
                          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#a78bfa" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#f87171" />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="300" fill="url(#audio-bg)" />
                        <text x="30" y="85" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold">Input</text>
                        <path d="M 30 100 Q 80 70 130 100 T 230 100 T 370 100" stroke="url(#wave1)" strokeWidth="3" fill="none" opacity="0.9">
                          <animate attributeName="d" 
                            values="M 30 100 Q 80 70 130 100 T 230 100 T 370 100;M 30 100 Q 80 130 130 100 T 230 100 T 370 100;M 30 100 Q 80 70 130 100 T 230 100 T 370 100"
                            dur="2s" repeatCount="indefinite" />
                        </path>
                        <path d="M 200 120 L 200 170" stroke="#a78bfa" strokeWidth="3">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                        </path>
                        <polygon points="200,170 195,160 205,160" fill="#a78bfa" />
                        <text x="30" y="185" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">Output</text>
                        <path d="M 30 200 Q 80 165 130 200 T 230 200 T 370 200" stroke="url(#wave2)" strokeWidth="4" fill="none">
                          <animate attributeName="d" 
                            values="M 30 200 Q 80 165 130 200 T 230 200 T 370 200;M 30 200 Q 80 235 130 200 T 230 200 T 370 200;M 30 200 Q 80 165 130 200 T 230 200 T 370 200"
                            dur="1.8s" repeatCount="indefinite" />
                        </path>
                        <rect x="140" y="240" width="120" height="45" rx="8" fill="#312e81" stroke="#a78bfa" strokeWidth="3" />
                        <text x="200" y="260" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold">250K+ Streams</text>
                        <text x="200" y="275" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">100+ Users</text>
                        {[50, 90, 130, 170, 210, 250, 290, 330, 370].map((x, i) => (
                          <rect key={i} x={x - 3} width="6" fill="#22d3ee" opacity="0.6">
                            <animate attributeName="y" values={`${150 - i * 5};${100};${150 - i * 5}`} dur="1s" begin={i * 0.1} repeatCount="indefinite" />
                            <animate attributeName="height" values={`${10 + i * 5};${50};${10 + i * 5}`} dur="1s" begin={i * 0.1} repeatCount="indefinite" />
                          </rect>
                        ))}
                      </svg>
                    )}
                    
                    {idx === 4 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="underwater-bg" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0c4a6e" />
                            <stop offset="50%" stopColor="#075985" />
                            <stop offset="100%" stopColor="#0e7490" />
                          </linearGradient>
                          <radialGradient id="sonar">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <rect width="400" height="300" fill="url(#underwater-bg)" />
                        {[0,1,2,3,4].map(i => (
                          <ellipse key={i} cx="200" cy="280" rx={50 + i*30} ry={20 + i*15} fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.3">
                            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin={i * 0.4} repeatCount="indefinite" />
                          </ellipse>
                        ))}
                        <circle cx="150" cy="120" r="40" fill="url(#sonar)">
                          <animate attributeName="r" values="40;60;40" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="150" cy="120" r="25" fill="#164e63" stroke="#22d3ee" strokeWidth="3" />
                        <text x="150" y="127" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">TARGET</text>
                        <rect x="130" y="100" width="40" height="40" rx="3" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="5,3">
                          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                        </rect>
                        <circle cx="280" cy="180" r="15" fill="#0e7490" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
                        <circle cx="320" cy="140" r="12" fill="#0e7490" stroke="#06b6d4" strokeWidth="2" opacity="0.4" />
                        <line x1="200" y1="280" x2="150" y2="120" stroke="#22d3ee" strokeWidth="2" opacity="0.4">
                          <animate attributeName="x2" values="100;300;100" dur="4s" repeatCount="indefinite" />
                          <animate attributeName="y2" values="120;120;120" dur="4s" repeatCount="indefinite" />
                        </line>
                        <rect x="50" y="250" width="90" height="30" rx="5" fill="#164e63" stroke="#22d3ee" strokeWidth="2" />
                        <text x="95" y="270" textAnchor="middle" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold">80% ACC</text>
                        <rect x="260" y="250" width="90" height="30" rx="5" fill="#164e63" stroke="#10b981" strokeWidth="2" />
                        <text x="305" y="270" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">IEEE Pub</text>
                        <text x="200" y="35" textAnchor="middle" fill="#22d3ee" fontSize="13" fontFamily="monospace" fontWeight="bold">
                          Underwater Detection
                        </text>
                      </svg>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                <div className="md:col-span-3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-mono">/{project.repo}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
                        className="p-2 hover:bg-slate-800 rounded-lg transition-all hover:scale-110"
                        title="View case study"
                      >
                        <BookOpen className="w-5 h-5 text-cyan-400" />
                      </button>
                      <a
                        href={`https://github.com/Msundara19/${project.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-slate-800 rounded-lg transition-all hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4 inline-block px-3 py-1.5 bg-green-400/10 border border-green-400/20 rounded-lg hover:bg-green-400/20 transition-colors">
                    <span className="text-green-400 text-sm font-medium">💡 {project.impact}</span>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">Technical Concepts</div>
                    <div className="flex flex-wrap gap-2">
                      {project.concepts.map((concept, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-800/50 border border-slate-700 rounded text-xs text-slate-300 hover:border-cyan-400/50 hover:bg-slate-800 transition-all">
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-cyan-400/10 text-cyan-400 rounded text-xs font-medium hover:bg-cyan-400/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {selectedProject === idx && (
                <div className="border-t border-slate-800 bg-slate-950/80 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Case Study
                    </h4>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-1 hover:bg-slate-800 rounded transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm font-semibold text-slate-400 mb-2">Challenge</h5>
                      <p className="text-slate-300 text-sm mb-4">{project.caseStudy.challenge}</p>
                      
                      <h5 className="text-sm font-semibold text-slate-400 mb-2">Solution</h5>
                      <p className="text-slate-300 text-sm">{project.caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-slate-400 mb-2">Key Results</h5>
                      <ul className="space-y-2 mb-4">
                        {project.caseStudy.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h5 className="text-sm font-semibold text-slate-400 mb-2">Technical Implementation</h5>
                      <ul className="space-y-2">
                        {project.caseStudy.technical.map((tech, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {hoveredProject === idx && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-cyan-400/5 to-transparent border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-400/10 rounded-xl">
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Production Experience</h3>
              <p className="text-slate-300 mb-4">Software Engineering Intern @ Wallet Wealth LLP (July 2023 - July 2024)</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2 hover:text-slate-300 transition-colors">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Scaled microservices on Kubernetes & GCP, reducing API latency by 50% for 100+ concurrent users</span>
                </li>
                <li className="flex items-start gap-2 hover:text-slate-300 transition-colors">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Built ranking algorithms with risk APIs, reducing error rates by 15%</span>
                </li>
                <li className="flex items-start gap-2 hover:text-slate-300 transition-colors">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Automated CI/CD with GitHub Actions & Docker for zero-downtime deployments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
        <div className="grid gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{skill.category}</h3>
                <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded text-sm hover:bg-slate-800 transition-all">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">Certifications & Recognition</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all hover:scale-105 block"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/10 rounded-lg">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                    <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-slate-400 mb-2">{cert.org} • {cert.year}</p>
                  <p className="text-sm text-slate-500">{cert.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Get In Touch</h3>
              <div className="space-y-3">
                <a href="mailto:msridharansundaram@hawk.illinoistech.edu" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>msridharansundaram@hawk.illinoistech.edu</span>
                </a>
                <a href="tel:312-404-7358" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                  <span className="text-lg">📞</span>
                  <span>312-404-7358</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Msundara19" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/meenakshi-sridharan-89133b261/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              © 2025 Meenakshi Sridharan. Shipping AI systems that scale.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
