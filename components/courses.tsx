import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Award } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    title: "Machine Learning Specialization",
    provider: "Stanford University (Coursera)",
    duration: "6 months",
    status: "Completed",
    grade: "98%",
    skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
    certificate: "#",
    description:
      "Comprehensive course covering supervised and unsupervised learning, neural networks, and practical ML applications.",
  },
  {
    title: "Full Stack Web Development",
    provider: "The Odin Project",
    duration: "8 months",
    status: "Completed",
    grade: "Excellent",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    certificate: "#",
    description: "Complete web development curriculum covering front-end and back-end technologies.",
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    duration: "3 months",
    status: "Completed",
    grade: "Certified",
    skills: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
    certificate: "#",
    description: "Foundational course on AWS cloud services and cloud computing concepts.",
  },
  {
    title: "Data Structures and Algorithms",
    provider: "MIT OpenCourseWare",
    duration: "4 months",
    status: "In Progress",
    grade: "Ongoing",
    skills: ["Python", "Algorithms", "Problem Solving", "Optimization"],
    certificate: "#",
    description: "Advanced course on data structures, algorithms, and computational complexity.",
  },
]

export function Courses() {
  return (
    <section className="py-80 px-16 sm:px-24 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Online Courses & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through online courses and professional certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-4">{course.title}</CardTitle>
                    <p className="text-muted-foreground">{course.provider}</p>
                  </div>
                  <Badge variant={course.status === "Completed" ? "default" : "secondary"}>{course.status}</Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    {course.grade}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <p className="text-muted-foreground mb-8">{course.description}</p>

                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Skills Learned</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {course.status === "Completed" && (
                  <Link
                    href={course.certificate}
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    View Certificate
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
