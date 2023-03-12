function renderTeamMembers() {
  class memberCards {
    constructor(src, alt, name, total, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.name = name;
      this.total = total;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");
      element.classList.add("members-card");
      element.classList.add("card");

      element.innerHTML = `
              <div class="card-image">
                <img class="card-image__item" src="${this.src}" alt="${this.alt}" />
              </div>
              <div class="card__title">${this.name}</div>
              <div class="card__description">${this.total}</div>
            `;

      this.parent.append(element);
    }
  }

  new memberCards(
    "images/team/01.png",
    "team member image",
    "Johann Row",
    "UI/UX Designer",
    ".team .members"
  ).render();

  new memberCards(
    "images/team/02.png",
    "team member image",
    "Robinor Uep",
    "NFT Marketer",
    ".team .members"
  ).render();

  new memberCards(
    "images/team/03.png",
    "team member image",
    "Jhon Doe",
    "The Developer",
    ".team .members"
  ).render();

  new memberCards(
    "images/team/04.png",
    "team member image",
    "Sammlie tom",
    "3d Artist",
    ".team .members"
  ).render();

  new memberCards(
    "images/team/05.png",
    "team member image",
    "Emanuel Elp",
    "CTO",
    ".team .members"
  ).render();
}

export { renderTeamMembers };
