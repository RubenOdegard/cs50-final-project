# CS50 Final Project - Developer Portfolio

#### Video Demo: [URL HERE]

#### Description:

---

[View hosted version - not updated post submission](cs50-final-project-umber.vercel.app)

> A maintained verison of this website will be hosted on 3 domains post
> submission.\
> Check the **prelude** to see the actual domains.

## **Table of contents**

- [**Prelude**]()
- [**Thoughts - Pre Construction**]()
  - [Strategy]()
  - [Tech Stack]()
  - [SEO]()
- [**Project Walkthrough**]()
- [**Reflection - Post Construction**]()

## Prelude

Here we are, at the end of CS50x.

As of writing this, I find myself in a situation where I am semi-forced to
change career paths. Without going into too much detail, starting CS50x was one
of the stepping stones for me to start the transition into a new career as a
software/web developer. Programming has always been a hobby for me, and I am
really looking forward to entering a new realm of possibilities for the years to
come.

My final project is going to be a personal portfolio, which I will be using in a
professional context going forward. I am based in Oslo, Norway and will be
looking for a job there, but I will be configuring my site to be multilingual by
domain specific internationalization (i18n). Most likely, this is something that
I'm going to implement after finishing this course, as I have time restrictions
to deliver and there are other more important features.

The website will be written in English and converted at a later date to
Norwegian.

Domains:

