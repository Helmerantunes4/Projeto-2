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
    <div class="posterInfo">
      <h2>${catalogo.titulo}</h2>
      <span>${catalogo.lancamento}</span><br>
      <button class="botaoAdd">Adicionar</button>
    </div>
  `;

  
  poster.addEventListener("click", () => criarModalCatalogo(catalogo));

  const botaoAdd = poster.querySelector(".botaoAdd");

  botaoAdd.addEventListener("click", (e) => {
    e.stopPropagation(); 

    if (sessionStorage.getItem("logado") === "sim") {
      botaoAdd.textContent = "Adicionado";
      botaoAdd.disabled = true;
    } else {
      alert("Tens de fazer login para adicionar catálogos.");
    }
  });

  container.appendChild(poster);
}

catalogos.forEach(c => {
  if (secao1.includes(c.id)) criarPoster(c, secaoMelhores);
  if (secao2.includes(c.id)) criarPoster(c, secaoNovos);
  if (secao3.includes(c.id)) criarPoster(c, secaoRecomendados);
});

function criarModalCatalogo(catalogo) {
  const modal = document.createElement("div");
  modal.classList.add("modalCatalogo1");

  modal.innerHTML = `
    <div class="modalConteudo">
      <button class="fecharModal">✖</button>
      <h2>${catalogo.titulo}</h2>
      <div class="centro">
        <div>
          <img src="${catalogo.imagem}">
        </div>
        <div>
          <p><strong>Lançamento:</strong> ${catalogo.lancamento}</p>
          <p><strong>Género:</strong> ${catalogo.genero}</p>
          <p><strong>Classificação:</strong> ${catalogo.classificacao}</p>
          <p>${catalogo.sinopse}</p>
          <h3>Curiosidades</h3>
          <ul>
            ${catalogo.curiosidades.map(c => `<li>${c}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".fecharModal").addEventListener("click", () => {
    modal.remove();
  });
}



