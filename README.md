# Dodilix Web

Landing de Dodilix construida con Next.js (App Router), preparada para despliegue estático en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## Build de producción

```bash
npm run build
```

El sitio exportado queda en `out/`.

## Deploy en GitHub Pages

Este repo ya incluye workflow en [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

1. Hacé push a la rama `main`.
2. En GitHub, andá a `Settings > Pages`.
3. En `Source`, seleccioná **GitHub Actions** (no `Deploy from a branch`).
4. Esperá a que termine el workflow `Deploy to GitHub Pages` en `Actions`.
5. El sitio quedará publicado en:
   - `https://<usuario>.github.io/<repositorio>/`

## Variables opcionales

- `BASE_PATH`: fuerza un base path manual (ejemplo: `BASE_PATH=/Dodilix`).
- `NEXT_PUBLIC_DEMO_ENDPOINT`: endpoint externo para envío del formulario (si no se define, el formulario abre `mailto:`).
- `NEXT_PUBLIC_CONTACT_EMAIL`: email destino para el modo `mailto` (por defecto `info@dodilix.com`).
