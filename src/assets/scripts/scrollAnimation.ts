import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  opacity?: number;
  y?: number;
  duration?: number;
  ease?: string;
  staggerDelay: number;
  start?: string;
  end?: string;
  toggleActions?: string;
  scrub?: boolean;
}

export function scrollAnimation(selector: string, options: AnimationOptions) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {
    gsap.from(element, {
      opacity: options.opacity,
      y: options.y,
      duration: options.duration,
      ease: options.ease,
      delay: index * options.staggerDelay || 0,
      scrub: options.scrub,
      scrollTrigger: {
        trigger: element,
        start: options.start,
        end: options.end,
        toggleActions: options.toggleActions,
        // markers: true, // Set to false or remove in production
      },
    });
  });
}
