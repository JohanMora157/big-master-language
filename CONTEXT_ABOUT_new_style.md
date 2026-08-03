Sí, esta pieza visual cambia la identidad hacia algo más **azul eléctrico + fucsia + blanco**, mucho más comercial/promocional que el catálogo institucional.

### Paleta de colores aproximada de la imagen

| Uso                     |                                     Color | HEX aproximado         |
| ----------------------- | ----------------------------------------: | ---------------------- |
| Azul principal de fondo |                   Azul rey / azul intenso | `#054BAB`              |
| Azul secundario oscuro  |                    Para bloques y sombras | `#163A96`              |
| Azul más claro          | Detalles, transparencias, textos de fondo | `#6994D1`              |
| Azul pastel             |                    Ilustraciones lineales | `#B3C7E5`              |
| Fucsia principal        |                  Títulos, bordes y marcos | `#ED0874`              |
| Blanco                  |            Textos principales y contraste | `#FFFFFF`              |
| Gris/lila claro         |           Círculo lateral y fondos suaves | `#D9DCE9`              |
| Amarillo logo/camiseta  |                          Acentos pequeños | `#FBCC2E`              |
| Azul logo               |                            Texto del logo | `#3E75D7` aprox.       |
| Negro/sombra            |                   Sombras suaves de texto | `#111111` con opacidad |

### Colores que deberían dominar la página

La página debería usar más esta combinación:

```css
--bigmaster-blue: #054BAB;
--bigmaster-blue-dark: #163A96;
--bigmaster-blue-light: #6994D1;
--bigmaster-pink: #ED0874;
--bigmaster-white: #FFFFFF;
--bigmaster-soft-gray: #D9DCE9;
--bigmaster-yellow: #FBCC2E;
```

El **azul** debe ser el color principal.
El **fucsia** debe ser el color de impacto: botones, precios, etiquetas, títulos destacados.
El **blanco** debe ir en textos grandes sobre azul.
El **amarillo** solo como acento conectado al logo, no como color dominante.

---

## Características visuales de la imagen

### 1. Estilo general

La imagen tiene estética de **post promocional de academia**, tipo anuncio para redes sociales. Es llamativa, directa, juvenil y comercial.

Se siente:

* Dinámica
* Económica/accesible
* Energética
* Juvenil
* Muy enfocada en promoción
* Visualmente fuerte
* Menos institucional y más publicitaria

Para la página, lo ideal sería mezclar esto con una estructura más limpia: que conserve el azul/fucsia y energía visual, pero sin que toda la web parezca un flyer.

---

### 2. Fondo

El fondo es un **azul rey fuerte** con varios elementos:

* Fondo plano azul intenso.
* Textos gigantes de fondo con baja opacidad, tipo “Inglés”.
* Puntos decorativos tipo patrón.
* Ilustraciones lineales en azul claro/blanco.
* Sensación de capas.

Para la landing puedes usar fondos así en hero, promociones y CTA final:

```css
background-color: #054BAB;
```

Y encima agregar textos de fondo con opacidad:

```css
color: rgba(255,255,255,0.08);
font-size: 120px;
font-weight: 800;
```

---

### 3. Fucsia como color de impacto

El fucsia aparece en:

* Título “Clases personalizadas”.
* Borde del círculo lateral.
* Borde de la caja del precio.
* Elementos promocionales.

Este color debería usarse para:

* Botones principales.
* Badges tipo “desde $10.000”.
* Subtítulos importantes.
* Líneas decorativas.
* Hover de botones.
* Bordes de tarjetas destacadas.

Color recomendado:

```css
#ED0874
```

---

### 4. Tipografía

La tipografía es **redondeada, gruesa, amigable y comercial**.

No se ve como una fuente institucional del catálogo, sino como una fuente más publicitaria.

Fuentes parecidas que puedes usar:

Para títulos:

* `Poppins ExtraBold`
* `Fredoka`
* `Montserrat ExtraBold`
* `Nunito ExtraBold`
* `Baloo 2`

Para textos normales:

* `Poppins`
* `Inter`
* `Nunito Sans`

Recomendación para la página:

```css
font-family-heading: "Poppins", "Montserrat", sans-serif;
font-weight: 800;
```

Los títulos deben ser grandes, redondeados y con bastante peso visual.

