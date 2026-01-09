// login.js

document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("formLogin");
    const mensagem = document.getElementById("mensagem");

    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault(); // não recarrega a página

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            mensagem.textContent = "Por favor, preenche todos os campos.";
            mensagem.style.color = "red";
            return;
        }

        // Aqui podias fazer validação real (com base de dados, etc.)
        // Por agora, fazemos só uma simulação:
        if (email === "admin@marvel.com" && password === "123456") {
            mensagem.textContent = "Login efetuado com sucesso! Bem-vindo ao Museu Marvel.";
            mensagem.style.color = "green";

            // Simular redirecionamento depois de 1,5s
            setTimeout(function () {
                window.location.href = "paginainicial.html";
            }, 1500);

        } else {
            mensagem.textContent = "Credenciais inválidas. Tenta novamente.";
            mensagem.style.color = "red";
        }
    });
});