- [rubenodegard.com](https://rubenodegard.com) (en-US)
- [rubenodegard.no](https://rubenodegard.no) (nb_NO)
- [rby.no](https://rby.no) (nb_NO)

---

## Thoughts - pre construction

### Strategy

Before starting, I need a somewhat clear vision for this project. I am thinking
I need to have at least a few sections which are highly relevant for a potential
employer to take interest in.

- An Introduction section: short description of who am I and what I am about.
- A Certification section: list of current certifications, possibly
  certifications I want to take in the future?
- An Experience section: as I do not have current professional experience as a
  web developer, I might have to get creative here.
- A Project section: list of projects, possibly a max limit of 5(?) with a link
  to a collection of all projects.

In addition to these sections I need some form of navigation and a footer. I am
also thinking about having a CTA always visible, maybe initially in the
navigation and following the visitor when scrolling the website.

### Tech Stack

- Framework: [NextJS](https://nextjs.org/)
- Language: [Typescript / TSX](https://www.typescriptlang.org/)
- Styling: [TailwindCSS](https://tailwindcss.com/)
- Version Control: [Git & Github](https://github.com/)
- Database: ~~[Planetscale](https://planetscale.com/)~~ - _ended up writing a
  local config file, easily expandable to a database at a later time_
- Hosting: [Vercel](https://vercel.com/)

### SEO

It's important to make sure the SEO of my portfolio is the best it can be, in
other words a well-optimized website both for _users and the search engines_. I
will be using Lighthouse Performance Scoring to get an indicator of how my
website is performing, even though LPS does not affect SEO directly.

Focus areas:

- Correct page structure and semantic HTML.
- Dynamic metadata
- Clean and descriptive URLs
- Responsive design (mobile-friendly)
- Image optimization
- Open Graph Image
- XML Sitemap
- Robots.txt file for site crawling

---

## Project Walkthrough

**This walkthrough is written in December 2023 and will not be updated to
reflect further improvements and changes to the codebase.**

This website pulls all information from a config.ts file, located in
src/app/config/.\
In later additions, this information might be further split up (site, certs,
projects and activities in its own files), or moved to a database online.

During this project, I made todos with comments and used live grep to keep track
of them across multiple files in the project.
![TODO-NVIM](https://gcdnb.pbrd.co/images/iL4NYhsZAxkR.png?o=1)

**Layout**

- Navigation
- {children}
- Footer

The navigation and footer are separated into a layout file, which persists
across the whole website and takes children as props. In this case, the children
are the rest of the content on the website, where the content might change on
navigation, but the layout persists.

**Navigation**

The navigation is divided into two, one for mobile and one for larger screens.
It pulls information from config.ts file, so changes made in one place reflect
both components.

**Main Navigation**
![Main-navigation](https://gcdnb.pbrd.co/images/XCgOKFfKvd64.png?o=1)

**Mobile Navigation**\
![Mobile-navigation](https://gcdnb.pbrd.co/images/dJvBiDRNP5hQ.png?o=1)

**Footer**\
![Footer](https://gcdnb.pbrd.co/images/WH4cgwmLbSTq.png?o=1)

**Walkthrough of the main page**

    - Hero
    - Featured projects > CTA > Projects page
    - Me, myself and I
    - Activity monitor & planner > CTA > Activities page
    - Certifications > CTA > Certifications page

Each individual page apart from the main page is an extension of what's already
shown on the main page. As of writing this, I'm using tables to display the
contents on each page and giving more details using modals. I expect to be
making, for example, each project its own page so that the search engines can
crawl better through my website, and not just use modals and Github/live links
to display details.

Featured projects is an individual component in which I manually have to add
projects to be displayed on the front page. The activity monitor and
certifications differ from this approach as it grabs data from the config file
and maps over the data to display it. On the front page, there is a cap on how
many items it can render, while on the "main" page for, e.g., Certifications the
render limit is non-existent.

**Hero**

> Bold title and undertitle, with a short tag line underneath. "Available for
> work" is dynamic and will always display 3 months ahead of time because of the
> notice period for my current employer.

![Hero](https://gcdnb.pbrd.co/images/zmc9yjNNBt3R.png?o=1)

**Featured Projects**

> Non-dynamic data, manually updated for now. CTA buttons to navigate to all of
> my projects (projects page) or my Github.

![Featured-projects](https://gcdnb.pbrd.co/images/M75RT6aajMon.png?o=1)

**About me**

> A section where I talk a bit about myself, motivation and the tools at my
> hand. I went the route of selecting _some_ of the tools I work with and could
> display them with icons. Alternatively, I could have gone for text and more
> tools, but this fit the less-is-more design.

![About-me](https://gcdnb.pbrd.co/images/pccdt0AKXS80.png?o=1)

**Activity Monitor & Planner**

> Data rendered in from the site's config file, with a configurable limit on how
> many to render on the main page. These activities include everything from
> school, courses, certifications and more. I want to make changes here later,
> so that I can add a "featured" column to the json and toggle them manually.

![Activity-monitor-and-planner](https://gcdnb.pbrd.co/images/3IpPgpulqHCi.png?o=1)

**Certifications**

> Data rendered in from the site's config file. Can be expanded to see more
> detailed information about the certifications, as well as a link to both the
> course and the certification proof of completion (conditionally rendered
> button if certification proof does exist)

> There's also a conditionally rendered status bar on each course, which is
> calculated by the start and end time of the course. Three values; _ongoing
> (yellow), TBD (red) or completed (green)_.

![Certifications](https://gcdnb.pbrd.co/images/1b3pUr3hhd7E.png?o=1)

**Individual pages - from navigation**

![Projects](https://gcdnb.pbrd.co/images/9gDva51M7kaR.png?o=1)
![Activities](https://gcdnb.pbrd.co/images/t2SCJJebhhgJ.png?o=1)
![Certifications](https://gcdnb.pbrd.co/images/uYuJVw5MUcIx.png?o=1)

When you are visiting the website, there is always a CTA button visible. On
mobile, the button is floating on the bottom right corner, and on larger
screens, it's available in the navigation menu.

Each individual page has its own metadata, and should I happen to create
individual pages for each project, those would have dynamic metadata
accordingly. **Here are some of the SEO components:** _opengraph-image.png_,
_robots.ts_, _sitemap.ts_.

Together with for example semantic html, aria-labels for buttons and titles for
svgs the website does well on Lighthouse.

![Lighthouse-score](https://gcdnb.pbrd.co/images/feqvxIN4j9Yp.png?o=1)

Now, you can either look at the version of this website the moment is was
submitted, or you can view the live version which is subject to updates and
revisions.

Submission: [view website](replace)\
Live: [view live website](replace)

---

## Reflection - Post Construction

To start off, there is a couple of things I would have done differently about
this project.

- _Mock out a design of the website before touching any code._
- _Write more clean code and components, not get lazy._

As I did not have a mock design (neither wireframe nor high fidelity prototype)
I fell for the good old mistake of designing in code. A lot of the time I've
spent on this project is correcting design choices, rewriting, and refactoring
my own code. I would have saved tons of time by having something to design by,
and not get caught up in my own headspace about every pixel color and placement.

---

**I had some thoughts before starting this project. Let's take a look.**

> **Pre thoughts**: An Introduction section: short description of who I am and
> what I am about.

**Post**: Hero section, short description. Introduction moved to _Me, myself and
I_.

> **Pre thoughts**: A Certification section: list of current certifications,
> possibly certifications I want to take in the future?

**Post**: Implemented, conditionally rendering from config file.

> **Pre thoughts**: An Experience section: as I do not have current professional
> experience as a web developer, I might have to get creative here.

**Post**: Not directly implemented, fused together with _Me, myself and I_.

> **Pre thoughts**: A Project section: list of projects, possibly a max limit of
> 5(?) with a link to a collection of all projects.

**Post**: Implemented, featured projects gallery together with a projects page.

> **Pre thoughts**: In addition to these sections I need some form of navigation
> and a footer. I am also thinking about having a CTA always visible, maybe
> initially in the navigation and following the visitor when scrolling the
> website.

**Post**: Implemented. Main and mobile navigation, with a CTA always visible (in
the navigation on large screens, and floating in the bottom right corner on
mobile). The footer is minimal, but is not something I'm satisfied with and will
be updated shortly.

---

As of writing this I am done with the project for the course submission, but I
do not consider myself completely satisfied. This is a project that will
continue to live on and get regular updates. That's until I scrap the project
and start over.

All in all, a good learning experience and a great website to futher build on to
advance my transition into a new and exciting career.

\- Ruben

> :wq!
