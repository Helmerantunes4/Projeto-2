const paginas = {
    "Iron Man": "ironman.html",
    "Spider-Man": "spiderman.html",
    "Captain America": "captainamerica.html",
    "Thor": "thor.html",
    "Vingadores": "avengers.html",
    "Deadpool": "deadpool.html",
    "Quarteto-Fantástico": "fantastic4.html",
    "Guardiões da galáxia": "guardioes.html",
    "Hulk": "hulk.html",
    "Moon knight": "moonknight.html",
    "Wolverine": "wolverine.html",
    "X-Men": "xmen.html"
};
document.querySelectorAll(".poster-info h2").forEach(titulo => {
    const nome = titulo.textContent.trim();

    if (paginas[nome]) {
        const link = document.createElement("a");
        link.href = paginas[nome];
        link.textContent = nome;
        link.style.color = "inherit";
        link.style.textDecoration = "none";

        titulo.textContent = "";
        titulo.appendChild(link);
    }
});
