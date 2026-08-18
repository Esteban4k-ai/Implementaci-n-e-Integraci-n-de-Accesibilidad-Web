# Budgeta — Landing Page Accesible

Landing Page institucional para **Budgeta**, una propuesta de aplicación orientada a la gestión y organización de gastos personales.

El proyecto fue desarrollado como parte del Trabajo Práctico Académico **"Implementación e Integración de Accesibilidad Web"**, correspondiente a la asignatura **Interfaz de Usuario** de la Tecnicatura Superior en Desarrollo de Software.

---

## 📋 Descripción

Budgeta es una propuesta de aplicación para ayudar a los usuarios a:

- Registrar y organizar sus gastos.
- Establecer presupuestos.
- Comprender sus hábitos financieros.
- Consultar información de manera clara y accesible.

La Landing Page presenta las principales características del producto y utiliza diferentes técnicas de accesibilidad web siguiendo los principios y criterios de conformidad de las **WCAG 2.1/2.2**.

---

## 🎯 Objetivo del proyecto

El objetivo principal es desarrollar una Landing Page que pueda ser utilizada por la mayor cantidad de personas posible, incluyendo usuarios que:

- Navegan exclusivamente mediante teclado.
- Utilizan lectores de pantalla.
- Necesitan aumentar el tamaño del texto.
- Requieren un mayor contraste visual.
- Utilizan dispositivos con diferentes tamaños de pantalla.

Además, el proyecto busca demostrar la aplicación práctica de conceptos de accesibilidad, HTML5 semántico, CSS y JavaScript.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura semántica y contenido.
- **CSS3** — diseño visual, responsive y estilos de accesibilidad.
- **JavaScript** — interacción, menú responsive, controles de accesibilidad y validación del formulario.
- **Markdown** — documentación técnica.
- **Git / GitHub** — control de versiones y publicación del código.

---

## 📁 Estructura del proyecto

```text
landing-accesible/
│
├── index.html
├── styles.css
├── script.js
├── ACCESSIBILITY.md
└── README.md
````

### `index.html`

Contiene la estructura principal de la Landing Page utilizando elementos semánticos de HTML5.

Incluye:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `form`
* `footer`
* Enlace Skip Link
* Navegación responsive
* Formulario de contacto
* Atributos ARIA necesarios para los componentes interactivos

### `styles.css`

Contiene todos los estilos visuales de la aplicación.

También incluye:

* Diseño responsive.
* Indicadores de foco.
* Modo de alto contraste.
* Aumento del tamaño del texto.
* Adaptación a `prefers-reduced-motion`.
* Estilos para formularios y mensajes de error.

### `script.js`

Contiene la lógica de interacción de la página.

Implementa:

* Apertura y cierre del menú responsive.
* Actualización de `aria-expanded`.
* Activación del modo de texto ampliado.
* Activación del modo de alto contraste.
* Animación del balance de ejemplo.
* Respeto por la preferencia `prefers-reduced-motion`.
* Validación del formulario de contacto.
* Mensajes de error accesibles.

### `ACCESSIBILITY.md`

Contiene el reporte técnico de accesibilidad del proyecto.

En él se documentan las principales decisiones de implementación y su correspondencia con los criterios de conformidad WCAG.

---

## ♿ Accesibilidad

La Landing Page incorpora diferentes características orientadas a mejorar la accesibilidad:

### Navegación mediante teclado

Los elementos interactivos pueden utilizarse mediante teclado y cuentan con indicadores de foco visibles.

### Skip Link

Se incorpora un enlace de salto que permite acceder directamente al contenido principal sin tener que recorrer nuevamente la navegación.

### HTML semántico

Se utilizan elementos semánticos de HTML5 para proporcionar una estructura comprensible para tecnologías asistivas.

### ARIA

Se utilizan atributos ARIA en componentes dinámicos cuando resulta necesario, incluyendo:

* `aria-expanded`
* `aria-controls`
* `aria-pressed`
* `aria-describedby`
* `role="alert"`
* `role="status"`

### Texto ampliado

El usuario puede activar un modo de texto ampliado mediante el botón **"A+ Texto"**.

### Alto contraste

La página incorpora un modo de alto contraste para mejorar la legibilidad de determinados usuarios.

### Reducción de movimiento

Las animaciones respetan la configuración del sistema mediante:

```css
@media (prefers-reduced-motion: reduce)
```

### Formulario accesible

Los campos del formulario cuentan con etiquetas asociadas mediante `label` y `for`, además de mensajes de error asociados a los campos correspondientes.

---

## 🧪 Herramientas de evaluación

Durante el desarrollo se contemplaron herramientas y técnicas de evaluación de accesibilidad como:

* axe DevTools
* Lighthouse
* WAVE
* Validador HTML de W3C
* Navegación exclusiva mediante teclado
* Pruebas con lectores de pantalla

La documentación detallada de las decisiones de accesibilidad se encuentra en `ACCESSIBILITY.md`.

---

## 🚀 Ejecución del proyecto

El proyecto no requiere instalación de dependencias ni servidor backend para visualizar la Landing Page.

Puede ejecutarse abriendo directamente:

```text
index.html
```

en un navegador web moderno.

También puede utilizarse una extensión como **Live Server** en Visual Studio Code para ejecutar la página mediante un servidor local.

---

## 📱 Diseño responsive

La interfaz está adaptada para diferentes tamaños de pantalla.

En dispositivos de menor tamaño:

* La navegación principal se convierte en un menú desplegable.
* Las columnas se reorganizan verticalmente.
* Los componentes se adaptan al ancho disponible.
* Se mantiene la navegación mediante teclado.

---

## 📚 Documentación

Para consultar la documentación técnica completa sobre accesibilidad:

**[Reporte de Cumplimiento WCAG →](ACCESSIBILITY.md)**

---

## 👥 Proyecto académico

**Carrera:** Tecnicatura Superior en Desarrollo de Software
**Asignatura:** Interfaz de Usuario
**Trabajo práctico:** Implementación e Integración de Accesibilidad Web
**Año:** 2026

---

## 📄 Licencia

Proyecto desarrollado con fines exclusivamente académicos.


