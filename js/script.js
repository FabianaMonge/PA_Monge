import { getNoticias } from "./services.js";

// --- Botón cambio de tema ---
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "🌙";
} else {
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});

// --- Noticias dinámicas ---
document.addEventListener("DOMContentLoaded", async () => {
  const listaNoticias = document.querySelector(".lista-noticias");
  const gridNoticias = document.querySelector(".noticias");

  try {
    const noticias = await getNoticias();

    // noticias.html -> lista
    if (listaNoticias) {
      listaNoticias.innerHTML = "";
      noticias.forEach((n) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="noticia1.html?articulo=${n.id}">${n.titulo}</a>`;
        listaNoticias.appendChild(li);
      });
    }

    // index.html -> tarjetas
    if (gridNoticias) {
      gridNoticias.innerHTML = "";
      noticias.forEach((n) => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${n.imagen}" alt="${n.titulo}">
          <h2><a href="noticia1.html?articulo=${n.id}">${n.titulo}</a></h2>
          <p>${n.resumen}</p>
        `;
        gridNoticias.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Error cargando noticias:", error);
  }
});

// --- Página detalle noticia ---
const params = new URLSearchParams(window.location.search);
const articulo = params.get("articulo");

if (articulo) {
  const titulo = document.getElementById("titulo-noticia");
  const imagen = document.getElementById("imagen-noticia");
  const contenido = document.getElementById("contenido-noticia");

  switch (articulo) {
    case "ia":
      titulo.textContent = "Avances en Inteligencia Artificial";
      imagen.src = "img/ia.jpg";
      contenido.textContent =
        "Los últimos avances en Inteligencia Artificial están transformando la educación, el trabajo y la forma en que interactuamos con la tecnología...";
      break;
    case "robotica":
      titulo.textContent = "Robótica en la vida cotidiana";
      imagen.src = "img/robotica.jpg";
      contenido.textContent =
        "La robótica está cada vez más integrada en nuestras vidas...";
      break;
    case "gadgets":
      titulo.textContent = "Nuevos gadgets del 2025";
      imagen.src = "img/gadget.jpg";
      contenido.textContent =
        "Este 2025 nos trae gadgets que combinan diseño, funcionalidad e inteligencia artificial...";
      break;
    default:
      titulo.textContent = "Noticia no encontrada";
      imagen.style.display = "none";
      contenido.textContent =
        "Lo sentimos, la noticia que buscas no está disponible.";
  }
}
