export default function ResumeButton() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-transparent px-6 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-black dark:text-accent dark:hover:bg-accent dark:hover:text-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      Download Resume
    </a>
  );
}
