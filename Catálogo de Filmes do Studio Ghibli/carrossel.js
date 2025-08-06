fetch("https://ghibliapi.vercel.app/films")
  .then(response => response.json())
  .then(filmes => {
    const container = document.getElementById("carousel-inner");

    filmes.forEach((filme, index) => {
      const item = document.createElement("div");
      item.className = "carousel-item" + (index === 0 ? " active" : "");

      item.innerHTML = `
        <img src="${filme.image}" class="d-block w-100" alt="${filme.title}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${filme.title} (${filme.release_date})</h5>
          <p>Título original: ${filme.original_title}</p>
        </div>
      `;

      container.appendChild(item);
    });
  })
  .catch(() => {
    alert("Erro ao carregar os filmes.");
  });
