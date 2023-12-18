import Link from "next/link";
import Image from "next/image";

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
      className="flex overflow-x-scroll snap snap-x snap-mandatory transition-all duration-250 ease-in-out rounded-md"
      style={{ scrollbarWidth: "thin" }}
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="w-full flex-shrink-0 relative text-white snap-center"
        >
          <Link href={project.href}>
            <div className=" w-full bg-cover bg-center relative ">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black opacity-100">
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full sm:max-w-xl px-4">
                <h3 className="text-base md:text-lg font-bold m-0">
                  {project.title}
                </h3>
                <p className="hidden sm:inline-block text-xs md:text-sm mt-2 opacity-90">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="absolute top-2 right-2 text-xs text-foreground bg-card/50 px-1.5 py-0.5 rounded-md">
              {index + 1}/{projects.length}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
