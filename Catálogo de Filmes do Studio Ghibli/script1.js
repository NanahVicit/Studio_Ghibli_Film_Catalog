// FORMULARIO SESSION-STORAGE
    function salvarDados() {
      let avaliacao = document.getElementById("avaliacao").value;

      sessionStorage.setItem("Avaliacao_usuario", avaliacao);
      alert("Dados salvos na sessão!");
    }

    function mostrarDados() {
    let avaliacao = sessionStorage.getItem("Avaliacao_usuario");

    if (avaliacao) {
        document.getElementById("avaliacao").value = avaliacao;
    } else {
        alert("Nenhum dado salvo nesta sessão.");
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