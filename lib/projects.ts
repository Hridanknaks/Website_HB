export interface Project {
  id: string
  title: string
  description: string
  images: string[] // updated to array
  technologies: string[]
  status: string
  icon: string
  color: string
  borderColor: string
  category: ("inventions" | "research")[]
  award?: string
  implementationPhase?: boolean
  underPublication?: boolean
  company?: string
  subtitle: string
  year: string
  team: string
  recognition: string
  longDescription: string
  features: string[]
  challenges: string[]
  impact: string[]
  links?: { name: string; url: string }[]
  bannerType?: "novel-tech" | "cost-reduction" | "social-cause" | "ai-implementation" | "tech-implementation"
}

export const projects: Project[] = [
  {
    id: "birdrover",
    title: "BirdRover - AI-Powered Avian Monitoring Hovercraft",
    description:
      "An award-winning AI hovercraft for non-invasive bird monitoring, providing scalable data for conservation. IRIS Grand Award winner and Regeneron ISEF 2025 Finalist.",
    images: [
      "https://portfolio-worker.hridank.workers.dev/public/Birdrov1.jpg",
      "https://portfolio-worker.hridank.workers.dev/public/BirdROV3.JPG", 
      "https://portfolio-worker.hridank.workers.dev/public/Classify.jpg",
      "https://portfolio-worker.hridank.workers.dev/public/BirdRov4.JPG",
      "https://portfolio-worker.hridank.workers.dev/public/Bir9.mpv",
      "https://portfolio-worker.hridank.workers.dev/public/Birdrov6.mp4",
      "https://portfolio-worker.hridank.workers.dev/public/Bir1.mp4",
      "https://portfolio-worker.hridank.workers.dev/public/bir2.mp4"


      
    ],
    technologies: ["AI/ML", "Computer Vision", "Hovercraft Technology", "Environmental Monitoring", "Python"],
    award: "IRIS Grand Award 2024, Regeneron ISEF 2025 Finalist",
    status: "Implementation Phase",
    icon: "Zap",
    color: "bg-gradient-to-r from-amber-400 to-amber-600",
    borderColor: "border-amber-400",
    implementationPhase: true,
    category: ["inventions", "research"],
    subtitle: "IRIS Grand Award Winner & Regeneron ISEF Finalist",
    year: "2024-2025",
    team: "Solo Project- 7 Models ",
    recognition: "IRIS Grand Award, Regeneron ISEF 2025 Finalist, VIC gold medal, YSI top 87",
    bannerType: "novel-tech",
    longDescription:
      "Birds are not only one of the most magnificent creatures but also serve as crucial indicators of ecosystem health. However, bird populations are declining as habitats are being lost due to deforestation and rapid urbanisation. Yet, there is a lack of an efficient means of tracking bird population data to aid with conservation efforts and analysis of bird species distribution. Conventional methods are heavily reliant on bird-watchers, with some innovative approaches including the use of stationary cameras, which limit the scope of detection. This research introduces a novel approach to this problem, using a small, radio-controlled mobile platform (boat), equipped with cameras and AI detection algorithms to automatically capture and store images of birds. These images can then be classified with the help of AI classification algorithms, which have been specifically trained on birds commonly found in Bangalore and India. By developing multiple prototypes, testing different cameras, and implementing various propulsion methods in order to minimise noise, the rover has been very specifically designed for this use case. By integrating computer vision, machine learning, and engineering, my rover provides a scalable solution for ornithological research and conservation efforts. This study further uses data from the device collected at water bodies in Karnataka to analyse habitat suitability and potential variables causing decline by using species distribution modelling (SDMs) with models like MaxEnt to help conservationists identify the requirements of particular bird species. This study provides an approach that makes the process of bird monitoring more systematic, effective, and scalable than existing methods.",
    features: [
      "AI-driven real-time bird detection and species identification",
      "Non-invasive, low-noise hovercraft design for minimal environmental disturbance",
      "High-resolution camera array for detailed avian observation",
      "Autonomous navigation and data collection capabilities",
      "Data analytics dashboard for population trends and behavioral insights",
    ],
    challenges: [
      "Optimizing AI models for diverse bird species and environmental conditions",
      "Designing a stable and efficient hovercraft propulsion system",
      "Ensuring robust waterproofing and durability for varied terrains",
      "Integrating seamless data transmission from hovercraft to analysis platform",
    ],
    impact: [
      "Awarded IRIS Grand Award, leading to Regeneron ISEF 2025 representation for Team India",
      "Provides a cost-effective and scalable solution for biodiversity monitoring",
      "Minimizes human footprint in sensitive ecological zones",
      "Generates valuable data for ornithological research and conservation strategies",
    ],
    links: [
      { name: "Regeneron ISEF Library", url: "https://isef.net/project/enev018-birdrover-ai-bird-population-detection-and-analysis" },
      
    ],
  },
  {
  id: "uav-swarm-boids",
  title: "Limitations of Boid Algorithms in UAV Swarm Control",
  description:
    "A research paper analyzing the constraints of Boid algorithms in UAV swarm control through simulation-based methods, highlighting scalability and coordination challenges.",
  images: [
    "https://portfolio-worker.hridank.workers.dev/public/Boids.png"
    
  ],
  technologies: ["UAV Swarms", "Simulation", "Multi-Agent Systems", "Boid Algorithms", "AI/ML"],
  status: "Under Publication",
  icon: "GraduationCap",
  color: "bg-gradient-to-r from-gray-500 to-slate-700",
  borderColor: "border-slate-400",
  category: ["research"],
  subtitle: "Simulation-Based Analysis of Swarm Behavior Algorithms",
  year: "2024",
  team: "Solo Author",
  recognition: "Research Paper Under Publication",
  bannerType: "ai-implementation",   // ✅ FIXED
  underPublication: true,
  longDescription:
    "This research investigates the limitations of Boid algorithms when applied to UAV swarm control. While Boid-based models are effective in simulating flocking behaviors, they face challenges in scalability, robustness, and real-world adaptability for UAV applications. Through extensive simulation-based analysis, the study highlights how communication constraints, latency, and environmental factors impact UAV coordination. It also contrasts Boid-based control with more adaptive, decentralized approaches, offering insights into how swarm robotics can evolve beyond simplified behavioral rules.",
  features: [
    "Simulation of UAV swarms using Boid-inspired rules",
    "Analysis of scalability and communication constraints",
    "Comparison with alternative swarm control algorithms",
    "Identification of real-world adaptability limitations",
  ],
  challenges: [
    "Modeling real-world physics and communication latency in simulations",
    "Bridging the gap between flocking theory and UAV control hardware",
    "Ensuring robustness under dynamic environmental conditions",
  ],
  impact: [
    "Provides a critical evaluation of Boid algorithms in UAV swarm research",
    "Guides future development of decentralized UAV control systems",
    "Highlights practical constraints for applying theoretical models",
  ],
  links: [
    { name: "Paper Draft", url: "#" }
  ],
},
  {
    id: "navaid",
    title: "NavAid - AI-Driven Indoor Navigation for Wheelchairs",
    description:
      "A novel AI-powered Indoor Positioning System (IPS) for wheelchairs, enabling autonomous mobility in hospitals using an innovative sensor fusion approach never implemented before in this context.",
    images: ["https://portfolio-worker.hridank.workers.dev/public/navaid1.jpg", "https://portfolio-worker.hridank.workers.dev/public/Navaid.JPG", "https://portfolio-worker.hridank.workers.dev/public/IMG_3573.jpg"],
    technologies: ["AI/ML", "Robotics", "Node.js", "Indoor Navigation", "Accessibility Tech"],
    status: "Advanced Progress (Team Lead)",
    icon: "Compass",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    borderColor: "border-green-400",
    category: ["inventions"],
    subtitle: "Empowering Autonomous Mobility for Enhanced Accessibility",
    year: "2023-Present",
    team: "Team Lead (3 members)",
    recognition: "In Development",
    bannerType: "novel-tech",
    longDescription:
      "All hospitals need wheelchairs to help patients who cannot move independently. Currently, attendants are needed to push manual wheelchairs, which limits the nursing staff available for critical care. This research is working to develop a novel autonomous wheelchair, which is capable of navigating indoor hospital environments without assistance. Hence, allowing the nursing staff to attend to more urgent patients. An ESP32 microcontroller controls two electric motors which is attached to the wheelbase allowing for smooth movement. Meanwhile, infrared (IR) technology was explored and developed, using a 940nm IR emitter beacon. While effective at short range, IR is hindered by external, ambient interference, which constrains the range. A near-infrared (NIR) camera was also tested, coded to capture an environmental heat map. Similarly, the range was insufficient for broader navigation.For obstacle avoidance and detection, ultrasonic sensors were used, providing precise distance measurements up to 2 meters away. This allows the system respond to dynamic variables of its surrounding. As an alternative to IR, the system utilizes radio signal strength-based localization. Specifically, Wi-Fi fingerprinting, which uses Received Signal Strength Indicator (RSSI) values from various access points to estimate the wheelchair's location. As Wi-Fi is a necessity, this method allows for awareness around a large indoor area without any additional infrastructure.However, radio positioning lacks fine resolution and precision. Hence, it is used in conjunction with LiDAR and ultrasonic sensors to enable wall-following, door detection, and safe path planning. The fusion of multiple sensors creates a novel solution to indoor patient transport systems (IPS), offering a low cost and reliable system.",
    features: [
      "Autonomous room-to-room navigation for wheelchairs",
      "Intuitive touchscreen interface for destination selection",
      "Real-time obstacle detection and avoidance using AI",
      "Precise indoor positioning without reliance on GPS",
      "Modular design for integration with various wheelchair models",
    ],
    challenges: [
      "Developing robust AI for dynamic indoor environments and human interaction",
      "Ensuring high accuracy and reliability of the Indoor Positioning System",
      "Optimizing power consumption for extended operational periods",
      "Designing a user-friendly interface for diverse user needs",
    ],
    impact: [
      "Significantly enhances independence and mobility for wheelchair users",
      "Reduces reliance on caregivers for indoor navigation",
      "Paves the way for smarter, more accessible living spaces",
      "Showcases innovative application of AI and robotics for social good",
    ],
  },
  {
   id: "leviathan-mark-ii",
title: "Leviathan Mark II - Materov Competition ROV",
description: "A cost-efficient ROV for the MATE competition, awarded a US Navy Challenge Coin.",
images: ["https://portfolio-worker.hridank.workers.dev/public/MR7.PNG", "https://portfolio-worker.hridank.workers.dev/public/MR4.jpg", "https://portfolio-worker.hridank.workers.dev/public/MR5.jpg", "https://portfolio-worker.hridank.workers.dev/public/MR6.jpg", "https://portfolio-worker.hridank.workers.dev/public/MR1.JPG","https://portfolio-worker.hridank.workers.dev/public/MR7.jpg", "https://portfolio-worker.hridank.workers.dev/public/Materov8.jpg"],
technologies: ["Robotics", "Underwater Systems", "Cost Optimization", "Mechanical Engineering"],
award: "US Navy Challenge Coin",
status: "Completed (Awarded)",
icon: "FlaskConical",
color: "bg-gradient-to-r from-indigo-500 to-blue-600",
borderColor: "border-indigo-400",
category: ["inventions"],
subtitle: "Award-Winning, Cost-Efficient Underwater Robotics",
year: "2025",
team: "Bangalore Bullsharks (4 members)",
recognition: "US Navy Challenge Coin",
bannerType: "cost-reduction",
longDescription:
  "The Bangalore Bullsharks made history as the first Indian team to compete in the Ranger category of the MATE ROV Competition 2025. Without major sponsors or institutional backing, we relied on innovation and sheer determination. From waterproofing everyday ₹800 servo motors instead of using imported $300 waterproof variants, to performing 500+ buoyancy modifications and 30 full-day trials, our ROV embodied resourcefulness. Featuring a cubical frame, dual cameras, custom hook, and waterproofed 3D-printed servo-powered arms, the bot prioritized cost-efficiency, environmental responsibility, and practical design. Our efforts were recognized by the U.S. Navy with a prestigious Challenge Coin and a promise of mentorship to grow the ROV ecosystem in India.",
features: [
  "Cubical frame design for stability and tilt resistance",
  "Custom waterproofing of low-cost servos (~₹800) instead of $300 alternatives",
  "Dual-camera system for navigation and arm operation",
  "3D-printed modular gripping arms for handling rounded objects",
  "Custom hook mechanism for heavy lifting tasks",
  "Over 500 buoyancy system modifications ensuring near-perfect neutral buoyancy",
  "Arduino R3 and Sabertooth-based control system with joystick interface",
  "15-meter tether with waterproofed connections for reliable signal transmission",
],
challenges: [
  "Operating independently without sponsors or major funding",
  "Waterproofing non-specialized servo motors for underwater use",
  "Achieving neutral buoyancy through iterative testing and redesign",
  "Designing arms that balance strength, precision, and durability",
  "Maintaining eco-friendly, recyclable, and locally sourced materials",
  "Coordinating schedules and team workflow with limited resources",
],
impact: [
  "First Indian team to compete in the Ranger category of the MATE ROV Competition",
  "Recognized with a U.S. Navy Challenge Coin for innovation and determination",
  "Showcased how resource-constrained teams can innovate with local solutions",
  "Pioneered techniques for cost-efficient underwater robotics in India",
  "Inspired future teams to pursue marine robotics and international competitions",
  "Strengthened India’s presence in the global underwater robotics community",
],

  },
  {
  id: "aquascan",
  title: "AquaScan - Novel Underwater ROV for Environmental Sensing",
  description: "A next-gen autonomous ROV for India, integrating AI, spectroscopy, and filtration to detect microplastics, corrosion, and heavy metal ions in aquatic environments.",
  images: ["https://portfolio-worker.hridank.workers.dev/public/MR3.JPG", "https://portfolio-worker.hridank.workers.dev/public/AquaScan.mp4" ],
  technologies: ["Robotics", "Underwater Systems", "AI/ML", "Environmental Tech", "Spectroscopy", "Novel Design"],
  status: "Advanced Progress (Autonomous Dev)",
  icon: "FlaskConical",
  color: "bg-gradient-to-r from-purple-500 to-indigo-500",
  borderColor: "border-purple-400",
  category: ["inventions"],
  subtitle: "Pioneering Subaquatic Exploration and Detection in India",
  year: "2024-Present",
  team: "Team Lead (3 members)",
  recognition: "In Development",
  bannerType: "novel-tech",
  longDescription: "Water pollution from heavy metals, corrosion, and microplastics poses serious risks to aquatic ecosystems and human health. AquaScan is an innovative underwater robotic platform mounted on an RC submarine that combines multi-modal sensing, AI-based analysis, and autonomous navigation to detect and address these threats. It uses colorimetric sensing with CNN-based analysis for heavy metal ion detection, and a custom microplastic filtration and YOLOv8 classification pipeline for differentiating plastics from organic debris. AquaScan is also India’s first autopositioning ROV, capable of maintaining its position in strong currents and operating modular multi-angle manipulator arms for precise underwater sampling.",
  features: [
    "India’s first autopositioning ROV with advanced stabilization",
    "Custom AquaScan™ multi-angle manipulator arms with 360° movement and precision sampling",
    "Colorimetric sensing with AI (CNN) for heavy metal ion detection",
    "Microplastic filtration module with YOLOv8 classification of plastics vs organic debris",
    "Multi-spectrum rust and corrosion detection",
    "Modular sensor suite with 4K cameras, water quality analyzers, and interchangeable tools",
    "Pressure-resistant aluminum hull (300m depth, upgradable to 500m)",
    "Open-source hardware/software design for community-driven expansion"
  ],
  challenges: [
    "Developing autopositioning in high-current underwater environments",
    "Integrating multi-modal sensing (corrosion, microplastics, chemical profiling) into a compact ROV",
    "Designing manipulator arms with dexterity and robustness for subsea sampling",
    "Ensuring reliable filtration and classification of microplastics in real time",
    "Lack of commercial and institutional support for advanced underwater R&D in India",
    "Building cost-effective alternatives to imported ROV technologies"
  ],
  impact: [
    "Provides India’s first specialized underwater ROV for pollution and corrosion monitoring",
    "Empowers researchers, oil industries, and government agencies with rapid on-site water quality analysis",
    "Supports sustainable marine ecosystem protection through microplastic detection and remediation",
    "Improves safety of offshore oil infrastructure with early rust and corrosion detection",
    "Promotes India’s blue economy initiatives with indigenous underwater technology",
    "Establishes an open-source modular platform for scalable subsea robotics in India"
  ]
}
,
  {
  id: "hydrotherapy-rehabilitation",
  title: "Hydrotherapy Rehabilitation Project",
  description:
    "A waterproof underwater treadmill for physiotherapy, designed to support rehabilitation with AI gait analysis and adjustable water levels.",
  images: ["https://portfolio-worker.hridank.workers.dev/public/Hydro.PNG"],
  technologies: ["Medical Devices", "Rehabilitation", "Mechanical Engineering", "Hydrotherapy", "AI/ML"],
  status: "In Development",
  icon: "Droplet",
  color: "bg-gradient-to-r from-blue-400 to-indigo-500",
  borderColor: "border-blue-400",
  category: ["inventions"],
  subtitle: "Innovating Aquatic Therapy for Enhanced Recovery",
  year: "2024-Present",
  team: "Solo Project",
  recognition: "In Development",
  bannerType: "novel-tech",
  longDescription:
    "Motivated by the rehabilitation needs of my paralysed grandfather, this project aims to build a simple, waterproof treadmill housed inside a hydrotherapy tank. The design allows patients to walk with reduced stress on joints while benefiting from the natural resistance of water. An adjustable water level enables different therapy intensities, while AI-based gait analysis provides feedback on movement patterns to track recovery progress. By focusing on simplicity, affordability, and ease of use, the project hopes to make aquatic therapy more accessible outside specialized clinics.",
  features: [
    "Waterproof mechanical treadmill inside a hydrotherapy tank",
    "Adjustable water level for varying therapy intensity",
    "AI-based gait analysis for tracking patient movement",
    "Compact design aimed at home or clinic use"
  ],
  challenges: [
    "Engineering a reliable waterproof treadmill mechanism",
    "Designing a compact hydrotherapy tank suitable for limited spaces",
    "Adapting gait analysis AI to underwater conditions",
    "Balancing affordability with mechanical durability"
  ],
  impact: [
    "Provides accessible aquatic rehabilitation for patients with mobility challenges",
    "Supports recovery for paralysis, arthritis, and injury rehabilitation",
    "Reduces stress on joints while promoting safe mobility training",
    "Brings hydrotherapy out of specialized centers into more affordable settings"
  ]
}
,
  {
  id: "potentia",
  title: "Potentia - AI-Powered Athlete Performance Platform",
  description: "A comprehensive mobile platform that leverages AI-driven coaching for injury prevention, form correction, strength training, and customized athlete schedules. Led by a 20-student development team.",
  images: ["https://portfolio-worker.hridank.workers.dev/public/Potentia.png"],
  technologies: ["AI/ML", "Computer Vision", "Mobile Development", "Sports Science", "Team Leadership"],
  status: "Advanced Progress (Team Lead)",
  icon: "Users",
  color: "bg-gradient-to-r from-blue-500 to-blue-600",
  borderColor: "border-blue-400",
  category: ["inventions"],
  subtitle: "Revolutionizing Sports Training with AI Coaching",
  year: "2023-Present",
  team: "Team Lead (20 members)",
  recognition: "App in Advanced Development",
  bannerType: "novel-tech",
  longDescription: "Potentia is a comprehensive mobile application designed to transform how athletes train by integrating AI-driven coaching into a single platform. It leverages computer vision and machine learning to analyze movement patterns, providing real-time corrections to form and posture, while also delivering personalized strength training and sport-specific schedules. The app integrates nutrition guidance and wellness tracking, offering a holistic approach to athlete development. Potentia’s mission is to democratize access to elite-level coaching insights, empowering athletes of all levels to train smarter, prevent injuries, and unlock peak performance. Developed under the leadership of a 20-student team, Potentia merges sports science with AI to build a scalable, next-generation tool for global athletic growth.",
  features: [
    "AI-powered form correction and real-time movement feedback",
    "Personalized sport-specific training schedules",
    "Strength training and progression tracking",
    "Holistic platform integrating nutrition and wellness guidance",
    "Computer vision analysis for posture and injury prevention",
    "Scalable architecture designed for athletes across multiple sports",
    "User-friendly mobile interface with modern design",
    "Developed collaboratively by a 20-student team"
  ],
  challenges: [
    "Designing accurate computer vision models for diverse body types and movement patterns",
    "Integrating multi-sport training modules into a single unified platform",
    "Balancing personalization with generalizable AI insights",
    "Developing a scalable system architecture for global use",
    "Ensuring data privacy and secure handling of athlete health metrics",
    "Managing collaborative workflows across a large student team"
  ],
  impact: [
    "Democratizes access to elite-level training insights for athletes worldwide",
    "Supports injury prevention and sustainable athletic development",
    "Encourages youth athletes to adopt safe, data-driven training practices",
    "Bridges sports science and AI to create new models of performance coaching",
    "Empowers grassroots athletes without access to dedicated coaching teams",
    "Positions the team as innovators in AI-driven sports technology"
  ]
},

 {
  id: "vemana-hospital-revival",
  title: "Vemana Hospital Digital Transformation & Revival",
  description:
    "Leading the revival of a government hospital in collaboration with healthcare experts and NGOs by implementing affordable EMR systems, securing CSR funding, and building a self-reliant healthcare model to serve marginalized communities.",
  images: ["https://portfolio-worker.hridank.workers.dev/public/Vemana.PNG"],
  technologies: ["Hospital Management Systems", "EMR", "Process Automation", "CSR Funding", "Community Health Camps"],
  status: "In Progress (Project Lead)",
  icon: "Heart",
  color: "bg-gradient-to-r from-red-500 to-pink-500",
  borderColor: "border-red-400",
  category: ["inventions"],
  subtitle: "Making Affordable, Sustainable Healthcare Accessible to All",
  year: "2024-Present",
  team: "Project Lead (collaborating with Dr. Arvind Ranganathan & Karuna Trust)",
  recognition: "Community Impact Project",
  bannerType: "tech-implementation",
  longDescription:
    "The Vemana Hospital Digital Transformation & Revival project is focused on restoring and modernizing a government-funded healthcare facility located in a labor-dense area where affordable care is critical. Led by Hridank Bhagath, the project involves implementing a robust Hospital Management System (HMS) and Electronic Medical Records (EMR) to optimize operations, improve patient care, and ensure transparency. Through close collaboration with Dr. Arvind Ranganathan and the Karuna Trust, the project has built a model that combines CSR backing with community-driven healthcare delivery. The scope extends beyond infrastructure revival: it includes organizing community health camps, training local staff in modern digital practices, and creating a long-term, self-reliant healthcare model that provides high-quality care at extremely low cost to underprivileged populations. With sustainable funding pipelines and digital integration, Vemana Hospital is being positioned as a replicable model for affordable healthcare revival in rural and labor-centric communities.",
  features: [
    "Implementation of Hospital Management System (HMS) and Electronic Medical Records (EMR)",
    "Collaboration with Dr. Arvind Ranganathan and Karuna Trust for technical and operational guidance",
    "CSR-backed funding model ensuring sustainability",
    "Community health camps serving marginalized labor populations",
    "Operational optimization to minimize patient costs while maximizing service delivery",
    "Training programs for healthcare staff on digital systems and processes",
    "Holistic design combining infrastructure, technology, and social outreach"
  ],
  challenges: [
    "Modernizing outdated infrastructure with limited government resources",
    "Securing sustainable CSR partnerships to fund ongoing operations",
    "Adapting EMR systems for use in low-resource, rural environments",
    "Balancing affordability with long-term financial sustainability",
    "Integrating healthcare technology into communities with limited digital literacy",
    "Building trust within a marginalized, labor-centric population"
  ],
  impact: [
    "Creates a self-reliant healthcare model that can be scaled across underserved regions",
    "Provides affordable, high-quality care for marginalized labor communities",
    "Digitizes healthcare delivery for transparency, efficiency, and sustainability",
    "Bridges the gap between government healthcare facilities and modern medical systems",
    "Empowers communities through regular health camps and outreach initiatives",
    "Positions Vemana Hospital as a replicable model for public-private healthcare partnerships in India"
  ]
},

  {
  id: "diet-analysis-predictor",
  title: "AI-Powered Diet Analysis & Nutrient Predictor",
  description:
    "An AI tool that leverages Random Forest regression to predict personalized nutritional needs based on health parameters. Developed under the mentorship of Mr. Aman Kesarwani, with a self-built dataset from extensive web scraping. Led a 3-member development team.",
  images: ["https://portfolio-worker.hridank.workers.dev/public/Diet1.jpg", "https://portfolio-worker.hridank.workers.dev/public/Diet2.jpg", "https://portfolio-worker.hridank.workers.dev/public/Diet3.jpg"],
  technologies: ["AI/ML", "Data Science", "Nutrition", "Random Forest Regression", "Python", "Web Scraping"],
  status: "Completed",
  icon: "BarChart3",
  color: "bg-gradient-to-r from-orange-500 to-red-500",
  borderColor: "border-orange-400",
  category: ["inventions"],
  subtitle: "Personalized Nutritional Insights through Machine Learning",
  year: "2023",
  team: "Team Lead (3 members, under mentorship of Mr. Aman Kesarwani)",
  recognition: "Completed AI Project",
  bannerType: "ai-implementation",
  longDescription:
    "The AI-Powered Diet Analysis & Nutrient Predictor was designed to address the gap between general dietary advice and truly personalized nutrition. Led by Hridank Bhagath under the mentorship of Mr. Aman Kesarwani, the project applied regression-based models, particularly Random Forest Regressors, to predict daily nutrient requirements for individuals based on multi-variable health inputs such as age, weight, activity level, and lifestyle factors. The team built its own comprehensive dataset by collating and cleaning information through large-scale web scraping, ensuring diversity and reliability of training data. This project served as an early milestone in applying machine learning to healthcare, blending data science with real-world wellness applications. It provided practical learnings in regression modeling, dataset engineering, and the challenges of personalization in predictive health tools.",
  features: [
    "Random Forest regression model for nutrient requirement prediction",
    "Dataset built through extensive web scraping and data curation",
    "Integration of multiple health and lifestyle variables for accurate insights",
    "Team-based development structure with defined roles across 3 members",
    "Python-based implementation with scikit-learn and data preprocessing libraries",
    "User-focused design for translating AI predictions into practical diet insights"
  ],
  challenges: [
    "Building a diverse and clean dataset from scattered online sources",
    "Ensuring regression models generalized well across different body types and lifestyles",
    "Balancing model complexity with interpretability for practical diet planning",
    "Validating predictions against established nutritional standards",
    "Coordinating workflows across a small but specialized team"
  ],
  impact: [
    "Showcases how AI can democratize personalized nutrition planning",
    "Demonstrated early integration of regression models into healthcare applications",
    "Helped team members build applied skills in data science and machine learning",
    "Highlighted the power of combining mentorship with independent innovation",
    "Laid groundwork for more advanced AI-driven healthcare initiatives"
  ]
}
,
  {
  id: "avianeye",
  title: "AvianEye - AI-Powered Drone for Environmental Monitoring",
  description:
    "An advanced drone platform developed during my Siemens PAMC internship, combining embedded systems and AI for real-time bird detection and environmental monitoring. This project laid the foundation for my IRIS Grand Award-winning BirdRover.",
  images: [
    "/https://portfolio-worker.hridank.workers.dev/public/Siemens.jpg"
  ],
  technologies: [
    "AI/ML",
    "Computer Vision",
    "Embedded Systems",
    "PCB Design",
    "UAV Technology",
    "Communication Protocols (UART, SPI, I2C)"
  ],
  status: "Completed (Internship Project)",
  icon: "Drone", // ⚡ you might need to pick a supported Lucide icon, e.g., "Zap" or "Cpu"
  color: "bg-gradient-to-r from-teal-500 to-cyan-600",
  borderColor: "border-teal-400",
  category: [],
  subtitle: "Siemens PAMC Lab Internship Project",
  year: "2024",
  team: "Internship Project (with Siemens Engineers)",
  recognition: "Foundation for IRIS Grand Award Project",
  bannerType: "ai-implementation",
  longDescription:
    "AvianEye was developed as part of my internship at Siemens’ prestigious PAMC (Platform and Module Competency) Lab, where I worked at the intersection of embedded systems and artificial intelligence. The drone was designed as a professional-grade environmental monitoring platform, integrating AI-driven bird detection and classification with robust hardware foundations. I contributed extensively to embedded software, PCB design, and implementing communication protocols such as UART, SPI, and I2C. I also developed Convolutional Neural Networks (CNNs) with TensorFlow, tested AI models in real-world conditions, and collaborated closely with Siemens engineers on AI integration into embedded workflows. This project not only provided me with invaluable industry-grade skills but also served as the direct foundation for my BirdRover research, which went on to win the IRIS Grand Award and represent India at Regeneron ISEF.",
  features: [
    "AI algorithms for real-time bird detection and classification",
    "Embedded system integration with Siemens professional-grade platforms",
    "Custom PCB design for drone subsystems",
    "Implementation of UART, SPI, and I2C communication protocols",
    "Convolutional Neural Networks (CNNs) with TensorFlow for onboard inference",
    "Autonomous drone navigation tailored for environmental monitoring"
  ],
  challenges: [
    "Adapting CNN models to run efficiently on embedded hardware",
    "Ensuring reliable data transfer over UART-based SD card storage",
    "Integrating AI with legacy embedded workflows",
    "Testing and validating AI performance in real-world environmental conditions"
  ],
  impact: [
    "Served as the foundation for my BirdRover project, later awarded the IRIS Grand Award",
    "Contributed to Siemens engineers’ AI integration efforts in embedded systems",
    "Demonstrated the real-world application of AI-powered drones in conservation",
    "Bridged the gap between embedded systems and artificial intelligence in UAV design"
  ],
  links: [
    { name: "Siemens PAMC Lab (Experience Page)", url: "/experience" },
    { name: "BirdRover IRIS Grand Award Project", url: "/portfolio/birdrover" },
  ],
}
]
