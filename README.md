# CBN Ambiental Consulting — Sitio Web Institucional

Sitio web institucional para **CBN Ambiental Consulting**, desarrollado con **Jekyll**, **HTML5**, **CSS3 (Sass)** y **JavaScript vanilla**, 100% compatible con **GitHub Pages**. Todo el contenido dinámico (proyectos, investigadores, equipo, publicaciones, conferencias, experiencias y blog) se administra creando archivos Markdown — **no es necesario tocar el HTML** para agregar contenido nuevo.

---

## 1. Requisitos

- Ruby 3.x
- Bundler (`gem install bundler`)
- Git

## 2. Instalación local

```bash
git clone https://github.com/tu-usuario/cbn-ambiental.git
cd cbn-ambiental
bundle install
bundle exec jekyll serve
```

El sitio quedará disponible en `http://localhost:4000`.

---

## 3. Estructura del proyecto

```
/
├── _layouts/          Plantillas de página (default, home, service, project, etc.)
├── _includes/          Componentes reutilizables (navbar, footer, tarjetas, formularios...)
├── _sass/              Estilos organizados por módulo (variables, base, navbar, cards...)
├── assets/
│   ├── css/main.scss   Punto de entrada de estilos
│   ├── js/             JavaScript modular (modo oscuro, menú, animaciones, buscador...)
│   ├── images/          Imágenes del sitio
│   └── icons/           Favicon y PWA
├── _services/           Colección: servicios (una página por servicio)
├── _projects/            Colección: proyectos ejecutados
├── _researchers/          Colección: investigadores
├── _team/                  Colección: equipo de trabajo
├── _publications/           Colección: publicaciones científicas
├── _conferences/             Colección: conferencias
├── _experiences/               Colección: experiencias / consultorías
├── _posts/                      Artículos del blog
├── _data/                        Datos centralizados (navegación, estadísticas, clientes...)
├── pages/                         Páginas de listado (Nosotros, Servicios, Blog, Contacto...)
├── _config.yml                     Configuración central del sitio
└── index.html                       Página de inicio
```

---

## 4. Cómo publicar en GitHub Pages

1. Sube el proyecto a un repositorio en GitHub.
2. En **Settings → Pages**, selecciona la rama `main` (o `gh-pages`) y la carpeta raíz `/`.
3. Si el sitio se publica en un *Project Page* (`usuario.github.io/repo`), edita `_config.yml`:
   ```yaml
   url: "https://usuario.github.io"
   baseurl: "/repo"
   ```
4. GitHub Pages construirá el sitio automáticamente con cada `push`.

---

## 5. Cómo agregar contenido nuevo (sin tocar el HTML)

### 5.1 Agregar un servicio

Crea un archivo en `_services/nombre-del-servicio.md`:

```yaml
---
title: "Nombre del servicio"
summary: "Descripción breve que aparece en la tarjeta"
image: "/assets/images/services/nombre.jpg"
benefits:
  - "Beneficio 1"
  - "Beneficio 2"
methodology:
  - "Paso 1"
  - "Paso 2"
faq:
  - question: "¿Pregunta frecuente?"
    answer: "Respuesta"
---
Contenido completo del servicio en Markdown...
```

### 5.2 Agregar un proyecto

Crea un archivo en `_projects/nombre-proyecto.md`:

```yaml
---
title: "Nombre del proyecto"
client: "Nombre del cliente"
location: "Ciudad"
province: "Provincia"
date: 2026-01-01
category: "Categoría"
services_involved: ["Servicio 1", "Servicio 2"]
image: "/assets/images/projects/imagen.jpg"
gallery:
  - "/assets/images/projects/imagen-1.jpg"
summary: "Resumen del proyecto"
---
## Desarrollo
...
## Resultados
...
```

Los filtros de la página `/proyectos/` (categoría, año, provincia) se generan **automáticamente** a partir de estos campos.

### 5.3 Agregar un investigador

Crea un archivo en `_researchers/nombre.md`:

```yaml
---
name: "Nombre completo"
profession: "Profesión"
specialty: "Especialidad"
image: "/assets/images/team/nombre.jpg"
email: "correo@cbnambiental.com"
linkedin: "https://linkedin.com/in/..."
orcid: "https://orcid.org/..."
researchgate: "https://researchgate.net/..."
scholar: "https://scholar.google.com/..."
experience: ["..."]
publications: ["..."]
---
Biografía en Markdown...
```

