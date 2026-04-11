import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
}

interface ProjectGroupProps {
  title: string;
  projects: Project[];
}

export default function ProjectGroup({ title, projects }: ProjectGroupProps) {
  return (
    <div className="mb-12">
      <h3 className="mb-6 text-2xl font-bold text-accent">{title}</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
