import { onHamb } from "./components/hamburger.js";
import { onScroll } from "./components/scroll-btn.js";
import { animationRender } from "./components/animations.js";

window.addEventListener("DOMContentLoaded", () => {
  onHamb();
  onScroll();
  animationRender();
});
