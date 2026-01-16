
const filmes = [
    {
        id: "iron-man",
        titulo: "Iron Man",
        sinopse: "Tony Stark, um génio bilionário, cria uma armadura tecnológica para combater ameaças e tornar-se o herói Iron Man."
    },
    {
        id: "spider-man",
        titulo: "Spider-Man",
        sinopse: "Após ser picado por uma aranha radioativa, Peter Parker ganha poderes e torna-se o icónico Spider-Man."
    },
    {
        id: "thor",
        titulo: "Thor",
        sinopse: "Thor, o Deus do Trovão, é banido para a Terra e aprende o verdadeiro significado de ser um herói."
    },
    {
        id: "vingadores",
        titulo: "Vingadores",
        sinopse: "Os maiores heróis da Terra unem forças para enfrentar ameaças globais que nenhum deles conseguiria enfrentar sozinho."
    },
    {
        id: "wolverine",
        titulo: "Wolverine",
        sinopse: "Logan, um mutante com fator de cura e garras de adamantium, enfrenta o seu passado e inimigos poderosos."
    }
];
const modal = document.querySelector("#modal");
const tituloModal = document.querySelector("#titulo");
const sinopseModal = document.querySelector("#sinopse");
const closeBtn = document.querySelector("#close");
function modalAbrir(filme) {
    tituloModal.textContent = filme.titulo;
    sinopseModal.textContent = filme.sinopse;
    modal.classList.add("active");
}

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

const posters = document.querySelectorAll(".poster");

posters.forEach(poster => {
    poster.addEventListener("click", () => {
        const id = poster.dataset.id
        const filme = filmes.find(f => f.id === id);

        if (filme) {
            modalAbrir(filme);
        } else {
            console.warn("Filme não encontrado para o ID:", id);
        }
    });
});

