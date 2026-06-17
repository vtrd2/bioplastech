const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const dialog = document.querySelector("#product-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogLabel = document.querySelector("#dialog-label");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogList = document.querySelector("#dialog-list");

const products = {
  bolsa: {
    label: "Acessório sustentável",
    title: "Bolsa sustentável",
    image: "assets/images/image2.jpg",
    alt: "Bolsa e lâminas feitas com bioplástico de kombucha",
    description:
      "Bolsa biodegradável feita a partir da celulose bacteriana da kombucha, demonstrando como o material pode ganhar forma, cor e acabamento.",
    points: [
      "Protótipo voltado a aplicações de embalagem e design.",
      "Material de origem renovável.",
      "Possibilidade de personalização por cor e textura.",
    ],
  },
  canudos: {
    label: "Uso diário",
    title: "Canudos biodegradáveis",
    image: "assets/images/image11.jpg",
    alt: "Canudos biodegradáveis impermeabilizados",
    description:
      "Canudos biodegradáveis desenvolvidos com biomaterial e impermeabilizados com cera de abelha.",
    points: [
      "Alternativa a produtos descartáveis de plástico.",
      "Acabamento voltado à resistência contra umidade.",
      "Peça simples para explicar testes e comparação de materiais.",
    ],
  },
  filmes: {
    label: "Material flexível",
    title: "Filmes e revestimentos",
    image: "assets/images/image4.jpg",
    alt: "Amostras coloridas de bioplástico de kombucha",
    description:
      "Lâminas flexíveis de bioplástico usadas para estudar textura, pigmentação, secagem e possíveis aplicações futuras.",
    points: [
      "Base para películas, revestimentos e embalagens.",
      "Permite comparar espessuras e acabamentos.",
      "Mostra o potencial do material além de um único produto.",
    ],
  },
  compostagem: {
    label: "Ciclo natural",
    title: "Compostagem",
    image: "assets/images/image7.jpg",
    alt: "Demonstração de bioplástico em contato com solo",
    description:
      "Demonstração do conceito de biodegradação e retorno ao ciclo natural, conectando o produto ao impacto ambiental.",
    points: [
      "Ajuda a explicar o destino do material após o uso.",
      "Reforça a diferença em relação ao plástico fóssil.",
      "Relaciona o protótipo a compostagem e educação ambiental.",
    ],
  },
};

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (header) {
      header.classList.remove("is-open");
    }

    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = products[button.dataset.product];

    if (!product || !dialog) {
      return;
    }

    dialogImage.src = product.image;
    dialogImage.alt = product.alt;
    dialogLabel.textContent = product.label;
    dialogTitle.textContent = product.title;
    dialogDescription.textContent = product.description;
    dialogList.innerHTML = "";

    product.points.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      dialogList.appendChild(item);
    });

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      document.body.classList.add("is-locked");
    }
  });
});

const closeDialogButton = document.querySelector("[data-close-dialog]");

if (closeDialogButton && dialog) {
  closeDialogButton.addEventListener("click", () => {
    dialog.close();
  });
}

if (dialog) {
  dialog.addEventListener("close", () => {
    document.body.classList.remove("is-locked");
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}
