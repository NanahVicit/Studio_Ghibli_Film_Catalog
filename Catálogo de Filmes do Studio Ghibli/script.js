async function buscarFilme() {
  const nome = document.getElementById("filme").value.toLowerCase().trim();
  const resultadoContainer = document.getElementById("resultado-container");

  if (!nome) {
    alert("Digite um nome de filme.");
    return;
  }

  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const filmes = await response.json();

    const filme = filmes.find(f =>
      f.title.toLowerCase().includes(nome) ||
      f.original_title.toLowerCase().includes(nome)
    );

    if (!filme) {
      alert("Filme não encontrado.");
      resultadoContainer.style.display = "none";
      return;
    }

    // Pegar as informações
    document.getElementById("title").textContent = filme.title;
    document.getElementById("original_title").textContent = filme.original_title;
    document.getElementById("description").textContent = filme.description;
    document.getElementById("director").textContent = filme.director;
    document.getElementById("release_date").textContent = filme.release_date;
    document.getElementById("poster").src = filme.image;

    resultadoContainer.style.display = "block";
  } catch (error) {
    console.error("Erro ao buscar filme:", error);
    alert("Erro ao buscar dados do filme.");
  }
}



// ---- MODO CLARO/ESCURO COM LOCALSTORAGE ----
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

function aplicarTema(tema) {
  body.className = tema;
  localStorage.setItem("temaSalvo", tema);

  if (tema === "escuro") {
    trilho.classList.add("dark");
  } else {
    trilho.classList.remove("dark");
  }
}

trilho.addEventListener('click', () => {
  let novoTema = body.classList.contains("escuro") ? "claro" : "escuro";
  aplicarTema(novoTema);
});

window.onload = function () {
  let temaSalvo = localStorage.getItem("temaSalvo") || "claro";
  aplicarTema(temaSalvo);
};