var map = L.map('mapUno').setView([-34.60, -58.43], 5);

var OpenStreetMap_CAT = L.tileLayer('https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png', {
  maxZoom: 5,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.openstreetmap.cat" target="_blank">Breton OpenStreetMap Team</a>'
}).addTo(map);

var mapDos = L.map('mapaDos').setView([-34.60, -58.43], 5);

var OpenStreetMap_CAT2 = L.tileLayer('https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png', {
  maxZoom: 5,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.openstreetmap.cat" target="_blank">Breton OpenStreetMap Team</a>'
}).addTo(mapDos);

let earthquakeMarkersLayer = L.featureGroup().addTo(mapDos);

const earthquakeIcons = {
  yellow: L.icon({ iconUrl: './assets/icono amarillo.png', iconSize: [15, 20] }),
  white: L.icon({ iconUrl: './assets/icono blanco.jpg', iconSize: [15, 20] }),
  purple: L.icon({ iconUrl: './assets/icono morado.jpg', iconSize: [15, 20] }),
  softOrange: L.icon({ iconUrl: './assets/icono naranja suave.jpg', iconSize: [15, 20] }),
  orange: L.icon({ iconUrl: './assets/icono naranja.png', iconSize: [15, 20] }),
  red: L.icon({ iconUrl: './assets/icono rojo.png', iconSize: [15, 20] }),
  darkGreen: L.icon({ iconUrl: './assets/icono verde oscuro.png', iconSize: [15, 20] }),
  green: L.icon({ iconUrl: './assets/icono verde.jpg', iconSize: [15, 20] })
};
function getEarthquakeIcon(magnitude) {
  if (magnitude >= 7) {
    return earthquakeIcons.purple;
  } else if (magnitude >= 6 && magnitude < 7) {
    return earthquakeIcons.red;
  } else if (magnitude >= 5 && magnitude < 6) {
    return earthquakeIcons.orange;
  } else if (magnitude >= 4 && magnitude < 5) {
    return earthquakeIcons.softOrange;
  } else if (magnitude >= 3 && magnitude < 4) {
    return earthquakeIcons.yellow;
  } else if (magnitude >= 2 && magnitude < 3) {
    return earthquakeIcons.green;
  } else if (magnitude >= 1 && magnitude < 2) {
    return earthquakeIcons.darkGreen;
  } else if (magnitude >= 0 && magnitude < 1) {
    return earthquakeIcons.white;
  }
}

async function todosTerremotos() {
  try {
    const res = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
    const data = await res.json();
    return data.features;
  } catch (error) {
    console.log(error);
  }
}
async function getData(dateStartFiltrada, dateEndFiltrada, magnitudFiltradaMin, magnitudFiltradaMax) {
  try {
    const res = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${dateStartFiltrada}&endtime=${dateEndFiltrada}&minmagnitude=${magnitudFiltradaMin}&maxmagnitude=${magnitudFiltradaMax}`);
    const data = await res.json();
    return data.features;
  } catch (error) {
    console.log(error);
  }
}

todosTerremotos().then(data => {
  for (let i = 0; i < data.length; i++) {

    const coordenadas1 = [data[i].geometry.coordinates[1], data[i].geometry.coordinates[0]];
    const markerIcon = getEarthquakeIcon(data[i].properties.mag);
    const marcador = L.marker(coordenadas1, { icon: markerIcon });

    marcador.addTo(map)
      .bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${new Date(data[i].properties.time).toLocaleString()};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
  }
});

document.getElementById("mag").addEventListener("submit", function (event) {
  event.preventDefault();

  const magnitudFiltradaMin = event.target.magnitudUno.value;
  console.log(magnitudFiltradaMin)
  const magnitudFiltradaMax = event.target.magnitudDos.value;
  console.log(magnitudFiltradaMax)
  const dateStartFiltrada = event.target.startDate.value;
  console.log(dateStartFiltrada)
  const dateEndFiltrada = event.target.endDate.value;
  console.log(dateEndFiltrada)

    if (!dateStartFiltrada) {
        alert("Por favor, selecciona una fecha de inicio.");
        return;
    }

    if (!dateEndFiltrada) {
        alert("Por favor, selecciona una fecha de fin.");
        return;
    }

    if (dateEndFiltrada < dateStartFiltrada) {
        alert("La fecha de fin no puede ser anterior a la fecha de inicio.");
        return;
    }

  earthquakeMarkersLayer.clearLayers();

  //pasar los parametros de magnitud y fecha
  getData(dateStartFiltrada, dateEndFiltrada, magnitudFiltradaMin, magnitudFiltradaMax).then(data => {
    for (let i = 0; i < data.length; i++) {
      const coordenadas = [data[i].geometry.coordinates[1], data[i].geometry.coordinates[0]];
      const marker = L.marker(coordenadas).addTo(earthquakeMarkersLayer)
        .bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${new Date(data[i].properties.time).toLocaleString()};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
    }
  })
});

