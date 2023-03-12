function animationRender() {
  function showRightAnimation() {
    let options = {
      root: null,
      rootMargin: "1px",
      threshold: 0.01,
    };

    let callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-right");
          observer.unobserve(entry.target);
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    let targets = document.querySelectorAll(".anim-right");
    targets.forEach((target) => {
      observer.observe(target);
    });
  }

  function showLeftAnimtaion() {
    let options = {
      root: null,
      rootMargin: "1px",
      threshold: 0.01,
    };

    let callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-left");
          observer.unobserve(entry.target);
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    let targets = document.querySelectorAll(".anim-left");
    targets.forEach((target) => {
      observer.observe(target);
    });
  }

  function showHeaderAnimation() {
    let options = {
      root: null,
      rootMargin: "1px",
      threshold: 0.01,
    };

    let callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-fwd-center");
          observer.unobserve(entry.target);
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    let targets = document.querySelectorAll(".anim-header");
    targets.forEach((target) => {
      observer.observe(target);
    });
  }

  function showDescriptionAnimation() {
    let options = {
      root: null,
      rootMargin: "1px",
      threshold: 0.01,
    };

    let callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tracking-in-expand");
          observer.unobserve(entry.target);
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    let targets = document.querySelectorAll(".anim-description");
    targets.forEach((target) => {
      observer.observe(target);
    });
  }

  showRightAnimation();
  showLeftAnimtaion();
  showHeaderAnimation();
  showDescriptionAnimation();
}

export { animationRender };
