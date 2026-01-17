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
  const modal = document.createElement("div");
  modal.classList.add("modal-login");

  modal.innerHTML = `
    <div class="modal-login-content">
      <button class="fechar-login">✖</button>
      <h1>Login</h1>
      <form id="formLogin">
        <input type="email" id="email" placeholder="Email" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Entrar</button>
      </form>
      <p id="mensagemLogin"></p>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".fechar-login").addEventListener("click", () => modal.remove());

  modal.querySelector("#formLogin").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = modal.querySelector("#email").value;
    const password = modal.querySelector("#password").value;
    const mensagem = modal.querySelector("#mensagemLogin");

    if (email === "admin@gmail.com" && password === "1234") {
      sessionStorage.setItem("logado", "sim");
      mensagem.textContent = "Login efetuado com sucesso!";

      setTimeout(() => {
        modal.remove();
        atualizarLinksLogin();
      }, 1000);
    } else {
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
  modal.classList.add("modal-dinamico");

  const lista = sessionStorage.getItem("logado") === "sim"
    ? ["Spider-Man"] // catálogo simulado
    : [];

  modal.innerHTML = `
    <div class="modal-content">
      <button class="fechar-modal">✖</button>
      <h2>Meus Catálogos</h2>
      <div>
        ${
          lista.length === 0
            ? "<p>Nenhum catálogo guardado.</p>"
            : lista.map(item => `<p>${item}</p>`).join("")
        }
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".fechar-modal").addEventListener("click", () => {
  modal.remove();
    }   );
}