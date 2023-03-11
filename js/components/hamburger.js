function onHamb() {
  const hamb = document.querySelector(".hamb"),
    nav = document.querySelector(".navbar-list");

  hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    nav.classList.toggle("activeNav");

    checkOverflow();
  });

  document.querySelectorAll(".list-item__link").forEach((item) => {
    item.addEventListener("click", () => {
      hamb.classList.remove("active");
      nav.classList.remove("activeNav");

      checkOverflow();
    });
  });

  function checkOverflow() {
    if (document.body.classList.contains("overflowHidden")) {
      document.body.classList.remove("overflowHidden");
    } else {
      document.body.classList.add("overflowHidden");
    }
  }
}

export { onHamb };
