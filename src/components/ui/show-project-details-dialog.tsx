import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TProject } from "@/types/types";
import Image from "next/image";
import { Badge } from "./badge";
import { Button } from "./button";
import GithubLinkButton from "./github-link-button";
import LivePreviewButton from "./live-preview-button";

interface ShowProjectDetailsProps {
  data: TProject;
}

export default function ShowProjectDetails({ data }: ShowProjectDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          aria-label="open more details about the project"
          variant="outline"
          size="sm"
          className="text-xs md:text-sm"
        >
          Show more
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full flex flex-col gap-y-6 py-12 max-w-7xl max-h-[80vh] overflow-scroll ">
        <DialogHeader>
          <div className="grid grid-cols-6 gap-8  rounded-md">
            <div className="col-span-6 lg:col-span-3">
              <DialogTitle className="mt-0 pt-0 text-xl flex justify-between items-center">
                {data.title}
              </DialogTitle>
              <DialogDescription className="text-left">
                <p className="text-secondary-foreground">
                  {data.showcase.introduction}
                </p>
                <p className="mt-3">
                  {data.showcase.desc.map((desc, index) => {
                    return <span key={`desc-${index}`}>{desc}{" "}</span>;
                  })}
                </p>
                <div className="flex gap-1.5 mt-4">
                  <LivePreviewButton href={data.live} variant="default" />
                  <GithubLinkButton href={data.link} variant="default" />
                </div>
              </DialogDescription>
            </div>
            <div className="col-span-6 lg:col-span-3 order-first lg:order-last w-full relative">
              <Image
                src="/images/project-2.png"
                alt="project 1"
                height={1920}
                width={1080}
                layout=""
                objectFit="fill"
                className="border-ring/10 border rounded-lg shadow-md"
              />
              <div className="inset-0 hidden dark:inline-block absolute bg-blue-900/20 blur-3xl -z-10" />
            </div>
          </div>
        </DialogHeader>
        <div className="flex-grow h-[1px] w-full dark:bg-gray-800/50 bg-gray-100 col-span-6" />
        <div className="grid grid-cols-6 gap-x-8">
          <div className="flex flex-col space-x-2 col-span-6 lg:col-span-4">
            <h3>{data.showcase.mainSection.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              {data.showcase.mainSection.text.map((content, index) => {
                return <span key={`mainSection-${index}`}>{content}{" "}</span>;
              })}
            </p>
          </div>
          <div className="flex flex-col space-x-2  col-span-6 lg:col-span-2 ">
            <h3>Tags</h3>
            <div className="text-muted-foreground gap-4 flex flex-wrap mt-6">
              {data.showcase.tags.map((tag) => {
                return <Badge key={`badge-${tag}`}>{tag}</Badge>;
              })}
            </div>
          </div>
        </div>
        <div className="flex-grow h-[1px] w-full dark:bg-gray-800/50 bg-gray-100 col-span-6" />
        <div className="flex flex-col col-span-6">
          <h3>{data.showcase.longSection.title}</h3>
          <p className="text-muted-foreground text-sm md:text-base">
            {data.showcase.longSection.text
              ? data.showcase.longSection.text.map((text, index) => (
                <span key={`longSection-${index}`}>{text}{" "}</span>
              ))
              : null}
          </p>
        </div>

        {data.showcase.contentSection
          ? data.showcase.contentSection.map((content, index) => (
            <div
              key={`contentSection-${index}`}
              className={"grid grid-cols-6 place-items-center gap-x-8 "}
            >
              {index % 2 === 0
                ? (
                  <>
                    {/* Image on the left */}
                    <div className="flex flex-col space-x-2 col-span-6 lg:col-span-3 ">
                      <div className="text-muted-foreground gap-4 flex relative w-full mt-6 ">
                        {/* background blur for image, can be made into component because it's used multiple times over the project */}
                        <div className="inset-0 hidden dark:inline-block absolute bg-blue-950/20 blur-3xl -z-10" />
                        {/* render alt from project config */}
                        <Image
                          src="/images/project-2.png"
                          alt="project image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                          objectFit="cover"
                          className="border-ring/10 border rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                    {/* Text on the right */}
                    <div className="flex flex-col space-x-2 order-first lg:order-last col-span-6 lg:col-span-3 ">
                      <h3>{content.title}</h3>
                      <p className="text-muted-foreground  text-sm md:text-base">
                        {content.text.map((text, textIndex) => (
                          <span
                            key={`contentSection-${index}-text-${textIndex}`}
                          >
                            {text}
                          </span>
                        ))}
                      </p>
                    </div>
                  </>
                )
                : (
                  // Reverse order for odd value
                  <>
                    {/* Text on the left */}
                    <div className="flex flex-col space-x-2 order-first col-span-6 lg:col-span-3">
                      <h3>{content.title}</h3>
                      <p className="text-muted-foreground  text-sm md:text-base">
                        {content.text.map((text, textIndex) => (
                          <span
                            key={`contentSection-${index}-text-${textIndex}`}
                          >
                            {text}
                          </span>
                        ))}
                      </p>
                    </div>
                    {/* Image on the right */}
                    <div className="flex flex-col space-x-2 col-span-6 lg:col-span-3 ">
                      <div className="text-muted-foreground gap-4 flex relative w-full mt-6">
                        {/* background blur for image, can be made into component because it's used multiple times over the project */}
                        <div className="inset-0 hidden dark:inline-block absolute bg-blue-950/20 blur-3xl -z-10" />
                        <Image
                          src="/images/project-2.png"
                          alt="project image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                          objectFit="cover"
                          className="border-ring/10 border rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </>
                )}
            </div>
          ))
          : null}

        <DialogFooter className="sm:justify-start col-span-6">
          <DialogClose asChild>
            <Button aria-label="close dialog" type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}