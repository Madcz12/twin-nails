```
# Documento de Requerimientos Técnicos y de Diseño: Landing Page para Twin Nails
PZO
```

```
Este documento define las especificaciones, estructura, identidad visual y
estrategia de optimización para el desarrollo de la landing page de **Twin Nails
PZO**, enfocada en reactivar el alcance de la marca, destacar sus servicios y
optimizar la conversión directa a través de canales digitales en Puerto Ordaz.
```

```
---
```

```
## 1. Identidad Visual y Estilo Estético
```

```
Basado en la línea gráfica e identidad de la marca (reflejada en su material
promocional), el sitio web debe adoptar un enfoque estético limpio, profesional
y minimalista, orientado al sector de la belleza y el cuidado personal.
```

```
### Paleta de Colores Sugerida
* **Color de Fondo Principal:** Negro (`#000000`).
* **Color de Tipografía y Contrastes:** Fuscia (`#ff1c6f`). Utilizado para
encabezados primarios, textos legibles y elementos gráficos estructurados.
* **Acentos de Color (Opcional para CTAs):** Rosa pastel suave (`#F3BCC8`)
únicamente para destacar sutilmente elementos interactivos específicos,
manteniendo la armonía con los tonos de los trabajos reales (como el set de uñas
rosa de la muestra).
```

```
### Elementos Gráficos y Tipografía
```

```
* **Ilustraciones y Bordes:** Uso de arte lineal (*line art*) de motivos
orgánicos y botánicos (hojas, ramas finas estilizadas) en el fondo o esquinas de
las secciones, emulando los detalles de la imagen promocional.
```

```
* **Estilo de Bordes:** Marcos ovalados o circulares suaves para las imágenes de
portafolio y destacados (ej. la foto de las manos enmarcadas en un óvalo azul).
* **Tipografía:**
```

```
    * *Títulos principales (H1, H2):* Una fuente tipográfica de estilo *script*
o manuscrita elegante, fluida y con personalidad (similar a la tipografía usada
en "Twin Nails PZO" y "¡Agenda ahora!"), garantizando que sea legible en
pantallas móviles.
```

```
    * *Cuerpo de texto y listas:* Una fuente *sans-serif* limpia, moderna y
altamente legible (ej. Inter, Montserrat o Roboto), con buen espaciado entre
líneas (1.25).
```

```
---
```

```
## 2. Arquitectura de la Información (Estructura de Secciones)
```

```
La landing page se estructurará de forma lineal en una sola página (*Single Page
Application* / *One-Page*) optimizada para navegación móvil:
```

## `### Secciones Recomendadas:` 

`1.  **Hero Section (Inicio):** * **Encabezado:** Logo o nombre estilizado "Twin Nails PZO". * **Título Principal (H1):** "Resalta tu estilo con las mejores uñas en Puerto Ordaz".` 

- `**Subtítulo:** "Diseños únicos, bioseguridad y atención personalizada para consentir tus manos. ¡Luce un acabado impecable hoy mismo!"` 

- `**Elemento Visual:** Imagen destacada en marco ovalado de un set de uñas real de alta calidad.` 

```
    * **CTA Principal:** Botón destacado "Agendar Cita por WhatsApp".
```

`2.  **Sección de Promociones Activas (Gancho de Conversión):** * *Inspirado en la oferta actual de la marca.* * **Tarjeta Destacada (Card):** **Promo Jelly Tips — 5$** * Incluye: Un solo tono y largo hasta el #3. * Nota importante: Cristales o dijes tienen costo adicional.` 

```
    * **CTA Secundario:** Botón directo: "Quiero esta Promo".
```

`3.  **Sobre Nosotros (Twin Nails):**` 

```
    * Breve reseña del local enfocado en su trayectoria (más de 1 año de
experiencia atendiendo a la comunidad de PZO).
```

```
    * Pilares clave del servicio: Higiene/Bioseguridad, materiales de primera, y
personalización del *Nail Art*.
```

`4.  **Catálogo de Servicios y Especialidades:**` 

- `Estructura de rejilla (*Grid*) con tarjetas para cada categoría: * *Sistemas de Uñas:* Acrílico, Polygel, Jelly Tips. * *Esmaltado:* Semipermanente, tradicional, efectos en tendencia. * *Nail Art:* Diseños a mano alzada, cristales, encapsulados. * *Cuidado:* Manicura y Pedicura SPA.` 

```
    * Cada tarjeta incluirá una opción de consulta directa.
```

`5.  **Galería / Portafolio (Prueba de Calidad):**` 

- `Carrusel de imágenes reales de trabajos realizados en el local.` 

```
    * Organizado visualmente para cargar rápido y desplegar fotos nítidas sin
alterar los colores de los esmaltes.
```

```
6.  **Ubicación y Contacto (SEO Local):**
    * **Dirección:** Especificación detallada de la ubicación física en Puerto
Ordaz con puntos de referencia claros.
```

- `**Mapa:** Integración (iframe) de Google Maps. * **Horarios:** Tabla clara con los días y horas de atención al cliente. * **Enlaces:** Accesos directos a WhatsApp Business e Instagram.` 

```
---
```

## `## 3. Requerimientos Técnicos y Stack Sugerido` 

```
Para garantizar que la página cargue de forma instantánea en redes móviles y sea
fácil de escalar:
```

```
* **Frontend:** HTML5, CSS3, Typescript (o frameworks como **React** / **VueJS**
con **Vite** para una experiencia SPA ultra rápida).
* **Estilos:** **TailwindCSS** para un control preciso de la paleta de colores
pastel, fuentes personalizadas y bordes ovalados adaptables.
```

```
* **Responsive Design:** Enfoque *Mobile-First*. El 95% del tráfico proveniente
de redes sociales se abrirá en teléfonos inteligentes.
```

```
* **Rendimiento:** Optimización estricta de imágenes (conversión a formatos
modernos como `.webp`, compresión sin pérdida de calidad) para evitar que la
galería ralentice la carga.
```

## `---` 

## `## 4. Estrategia de Alcance y SEO Local (Puerto Ordaz)` 

```
Para solucionar el problema de inactividad digital de más de un año, el
desarrollo técnico debe ir acompañado de los siguientes puntos:
```

```
* **SEO On-Page Regional:** Inclusión estratégica de palabras clave en los
metadatos y etiquetas semánticas (`<h1>`, `<h2>`, `alt` de imágenes). Ejemplos:
*"uñas acrílicas en Puerto Ordaz"*, *"manicura pzo"*, *"diseño de uñas twin
nails"*.
```

```
* **Integración con Google Business Profile:** La landing page debe enlazarse
directamente a la ficha de Google Maps del local. Se estructurarán datos en
formato JSON-LD (Schema.org de *LocalBusiness*) en el código de la página para
que los motores de búsqueda identifiquen la dirección exacta y el rubro del
negocio.
```

```
* **Canal de Conversión Directo:** Configuración de enlaces de WhatsApp pre-
completados que identifiquen desde qué sección de la web escribe la clienta (ej.
`https://wa.me/XXXXXX?text=Hola%20Twin%20Nails,
```

```
%20quiero%20agendar%20la%20promo%20de%20Jelly%20Tips`).
```

