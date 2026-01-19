const linkLogin = document.querySelectorAll('a[href="login.html"]');

linkLogin.forEach(link => {
  link.classList.add("abreModal");

  link.addEventListener("click", (e) => {
    if (!sessionStorage.getItem("logado")) {
      e.preventDefault();
      criarModalLogin();
    }
  });
});

function criarModalLogin() {
  console.log("entrei");

  const modal = document.createElement("div");
  modal.classList.add("modalLogin");

  modal.innerHTML = `
    <div class="modalLoginConteudo">
      <button class="fecharLogin">✖</button>
      <h1>Login</h1>
      <form id="formLogin">
        <input type="email" id="email" placeholder="Email" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Entrar</button>
      </form>
      <p id="mensagemLogin"></p>
    </div>
  `;

  console.log(modal);

  document.querySelector("body").appendChild(modal);

  modal.querySelector(".fecharLogin").addEventListener("click", () => modal.remove());

  modal.querySelector("#formLogin").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = modal.querySelector("#email").value;
    const password = modal.querySelector("#password").value;
    const mensagem = modal.querySelector("#mensagemLogin");

    if (email === "user@gmail.com" && password === "1234") {
      sessionStorage.setItem("logado", "sim");
      sessionStorage.setItem("tipoConta", "user");
      mensagem.textContent = "Login efetuado como UTILIZADOR!";

      setTimeout(() => {
        modal.remove();
        atualizarLinksLogin();
      }, 1000);
    }
    else if (email === "admin@gmail.com" && password === "admin") {
      sessionStorage.setItem("logado", "sim");
      sessionStorage.setItem("tipoConta", "admin");
      mensagem.textContent = "Login efetuado como ADMIN!";

      setTimeout(() => {
        modal.remove();
        atualizarLinksLogin();
      }, 1000);
    }

    else {
      mensagem.textContent = "Credenciais inválidas.";
    }
  });
}

function atualizarLinksLogin() {
  const links = document.querySelectorAll('a[href="login.html"]');

  if (sessionStorage.getItem("logado") === "sim") {
    links.forEach(link => {
      link.textContent = "Meus Catálogos";
      link.classList.remove("abreModal");
      link.classList.add("abreCatalogos");
    });
  }

  const botaoCriar = document.getElementById("botaoCriarCatalogoSite");

  if (sessionStorage.getItem("tipoConta") === "admin") {
    // botaoCriar.style.display = "block";
  } else {
    // botaoCriar.style.display = "none";
  }
}

atualizarLinksLogin();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("abreCatalogos")) {
    e.preventDefault();
    criarModalCatalogos();
  }
});

function criarModalCatalogos() {
  const modal = document.createElement("div");
  modal.classList.add("modalMeusCatalogos");

  const tipo = sessionStorage.getItem("tipoConta");

  let conteudo = "";

  if (tipo === "user") {
    conteudo = `
      <p>• Spider‑Man (exemplo)</p>
    `;
  }

  if (tipo === "admin") {
    conteudo = `
      <p>Nenhum catálogo guardado.</p>
    `;
  }

  modal.innerHTML = `
    <div class="modalConteudo">
      <button class="fecharModal">✖</button>
      <h2>Meus Catálogos</h2>
      <div id="listaCatalogos">
        ${conteudo}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".fecharModal").addEventListener("click", () => modal.remove());
}

function abrirModalCriarCatalogo() {
  const modal = document.createElement("div");
  modal.classList.add("modalNovoCatalogo");

  modal.innerHTML = `
    <div class="modalConteudoNovo">
      <button class="fecharModal">✖</button>
      <h2>Criar Novo Catálogo</h2>

      <label>Título:</label>
      <input type="text" id="novoTitulo">

      <label>Imagem (URL):</label>
      <input type="text" id="novaImagem">

      <label>Lançamento:</label>
      <input type="text" id="novoLancamento">

      <label>Género:</label>
      <input type="text" id="novoGenero">

      <label>Classificação:</label>
      <input type="text" id="novaClassificacao">

      <label>Sinopse:</label>
      <textarea id="novaSinopse"></textarea>

      <label>Curiosidades (separa por vírgulas):</label>
      <textarea id="novaCuriosidade"></textarea>

      <button id="botaoCriar" class="botaoAddCatalogo">Adicionar</button>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".fecharModal").addEventListener("click", () => modal.remove());

  modal.querySelector("#botaoCriar").addEventListener("click", () => {
    const novoCatalogo = {
      id: document.getElementById("novoTitulo").value.toLowerCase().replaceAll(" ", ""),
      titulo: document.getElementById("novoTitulo").value,
      imagem: document.getElementById("novaImagem").value,
      lancamento: document.getElementById("novoLancamento").value,
      genero: document.getElementById("novoGenero").value,
      classificacao: document.getElementById("novaClassificacao").value,
      sinopse: document.getElementById("novaSinopse").value,
      curiosidades: document.getElementById("novaCuriosidade").value
        .split(",")
        .map(c => c.trim())
    };

    catalogos.push(novoCatalogo);
    criarPoster(novoCatalogo, document.getElementById("novos"));

    alert("Catálogo criado com sucesso!");
    modal.remove();
  });
}

// document.getElementById("botaoCriarCatalogoSite").addEventListener("click", () => {
//   abrirModalCriarCatalogo();
// });