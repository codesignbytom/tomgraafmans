import Lenis from "@studio-freight/lenis";
const lenis = new Lenis();

export function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
