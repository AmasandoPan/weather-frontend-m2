const localidades = [
  {
    id: 1,
    nombre: "Santiago",
    temp: 25,
    estado: "Soleado",
    icono: "☀️",
    humedad: "30%",
    viento: "15km/h",
  },
  {
    id: 2,
    nombre: "Valparaíso",
    temp: 18,
    estado: "Nublado",
    icono: "☁️",
    humedad: "60%",
    viento: "25km/h",
  },
  {
    id: 3,
    nombre: "Concepción",
    temp: 15,
    estado: "Lluvia",
    icono: "🌧️",
    humedad: "80%",
    viento: "40km/h",
  },
  {
    id: 4,
    nombre: "Temuco",
    temp: 13,
    estado: "Lluvia",
    icono: "🌧️",
    humedad: "80%",
    viento: "25km/h",
  },
  {
    id: 5,
    nombre: "Valdivia",
    temp: 20,
    estado: "Soleado",
    icono: "☀️",
    humedad: "30%",
    viento: "10km/h",
  },
  {
    id: 6,
    nombre: "Puerto Montt",
    temp: 12,
    estado: "Parcialmente Nublado",
    icono: "⛅",
    humedad: "40%",
    viento: "10km/h",
  },
  {
    id: 7,
    nombre: "Osorno",
    temp: 15,
    estado: "Nublado",
    icono: "☁️",
    humedad: "50%",
    viento: "20km/h",
  },
  {
    id: 8,
    nombre: "Coyhaique",
    temp: 7,
    estado: "Lluvia",
    icono: "🌧️",
    humedad: "80%",
    viento: "10km/h",
  },
  {
    id: 9,
    nombre: "Punta Arenas",
    temp: 3,
    estado: "Lluvia",
    icono: "🌧️",
    humedad: "80%",
    viento: "30km/h",
  },
  {
    id: 10,
    nombre: "Antartica Chilena",
    temp: "-2",
    estado: "Nieve",
    icono: "🌨️",
    humedad: "80%",
    viento: "10km/h",
  },
];

const idSeleccionado = localStorage.getItem("ciudadSeleccionada");

// Buscar la ciudad específica
const ciudad = localidades.find((c) => c.id == idSeleccionado);

if (ciudad) {
  // Rellenar datos principales
  document.getElementById("det-nombre").innerText = ciudad.nombre;
  document.getElementById("det-temp").innerText = ciudad.temp;
  document.getElementById("det-estado").innerText = ciudad.estado;
  document.getElementById("det-icono").innerText = ciudad.icono;
  document.getElementById("det-viento").innerText = ciudad.viento;
  document.getElementById("det-humedad").innerText = ciudad.humedad;

  // Generar pronóstico semanal
  const dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const lista = document.getElementById("lista-pronostico");

  dias.forEach((dia) => {
    const item = `
            <div class="list-group-item d-flex justify-content-between align-items-center p-3">
                <span class="fw-bold">${dia}</span>
                <span class="fs-4">⛅</span>
                <span>${ciudad.temp - Math.floor(Math.random() * 5)}°C / ${ciudad.temp + 2}°C</span>
            </div>
        `;
    lista.innerHTML += item;
  });
} else {
  // Si no hay ciudad, redirigir a Home
  window.location.href = "index.html";
}
