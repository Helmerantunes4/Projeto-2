const secaoMelhores = document.getElementById("melhores");
const secaoNovos = document.getElementById("novos");
const secaoRecomendados = document.getElementById("recomendados");

const secao1 = ["ironman", "spiderman", "captainamerica", "thor"];
const secao2 = ["avengers", "deadpool", "fantastic4", "guardians"];
const secao3 = ["hulk", "moonknight", "wolverine", "xmen"];

function criarPoster(catalogo, container) {
  const poster = document.createElement("div");
  poster.classList.add("poster");

  poster.innerHTML = `
    <img src="${catalogo.imagem}" alt="${catalogo.titulo}">
    <div class="poster-info">
      <h2>${catalogo.titulo}</h2>
      <span>${catalogo.lancamento}</span>
    </div>
  `;

  poster.addEventListener("click", () => criarModalCatalogo(catalogo));

  container.appendChild(poster);
}

catalogos.forEach(c => {
  if (secao1.includes(c.id)) criarPoster(c, secaoMelhores);
  if (secao2.includes(c.id)) criarPoster(c, secaoNovos);
  if (secao3.includes(c.id)) criarPoster(c, secaoRecomendados);
});

function criarModalCatalogo(catalogo) {
  const modal = document.createElement("div");
  modal.classList.add("modal-dinamico");

  modal.innerHTML = `
    <div class="modal-content">
      <button class="fechar-modal">✖</button>
      <h2>${catalogo.titulo}</h2>
      <img src="${catalogo.imagem}" style="width:100%; border-radius: 10px; margin: 10px 0;">
      <p><strong>Lançamento:</strong> ${catalogo.lancamento}</p>
      <p><strong>Género:</strong> ${catalogo.genero}</p>
      <p><strong>Classificação:</strong> ${catalogo.classificacao}</p>
      <p>${catalogo.sinopse}</p>
      <h3>Curiosidades</h3>
      <ul>
        ${catalogo.curiosidades.map(c => `<li>${c}</li>`).join("")}
      </ul>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".fechar-modal").addEventListener("click", () => {
    modal.remove();
  });
}