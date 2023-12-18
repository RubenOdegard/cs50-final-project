import Link from "next/link";
import GithubIcon from "./svg/github-icon";
import LinkedInIcon from "./svg/linkedin-icon";
import LanguageToggle from "./language-toggle";
import LanguageIcon from "./svg/language-icon";
import FeatureDisabledDialog from "./feature-disabled-dialog";

export default function Footer() {
  return (
    <footer className="flex w-full border-t py-8 lg:py-12 px-4 md:px-12  lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-y-2 max-w-4xl mx-auto items-center justify-between px-4 lg:p-0 flex-col md:flex-row">
        <div className="hidden md:flex uppercase order-1 md:order-0 md:justify-self-start justify-self-center font-bold ">
          Ruben Odegard
        </div>
        <div className="flex flex-col gap-y-2 justify-self-center justify-center items-center order-0 md:order-1">
          <div className="relative">
            <LanguageIcon color="text-red-500" />
            <span className="h-[24px] w-[24px] bg-white blur-xl opacity-60 absolute top-0 left-0 rounded-full z-10">
            </span>
          </div>
          <FeatureDisabledDialog>
            <LanguageToggle />
          </FeatureDisabledDialog>
        </div>
        <div className="flex gap-2 order-2 md:order-2 mt-2 justify-self-center md:justify-self-end">
          <Link href="https://linkedin.com/in/rubenodegard" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/rubenodegard" target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
