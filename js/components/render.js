function renderJsonFiles() {
  fetch("js/data/collection.json")
    .then((response) => {
      return response.json();
    })
    .then((items) => {
      let placeholder = document.querySelector(".collection-cards");

      let out = "";
      let number = 0;

      for (let item of items) {
        number++;
        out += `
                <div class="cards-item anim-cards">
                    <img class="cards-item__image" src="${item.link}" alt="collection image" />
                </div>
           `;
      }

      placeholder.innerHTML = out;
    });
}

export { renderJsonFiles };
