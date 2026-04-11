import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors hover:border-accent/50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h4 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
          {title}
        </h4>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}
