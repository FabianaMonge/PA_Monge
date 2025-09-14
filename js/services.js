// Simulación de servicio de noticias
export function getNoticias() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "ia",
          titulo: "Avances en Inteligencia Artificial",
          resumen: "Los últimos avances en IA están revolucionando el mundo laboral y educativo...",
          imagen: "img/ia.jpg",
        },
        {
          id: "robotica",
          titulo: "Robótica en la vida cotidiana",
          resumen: "Los robots están cada vez más presentes en el hogar, la salud y la industria...",
          imagen: "img/robotica.jpg",
        },
        {
          id: "gadgets",
          titulo: "Nuevos gadgets del 2025",
          resumen: "Descubre los dispositivos más innovadores que marcarán tendencia este año...",
          imagen: "img/gadget.jpg",
        },
      ]);
    }, 800); // Simula retraso como API
  });
}
