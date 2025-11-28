const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "JavaScript"],
  },
  {
    category: "Backend & Infra",
    items: ["Node.js", "Express.js", "Flask", "System Design"],
  },
  {
    category: "Cloud",
    items: ["Docker", "Microservices", "API Gateway"],
  },
  {
    category: "AI & Data",
    items: ["PyTorch", "Keras", "scikit-learn", "pandas", "NumPy"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/email.svg",
    bg: "#ff866b",
    link: "mailto:manab04.bairagi@gmail.com",
  },
  {
    id: 4,
    text: "Phone",
    icon: "/icons/phone.svg",
    bg: "#4bcb63",
    link: "tel:+919903719660",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Uni Exam Mgmt System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Project Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "University Examination Management System (MERN Stack).",
            "Led a 4-member team to build a system for exam scheduling, registration & results.",
            "Integrated user authentication & dashboards.",
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/",
          position: "top-10 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Mock Interviewer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Project Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Mock Interview System (Next.js, Gemini API, Vapi).",
            "Developed an AI-powered mock interviewer with real-time interaction and voice feedback.",
          ],
        },
        {
          id: 2,
          name: "Edith Live",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://edith-live-link.com",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Super Resolution DL",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Project Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Super Resolution Deep Learning Model.",
            "Built a deep learning model to upscale dual low-resolution satellite images for a hackathon organized by ISRO.",
            "Used for identification of land and features for monitoring vegetation.",
          ],
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "Glacial Lake Detection",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-5",
      windowPosition: "top-[40vh] left-10",
      children: [
        {
          id: 1,
          name: "Project Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Glacial lake and glacier detection using Deep Learning.",
            "Created a custom deep learning model with custom loss function to identify and classify unbalanced satellite image data.",
            "Predicts glacial lake floods for sustainable development near vulnerable regions.",
          ],
        },
      ],
    },

    // ▶ Project 5
    {
      id: 9,
      name: "DL Studio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-40",
      windowPosition: "top-[45vh] left-15",
      children: [
        {
          id: 1,
          name: "Project Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "DL Studio is a powerful, interactive platform designed to democratize deep learning education and research.",
            "Empowers students, researchers, and developers to visually build, analyze, and export deep learning models without boilerplate code.",
          ],
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Manab Bairagi",
      image: "/images/adrian.jpg",
      description: [
        "Hi I am Manab Bairagi, a motivated Computer Science and Engineering undergraduate with 8.0 CGPA.",
        "Proven experience in deep learning, machine learning, cloud storage solutions, and backend development.",
        "Passionate about building scalable, highly available systems with expertise in C++, Python.",
        "Demonstrated leadership in cross-functional teams and hands-on experience in infrastructure development, API design, and performance optimization for cloud-based applications.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };