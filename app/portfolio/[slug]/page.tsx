import { ProjectDetail } from "@/components/project-detail";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

// Server component
const ProjectDetailPage =  ({ params }: Props) => {
  // Find the project based on slug
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound(); // or return a custom 404 component
  }

  // Pass the entire project object to ProjectDetail
  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
