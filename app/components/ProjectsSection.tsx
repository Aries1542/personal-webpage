import ProjectGroup from "./ProjectGroup";

const utahTechProjects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "https://placehold.co/600x400/1a1a1a/10b981?text=Project+1",
  },
  {
    title: "Project 2",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: "https://placehold.co/600x400/1a1a1a/10b981?text=Project+2",
  },
  {
    title: "Project 3",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSrc: "https://placehold.co/600x400/1a1a1a/10b981?text=Project+3",
  },
];

const buzzFinancialProjects = [
  {
    title: "Project 4",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageSrc: "https://placehold.co/600x400/1a1a1a/10b981?text=Project+4",
  },
  {
    title: "Project 5",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    imageSrc: "https://placehold.co/600x400/1a1a1a/10b981?text=Project+5",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-zinc-100 px-6 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
          Projects
        </h2>
        <ProjectGroup title="Utah Tech" projects={utahTechProjects} />
        <ProjectGroup
          title="Buzz Financial"
          projects={buzzFinancialProjects}
        />
      </div>
    </section>
  );
}
