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
      tags: ["Spring-Boot", "Docker", "MySQL"],
    },
    {
      title: "Portfolio",
      brief: "This current Portfolio website of showcasing my projects",
      href: "https://github.com/h4-mm-3r/portfolio",
      tags: ["Nextjs", "Framer Motion"],
    },
    {
      title: "Food-Delivery Service",
      brief: "A food delivery application backend service with Spring-Boot using Apache Kafka PUB/SUB architecture",
      href: "https://github.com/h4-mm-3r/food-delivery-service",
      tags: ["Spring-Boot", "Apache-Kafka", "Maven"],
    },
    {
      title: "Search Ngin",
      brief: "A Semantic Search Engine prototype for a E-commerce application using Postgres full-text search and Vector Cosine Similarity",
      href: "https://github.com/h4-mm-3r/search-ngin",
      tags: ["Nextjs", "PostgreSQL", "Typescript"],
    },
  ],
  links: {
    github: "https://github.com/h4-mm-3r",
    linkedin: "https://www.linkedin.com/in/hemram-kumarapu-440859214/",
  },
};