La página de perfil se genera automáticamente en `/investigadores/nombre/`.

### 5.4 Agregar un integrante del equipo

Igual que investigadores, pero en `_team/nombre.md` con los campos `name`, `position`, `image`, `email`, `linkedin`, `experience`.

### 5.5 Agregar una publicación científica

Archivo en `_publications/titulo.md` con `title`, `authors`, `journal`, `year`, `doi`, `pdf`, `external_link`, `citations`.

### 5.6 Agregar una conferencia

Archivo en `_conferences/titulo.md` con `title`, `speaker`, `event`, `date`, `place`, `photos`.

### 5.7 Agregar una experiencia

Archivo en `_experiences/titulo.md` con `title` y `summary`.

### 5.8 Agregar un artículo de blog

Crea un archivo en `_posts/AAAA-MM-DD-titulo.md`:

```yaml
---
title: "Título del artículo"
date: 2026-01-01
image: "/assets/images/blog/imagen.jpg"
author: "Nombre del autor"
categories: ["Categoría"]
tags: ["etiqueta1", "etiqueta2"]
toc: ["Sección 1", "Sección 2"]
excerpt: "Resumen corto del artículo"
---
Contenido del artículo...
```

---

## 6. Cómo cambiar los colores del sitio

Edita las variables en `_sass/_variables.scss`:

```scss
$color-primary:   #1E5F4E; // verde naturaleza
$color-secondary: #2E86AB; // azul agua
$color-accent:    #B08968; // tono tierra
```

También puedes ajustar los colores globales usados en JSON-LD y el manifest PWA en `_config.yml` (`theme:`) y `site.webmanifest`.

## 7. Modo oscuro / claro

El modo oscuro se controla automáticamente según la preferencia del sistema y puede alternarse manualmente con el botón en la barra de navegación (`assets/js/dark-mode.js`). La preferencia se guarda en `localStorage`.

---

## 8. Cómo agregar una nueva página estática

Crea un archivo `.html` o `.md` dentro de `pages/` con el front matter:

```yaml
---
layout: page          # o "default" si necesitas control total del HTML
title: "Título"
permalink: /mi-pagina/
description: "Meta descripción para SEO"
---
Contenido en Markdown o HTML...
```

Agrega el enlace en `_data/navigation.yml` si quieres que aparezca en el menú principal o el footer.

---

## 9. Funcionalidades incluidas

- Buscador interno (blog, proyectos, publicaciones) vía `assets/js/search-index.json` generado dinámicamente por Jekyll.
- Filtros por categoría / año / provincia en Proyectos (`assets/js/filters.js`).
- Paginación del blog (`jekyll-paginate-v2`).
- Breadcrumbs, botón "volver arriba", menú responsive, navbar fija.
- Animaciones suaves al hacer scroll (`IntersectionObserver`).
- Carga diferida de imágenes.
- SEO completo: `jekyll-seo-tag`, Open Graph, Twitter Cards, JSON-LD (Schema.org), sitemap (`jekyll-sitemap`), `robots.txt`, RSS del blog (`jekyll-feed`).
- Página 404 personalizada, favicon y manifest PWA básico.
- Accesibilidad: navegación por teclado, `skip-link`, `aria-labels`, contraste conforme a WCAG 2.2.

## 10. Formulario de contacto

El formulario (`_includes/contact-form.html`) usa un servicio externo tipo [Formspree](https://formspree.io) o similar, ya que GitHub Pages no ejecuta backend. Reemplaza el atributo `action` del formulario por tu endpoint real antes de publicar.

## 11. Rendimiento y buenas prácticas

- CSS compilado y minificado (`style: compressed` en `_config.yml`).
- JavaScript modular cargado con `defer`.
- Imágenes con `loading="lazy"`.
- HTML semántico y componentes reutilizables vía Includes de Jekyll.

## 12. Créditos

Diseño y desarrollo original para **CBN Ambiental Consulting**. Construido enteramente con tecnologías estáticas (Jekyll + HTML5 + CSS3 + JavaScript vanilla) para máxima simplicidad de mantenimiento y compatibilidad total con GitHub Pages.
