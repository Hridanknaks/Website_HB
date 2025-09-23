import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, GraduationCap } from "lucide-react"

const education = [
  {
    institution: "The International School Bangalore",
    degree: "International Baccalaureate Diploma Programme",
    period: "2022 - 2024",
    location: "Bangalore, India",
    gpa: "42/45 Points",
    subjects: [
      "Higher Level: Mathematics AA, Physics, Computer Science",
      "Standard Level: English A, Economics, Hindi B",
    ],
    achievements: ["Academic Excellence Award", "STEM Leadership Recognition", "Community Service Hours: 150+"],
  },
  {
    institution: "The International School Bangalore",
    degree: "IGCSE Programme",
    period: "2020 - 2022",
    location: "Bangalore, India",
    gpa: "8 A* grades",
    subjects: ["Mathematics, Physics, Chemistry, Biology", "Computer Science, English, Economics, Hindi"],
    achievements: ["Subject Topper in Computer Science", "Science Fair Winner", "Student Council Member"],
  },
]

export function Education() {
  return (
    <section className="py-80 px-16 sm:px-24 lg:px-32 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational achievements.
          </p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <GraduationCap className="h-6 w-6 text-primary mr-6" />
                    <div>
                      <CardTitle className="text-xl">{edu.institution}</CardTitle>
                      <p className="text-lg text-muted-foreground">{edu.degree}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    {edu.gpa}
                  </Badge>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-semibold mb-6">Subjects</h4>
                    <ul className="space-y-4">
                      {edu.subjects.map((subject, subIndex) => (
                        <li key={subIndex} className="text-sm text-muted-foreground">
                          • {subject}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-6 flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      Achievements
                    </h4>
                    <ul className="space-y-4">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
