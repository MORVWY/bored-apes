function renderRoadmapCards() {
  class roadmapCards {
    constructor(number, title, description, parentSelector) {
      this.number = number;
      this.title = title;
      this.description = description;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");
      element.classList.add("cards-card");
      element.classList.add("card");

      element.innerHTML = `
        <div class="card-number">
            <div class="card-number__item">${this.number}</div>
        </div>

        <div class="card__title">${this.title}</div>
        <div class="card__description">
            ${this.description}
        </div>
        `;

      this.parent.append(element);
    }
  }

  new roadmapCards(
    "1",
    "Launch Initiaed",
    "6666 crypto bored apes will be ready to minted from he crypto stay tuned for the white list!",
    ".rm .cards"
  ).render();

  new roadmapCards(
    "2",
    "Physical Merch",
    "6666 crypto bored apes will be ready to minted from he crypto stay tuned for the white list!",
    ".rm .cards"
  ).render();

  new roadmapCards(
    "3",
    "The Apes Lands",
    "6666 crypto bored apes will be ready to minted from he crypto stay tuned for the white list!",
    ".rm .cards"
  ).render();

  new roadmapCards(
    "4",
    "Bored Apes Game",
    "6666 crypto bored apes will be ready to minted from he crypto stay tuned for the white list!",
    ".rm .cards"
  ).render();

  new roadmapCards(
    "5",
    "Launch Metaverse",
    "6666 crypto bored apes will be ready to minted from he crypto stay tuned for the white list!",
    ".rm .cards"
  ).render();

  new roadmapCards(
    "6",
    "Upcoming Dapps",
    "6666 crypto bored apes will be ready to minted from he crypto stay tuned for the white list!",
    ".rm .cards"
  ).render();
}

export { renderRoadmapCards };
