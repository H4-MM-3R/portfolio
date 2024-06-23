import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const modelAnim: any = {
  initial: {
    opacity: 0,
    x: 90,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 90,
  },
  transition: {
    ease: [0.76, 0, 0.24, 1],
    delay: 0.05,
    duration: 0.7,
  },
}

export const heroAnim: any = {
  initial: {
    x: -90,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -90,
    opacity: 0,
  },
}

export const anim: any = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -30,
    opacity: 0,
  },
  transition: {
    ease: [0.76, 0, 0.24, 1],
    duration: 0.7,
    delay: 0.05,
  },
};

export const anim_new: any = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    ease: [0.76, 0, 0.24, 1],
    duration: 0.7,
    delay: 0.05,
  },
};