---

### 5. Formas y figuras

La imagen usa muchas formas curvas:

* Círculo grande lateral gris claro.
* Bordes gruesos fucsia.
* Caja de precio con esquinas redondeadas.
* Líneas curvas.
* Figuras decorativas.
* Puntos en patrón.
* Ilustraciones tipo doodle.

Para la página deberías usar:

* Cards con border-radius grande.
* Botones redondeados.
* Secciones con blobs/círculos.
* Bordes fucsia gruesos en promociones.
* Patrones de puntos.
* Ilustraciones lineales de libros, diplomas, speaking, audífonos, etc.

---

### 6. Logo

El logo en esta pieza aparece pequeño, en azul claro/blanco, dentro del círculo lateral gris.

La página puede usar el logo así:

* En navbar sobre fondo blanco.
* En hero sobre fondo azul, preferiblemente en versión clara si existe.
* En footer.
* Como marca secundaria en cards o secciones promocionales.

La imagen no usa el logo gigante como protagonista. El protagonista es la promoción.

---

### 7. Estilo de promociones

La promoción tiene estructura muy clara:

* Título grande: “Clases personalizadas”
* Modalidad: “100% online”
* Precio: “desde $10.000 la hora”
* Frase de cierre: “Las más económicas del mercado”

La página debería tener una sección promocional parecida:

**Azul de fondo + fucsia + blanco + precio destacado.**

Ejemplo visual:

```txt
CLASES PERSONALIZADAS
100% ONLINE
desde $10.000 la hora
Aplican términos y condiciones
```

---

## Mini prompt para pasarle al agente de código

Update the current Big Master Language Center landing page visual identity to match the attached promotional image.

The new visual direction should be based on a strong social-media promotional style, using electric royal blue as the dominant color, hot pink/fuchsia as the main accent, white for contrast, and small yellow accents connected to the logo.

Use this color palette:

* Primary blue: `#054BAB`
* Dark blue: `#163A96`
* Light blue: `#6994D1`
* Soft blue / illustration blue: `#B3C7E5`
* Main fuchsia / pink: `#ED0874`
* White: `#FFFFFF`
* Soft gray/lavender: `#D9DCE9`
* Yellow accent: `#FBCC2E`

The page should feel more like the promotional image: energetic, commercial, youthful, accessible, and visually strong. However, do not make the entire website look like a messy flyer. Keep the existing landing structure, but restyle the hero, promotions, CTA sections, cards, buttons, badges, and visual details so the brand looks consistent with the image.

Use blue backgrounds in the hero, promotional sections, and final CTA. Use fuchsia for buttons, important titles, price badges, borders, and highlights. Use white text on blue backgrounds. Use yellow only as small accents, not as the main color.

Typography should be rounded, bold, and friendly. Use fonts similar to the image, such as `Poppins ExtraBold`, `Montserrat ExtraBold`, `Fredoka`, `Nunito ExtraBold`, or `Baloo 2`. Body text can use `Poppins`, `Inter`, or `Nunito Sans`.

Add visual elements inspired by the image:

* Big rounded shapes
* Large circles or semi-circles
* Thick fuchsia borders
* Pattern dots
* Low-opacity background words like “Inglés”, “Online”, “Clases”
* Line-art icons of books, diplomas, certificates, microphones, laptops, and language learning
* Rounded promotional cards
* Strong price badges
* White text over blue backgrounds
* Fuchsia outlines around key cards
* Small logo placements inside light circular areas

The hero should feel close to the promo image:

* Blue background
* Big bold headline
* Fuchsia highlight words
* White supporting text
* Price or promo badge
* CTA button in fuchsia
* A visual area with a student/teacher image or placeholder
* Decorative background text with very low opacity

The promotions section should include a strong visual block inspired by the image:
“Clases personalizadas”
“100% online”
“desde $10.000 la hora”
“Aplican términos y condiciones”
“Las más económicas del mercado”

Do not remove the current content or sections. Only adapt the visual identity and improve consistency. Keep WhatsApp CTAs, courses, modalities, FAQ, contact, map, and footer working.

Final result should feel like a polished website version of the promotional image: blue, fuchsia, white, rounded, energetic, affordable, and clearly connected to Big Master Language Center.
