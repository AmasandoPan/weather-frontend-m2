// Función para buscar lugar por ID
const obtenerLugar = (id) => localidades.find((l) => l.id == id);

// Función para calcular estadísticas
function calcularEstadisticas(pronostico) {
  let sumaMax = 0;
  let minSemana = pronostico[0].min;
  let maxSemana = pronostico[0].max;
  let conteoClimas = {};

  for (let dia of pronostico) {
    // Min y Max absoluta
    if (dia.min < minSemana) minSemana = dia.min;
    if (dia.max > maxSemana) maxSemana = dia.max;

    // Suma para el promedio
    sumaMax += dia.max;

    // Conteo de tipos de clima
    conteoClimas[dia.estado] = (conteoClimas[dia.estado] || 0) + 1;
  }

  const promedioMax = (sumaMax / pronostico.length).toFixed(1);

  // Generar resumen textual
  let resumen = "";
  if (conteoClimas["Soleado"] > 3) {
    resumen =
      "Semana mayormente soleada e ideal para actividades al aire libre.";
  } else if (conteoClimas["Lluvia"] >= 2) {
    resumen = "Se espera una semana inestable con varios días de lluvia.";
  } else {
    resumen =
      "Semana con clima variado, se recomienda revisar el reporte diario.";
  }

  return { minSemana, maxSemana, promedioMax, conteoClimas, resumen };
}

//Renderizado
const idSel = localStorage.getItem("ciudadSeleccionada");
const ciudad = obtenerLugar(idSel);

if (ciudad) {
  document.getElementById("det-nombre").innerText = ciudad.nombre;
  document.getElementById("det-temp").innerText = ciudad.tempActual;
  document.getElementById("det-estado").innerText = ciudad.estadoActual; 
  document.getElementById("det-icono").innerText = ciudad.icono;
  document.getElementById("det-viento").innerText = ciudad.viento;
  document.getElementById("det-humedad").innerText = ciudad.humedad;

  const stats = calcularEstadisticas(ciudad.pronosticoSemanal);

  // Inyectar estadísticas en el HTML
  document.getElementById("stats-container").innerHTML = `
        <div class="col-4"><h5>${stats.minSemana}°C</h5><small>Mínima</small></div>
        <div class="col-4"><h5>${stats.maxSemana}°C</h5><small>Máxima</small></div>
        <div class="col-4"><h5>${stats.promedioMax}°C</h5><small>Prom. Máx</small></div>
    `;
  document.getElementById("resumen-texto").innerText = stats.resumen;

  // Renderizar lista de pronóstico 
  const lista = document.getElementById("lista-pronostico");
  ciudad.pronosticoSemanal.forEach((dia) => {
    lista.innerHTML += `
            <div class="list-group-item d-flex justify-content-between align-items-center">
                <span>${dia.dia}</span>
                <span>${dia.estado === "Soleado" ? "☀️" : "🌧️"}</span>
                <span>${dia.min}° / ${dia.max}°</span>
            </div>`;
  });
}
