function onScroll() {
  const btn = document.querySelector(".scroll-btn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  btn.addEventListener("click", topFunction);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

export { onScroll };
