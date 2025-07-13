var map = L.map('map').setView([-34.60, -58.43], 5);

var OpenStreetMap_CAT = L.tileLayer('https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png', {
  maxZoom: 5,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.openstreetmap.cat" target="_blank">Breton OpenStreetMap Team</a>'
}).addTo(map);

async function getData() {
  try {
    const res = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
    const data = await res.json();
    return data.features;
  } catch (error) { 
    console.log(error);
  }
}
getData().then(data => {
    var yellowIcon = L.icon({
    iconUrl: './assets/icono amarillo.png',
    iconSize:[15, 20],
})
   var whiteIcon = L.icon({
    iconUrl: './assets/icono blanco.jpg',
    iconSize: [15, 20],
   })
    var purpleIcon = L.icon({
    iconUrl: './assets/icono morado.jpg',
    iconSize: [15, 20],
   })
    var softOrangeIcon = L.icon({
    iconUrl: './assets/icono naranja suave.jpg',
    iconSize: [15, 20],
   })
    var orangeIcon = L.icon({
    iconUrl: './assets/icono naranja.png',
    iconSize: [15, 20],
   })
    var redIcon = L.icon({
    iconUrl: './assets/icono rojo.png',
    iconSize: [15, 20],
   })
    var darkGreenIcon = L.icon({
    iconUrl: './assets/icono verde oscuro.png',
    iconSize: [15, 20],
   })
    var greenIcon = L.icon({
    iconUrl: './assets/icono verde.jpg',
    iconSize: [15, 20],
   })

for (let i = 0; i < data.length; i++){ 
 if(data[i].properties.mag >= 7){
  const coordenadas = [data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]];
  const marker = L.marker(coordenadas, {icon: purpleIcon}).addTo(map)
.bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${data[i].properties.time};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
.addTo(map);
}
 else if(data[i].properties.mag >= 6 && data[i].properties.mag < 7){
  const coordenadas = [data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]];
  const marker = L.marker(coordenadas, {icon: redIcon}).addTo(map)
.bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${data[i].properties.time};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
.addTo(map);
}
 else if(data[i].properties.mag >=5 && data[i].properties.mag < 6){
  const coordenadas = [data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]];
  const marker = L.marker(coordenadas, {icon: orangeIcon}).addTo(map)
.bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${data[i].properties.time};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
.addTo(map);
}
 else if(data[i].properties.mag >=4 && data[i].properties.mag < 5){
  const coordenadas = [data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]];
  const marker = L.marker(coordenadas, {icon: softOrangeIcon}).addTo(map)
.bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${data[i].properties.time};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
.addTo(map);
}
 else if(data[i].properties.mag >= 3 && data[i].properties.mag < 4) {
  const coordenadas = [data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]];
  const marker = L.marker(coordenadas, {icon: yellowIcon}).addTo(map)
.bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${data[i].properties.time};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
.addTo(map);
}
 else if(data[i].properties.mag >=2 && data[i].properties.mag < 3 ){
  const coordenadas = [data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]];
  const marker = L.marker(coordenadas, {icon: greenIcon}).addTo(map)
.bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${data[i].properties.time};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
.addTo(map);
}
 else if(data[i].properties.mag >= 1 && data[i].properties.mag < 2 ){
  const coordenadas = [data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]];
  const marker = L.marker(coordenadas, {icon: darkGreenIcon}).addTo(map)
.bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${data[i].properties.time};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
.addTo(map);
}
 else if(data[i].properties.mag >= 0 && data[i].properties.mag < 1){
  const coordenadas = [data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]];
  const marker = L.marker(coordenadas, {icon: whiteIcon}).addTo(map)
.bindPopup(`${data[i].properties.title};
  Magnitud: ${data[i].properties.mag}${data[i].properties.magType};
  Fecha: ${data[i].properties.time};
  Código: ${data[i].properties.code};
  Ubicación: ${data[i].properties.place}
  `)
.addTo(map);
 }
}
});



