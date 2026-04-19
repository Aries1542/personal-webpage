import ProjectCard from "./ProjectCard";

interface Project {
    title: string;
    description: string;
    imageSrc: string;
}

interface ProjectGroupProps {
    title: string;
    projects: Project[];
    outlineColor: string;
}

export default function ProjectGroup({ title, projects, outlineColor }: ProjectGroupProps) {
    return (
        <div className="group mb-12 transition-transform duration-300 hover:scale-[1.02] flex flex-col items-start">
            <div
                className="bg-emerald-600 dark:bg-white px-3 ml-3 rounded-t-lg transition-all duration-300 group-hover:bg-[var(--hover-color)]"
                style={{ "--hover-color": outlineColor } as React.CSSProperties}
            >
                <span
                    className="text-lg font-bold text-emerald-50 transition-colors duration-300 group-hover:text-white dark:text-zinc-950 dark:group-hover:text-white"
                >
                    {title}
                </span>
            </div>
            <div
                className="relative rounded-lg border-2 border-emerald-600 dark:border-white p-6 transition-all duration-300 group-hover:border-[var(--hover-color)]"
                style={{ "--hover-color": outlineColor } as React.CSSProperties}
            >
                <div className="grid gap-6 pt-2 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
    );
}
