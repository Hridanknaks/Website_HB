import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, DollarSign, Trophy, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImageGallery } from "@/components/image-gallery";

export function ProfessionalExperience() {
  const experiences = [
    {
      company: "The International School Bangalore",
      position: "Head Boy and Head of Multiple Events",
      duration: "April 2025 - Present",
      location: "Bangalore, India",
      type: "Leadership",
      logo: "https://portfolio-worker.hridank.workers.dev/public/TISB.png",
      description:
        "Elected to represent the student body and lead various school initiatives, I serve as the primary liaison between students and administration while managing comprehensive student affairs. My role extends far beyond traditional head boy responsibilities to include founding and leading key student organizations, spearheading major revenue-generating events, and implementing transformative initiatives that foster a more inclusive and appreciative school environment. I lead a diverse team of 15 student council members across various committees, coordinating complex multi-stakeholder projects that impact the entire school community of over 800 students. My leadership philosophy centers on creating meaningful engagement opportunities while driving tangible improvements to student life and school culture.",
      keyEvents: [
        {
          name: "Vivum 2025",
          metric: "Projected ₹60-70 Lakhs Revenue",
          description: "Leading the school's flagship annual festival",
        },
        {
          name: "TISB Hacks 2025",
          metric: "Raised ₹1.5L Sponsorship, 100+ Participants from 3 Countries",
          description: "International hackathon with global participation",
        },
        {
          name: "TISB Park Run 2025",
          metric: "Engaged 150-200 Parents, Students, and Teachers",
          description: "Community fitness initiative bringing together school stakeholders",
        },
      ],
      achievements: [
        "Successfully led 2 major school events generating projected revenue of ₹60-70 lakhs",
        "Raised ₹1.5 lakh in sponsorship for TISB Hacks 2025 with international participation from 3 countries",
        "Engaged 150-200 community members through TISB Park Run initiative",
        "Founded and led the Potentia App Dev Club (2024-2025) fostering student innovation",
        "Served as Vice Chair of the Social Creds Club (2023-2024) promoting community service",
        "Implemented multiple new initiatives including honoring Labour Day and recognizing departing teachers",
        "Led team of 15 student council members across various specialized committees",
        "Represented student voice in administrative decisions affecting school policy",
        "Coordinated with faculty and administration on policy matters impacting student experience",
        "Fostered vibrant community engagement through innovative programming and inclusive initiatives",
      ],
      technologies: [
        "Leadership",
        "Public Speaking",
        "Event Management",
        "Team Coordination",
        "Conflict Resolution",
        "Strategic Planning",
        "Community Engagement",
      ],
      images: ["https://portfolio-worker.hridank.workers.dev/public/HB2.PNG", "https://portfolio-worker.hridank.workers.dev/public/HB3.PNG", "https://portfolio-worker.hridank.workers.dev/public/vv1.jpg"],
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      borderColor: "border-blue-400",
    },
    {
      company: "Siemens Technology and Services Pvt. Ltd.",
      position: "Engineering Intern",
      duration: "June 2024 - June 2025",
      location: "Bangalore, India",
      type: "Technology",
      logo: "https://portfolio-worker.hridank.workers.dev/public/siemens-logo.jpeg",
      description:
        "Working in Siemens' prestigious PAMC (Platform and Module Competency) lab, I contributed to cutting-edge AI-powered drone technology for environmental monitoring applications. This comprehensive internship provided me with invaluable hands-on experience in professional-grade embedded systems, PCB design, and advanced communication protocols. As the embedded lab ventured into new AI-integrated projects, I served as a crucial bridge between traditional embedded systems engineering and modern artificial intelligence applications. My role involved not only technical development but also knowledge transfer, as I actively assisted senior Siemens engineers with AI algorithm integration and practical applications. The internship culminated in developing a drone platform that became the foundation for my IRIS Grand Award-winning project, demonstrating the real-world impact of the skills and knowledge gained during this experience.",
      achievements: [
        "Developed AI algorithms for real-time bird detection and classification using advanced computer vision",
        "Gained expertise in PCB design and programming communication protocols including UART, SPI, and I2C",
        "Created Convolutional Neural Networks (CNNs) with TensorFlow for environmental monitoring applications",
        "Set up SD card communications over UART for efficient data storage and retrieval",
        "Actively assisted Siemens engineers with AI algorithm integration in their embedded systems projects",
        "Collaborated with senior engineers on system architecture and optimization for AI integration",
        "Developed drone capable of autonomous navigation serving as foundation for IRIS Grand Award project",
        "Tested and validated AI models in real-world environmental conditions with measurable accuracy improvements",
        "Gained hands-on experience with Siemens proprietary systems and professional-grade embedded platforms",
        "Contributed to knowledge transfer sessions introducing AI concepts to the embedded systems team",
      ],
      technologies: [
        "AI/ML",
        "Computer Vision",
        "Embedded Systems",
        "PCB Design",
        "Python",
        "TensorFlow",
        "CNNs",
        "Drone Technology",
        "UART",
        "SPI",
        "I2C",
        "SD Card Communications",
      ],
      images: ["https://portfolio-worker.hridank.workers.dev/public/Siemens.jpg"],
      color: "bg-gradient-to-r from-teal-500 to-cyan-500",
      borderColor: "border-teal-400",
    },
    {
      company: "Varchas Aerospace",
      position: "Engineering Intern",
      duration: "September - October 2024",
      location: "Bangalore, India",
      type: "Engineering",
      logo: "https://portfolio-worker.hridank.workers.dev/public/Varchas-logo.webp",
      description:
        "During this intensive engineering internship at Varchas Aerospace, I designed and developed the first prototype of an autonomous hovercraft, working in close collaboration with experienced engineering teams on mechanical design, advanced control systems, and seamless system integration. This hands-on experience provided me with comprehensive exposure to the complete product development lifecycle, from initial concept and design through prototyping, testing, and iteration. The project required innovative problem-solving as I worked with PVC and acrylic materials to optimize performance while maintaining cost-effectiveness. I gained practical experience in 3D printing custom components, configuring sophisticated motor ESC systems, and integrating radio control systems for precise remote operation and navigation. The successful completion of a functional prototype within the 3-month timeline demonstrated both technical competency and project management skills.",
      achievements: [
        "Designed hovercraft structure using PVC and acrylic materials optimized for performance and durability",
        "Collaborated with engineering teams on 3D printing custom motor and propeller cases with precision tolerances",
        "Set up and configured motor ESC (Electronic Speed Controller) systems for optimal power management",
        "Integrated radio control systems enabling precise remote operation and navigation capabilities",
        "Successfully completed first functional hovercraft prototype within ambitious 3-month timeline",
        "Conducted comprehensive testing and iteration cycles based on rigorous performance metrics",
        "Gained practical experience in mechanical design principles and modern manufacturing processes",
        "Developed expertise in motor control systems and advanced radio communication protocols",
        "Contributed to design documentation and technical specifications for future development phases",
      ],
      technologies: [
        "Mechanical Design",
        "3D Printing",
        "Motor Control",
        "Arduino",
        "CAD",
        "Prototyping",
        "System Integration",
        "ESC Configuration",
        "Radio Control Systems",
      ],
      images: ["https://portfolio-worker.hridank.workers.dev/public/Varchas.jpg"],
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      borderColor: "border-green-400",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leadership roles and technical internships that have shaped my professional journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-2 ${experience.borderColor} group`}
            >
              <div className={`h-3 ${experience.color} group-hover:h-4 transition-all duration-300`}></div>

              <CardHeader className="bg-muted/30">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm">
                        <Image
                          src={experience.logo || "/placeholder.svg"}
                          alt={`${experience.company} logo`}
                          width={60}
                          height={60}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {experience.position}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center hover:text-primary transition-colors duration-300">
                          <Building className="h-4 w-4 mr-2" />
                          {experience.company}
                        </div>
                        <div className="flex items-center hover:text-primary transition-colors duration-300">
                          <Calendar className="h-4 w-4 mr-2" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center hover:text-primary transition-colors duration-300">
                          <MapPin className="h-4 w-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={`${experience.color} text-white hover:opacity-90`}>{experience.type}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                {/* Top description full-width */}
                <p className="text-lg text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">
                  {experience.description}
                </p>

                {/* Conditional flex for gallery + rest */}
                {experience.images ? (
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Text Section */}
                    <div className="flex-1">
                      {experience.keyEvents && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-4 flex items-center">
                            <Trophy className="h-5 w-5 mr-2 text-primary" />
                            Key Events Led
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {experience.keyEvents.map((event, idx) => (
                              <Card key={idx} className="bg-muted/50 border-muted">
                                <CardContent className="p-4">
                                  <h5 className="font-semibold text-primary mb-2">{event.name}</h5>
                                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                                    <DollarSign className="h-4 w-4 mr-1" />
                                    {event.metric}
                                  </div>
                                  <p className="text-xs text-muted-foreground">{event.description}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start hover:translate-x-2 transition-transform duration-300">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse-gentle"></span>
                              <span className="text-muted-foreground">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Skills Developed</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="w-full lg:max-w-lg h-64 sm:h-80 md:h-96 lg:h-[500px] flex-shrink-0 flex items-center justify-center">
                      <ImageGallery images={experience.images} altPrefix={`${experience.position} Gallery`} />
                    </div>






                  </div>
                ) : (
                  // No gallery, show text normally
                  <>
                    {experience.keyEvents && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <Trophy className="h-5 w-5 mr-2 text-primary" />
                          Key Events Led
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {experience.keyEvents.map((event, idx) => (
                            <Card key={idx} className="bg-muted/50 border-muted">
                              <CardContent className="p-4">
                                <h5 className="font-semibold text-primary mb-2">{event.name}</h5>
                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  {event.metric}
                                </div>
                                <p className="text-xs text-muted-foreground">{event.description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start hover:translate-x-2 transition-transform duration-300">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse-gentle"></span>
                            <span className="text-muted-foreground">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
