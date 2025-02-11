import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen ">
      <main className="flex flex-col gap-8 items-center justify-center h-screen ">
        <h1 className="text-[90px]">From Idea to Innovation,</h1>
        <h1 className="text-[90px]">Transforming Visions into Reality</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Work
            <ChevronRight />
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
            <ChevronRight />
          </a>
        </div>
      </main>
    </div>
  );
}
