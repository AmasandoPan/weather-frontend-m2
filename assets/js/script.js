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

const contenedor = document.getElementById("contenedor-clima");

// Función para renderizar cards
function cargarCards() {
  localidades.forEach((loc) => {
    const card = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <h5 class="card-title">${loc.nombre}</h5>
                        <p class="display-4">${loc.icono}</p>
                        <p class="card-text fs-2">${loc.temp}°C</p>
                        <p class="badge bg-info text-dark">${loc.estado}</p>
                        <br>
                        <button class="btn btn-outline-primary mt-3" onclick="verDetalle(${loc.id})">
                            Ver Pronóstico
                        </button>
                    </div>
                </div>
            </div>
        `;
    contenedor.innerHTML += card;
  });
}

// Navegación al detalle 
function verDetalle(id) {
  localStorage.setItem("ciudadSeleccionada", id);
  window.location.href = "detalle.html";
}

cargarCards();
