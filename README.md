# 🎓 Portal Académico - Escuela Normal

Aplicación web interactiva para la gestión y consulta académica de los estudiantes de la **Escuela Normal**. El sistema incluye navegación fluida tipo SPA, cálculo dinámico de horarios de cursada en tiempo real, buscador interactivo de materias, simulador de promedio final y un carrusel de imágenes moderno en el inicio.

---

## 👥 Integrantes

* **Abel Carrera**
* **Ramiro Martín**
* **Lucca Lazarte**
* **Nicolás González**

---

## 🚀 Funcionalidades Principales

* 📱 **Navegación tipo SPA (Single Page Application):** Cambio dinámico entre secciones ocultando y mostrando bloques sin recargar la página web.
* 🖼️ **Carrusel de imágenes en el Inicio:** Rotación automática de 3 fotografías del entorno escolar, con indicadores (dots) clickeables.
* 🕒 **Calculador Dinámico de Próxima Clase:** Monitorea la hora y el día actual para informarle al alumno cuál es su próxima clase programada, si la jornada ya finalizó o si es fin de semana.
* 🔍 **Buscador de Materias en Tiempo Real:** Filtra interactivamente el catálogo de asignaturas a medida que el usuario escribe en el campo de búsqueda.
* 📊 **Simulador de Promedio Final:** Permite ingresar 3 notas parciales y calcula instantáneamente el estado de aprobación (Aprobado / Desaprobado) con alertas de validación.
* 🖨️ **Generador / Impresor de Boletín:** Integración directa con la ventana de impresión del navegador (`window.print()`).
* 🔄 **Reinicio de Vista / Cierre de Sesión:** Restablece la aplicación al estado inicial.
* 📞 **Footer con contacto directo:** Email y WhatsApp de la institución accesibles desde cualquier sección.
* 📐 **Diseño 100% responsive:** Adaptado a celulares, tablets y escritorio.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructuración semántica y modular.
* **CSS3 & Bootstrap 5.3:** Estilos responsivos, componentes de alerta y badges, variables CSS propias.
* **JavaScript (ES6+):** Manipulación del DOM, eventos dinámicos, cálculo de fechas y lógica interactiva.
* **FontAwesome 6:** Iconografía vectorial interactiva.
* **Git & GitHub:** Control de versiones colaborativo.

---

## 📁 Estructura del Proyecto

```
├── index.html         # Estructura principal de la página
├── style.css          # Estilos personalizados (sin !important)
├── app.js             # Lógica de interacción (SPA, carrusel, calculadora, etc.)
├── imagen_pagina.jpg  # Imagen propia del inicio
└── README.md          # Este archivo
```

---

## ▶️ Cómo ejecutar el proyecto localmente

No requiere instalación ni dependencias (no usa `npm`, ni backend). Simplemente:

1. Clonar o descargar el repositorio.
2. Abrir el archivo `index.html` con cualquier navegador moderno (Chrome, Edge, Firefox).

También podés usar la extensión **Live Server** de VS Code para recargar automáticamente al guardar cambios.

---

## 💻 Detalles Técnicos del Script

| Módulo JS | Función / Evento | Descripción |
| :--- | :--- | :--- |
| **Navegación** | `DOMContentLoaded` / `click` | Alterna clases CSS (`.seccion-activa` / `.seccion-oculta`) según el atributo `href` seleccionado. |
| **Simulador** | `click` en `#btn-calcular` | Obtiene notas, valida entradas numéricas (`isNaN`) y calcula el promedio ponderado. |
| **Buscador** | `input` en `#buscador-materias` | Aplica `.includes()` sobre los nombres de las materias para ajustar su visibilidad (`display`). |
| **Reloj de Clases** | `calcularProximaClase()` | Recorre la matriz de horarios filtrando por el objeto `Date()` y se actualiza cada 60 segundos (`setInterval`). |
| **Carrusel de Inicio** | `mostrarSlide()` / `siguienteSlide()` | Alterna la clase `.slide-activa` entre las 3 imágenes cada 4 segundos y sincroniza los puntos indicadores. |

---

## 📅 Estructura de Horarios Cargada

La aplicación evalúa dinámicamente la grilla horaria semanal:

* **Lunes:** Programación IV (14:00 hs) | Gestión de Desarrollo de SW (16:00 hs)
* **Martes:** Programación IV (14:00 hs) | Legislación (16:00 hs)
* **Miércoles:** Programación IV (14:00 hs) | Gestión de Desarrollo de SW (16:00 hs)
* **Jueves:** Metodología de Sistemas II (14:00 hs) | Introducción al Análisis de Datos (16:00 hs)
* **Viernes:** Programación IV (14:00 hs) | Metodología de Sistemas II (16:00 hs)

---

## 🎨 Buenas prácticas de CSS aplicadas

Se eliminaron todos los usos de `!important` del proyecto. En su lugar:

* Las clases propias del proyecto (`.bg-cabecera-amarilla`, `.bg-materia-*`, `.tabla-horarios`, etc.) no compiten con nada de Bootstrap, así que no necesitaban forzarse: alcanza con el orden natural de la cascada.
* Los colores de marca sobre clases de Bootstrap (`.text-primary`, `.bg-primary`, `.bg-primary-subtle`) se aplican redefiniendo las **variables CSS nativas de Bootstrap 5.3** (`--bs-primary`, `--bs-link-color`, etc.) en `:root`, en lugar de sobrescribir la clase por fuerza bruta.
* Donde hacía falta ganar especificidad real (por ejemplo, un padding distinto en mobile), se combinaron selectores de clase (`.card.card-custom.p-4`) en vez de usar `!important`.

---

## 📞 Contacto de la Institución

* 📧 **Email:** [escuelanormal@gmail.com](mailto:escuelanormal@gmail.com)
* 💬 **WhatsApp:** [3816 803874](https://wa.me/5493816803874)

---

## 🗺️ Próximas mejoras sugeridas

* Persistencia de notas y perfil con `localStorage`.
* Modo oscuro (dark mode) con toggle en el header.
* Conexión a una API/backend real para reemplazar los datos estáticos.
* Notificaciones push para avisos de la institución.

---

## 📄 Licencia

Proyecto académico desarrollado con fines educativos para la materia de Programación IV — Tecnicatura Universitaria en Programación (TUP).
