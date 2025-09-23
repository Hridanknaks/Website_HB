import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Award,
  Target,
} from "lucide-react";
import Link from "next/link";
import { ImageGallery } from "./image-gallery";

interface ProjectLink {
  name: string;
  url: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  year: string;
  team: string;
  recognition: string;
  links?: ProjectLink[];
  images?: string[];
  longDescription: string;
  features: string[];
  challenges: string[];
  impact: string[];
  technologies: string[];
}

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/portfolio/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Title & Status */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.subtitle}</p>
          </div>
          <Badge
            variant={project.status.includes("Completed") ? "default" : "secondary"}
            className="text-sm px-3 py-1"
          >
            {project.status}
          </Badge>
        </div>

        {/* Info */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" /> {project.year}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" /> {project.team}
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-2" /> {project.recognition}
          </div>
        </div>

        {/* Links */}
        {project.links?.length ? (
          <div className="flex gap-4 mb-8">
            {project.links.map((link, index) => (
              <Button asChild variant="outline" key={index}>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        ) : null}

        {/* Image Gallery */}
        {project.images?.length ? (
          <div className="mb-12 bg-black rounded-lg overflow-hidden">
            <ImageGallery images={project.images} altPrefix="Gallery" />
          </div>
        ) : null}

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none prose-p:text-slate-200 prose-li:text-slate-200">
                <p>{project.longDescription}</p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technical Challenges */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Impact & Results */}
            <Card>
              <CardHeader>
                <CardTitle>Impact & Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.impact.map((impact, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
