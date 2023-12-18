import ShowActivities from "@/components/show-activities";
import ShowBackgroundHero from "@/components/show-background-hero";
import ShowCertifications from "@/components/show-certifications";
import ShowInformation from "@/components/show-information";
import ShowPageHero from "@/components/show-page-hero";
import ShowProjects from "@/components/show-projects";
import { cn } from "@/lib/utils";

// TODO: Fill out project 1 information on project page.
// TODO: Fix crop on project images, there is padding on the actual .png files
// TODO: Add clickable links to Certifications
// TODO: Add clickable links to Activities

export default function Home() {
  const sectionClasses = "w-full prose dark:prose-invert lg:prose-lg";
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-12 lg:px-0 overflow-x-hidden relative ">
      {/* Render background in the hero section */}
      <ShowBackgroundHero />
      {/* Main page sections */}
      <div className="flex w-full h-full justify-center items-center flex-col space-y-16 md:space-y-32 pb-32">
        <section
          className={cn(
            sectionClasses,
            "max-w-4xl items-center pt-24 flex min-h-[60dvh] ",
          )}
        >
          <ShowPageHero />
        </section>

        <section className={cn(sectionClasses, "relative")}>
          <ShowProjects />
        </section>

        <section className={cn(sectionClasses, "max-w-2xl")}>
          <ShowInformation />
        </section>

        <section
          className={cn(
            sectionClasses,
            "max-w-2xl md:px-4 md:pb-6 md:shadow-xl md:bg-card md:border md:border-ring/10 md:rounded-lg",
          )}
        >
          <ShowActivities />
        </section>

        <section
          className={cn(
            sectionClasses,
            "max-w-2xl md:px-4 md:pb-6 md:shadow-xl md:bg-card md:border md:border-ring/10 md:rounded-lg",
          )}
        >
          <ShowCertifications />
        </section>
      </div>
    </main>
  );
}
