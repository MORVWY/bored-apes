import { onHamb } from "./components/hamburger.js";
import { onScroll } from "./components/scroll-btn.js";
import { animationRender } from "./components/animations.js";
import { renderJsonFiles } from "./components/render.js";
import { renderTeamMembers } from "./data/team.js";
import { renderRoadmapCards } from "./data/roadmap.js";

//Content
window.addEventListener("DOMContentLoaded", () => {
  onHamb();
  onScroll();
  animationRender();
  renderJsonFiles();
  renderTeamMembers();
  renderRoadmapCards();
});
