document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("formLogin");
    const mensagem = document.getElementById("mensagem");

    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            mensagem.textContent = "Por favor, preenche todos os campos.";
            mensagem.style.color = "red";
            return;
        }


        if (email === "admin@marvel.com" && password === "123456") {
            mensagem.textContent = "Login efetuado com sucesso! Bem-vindo ao Museu Marvel.";
            mensagem.style.color = "green";


            setTimeout(function () {
                window.location.href = "paginainicial.html";
            }, 1500);

        } else {
            mensagem.textContent = "Credenciais inválidas. Tenta novamente.";
            mensagem.style.color = "red";
        }
    });
})