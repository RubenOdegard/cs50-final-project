export const siteOptions = {
  siteUrl: "https://www.rubenodegard.com",
  siteTitle: "RBY",
  social: {
    linkedin: "https://linkedin.com/in/rubenodegard",
    github: "https://github.com/rubenodegard",
  },
  developerName: "Ruben Odegard",
  developerTitle: "Full Stack Developer",
  developerDesc: "Self-taught developer looking for a new workplace in Oslo.",
};

export const navLinks = [
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/activities",
    title: "Activities",
  },

  {
    href: "/certifications",
    title: "Certifications",
  },
];

export const activity = [
  {
    id: 1,
    title: "CS50 Introduction to Computer Science",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    comment:
      "Acquire a strong foundation in computer science, programming, and key concepts. Gain proficiency in languages like C, Python, SQL, JavaScript, CSS, and HTML. ",
    place: "Harvard",
    type: "Online Course",
    startDate: "2023/09/01",
    endDate: "2023/12/31",
  },
  {
    id: 2,
    title: "Interactivity and Design",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    comment:
      "Explore the principles of interactivity in design. Create engaging and user-friendly experiences through thoughtful design choices.",
    place: "OsloMet",
    type: "Campus and Online Course",
    startDate: "2024/01/01",
    endDate: "2024/06/30",
  },
  {
    id: 3,
    title: "Google UX Design Certificate",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    comment:
      "Explore the principles of interactivity in design. Create engaging and user-friendly experiences through thoughtful design choices.",
    place: "Google",
    type: "Online Course",
    startDate: "2025/01/01",
    endDate: "2025/06/30",
  },
];

