# Changelog

All notable changes to this project will be documented in this file.

## 1.0.0 - 2025-09-23

### Added
- **Estructura del proyecto:** Se ha implementado la estructura base con directorios para componentes, contenido, datos y estilos.
- **Configuración inicial de Astro:** Se han configurado los archivos `astro.config.mjs` y `tsconfig.json`.
- **Integración de MDX:** Se ha habilitado el soporte para archivos `.mdx` para la creación de contenido dinámico.
- **Diseños y componentes base:** Se ha creado el layout principal (`Layout.astro`) y componentes de UI iniciales.
- **Sistema de ruteo dinámico:** Se ha configurado el enrutamiento para páginas estáticas y dinámicas (`[slug].astro`).

### Changed
- El archivo `package.json` ha sido actualizado a la versión `1.0.0`.

### Fixed
- No hay errores corregidos en esta versión inicial.

### Removed
- No se ha eliminado nada en esta versión inicial.

## 1.1.0 - 2026-01-14

### Added
- **Sistema de navegación entre lecciones:** Se ha implementado lógica dinámica en `[slug].astro` para detectar temas relacionados basados en el nombre del archivo.
- **Paginación automática:** Se han añadido botones de "Anterior" y "Siguiente" que calculan automáticamente la secuencia de lecciones usando el campo `order` del frontmatter.
- **Sidebar dinámico con estado activo:** El menú lateral ahora lista automáticamente todas las partes de un tema y resalta visualmente la lección actual.

### Changed
- **Estructura de contenidos:** Se ha refactorizado el contenido de archivos `.mdx` extensos en subtemas modulares para mejorar la mantenibilidad y el SEO.
- El archivo `package.json` ha sido actualizado a la versión `1.1.0`.