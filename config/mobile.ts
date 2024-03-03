export const menu = {
  open: {
    width: "240px",
    height: "425px",
    top: "-25px",
    right: "-30px",
    opacity: 1,
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "32px",
    height: "32px",
    top: "0px",
    right: "0px",
    opacity: 0,
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const menuLogo = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.45,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const menuItems = {
  open: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.35 + i * 0.1,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  }),
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};


export const links = [
  {
    title: "Home",
    href: "/",
  },
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
];
