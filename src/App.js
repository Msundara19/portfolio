import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ from: 'bot', text: "Hi! I'm Meenakshi's portfolio assistant. Ask me about her skills, projects, experience, or anything else on her resume." }]);
  const [chatInput, setChatInput] = useState('');

  const email = "msridharansundaram@hawk.illinoistech.edu";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getChatResponse = (input) => {
    const q = input.toLowerCase();
    if (/\b(hi|hello|hey|sup|yo)\b/.test(q))
      return "Hey! Ask me anything about Meenakshi — her projects, skills, experience, or how to reach her.";
    if (/who (is|are)|about (her|meenakshi)|introduce|tell me about/.test(q))
      return "Meenakshi Sridharan is an AI/ML Systems Engineer. She completed her Master's in AI for Computer Vision at Illinois Institute of Technology (2024–2025) and her BE in ECE from Hindustan Institute of Technology and Science, Chennai (2019–2023). She builds production ML systems — inference optimization, computer vision pipelines, LLM applications, and hardware acceleration on FPGA.";
    if (/soft skill|non.tech|people skill|communication|leadership skill|interpersonal/.test(q))
      return "Beyond her technical work, Meenakshi has built strong soft skills through non-technical roles:\n\n• Editorial leadership — as Assistant Editor in Chief at IIT Chicago's TechNews, she led a team of writers, managed editorial deadlines, and communicated complex tech topics to a broad audience.\n• Technical writing & communication — as a Senior Writer she translated dense technical subjects into accessible articles, honing clarity and concision.\n• Business development — at Milaap (2023) she worked on outreach and stakeholder engagement, developing negotiation and relationship-building skills.\n• Operations & coordination — at CPS she managed structured testing workflows, building attention to detail and process discipline.\n\nThese roles reflect strong communication, team collaboration, time management, and the ability to work across both technical and non-technical audiences.";
    if (/skill|tech|stack|language|tool|framework|know|proficient|expert/.test(q))
      return "Her core skills span: ML/AI (PyTorch, TensorFlow, scikit-learn), Computer Vision (OpenCV, YOLO, SSD), LLMs & GenAI (LangChain, RAG, Groq, OpenAI), Hardware (FPGA, Vitis HLS, ONNX, CoreML, Apple Silicon), Backend (FastAPI, Python, Node.js, Redis), and Cloud/Infra (Railway, Docker, Git). She's particularly strong at inference optimization and deploying ML to production.";
    if (/python|pytorch|tensorflow|opencv|fastapi|docker|redis|onnx|coreml|fpga|langchain|rag/.test(q))
      return "Yes, she works with that. Her main stack includes Python, PyTorch, FastAPI, OpenCV, ONNX, CoreML, LangChain, and Redis. For hardware she uses FPGA with Vitis HLS. Deployed apps run on Railway with Docker.";
    if (/good hire|why hire|why should|stand out|strengths|what makes her|unique|value she|bring to/.test(q))
      return "A few things make Meenakshi stand out:\n\n• She ships to production — her projects aren't demos. TrustCart runs on Railway, FastInfer is a live API, MediTrack has real clinical use cases.\n• She works across the full stack — from FPGA-level INT16 quantization to LLM-powered REST APIs to Next.js frontends.\n• She has research depth — IEEE-published work on underwater object detection from her time at NIOT.\n• She optimizes for real constraints — sub-5s latency, 40% API cost reduction, 49.8× speedup. Not just accuracy on a benchmark.\n• She communicates well — her writing background (TechNews editor, Medium author) means she can explain complex systems clearly to any audience.\n• She learns fast and builds independently — most of her projects were self-initiated or built during internships with real-world impact.";
    if (/prefer|ideal role|what role|what kind of role|what type of role|what position|looking for in a role|what does she want|what job/.test(q))
      return "Meenakshi is looking for roles as an AI/ML Engineer, ML Infrastructure Engineer, Software Engineer, or Software Developer — ideally in positions that involve building and deploying production ML systems.";
    if (/ready|available|hiring|looking for work|open to work|actively look|job seek|currently looking/.test(q))
      return "Yes! Meenakshi is actively open to AI/ML engineering and systems roles. You can reach her at msridharansundaram@hawk.illinoistech.edu — there's also a 'Get In Touch' button at the bottom of this page.";
    if (/experience|job|intern|career|position|role/.test(q))
      return "She has two ML internships:\n\n1. Machine Learning Intern at Wallet Wealth LLP (Jun 2023 – Jul 2024, Full-time) — built the core LLM-powered financial advisory platform with multi-provider routing (Groq + OpenAI), RAG retrieval, and Redis caching, reducing API costs ~40%.\n\n2. ML Research Intern at National Institute of Ocean Technology (Jan 2023 – Apr 2024, Part-time) — built a real-time underwater object detection system for AUV imagery, published in IEEE.";
    if (/wallet wealth|financial|llm advisor/.test(q))
      return "At Wallet Wealth LLP (Jun 2023 – Jul 2024, Full-time), Meenakshi developed the core AI financial advisory platform. She implemented multi-provider LLM routing between Groq and OpenAI, built RAG-based retrieval for personalized recommendations, added Redis caching to cut API costs ~40%, and achieved sub-3s query response times on a live client-facing platform.";
    if (/niot|ocean technology|underwater|auv/.test(q))
      return "At the National Institute of Ocean Technology (Jan 2023 – Apr 2024, Part-time), she built a real-time underwater object detection system for Autonomous Underwater Vehicle (AUV) imagery. This research was published in IEEE.";
    if (/project|built|build|ship|work on/.test(q))
      return "Her key projects:\n\n• FastInfer — 2.3× ML inference speedup on Apple Silicon using ONNX + CoreML FP16 + Redis caching (Featured)\n• TrustCart — real-time e-commerce fraud detection with Groq LLM, 95%+ precision, sub-5s response\n• MediTrack v2.0 — clinical-grade wound healing monitor with computer vision\n• FPGA VGG — 49.8× faster CNN inference on FPGA with INT16 quantization\n• SSD Object Detection — custom SSD pipeline for real-world object detection\n• Smart Grid Forecasting — 45% error reduction in power prediction\n• Gesture IoT — 95%+ accuracy gesture recognition at 33ms latency\n\nClick any project card on the site to see the full case study.";
    if (/fastinfer|inference|apple silicon|onnx|coreml/.test(q))
      return "FastInfer is her featured project — a production ML inference optimizer for ResNet-50 on Apple Silicon. It stacks ONNX runtime, CoreML FP16 quantization, static batching, Redis caching, and multi-worker FastAPI serving to achieve 2.3× throughput improvement. Each optimization was benchmarked independently. Deployed live on Railway.";
    if (/trustcart|fraud|e.?commerce/.test(q))
      return "TrustCart is an AI fraud detection system for e-commerce. It uses FastAPI + Groq LLM (Llama 3.1) to analyze product listings from Google Shopping and eBay using statistical anomaly detection. It achieves 95%+ precision with sub-5 second response times. Deployed on Railway.";
    if (/meditrack|wound|medical|clinical/.test(q))
      return "MediTrack v2.0 is a clinical-grade wound healing monitor. It uses computer vision (OpenCV + ML) to analyze wound progression across multiple patients, providing structured healing reports. Built with Next.js on the frontend.";
    if (/fpga|vgg|hardware|vitis|hls|quantization/.test(q))
      return "She implemented VGG neural network inference on FPGA using Vitis HLS, achieving 49.8× faster CNN inference compared to CPU baseline through INT16 quantization and hardware pipelining. This is one of her core hardware acceleration projects.";
    if (/ssd|object detection/.test(q))
      return "She built a custom SSD (Single Shot MultiBox Detector) object detection pipeline for real-world detection tasks, documented in a technical report.";
    if (/smart grid|power|forecast/.test(q))
      return "The Smart Grid Forecasting project achieved a 45% reduction in power prediction error using ML-based load forecasting techniques.";
    if (/gesture|iot|accessibility/.test(q))
      return "The Gesture-Controlled IoT system achieves 95%+ gesture recognition accuracy at 33ms latency, designed for accessibility applications.";
    if (/education|degree|study|university|illinois|iit|hindustan|masters|bachelor/.test(q))
      return "Meenakshi holds:\n\n• MEng in AI for Computer Vision — Illinois Institute of Technology, Chicago (Sep 2024 – Dec 2025)\n• BE in Electronics & Communication Engineering — Hindustan Institute of Technology and Science, Chennai (2019–2023), graduated as Best Outgoing Student\n\nCoursework includes ML & AI, Computer Networks, IoT, Advanced VLSI, Signals & Systems, and MATLAB & Simulink.";
    if (/publish|ieee|paper|research/.test(q))
      return "She has an IEEE-published research paper on real-time underwater object detection for AUV systems, from her work at NIOT. She also writes on Medium — recent articles include 'FPGA vs GPU', 'Machines vs. Us', and 'What If an AI Could Attend Your Zoom Calls — Meet Pickle'.";
    if (/medium|article|writ|blog/.test(q))
      return "She writes on Medium and for IIT's TechNews. Articles include:\n• 'What If an AI Could Attend Your Zoom Calls — Meet Pickle' (Medium, Feb 2026)\n• 'FPGA vs GPU' (Medium, Dec 2025)\n• 'Machines vs. Us' (TechNews, Apr 2025)";
    if (/award|honor|best|achievement/.test(q))
      return "She received two awards from Hindustan University:\n• Best Outgoing Student Award (May 2023)\n• Best Project Award — Home Appliance Control System (Dec 2022)";
    if (/certif/.test(q))
      return "Her certifications include:\n• Google AI Essentials — Google (2026)\n• Understanding Basic SQL Syntax — Coursera (2026)\n• Structuring ML Projects — deeplearning.ai (May 2020)\n• Python Data Structures — University of Michigan (Aug 2020)";
    if (/leadership|technews|editor|cps|milaap/.test(q))
      return "Outside tech, she served as Assistant Editor in Chief at IIT Chicago's TechNews (2025), was a Senior Writer there before that, worked as a Testing Staff at CPS, and was a Business Development Associate at Milaap (2023).";
    if (/contact|email|reach|hire|available|open to/.test(q))
      return "She's open to AI/ML engineering and systems roles. You can reach her at msridharansundaram@hawk.illinoistech.edu — there's also a 'Get In Touch' button at the bottom of this page.";
    if (/github|linkedin|social/.test(q))
      return "GitHub: github.com/Msundara19\nLinkedIn: linkedin.com/in/meenakshi-sridharan-89133b261\nBoth links are in the sidebar.";
    if (/location|based|where|city|chicago|india|chennai/.test(q))
      return "She's based in Chicago, IL (at Illinois Tech) and is originally from Chennai, India.";
    if (/gpa|grade|cgpa|academic score|marks/.test(q))
      return "Meenakshi's academic record:\n• Undergraduate GPA: 3.3 — BE in ECE, Hindustan Institute of Technology and Science\n• Postgraduate GPA: 3.5 — MEng in AI for Computer Vision, Illinois Institute of Technology\nShe also graduated with the Best Outgoing Student Award from her undergrad.";
    if (/remote|relocat|onsite|hybrid|in.person|work from/.test(q))
      return "Yes to both — Meenakshi is fully open to remote work and willing to relocate. She's currently based in Chicago, IL.";
    if (/how (many|long|much) (year|experience|time)|years of exp|total exp|work exp|how experienced/.test(q))
      return "Meenakshi has approximately 2.5 years of total professional experience:\n\n• ~1.4 years of hands-on technical ML/AI experience — as an ML Intern at Wallet Wealth (full-time, 13 months) and ML Research Intern at NIOT (part-time, overlapping period).\n• ~1 year of non-technical experience across editorial leadership (TechNews), operations (CPS), and business development (Milaap).\n\nWhile her formal internship tenure is ~1.4 years in tech, the breadth of projects she's independently shipped — spanning inference optimization, computer vision, LLMs, and FPGA — reflects a depth that goes well beyond that number.";
    if (/language|speak|spoken|tongue|fluent/.test(q))
      return "Meenakshi is fluent in three languages: English, Hindi, and Tamil.";
    if (/start|notice period|join|when can|available from|immediate/.test(q))
      return "She can start immediately — no notice period required.";
    if (/background|overview|summary|who is she|tell me more/.test(q))
      return "Meenakshi is an AI/ML Systems Engineer who builds things that actually ship. She completed her Master's in AI for Computer Vision at Illinois Tech (2025) after her BE in ECE from Hindustan Institute, Chennai.\n\nProfessionally, she's built an LLM-powered financial advisory platform at Wallet Wealth and published IEEE research on underwater object detection at NIOT.\n\nHer projects span the full ML stack — a 2.3× inference speedup on Apple Silicon (FastInfer), a fraud detection API with 95%+ precision (TrustCart), clinical-grade wound analysis (MediTrack), and 49.8× CNN acceleration on FPGA. She's comfortable from hardware to production API.";
    if (/resume|cv|download|view resume/.test(q))
      return "You can view or download her resume directly from this portfolio site — look for the 'Resume' or 'Download Resume' button. You can also reach her at msridharansundaram@hawk.illinoistech.edu for a copy.";
    if (/hobb|interest|outside work|free time|personal|fun|passion|sing|music/.test(q))
      return "Outside of work, Meenakshi sings and writes — both creative outlets that likely feed into the communication clarity she brings to her technical writing and documentation.";
    if (/weakness|improve|struggle|not good at|limitation|flaw|area of growth/.test(q))
      return "Meenakshi's honest answer: she tends to over-benchmark before committing to an approach. She'll profile three inference strategies before picking one, or stress-test an API beyond what the brief asks for.\n\nIn hindsight that's a feature — it's exactly why her projects consistently hit concrete numbers (2.3× throughput, sub-5s latency, 49.8× speedup) rather than just 'it works'. The weakness is really just very high standards applied early.";
    return "I'm not sure about that one. Try asking about her skills, projects, experience, education, GPA, languages, or how to contact her!";
  };

  const sendChatMessage = () => {
    const text = chatInput.trim();
    if (!text) return;
    const userMsg = { from: 'user', text };
    const botMsg = { from: 'bot', text: getChatResponse(text) };
    setChatMessages(prev => [...prev, userMsg, botMsg]);
    setChatInput('');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setIsLoading(false), 1500);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-in');
      }),
      { threshold: 0.08 }
    );
    // Small delay so React has finished re-rendering DOM nodes after darkMode switch
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 50);
    return () => { clearTimeout(timeout); observer.disconnect(); };
  }, [isLoading, darkMode, activeFilter]);

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
      category: "ML Systems",
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
      category: "Computer Vision",
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
      category: "Hardware",
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
      category: "LLM",
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
      category: "Computer Vision",
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
      category: "ML Systems",
      name: "Smart Grid Load Forecasting",
      shortDesc: "45% error reduction in power prediction",
      description: "XGBoost-based time series forecasting for smart grid optimization. Analyzed 4.5M+ records to predict electricity demand—reducing MAPE by 45% vs baseline ARIMA.",
      tags: ["XGBoost", "Time Series", "Python", "Smart Grid"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      github: "https://github.com/Msundara19/Power_Load_predictor",
      icon: "⚡",
      caseStudy: {
        challenge: "Power grids face inefficiency due to poor demand forecasting. Traditional statistical models (ARIMA) fail to capture complex patterns in consumption data, leading to wastage or shortfalls.",
        approach: "Engineered features from 4.5M+ records including lag variables, rolling averages, and temporal patterns. Implemented XGBoost with hyperparameter tuning. Performed extensive EDA to identify consumption patterns. Compared vs ARIMA, LSTM baselines.",
        results: ["45% reduction in MAPE vs ARIMA", "Processed 4.5M+ records", "Feature engineering with 30+ predictors", "Deployment-ready XGBoost model"],
        techStack: ["XGBoost", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Python"]
      }
    },
    {
      category: "Computer Vision",
      name: "SSD Object Detection - Computer Vision",
      shortDesc: "MobileNetV1-SSD-lite with +2.4% mAP on PASCAL VOC",
      description: "Implemented and optimized MobileNetV1-SSD-lite for real-time 2D object detection on PASCAL VOC 2012. Applied AMP training, cosine LR scheduling, and architectural modifications—improving mAP from 45.86% to 47.26% and FPS from 138 to 145.",
      tags: ["PyTorch", "SSD", "Object Detection", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
      live: "/Computer_vision_technical_documentation.pdf",
      icon: "🎯",
      caseStudy: {
        challenge: "The baseline MobileNetV1-SSD-lite model suffered from memory inefficiency, poor learning rate scheduling, and insufficient loss monitoring—limiting detection accuracy on PASCAL VOC 2012.",
        approach: "Diagnosed three root causes in the baseline: memory waste, naive LR decay, and missing loss visibility. Applied Automatic Mixed Precision (AMP) training to cut memory footprint, replaced step decay with cosine annealing, added granular classification/regression loss logging, and modified the detection head architecture for better feature utilization.",
        results: ["mAP: 45.86% → 47.26% (+3.05% relative)", "FPS: 138.83 → 145.24 (+4.62%)", "Car detection: +11.9% | Train: +6.7% | Motorbike: +7.7%", "Validation loss reduced by 2.43%"],
        techStack: ["PyTorch", "MobileNetV1-SSD-lite", "PASCAL VOC 2012", "AMP", "Cosine Annealing", "Python"]
      }
    },
    {
      category: "ML Systems",
      name: "Distributed Systems & Cloud Computing",
      shortDesc: "VMs to Kubernetes — Docker, Cassandra, microservices",
      description: "End-to-end distributed systems project covering containerization, orchestration, and distributed databases. Built fault-tolerant microservices with Docker Compose, deployed Cassandra clusters with tunable consistency, and orchestrated workloads on Kubernetes.",
      tags: ["Docker", "Kubernetes", "Cassandra", "Microservices"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
      live: "/Cloud_computing_technical_document.pdf",
      icon: "☁️",
      caseStudy: {
        challenge: "Understanding how distributed systems handle failure, consistency, and scale requires hands-on implementation — not just theory. Each layer from VM provisioning to Kubernetes orchestration introduces unique failure modes.",
        approach: "Progressed from bare-metal VM provisioning through Docker containerization, multi-service orchestration with Docker Compose, Cassandra cluster deployment with consistency experiments (ONE/QUORUM/ALL), to full Kubernetes deployment with StatefulSets. Implemented and stress-tested fault tolerance at each layer.",
        results: ["Fault-tolerant key-value store with PostgreSQL backend", "Cassandra cluster with tunable consistency (ONE/QUORUM/ALL)", "Kubernetes StatefulSet orchestration with kind", "Documented failure modes and recovery strategies across all layers"],
        techStack: ["Docker", "Docker Compose", "Kubernetes", "Cassandra", "PostgreSQL", "Go", "kind"]
      }
    },
    {
      category: "Hardware",
      featured: true,
      name: "FastInfer - ML Inference Optimizer",
      shortDesc: "2.3× throughput on Apple Silicon with layered optimization",
      description: "Production ML inference API for ResNet-50 on Apple Silicon. Stacks ONNX, CoreML FP16, static batching, Redis caching, and multi-worker serving—each benchmark measured independently. Deployed live on Railway.",
      tags: ["ONNX", "CoreML", "FastAPI", "Apple Silicon"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      github: "https://github.com/Msundara19/fastinfer",
      live: "https://fastinfer-production.up.railway.app",
      icon: "🚀",
      caseStudy: {
        challenge: "ML models in production default to slow inference. Standard PyTorch ignores specialized silicon — the Apple Neural Engine, half-precision compute, and hardware batching — leaving significant speed on the table.",
        approach: "Layered every meaningful acceleration technique on Apple M5: ONNX CoreML export, direct FP16 conversion, static batch pre-compilation, dynamic request batching, multi-worker serving, and Redis caching. Each optimization benchmarked independently with honest reporting. Found preprocessing (~8.5ms PIL decode) was the real bottleneck, not inference (~1ms CoreML FP16).",
        results: ["2.3× throughput over baseline (104 req/s vs 45.8)", "CoreML FP16 pure inference: 1.17ms", "Redis cache eliminates repeated inference overhead", "Preprocessing identified as true bottleneck — not the model"],
        techStack: ["PyTorch", "ONNX", "CoreML", "FastAPI", "Redis", "Docker", "Railway", "Apple M5", "Groq LLM", "Prometheus"]
      }
    }
  ];

  const workExperience = [
    {
      title: "Machine Learning Intern",
      company: "Wallet Wealth LLP",
      period: "Jun 2023 - Jul 2024",
      location: "Chennai, Tamil Nadu, India · Full-time",
      description: "Developed core features for Wallet Wealth's AI-powered financial advisory platform — full-stack solutions integrating LLM capabilities with client management to deliver personalized wealth advisory services.",
      achievements: ["Sub-3s LLM query response", "~40% API cost reduction via caching", "Multi-provider LLM routing (Groq + OpenAI)", "Deployed to live client-facing platform"],
      bullets: [
        "Engineered full-stack platform with React + FastAPI, JWT auth, and WebSocket for real-time client-advisor communication",
        "Architected multi-provider LLM integration via LangChain — seamless Groq/OpenAI switching with <3s response times",
        "Built CRM module tracking portfolios, interaction history, and personalized financial recommendations",
        "Designed conversational AI with context-aware memory, referencing prior client interactions and portfolio details",
        "Implemented caching strategies reducing API costs ~40% while maintaining response quality"
      ],
      github: "https://github.com/Msundara19/LLM-wealth-advisor",
      icon: "💰"
    },
    {
      title: "Machine Learning Research Intern",
      company: "National Institute of Ocean Technology",
      period: "Jan 2023 - Apr 2024",
      location: "Chennai, India · Part-time",
      description: "Built real-time underwater object detection system for AUV imagery. Research published in IEEE.",
      achievements: ["70–80% detection accuracy", "Real-time GUI built", "IEEE Published", "End-to-end data pipeline"],
      bullets: [
        "Achieved 70–80% detection accuracy on underwater targets (fauna, flora, polymetallic nodules) using Haar-cascade + CLAHE",
        "Built end-to-end dataset and validation pipeline — collection, cleaning, de-duplication, train/val/test splits",
        "Delivered a real-time GUI (capture → enhance → detect) enabling live bounding-box visualization for operators"
      ],
      github: "https://github.com/Msundara19/Underwater-Resourse-Detection",
      paper: "https://ieeexplore.ieee.org/document/10421038",
      icon: "🌊"
    }
  ];

  const nonTechExperience = [
    {
      title: "Assistant Editor in Chief",
      company: "TechNews @ Illinois Tech",
      period: "Apr 2025 - Dec 2025",
      location: "Chicago, IL",
      description: "Led editorial operations for IIT's only active student newspaper — drove quality, accuracy, and on-time delivery across all desks.",
      achievements: ["~32% faster revision cycles", "~58% fewer post-pub corrections", "~24% improved on-time releases", "~63% fewer layout errors"],
      icon: "📰"
    },
    {
      title: "Senior Writer",
      company: "TechNews @ Illinois Tech",
      period: "Sep 2024 - Apr 2025",
      location: "Chicago, IL",
      description: "Reported campus news and features weekly — strong sourcing, rigorous fact-checking, publish-ready copy on deadline.",
      achievements: ["Weekly publishing cadence", "Two-source fact verification", "Cross-team coordination"],
      icon: "✍️"
    },
    {
      title: "Testing Administrative Staff & Proctor",
      company: "Chicago Public Schools",
      period: "Sep 2025 - Dec 2025",
      location: "Chicago, IL · On-site",
      description: "Supported standardized testing operations for CPS specialized accelerated academic programs across 12+ sessions serving 300+ students.",
      achievements: ["300+ students served", "150+ test records processed", "100% booklet accuracy", "12+ sessions managed"],
      icon: "🏫"
    },
    {
      title: "Business Development Associate",
      company: "Milaap",
      period: "Sep 2023 - Dec 2023",
      location: "Tamil Nadu, India · Hybrid",
      description: "Ran end-to-end crowdfunding campaigns for medical cases — field assessments, donor pipeline management, and impact tracking.",
      achievements: ["Campaign narrative optimization", "HNI & CSR donor pipeline", "Audit-ready disbursement records", "CRM-driven outreach iteration"],
      icon: "🤝"
    }
  ];

  const awards = [
    {
      title: "Best Outgoing Student Award",
      issuer: "Hindustan University",
      date: "May 2023",
      icon: "🏆"
    },
    {
      title: "Best Project Award — Home Appliance Control for Visually & Verbally Challenged",
      issuer: "Hindustan University",
      date: "Dec 2022",
      icon: "🥇"
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
      degree: "Master of Engineering in Artificial Intelligence for Computer Vision",
      school: "Illinois Institute of Technology",
      location: "Chicago, IL",
      period: "Sep 2024 - Dec 2025",
      courses: ["Hardware Acceleration for ML", "Secure ML", "Computer Vision", "Deep Learning", "Machine Learning", "Intro to Cybersecurity", "Cloud Computing and Cloud Native Systems", "AI in Smart Grids", "OOP for ML"],
      logo: "IIT"
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communications Engineering",
      school: "Hindustan Institute of Technology and Science",
      location: "Chennai, India",
      period: "2019 - 2023",
      courses: ["Signals and Systems", "Control Systems", "VLSI Design", "Advanced VLSI Design Techniques", "Digital Communications", "Computer Networks", "Machine Learning & AI", "Internet of Things", "Industrial Electronics", "Embedded Systems", "Microprocessors", "MATLAB & Simulink Lab"],
      logo: "HITS"
    }
  ];

  const writing = [
    {
      title: "Machines vs. Us: A Real Conversation About Artificial Intelligence",
      publication: "TechNews - Illinois Tech",
      date: "April 2025",
      description: "An opinion piece exploring why AI receives unwarranted hatred, addressing concerns about job displacement, hallucinations, privacy, and why machines can never truly replace humans.",
      link: "https://technews.iit.edu/2025/04/10/machines-vs-us-a-real-conversation-about-artificial-intelligence/",
      icon: "✍️"
    },
    {
      title: "FPGA vs GPU: When Hardware Acceleration Actually Matters",
      publication: "Medium",
      date: "December 2025",
      description: "Lessons from deploying a VGG network on both platforms - and why the results surprised me.",
      link: "https://medium.com/@msridharansundaram/fpga-vs-gpu-when-hardware-acceleration-actually-matters-bd91e594c854",
      icon: "🔧"
    },
    {
      title: "What If an AI Could Attend Your Zoom Calls for You? Meet Pickle",
      publication: "Medium",
      date: "February 2026",
      description: "An exploration of Pickle, a Y Combinator-backed startup building real-time AI avatars that attend video calls on your behalf — processing audio and generating video in under 0.3 seconds, 100× faster than conventional AI video tools.",
      link: "https://medium.com/@msridharansundaram/what-if-an-ai-could-attend-your-zoom-calls-for-you-meet-pickle-6f380c1fded1",
      icon: "🤖"
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
    },
    {
      title: "Understanding Basic SQL Syntax",
      issuer: "Coursera",
      date: "2026",
      link: "https://coursera.org/share/c67550c223fefce7281517fd8c14146e",
      icon: "🗄️"
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      date: "2026",
      link: "https://coursera.org/share/7060fbe129023ad10ace22ffbbc0de33",
      icon: "🤖"
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
            <div className="text-6xl font-bold text-cyan-400 animate-pulse tracking-tight">MS</div>
            <div className="mt-4 text-zinc-600 text-xs font-mono tracking-[0.3em] uppercase">initializing</div>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { id: 'home',           label: 'Home',           num: '00' },
    { id: 'experience',     label: 'Experience',      num: '01' },
    { id: 'projects',       label: 'Projects',        num: '02' },
    { id: 'publications',   label: 'Publications',    num: '03' },
    { id: 'skills',         label: 'Skills',          num: '04' },
    { id: 'awards',         label: 'Awards',          num: '05' },
    { id: 'certifications', label: 'Certifications',  num: '06' },
    { id: 'leadership',     label: 'Leadership',      num: '07' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <div className="fixed w-96 h-96 rounded-full pointer-events-none z-0" style={{ background: darkMode ? 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)', left: mousePosition.x - 192, top: mousePosition.y - 192 }} />
      <div className="fixed inset-0 pointer-events-none z-0"><div className={`absolute inset-0 ${darkMode ? 'opacity-[0.02]' : 'opacity-[0.03]'}`} style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} /></div>

      {/* ── Sidebar nav (desktop) ── */}
      <aside className={`hidden lg:flex fixed left-0 top-0 h-full w-52 flex-col z-50 border-r ${darkMode ? 'bg-black/80 border-zinc-800/60' : 'bg-white/80 border-zinc-200'} backdrop-blur-xl`}>
        {/* Logo */}
        <div className="px-6 pt-8 pb-6">
          <span className="text-xl font-bold tracking-tight gradient-text">MS</span>
          <p className={`text-xs mt-0.5 font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>AI/ML Engineer</p>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-left transition-all group ${
                activeSection === item.id
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : darkMode ? 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900' : 'text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <span className={`font-mono text-xs ${activeSection === item.id ? 'text-cyan-400' : darkMode ? 'text-zinc-200' : 'text-zinc-500'}`}>{item.num}</span>
              <span className="text-sm font-medium">{item.label}</span>
              {activeSection === item.id && <span className="ml-auto w-1 h-1 rounded-full bg-cyan-400"></span>}
            </button>
          ))}
        </nav>

        {/* Bottom: socials + dark mode */}
        <div className={`px-4 pb-8 pt-4 border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`}>
          <a href="https://github.com/Msundara19" target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg mb-2 transition-all group ${darkMode ? 'hover:bg-zinc-900 text-zinc-400 hover:text-white' : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900'}`}>
            <svg className="w-4 h-4 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="text-xs font-medium">GitHub</span>
            <span className={`ml-auto text-xs font-mono ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>↗</span>
          </a>
          <a href="https://www.linkedin.com/in/meenakshi-sridharan-89133b261/" target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg mb-3 transition-all group ${darkMode ? 'hover:bg-zinc-900 text-zinc-400 hover:text-white' : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900'}`}>
            <svg className="w-4 h-4 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span className="text-xs font-medium">LinkedIn</span>
            <span className={`ml-auto text-xs font-mono ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>↗</span>
          </a>
          <div className="flex items-center justify-between px-3">
            <p className={`font-mono text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-500'}`}>v2.0 · Apr 2026</p>
            <button onClick={() => setDarkMode(!darkMode)} className={`${darkMode ? 'text-zinc-500 hover:text-cyan-400' : 'text-zinc-400 hover:text-cyan-600'} transition-colors`}>
              {darkMode
                ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>}
          </button>
          </div>
        </div>
      </aside>

      {/* ── Mobile bottom bar ── */}
      <nav className="lg:hidden fixed bottom-3 left-3 right-3 z-50">
        <div className={`flex items-center gap-0.5 px-2 py-1.5 rounded-xl backdrop-blur-xl border overflow-x-auto scrollbar-hide ${darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white/80 border-zinc-200 shadow-xl'}`}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg transition-all text-xs font-medium ${activeSection === item.id ? (darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-50 text-cyan-700') : (darkMode ? 'text-zinc-200' : 'text-zinc-600')}`}>
              {item.label}
            </button>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className={`flex-shrink-0 p-1.5 rounded-lg ml-1 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>
            {darkMode ? <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> : <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>}
          </button>
        </div>
      </nav>

      {/* Main content — offset by sidebar on desktop */}
      <div className="lg:pl-52">

      {/* Hero Section */}
      <section id="home" className="px-4 pt-16 pb-8 sm:pt-20 sm:pb-10 relative z-10">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">

            {/* Status badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs mb-4 border border-cyan-500/30 bg-cyan-500/5">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-400 font-medium tracking-wide">Open to AI/ML roles</span>
            </div>

            <h1 className="animate-name text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 leading-tight tracking-tight">
              Hi, I'm Meenakshi
            </h1>
            <p className="animate-name-delay text-lg sm:text-xl md:text-2xl font-semibold mb-1 gradient-text">
              AI/ML Systems Engineer
            </p>
            <p className={`animate-name-delay-2 text-sm sm:text-base mb-5 leading-relaxed ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>
              I build ML systems that work under real-world pressure — inference pipelines, hardware accelerators, computer vision, and LLM-powered products at production scale.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-6">
              <a href="/Meenakshi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg font-semibold transition-all hover:scale-105 text-sm bg-cyan-500 text-black hover:bg-cyan-400 tracking-wide">
                View Resume
              </a>
              <button onClick={copyEmail} className={`px-5 py-2.5 rounded-lg font-medium transition-all border hover:scale-105 flex items-center justify-center gap-1.5 text-sm ${darkMode ? 'border-zinc-700 hover:border-cyan-500/50 text-zinc-300' : 'border-zinc-300 hover:border-cyan-500 text-zinc-700'}`}>
                {copied
                  ? <><svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span className="text-cyan-400">Copied!</span></>
                  : <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>Copy Email</>}
              </button>
            </div>

          </div>

          {/* Profile image with cyan glow */}
          <div className="flex-shrink-0 relative mt-6 lg:mt-0">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-cyan-500/30 blur-md"></div>
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-60"></div>
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-zinc-900 relative">
              <img src="https://avatars.githubusercontent.com/Msundara19" alt="Meenakshi" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="w-full h-full bg-zinc-800 flex items-center justify-center text-4xl font-bold text-cyan-400">MS</div>'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 pb-8 sm:pb-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* About */}
            <div className="reveal">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 font-medium">00.</span> About
              </h2>
              <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>
                I'm an AI/ML Systems Engineer who builds the infrastructure that makes machine learning work in the real world — not just in notebooks. My focus is the full stack from model training and optimization to production deployment: inference pipelines, hardware acceleration, LLM orchestration, and computer vision systems.
              </p>
              <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>
                Having pursued a Master's in AI for Computer Vision at Illinois Tech, I've shipped systems that operate under real constraints. A fraud detection API with sub-5s latency. A wound monitoring platform with clinical-grade CV analysis. An LLM financial advisor with multi-provider routing and RAG retrieval. A VGG network accelerated 49.8× on FPGA with INT16 quantization. ML inference optimized 2.3× on Apple Silicon. Published in IEEE.
              </p>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>
                What drives me is the constraint layer — strict latency budgets, edge hardware limits, scalability pressure. When you can't just add more compute, you have to engineer something genuinely efficient.
              </p>
            </div>

            {/* Education */}
            <div className="reveal reveal-delay-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Education</h2>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>{edu.logo}</div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 mb-1">
                          <div>
                            <h4 className="font-semibold text-sm leading-snug">{edu.degree}</h4>
                            <p className={`text-xs font-medium ${darkMode ? 'text-cyan-400/80' : 'text-cyan-600'}`}>{edu.school}</p>
                            {edu.location && <p className={`text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{edu.location}</p>}
                          </div>
                          <span className={`font-mono text-xs whitespace-nowrap ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{edu.period}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {edu.courses.map((course, i) => (
                            <span key={i} className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-200'}`}>{course}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4 reveal">
            <span className="font-mono text-xs text-cyan-400 font-medium">01.</span>
            <h2 className="text-xl sm:text-2xl font-bold">Experience</h2>
          </div>

          {/* Tech Experience */}
          <div className="mb-3 reveal">
            <h3 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>Technical</h3>
          </div>
          <div className="space-y-4">
            {workExperience.map((exp, idx) => (
              <div key={idx} className={`reveal reveal-delay-${idx + 1} p-4 rounded-xl border transition-all hover:border-cyan-500/30 ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <div>
                        <h3 className="font-bold text-base">{exp.title}</h3>
                        <p className={`text-sm font-medium ${darkMode ? 'text-cyan-400/80' : 'text-cyan-600'}`}>{exp.company}</p>
                      </div>
                      <div className="sm:text-right">
                        <span className={`font-mono text-xs block ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{exp.period}</span>
                        {exp.location && <span className={`text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{exp.location}</span>}
                      </div>
                    </div>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{exp.description}</p>
                    {exp.bullets && (
                      <ul className="mb-2 space-y-1">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className={`text-xs flex gap-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>
                            <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {exp.achievements.map((achievement, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded text-xs font-medium ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>{achievement}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {exp.github && <a href={exp.github} target="_blank" rel="noopener noreferrer" className={`text-xs px-2.5 py-1 rounded-lg border ${darkMode ? 'border-zinc-700 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-400' : 'border-zinc-300 hover:border-cyan-400 text-zinc-600 hover:text-cyan-600'}`}>Code</a>}
                      {exp.paper && <a href={exp.paper} target="_blank" rel="noopener noreferrer" className={`text-xs px-2.5 py-1 rounded-lg border ${darkMode ? 'border-zinc-700 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-400' : 'border-zinc-300 hover:border-cyan-400 text-zinc-600 hover:text-cyan-600'}`}>Paper</a>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-5 reveal">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-cyan-400 font-medium">02.</span>
              <h2 className="text-xl sm:text-2xl font-bold">Projects</h2>
            </div>
            <p className={`text-xs mb-4 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>Click any project to view the case study</p>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {['All', 'ML Systems', 'Computer Vision', 'Hardware', 'LLM'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-cyan-500 text-black'
                      : darkMode ? 'bg-zinc-900 border border-cyan-500/20 text-zinc-200 hover:border-cyan-500/50' : 'bg-white border border-zinc-200 text-zinc-700 hover:border-cyan-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Featured project card */}
          {(() => {
            const featured = projects.find(p => p.featured && (activeFilter === 'All' || p.category === activeFilter));
            return featured ? (
              <div className={`mb-5 group rounded-xl overflow-hidden cursor-pointer border transition-all hover:border-cyan-500/40 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200 shadow-xl'}`} onClick={() => setSelectedProject(featured)}>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-72 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img src={featured.image} alt={featured.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 hidden sm:block"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden"></div>
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${darkMode ? 'bg-zinc-800/90' : 'bg-white/90'} backdrop-blur-sm`}>{featured.icon}</span>
                      <span className="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-500 text-black">Featured</span>
                    </div>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {featured.tags.map((tag, i) => (
                        <span key={i} className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">{featured.name}</h3>
                    <p className={`text-sm mb-3 leading-relaxed ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{featured.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {featured.caseStudy.results.slice(0, 2).map((r, i) => (
                        <div key={i} className={`px-3 py-2 rounded-lg text-xs font-medium ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>{r}</div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {featured.github && <a href={featured.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className={`text-xs px-3 py-1.5 rounded-lg border ${darkMode ? 'border-zinc-700 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-400' : 'border-zinc-300 hover:border-cyan-400 text-zinc-600'}`}>Code</a>}
                      {featured.live && <a href={featured.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400">Live Demo</a>}
                      <span className={`ml-auto text-xs self-center ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>View case study →</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })()}

          {/* Filtered project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {projects.filter(p => !p.featured && (activeFilter === 'All' || p.category === activeFilter)).map((project, idx) => (
              <div key={idx} className={`group rounded-xl overflow-hidden transition-all hover:scale-[1.02] cursor-pointer ${darkMode ? 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700' : 'bg-white border border-zinc-200 shadow-xl'}`} onClick={() => setSelectedProject(project)}>
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className={`absolute top-2 left-2 w-7 h-7 rounded-lg flex items-center justify-center text-sm ${darkMode ? 'bg-zinc-800/80' : 'bg-white/80'} backdrop-blur-sm`}>{project.icon}</div>
                  <span className={`absolute top-2 right-2 px-1.5 py-0.5 rounded text-xs font-medium ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/90 text-cyan-700'} backdrop-blur-sm`}>{project.category}</span>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-white text-xs sm:text-sm line-clamp-2 mb-0.5">{project.name}</h3>
                    <p className="text-zinc-300 text-xs line-clamp-1">{project.shortDesc}</p>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className={`p-1 rounded ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className={`p-1 rounded ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      )}
                    </div>
                    <span className={`text-xs hidden sm:inline ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>View →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6 reveal">
            <span className="font-mono text-xs text-cyan-400 font-medium">03.</span>
            <h2 className="text-xl sm:text-2xl font-bold">Publications</h2>
          </div>

          {/* IEEE */}
          <div className="mb-6 reveal reveal-delay-1">
            <h3 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>IEEE Research</h3>
            {publications.map((pub, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-sm">{pub.title}</h4>
                  <span className={`font-mono text-xs whitespace-nowrap ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{pub.date}</span>
                </div>
                <p className={`text-xs mb-3 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{pub.description}</p>
                <div className="grid sm:grid-cols-2 gap-1 mb-3">
                  {pub.highlights.map((h, i) => (
                    <div key={i} className={`flex items-start gap-1.5 text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span><span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400">Read Paper</a>
                  <a href={pub.github} target="_blank" rel="noopener noreferrer" className={`text-xs px-3 py-1.5 rounded-lg border ${darkMode ? 'border-zinc-700 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-400' : 'border-zinc-300 hover:border-cyan-400 text-zinc-600'}`}>Code</a>
                </div>
              </div>
            ))}
          </div>

          {/* Medium Articles */}
          <div className="reveal reveal-delay-2">
            <h3 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>Medium Articles</h3>
            <div className="space-y-2">
              {writing.map((article, idx) => (
                <a key={idx} href={article.link} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all hover:border-cyan-500/30 group ${darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                  <span className="text-lg flex-shrink-0">{article.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm leading-snug">{article.title}</h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{article.publication} · {article.date}</p>
                  </div>
                  <svg className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${darkMode ? 'text-zinc-600 group-hover:text-cyan-400' : 'text-zinc-300 group-hover:text-cyan-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4 reveal">
            <span className="font-mono text-xs text-cyan-400 font-medium">04.</span>
            <h2 className="text-xl sm:text-2xl font-bold">Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {Object.entries(skills).map(([category, items], idx) => {
              const isCoreML = ['ML/AI', 'LLMs & GenAI', 'Computer Vision', 'Hardware'].includes(category);
              return (
                <div key={idx} className={`reveal reveal-delay-${(idx % 4) + 1} p-3 rounded-xl border transition-all ${isCoreML ? (darkMode ? 'bg-zinc-900/50 border-cyan-500/20 hover:border-cyan-500/40' : 'bg-white border-cyan-200 hover:border-cyan-300') : (darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300')}`}>
                  <h3 className={`font-semibold text-sm mb-2 ${isCoreML ? 'text-cyan-400' : ''}`}>{category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {items.map((skill, i) => (
                      <span key={i} className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>{skill}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6 reveal">
            <span className="font-mono text-xs text-cyan-400 font-medium">05.</span>
            <h2 className="text-xl sm:text-2xl font-bold">Awards & Honors</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {awards.map((award, idx) => (
              <div key={idx} className={`reveal reveal-delay-${(idx % 3) + 1} flex items-center gap-3 px-4 py-3 rounded-xl border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <span className="text-xl">{award.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{award.title}</p>
                  <p className={`text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{award.issuer} · {award.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6 reveal">
            <span className="font-mono text-xs text-cyan-400 font-medium">06.</span>
            <h2 className="text-xl sm:text-2xl font-bold">Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer"
                className={`reveal reveal-delay-${(idx % 3) + 1} flex items-center gap-3 p-3 rounded-xl border transition-all hover:border-cyan-500/30 group ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <span className="text-xl">{cert.icon}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm leading-snug">{cert.title}</h4>
                  <p className={`text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{cert.issuer} · {cert.date}</p>
                </div>
                <svg className={`w-3 h-3 flex-shrink-0 ${darkMode ? 'text-zinc-600 group-hover:text-cyan-400' : 'text-zinc-300 group-hover:text-cyan-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section (Addendum) */}
      <section id="leadership" className={`px-4 py-6 sm:py-8 border-t relative z-10 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-1 reveal">
            <span className="font-mono text-xs text-cyan-400 font-medium">07.</span>
            <h2 className="text-xl sm:text-2xl font-bold">Leadership & Operations</h2>
          </div>
          <p className={`text-xs mb-6 reveal ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>Addendum — non-technical roles</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {nonTechExperience.map((exp, idx) => (
              <div key={idx} className={`reveal reveal-delay-${(idx % 2) + 1} p-4 rounded-xl border transition-all hover:border-zinc-600 ${darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>{exp.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm">{exp.title}</h3>
                    <p className={`text-xs font-medium mb-0.5 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{exp.company}</p>
                    <p className={`font-mono text-xs mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{exp.period}</p>
                    <p className={`text-xs leading-relaxed mb-2 ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.achievements.map((a, i) => (
                        <span key={i} className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>{a}</span>
                      ))}
                    </div>
                  </div>
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
                <p className={`text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{selectedProject.caseStudy.challenge}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-sm mb-1.5">The Approach</h3>
                <p className={`text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>{selectedProject.caseStudy.approach}</p>
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
                    <span key={i} className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-medium text-sm ${darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-zinc-900'}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View Code
                  </a>
                )}
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-medium text-sm ${darkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    {selectedProject.github ? 'Live Demo' : 'View Report'}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compact Footer */}
      <footer className={`py-6 sm:py-8 px-4 border-t relative z-10 pb-20 lg:pb-8 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-1">Let's build something that <span className="gradient-text">actually ships.</span></h3>
              <p className={`text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>Open to AI/ML engineering and systems roles.</p>
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
            <p className={`text-xs ${darkMode ? 'text-zinc-200' : 'text-zinc-600'}`}>© 2026 Meenakshi Sridharan</p>
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
      </div>{/* end lg:pl-52 wrapper */}

      {/* Chat Widget */}
      <div className="fixed bottom-20 lg:bottom-6 right-3 sm:right-6 z-[200] flex flex-col items-end gap-3">
        {chatOpen && (
          <div className={`w-[calc(100vw-1.5rem)] sm:w-80 md:w-96 rounded-2xl border shadow-2xl flex flex-col overflow-hidden ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'}`} style={{ height: '420px' }}>
            {/* Header */}
            <div className={`flex items-center justify-between px-4 py-3 border-b ${darkMode ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-100 bg-white'}`}>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-black text-xs font-bold">MS</div>
                <div>
                  <p className="text-sm font-semibold leading-none">Portfolio Assistant</p>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Ask me about Meenakshi</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className={`p-1 rounded-lg ${darkMode ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-zinc-100 text-zinc-500'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" ref={el => { if (el) el.scrollTop = el.scrollHeight; }}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-line ${
                    msg.from === 'user'
                      ? 'bg-cyan-500 text-black rounded-br-sm'
                      : darkMode ? 'bg-zinc-800 text-zinc-100 rounded-bl-sm' : 'bg-zinc-100 text-zinc-800 rounded-bl-sm'
                  }`}>{msg.text}</div>
                </div>
              ))}
            </div>
            {/* Suggestions */}
            {chatMessages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {['Projects', 'Skills', 'Experience', 'Contact'].map(s => (
                  <button key={s} onClick={() => { setChatInput(s); }}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-all ${darkMode ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10' : 'border-cyan-300 text-cyan-700 hover:bg-cyan-50'}`}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            {/* Input */}
            <div className={`px-3 py-3 border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Ask something..."
                  className={`flex-1 text-xs px-3 py-2 rounded-lg border outline-none focus:border-cyan-500/50 ${darkMode ? 'bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400'}`}
                />
                <button onClick={sendChatMessage} className="px-3 py-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Toggle button */}
        <button
          onClick={() => setChatOpen(o => !o)}
          className="w-13 h-13 rounded-full bg-cyan-500 text-black shadow-lg hover:bg-cyan-400 transition-all hover:scale-110 flex items-center justify-center"
          style={{ width: '52px', height: '52px' }}
        >
          {chatOpen
            ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
          }
        </button>
      </div>

    </div>
  );
}
