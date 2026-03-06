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
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: service ID de EmailJS para el formulario de contacto.
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_COMPANY`: template ID para notificar el lead a la empresa.
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT`: template ID para enviar confirmación al cliente.
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: public key de EmailJS.
