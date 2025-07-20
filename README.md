![alt text](titulo.png)

🌍 Visualizador de Terremotos Globales en Tiempo Real
Este proyecto es una aplicación web interactiva que muestra terremotos de todo el mundo en tiempo real utilizando la librería de mapas Leaflet.js. Desarrollado individualmente, el objetivo principal fue visualizar la actividad sísmica global de manera intuitiva y permitir a los usuarios filtrar eventos por magnitud y rango de fechas.

🌟 Características Principales
Visualización en Mapa: Muestra la ubicación de los terremotos en un mapa interactivo.

Datos en Tiempo Real: Obtiene información actualizada sobre terremotos de una API pública del USGS (U.S. Geological Survey).

Iconografía Dinámica: Los marcadores de terremotos cambian de color según su magnitud, facilitando la identificación rápida de la intensidad.

Popups Detallados: Al hacer clic en un marcador, se despliega una ventana emergente con información relevante del terremoto (título, magnitud, fecha, ubicación, etc.).

Filtros Interactivos: Permite a los usuarios filtrar terremotos por rango de magnitud y período de tiempo (fecha de inicio y fecha de fin).

Dos Mapas Simultáneos: Presenta un mapa principal con todos los terremotos del día y un segundo mapa para visualizar los resultados de la búsqueda filtrada.


🌍 Visualizador de Terremotos Globales en Tiempo Real

Este proyecto es una aplicación web interactiva que muestra terremotos de todo el mundo en tiempo real utilizando la librería de mapas [Leaflet.js](https://leafletjs.com/). Desarrollado individualmente, el objetivo principal fue visualizar la actividad sísmica global de manera intuitiva y permitir a los usuarios filtrar eventos por magnitud y rango de fechas.

---

🌟 Características Principales

Visualización en Mapa: Muestra la ubicación de los terremotos en un mapa interactivo.
Datos en Tiempo Real: Obtiene información actualizada sobre terremotos de una API pública del USGS (U.S. Geological Survey).
Iconografía Dinámica: Los marcadores de terremotos cambian de color según su magnitud, facilitando la identificación rápida de la intensidad.
Popups Detallados: Al hacer clic en un marcador, se despliega una ventana emergente con información relevante del terremoto (título, magnitud, fecha, ubicación, etc.).
Filtros Interactivos: Permite a los usuarios filtrar terremotos por rango de magnitud y período de tiempo (fecha de inicio y fecha de fin).
Dos Mapas Simultáneos: Presenta un mapa principal con todos los terremotos del día y un segundo mapa para visualizar los resultados de la búsqueda filtrada.

---

📸 Capturas de Pantalla

Aquí puedes ver algunas vistas de la aplicación en funcionamiento:

Mapa Principal (Terremotos del Día)
![screenshots/Mapa1.png]
(screenshots/Mapa1.png)
_Vista del mapa principal mostrando la actividad sísmica global en tiempo real._

Filtros 
![screenshots/Filtro.png]
(screenshots/Filtro.png)
_La sección de filtros en acción, mostrando los resultados en el segundo mapa._

Mapa filtrado (Terremotos filtrados)
![screenshots/Mapa2.png]
(screenshots/Mapa2.png)
_Vista del segundo mapa filtrado._

Detalle de Terremoto (Popup)
![screenshots/PopUp.png]
(screenshots/PopUp.png)
_Ejemplo de un popup que muestra información detallada al hacer clic en un marcador._

---

🚀 Tecnologías Utilizadas
HTML5: Estructura básica de la página web.

CSS3: Estilos para la interfaz de usuario y los mapas.

JavaScript (ES6+): Lógica principal de la aplicación, manejo de la API, interacción con el mapa y validaciones.

Leaflet.js: Librería de código abierto para mapas interactivos móviles.

API del USGS: Fuente de datos de terremotos (https://earthquake.usgs.gov/).

Visual Studio Code: Entorno de desarrollo integrado (IDE) utilizado para la codificación.

🛠️ Instalación y Uso
Para ejecutar este proyecto localmente, sigue estos pasos:

Clona el repositorio:

Bash

git clone <https://github.com/choski91/ejercicio-mapas.git>
Navega al directorio del proyecto:

Bash

cd <ejercicio-mapas>
Abre el archivo index.html: Simplemente abre el archivo index.html en tu navegador web preferido. 

🗺️ Estructura del Proyecto
index.html: Contiene la estructura HTML de la aplicación, incluyendo los contenedores para los mapas y el formulario de filtros.

style.css: Archivo CSS con todos los estilos visuales de la aplicación.

script.js: Archivo JavaScript principal que maneja la lógica de la aplicación, las llamadas a la API, la manipulación de mapas y la interacción del usuario.

./assets/: Carpeta que contiene los iconos personalizados utilizados para los marcadores de terremotos.

🚧 Desarrollo y Desafíos
Este proyecto fue desarrollado de forma individual. Los principales desafíos incluyeron:

Integración con Leaflet.js: Aprender y aplicar las funcionalidades de Leaflet para crear y manipular mapas, marcadores y capas.

Manejo de la API de USGS: Entender la estructura de los datos GeoJSON y cómo realizar solicitudes con filtros dinámicos.

Lógica de Iconografía: Implementar una función para asignar dinámicamente el icono correcto basado en la magnitud del terremoto.

Validación de Fechas: Asegurar que los rangos de fechas introducidos por el usuario sean válidos y lógicos (ej. fecha de fin no anterior a fecha de inicio).

Gestión de Capas: Limpiar y actualizar los marcadores en el mapa de filtros de manera eficiente.

✍️ Autor
María Laura Smichowski 
