import Image from "next/image";
import ResumeButton from "./ResumeButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-white px-6 py-20 dark:bg-black"
    >
      <div className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-accent md:h-80 md:w-80">
          <Image
            src="https://placehold.co/400x400/111111/10b981?text=ND"
            alt="Nick de Jong"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="mb-2 text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl dark:text-white">
            Nick de Jong
          </h1>
          <p className="mb-8 text-xl text-zinc-600 md:text-2xl dark:text-zinc-400">
            Software Engineer
          </p>
          <ResumeButton />
        </div>
      </div>
    </section>
  );
}