// maximum of certifications to show
export const certificationsShowMax = 3;
// certifications
export const certifications = [
  {
    title: "CS50x - Introduction to Computer Science",
    status: 1,
    expandable: 1,
    school: 1,
    link: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
    certification: "",
    place: "Harvard",
    type: "Online Course",
    startDate: "2023/09/01",
    endDate: "2023/12/31",
    desc:
      "Acquire a strong foundation in computer science, programming, and key concepts. Gain proficiency in languages like C, Python, SQL, JavaScript, CSS, and HTML.",
    topics: [
      "A broad and robust understanding of computer science and programming",
      "How to think algorithmically and solve programming problems efficiently",
      "Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development",
      "Familiarity with a number of languages, including C, Python, SQL, and JavaScript plus CSS and HTML",
      "How to engage with a vibrant community of like-minded learners from all levels of experience",
      "How to develop and present a final programming project to your peers",
    ],
    tags: [
      "Computer Science",
      "Data Structures",
      "Algorithms",
      "C",
      "Python",
      "SQL",
      "HTML",
      "CSS",
      "Javascript",
    ],
  },
  {
    title: "Interactivity and Design",
    status: 1,
    expandable: 1,
    school: 0,
    link: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
    certification: "",
    place: "OsloMet",
    type: "Campus",
    startDate: "2024/01/01",
    endDate: "2024/06/30",
    desc: "",
    topics: [],
    tags: [],
  },

  {
    title: "The Odin Project",
    status: 0,
    expandable: 1,
    school: 0,
    link: "https://www.theodinproject.com/",
    certification: "",
    place: "Erik Trautman",
    type: "Online Course",
    startDate: "",
    endDate: "",
    desc:
      "The Odin Project is an open-source curriculum for learning web development. It provides free, high-quality resources and a supportive community for self-learners.",
    topics: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "React",
      "Databases",
      "Git",
      "GitHub",
      "Responsive Design",
    ],
    tags: [
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "React",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "AWS Cloud Practitioner Certificate",
    status: 2,
    expandable: 1,
    school: 1,
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    certification: "",
    place: "Amazon",
    type: "Online Course",
    startDate: "",
    endDate: "",
    desc:
      "Acquire a strong foundation in computer science, programming, and key concepts. Gain proficiency in languages like C, Python, SQL, JavaScript, CSS, and HTML.",

    topics: [
      "An understanding of AWS Cloud concepts",
      "Essential AWS services, their use cases, and basic architecture best practices",
      "AWS Cloud value proposition",
      "The AWS Cloud's shared responsibility model",
      "Key security and compliance concepts",
      "Basic familiarity with AWS pricing, billing, and account structures",
    ],
    tags: [
      "AWS",
      "Cloud Computing",
      "AWS Cloud Concepts",
      "AWS Services",
      "Security and Compliance",
    ],
  },

  /*
  {
    title: "Harvard CS50p - Introduction to Programming with Python", status: 2,
    expandable: true,
    link: "https://pll.harvard.edu/course/cs50s-introduction-programming-python",
    certification: "",
    topics: [
      "In-depth understanding of Python programming",
      "Working with functions, arguments, and return values",
      "Handling variables, data types, and exceptions",
      "Understanding conditionals and Boolean expressions",
      "Mastering loops for efficient programming",
      "Exploring objects, methods, and object-oriented programming concepts",
      "Dealing with file I/O and using various libraries",
    ],
    tags: ["Computer Science", "Information Technology", "Databases", "Python"],
  },
  */
  {
    title: "Google UX Design Certificate",
    status: 2,
    expandable: 1,
    school: 1,
    link: "https://grow.google/certificates/ux-design/",
    certification: "",
    place: "Google",
    type: "Online Course",
    startDate: "",
    endDate: "",
    desc:
      "Acquire a strong foundation in computer science, programming, and key concepts. Gain proficiency in languages like C, Python, SQL, JavaScript, CSS, and HTML.",

    topics: [
      "Comprehensive understanding of User Experience (UX) Design principles",
      "Applying UX design techniques to create user-friendly digital products",
      "Design thinking and problem-solving strategies",
      "Prototyping and usability testing",
      "UI (User Interface) design principles",
      "Creating wireframes and interactive prototypes",
      "Real-world project experience",
    ],
    tags: [
      "User Experience Design",
      "UX/UI Design",
      "Prototyping",
      "Design Thinking",
      "Google Certification",
    ],
  },
  {
    title: "Google Cloud Certification",
    status: 2,
    expandable: 1,
    school: 1,
    link: "https://cloud.google.com/learn/certification?hl=nb",
    certification: "",
    place: "Google",
    type: "Online Course",
    startDate: "",
    endDate: "",
    desc:
      "Acquire a strong foundation in computer science, programming, and key concepts. Gain proficiency in languages like C, Python, SQL, JavaScript, CSS, and HTML.",

    topics: [
      "Understanding Google Cloud services and solutions",
      "Creating and managing virtual machine instances",
      "Cloud storage and data storage options",
      "Scalability and load balancing",
      "Cloud identity and access management",
      "Google Cloud networking concepts",
    ],
    tags: [
      "Cloud Computing",
      "Google Cloud",
      "Virtual Machines",
      "Data Storage",
      "Networking",
    ],
  },
  {
    title: "Google Project Management Certificate",
    status: 2,
    expandable: 1,
    school: 1,
    link: "https://grow.google/certificates/project-management/",
    certification: "",
    place: "Google",
    type: "Online Course",
    startDate: "",
    endDate: "",
    desc:
      "Acquire a strong foundation in computer science, programming, and key concepts. Gain proficiency in languages like C, Python, SQL, JavaScript, CSS, and HTML.",

    topics: [
      "Effective project management and leadership skills",
      "Scope, time, cost, quality, human resources, and risk management",
      "Agile project management methodologies",
      "Collaborative project planning and execution",
      "Hands-on experience with real-world projects",
      "Tools and techniques for project management",
    ],
    tags: [
      "Project Management",
      "Leadership",
      "Agile Methodologies",
      "Collaborative Planning",
      "Google Certification",
    ],
  },

  {
    title: "Linux Professional Institute LPIC-1",
    status: 2,
    expandable: 1,
    school: 1,
    link: "https://www.lpi.org/our-certifications/lpic-1-overview/",
    certification: "",
    place: "Linux",
    type: "Online Course",
    startDate: "",
    endDate: "",
    desc:
      "Acquire a strong foundation in computer science, programming, and key concepts. Gain proficiency in languages like C, Python, SQL, JavaScript, CSS, and HTML.",

    topics: [
      "Linux installation and package management",
      "GNU and Unix commands",
      "Devices, Linux filesystems, and filesystem hierarchy standard",
      "System boot and initialization",
      "Shells, scripting, and data management",
      "User interfaces and desktops",
      "Administrative tasks",
    ],
    tags: [
      "Linux",
      "LPIC-1",
      "GNU",
      "Unix",
      "Package Management",
      "Filesystems",
      "Boot Process",
      "Shell Scripting",
      "Desktop Environment",
    ],
  },
];

export const projects = [
  {
    title: "Developer Portfolio",
    desc: "A portfolio created as a final project for Harvard's CS50x course.",
    year: "2023",
    content: "",
    hidden: false,
    image: "",
    link: "https://www.github.com/rubenodegard",
    live: "none",
    tags: ["NextJS", "Typescript", "TailwindCSS"],
    showcase: {
      introduction: [
        "Personal developer portfolio as a final project in Harvard CS50x online course. Built using Next.js, Typescript and TailwindCSS.",
      ],
      desc: [
        "For the final project the requirements were simple, create a bigger project using technologies of own choosing.",
        "I immediately thought about creating a developer portfolio, as it is a platform I'm going to be using going forward stepping into a new career field.",
      ],
      mainSection: {
        title: "Main section",
        text: [
          "Selecting the technologies for this project ment going with something that was already familiar to me, even before starting CS50x.",
          "I have previous experience with React and Next, and went with Tailwind for styling because of the speed of development. On the Github page for this project I go into more detail on my thought process both pre and post build.",
        ],
      },
      longSection: {
        title: "Long section",
        text: [
          "111Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
          "222Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
        ],
      },
      tags: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "Docker",
        "PostgreSQL",
        "Planetscale",
      ],
      contentSection: [
        {
          title: "Projects",
          text: [
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
          ],
          image: "",
        },
        {
          title: "Activities",
          text: [
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
          ],

          image: "",
        },
        {
          title: "Certifications",
          text: [
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim Lorem ipsum dolor sit amet, qui minim labore adipisicing mini.",
          ],

          image: "",
        },
      ],
    },
  },
];
