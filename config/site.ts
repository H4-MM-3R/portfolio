export const siteConfig = {
  name: "hemram's Portfolio",
  description: "My personal Portfolio",
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blogs",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  projects: [
    {
      title: "Crosschat",
      brief: "A realtime-chat application on redis and pusher-js for realtime",
      href: "https://github.com/h4-mm-3r/crosschat",
      tags: ["Nextjs", "Redis", "Pusher-js"],
    },
    {
      title: "Microservices",
      brief: "A Microservices prototype for a E-commerce Application",
      href: "https://github.com/h4-mm-3r/microservices",
      tags: ["Spring-Boot", "Docker", "MySQL", "Rest-API"],
    },
    {
      title: "Portfolio",
      brief: "This current Portfolio website of showcasing my projects",
      href: "https://github.com/h4-mm-3r/portfolio",
      tags: ["Nextjs", "Framer Motion"],
    },
  ],
  links: {
    github: "https://github.com/h4-mm-3r",
    linkedin: "https://www.linkedin.com/in/hemram-kumarapu-440859214/",
  },
};
