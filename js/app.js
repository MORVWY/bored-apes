import { onHamb } from "./components/hamburger.js";
import { onScroll } from "./components/scroll-btn.js";

window.addEventListener("DOMContentLoaded", () => {
  onHamb();
  onScroll();
});
