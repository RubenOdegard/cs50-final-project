import Link from "next/link";
import Image from "next/image";
import LivePreviewButton from "./live-preview-button";
import GithubLinkButton from "./github-link-button";

const projects = [
  {
    id: 1,
    title: "Developer Portfolio",
    description:
      "Personal developer portfolio for the final project in Harvard´s CS50x course.",
    imageUrl: "/images/project-1.png",
    href: "/project1",
    github: "",
    live: "",
  },
];

// TODO: Change project data to come from site config.
// TODO: Add buttonf for github and live view.

const ProjectGallery = () => {
  return (
    <div
      className="flex overflow-x-scroll snap snap-x snap-mandatory transition-all duration-250 ease-in-out rounded-md group"
      style={{ scrollbarWidth: "thin" }}
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="w-full flex-shrink-0 relative text-white snap-center"
        >
          <div className=" w-full bg-cover bg-center relative  ">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1920}
              height={1080}
              className="w-full h-full object-cover scale-105 group-hover:scale-110 group-hover:grayscale transition-scale duration-500 ease-in-out"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black opacity-100">
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-2/3 md:w-full sm:max-w-xl px-3 py-4 md:px-8 md:py-8 rounded-md bg-gradient-to-t from-gray-950/50 to-gray-900/30 border border-accent/10 dark:border-ring/10 shadow-md backdrop-blur group-hover:rounded-xl transition-all duration-500">
              <h3 className="text-base md:text-lg font-bold m-0">
                {project.title}
              </h3>
              <p className="hidden sm:inline-block text-xs md:text-sm mt-0  opacity-90">
                {project.description}
              </p>

              <div className="flex w-full gap-1.5 items-center justify-center mt-2 md:mt-6">
                <LivePreviewButton
                  href={project.live}
                  variant="outline"
                />
                <GithubLinkButton
                  href={project.github}
                  variant="outline"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 text-xs text-foreground bg-card/50 px-1.5 py-0.5 rounded-md">
            {index + 1}/{projects.length}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
