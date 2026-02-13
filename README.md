**BioWeather** es una aplicación web diseñada para visualizar el clima actual de manera regional. En esta tercera iteración (Módulo 3), el proyecto ha sido refactorizado para implementar una arquitectura de estilos profesional, escalable y mantenible.

---

## 🚀 Demo en Vivo

Puedes ver el proyecto funcionando aquí:  
👉 **[VER PROYECTO EN GITHUB PAGES](https://amasandopan.github.io/weather-frontend-m3)**

---

## ✨ Características

* **Interfaz Responsiva:** Gracias a Bootstrap 4, la web se adapta perfectamente a móviles, tablets y escritorio.
* **Datos en Tiempo Real:** Integración dinámica para mostrar el clima actual.
* **Diseño Limpio:** Navegación intuitiva y visualización de tarjetas (cards) para una lectura rápida.

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido utilizando el siguiente stack:

* **HTML5:** Estructura semántica del sitio.
* **SASS:** Uso de variables, mixins, anidamiento y parciales.
* **Bootstrap 4:** Framework para el sistema de grilla responsiva y componentes.
* **JavaScript (Vanilla):** Lógica dinámica y gestión de datos.


## 🛠️ Organización de Estilos (SMACSS + BEM)

He implementado la metodología **SMACSS** para la estructura de carpetas, combinándola con la nomenclatura **BEM** (Block, Element, Modifier) para las clases de CSS, garantizando un código legible y modular.


* **Estructura de archivos SASS:**

    * `base/`: Resets y variables de color.
    * `layout/`: Estructura global (header/footer).
    * `modules/`: Estilos específicos de la `weather-card`.
    * `state/`: Clases de estado para diferentes condiciones climáticas.
    


## ✨ Caracteristicas de esta versión (Modulo 3)

**Arquitectura modular:** Uso de parciales de SASS importados en un archivo main.scss maestro.

**Modelo de cajas:** Aplicación técnica de padding, margins y borders para un layout limpio.

**Responsividad Estricta:**

  **Móvil ($\le$ 420px):** Cards apiladas en una sola columna para lectura vertical.

  **Desktop ($\ge$ 1024px):** Layout multi-columna con espaciado coherente.

**Mixins Personalizados:** Implementación de mixins para efectos de hover y centrado dinámico.

---

## 📸 Vista Previa

![Captura de pantalla del proyecto](./assets/img/captura.png)

---

## ⚙️ Instalación y Uso Local

Si quieres clonar este proyecto y ejecutarlo en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/AmasandoPan/weather-frontend-m3.git]
    ```
2.  **Compilación de SASS:** Asegúrate de tener instalado Live Sass Compiler o similar para procesar `/scss/main.scss` hacia `/css/main.css`.

3.  **Abre el archivo `index.html`** en tu navegador favorito.

---

## 👤 Autor

Desarrollado con ❤️ por **AmasandoPan**.  
*Proyecto Clima M3 - 2026*

---
© 2026 BioWeather. Todos los derechos reservados.