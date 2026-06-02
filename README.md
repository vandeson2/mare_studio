# Maré Studio - Deploy Guide

Proyecto en Next.js 16 preparado para despliegue en hosting con Node.js.

## Requisitos del servidor

- Node.js 20 o superior
- npm 10 o superior

## Variables de entorno

1. Copia `.env.example` como `.env.local` en local o configura las mismas variables en tu panel de hosting.
2. Define:
   - `RESEND_API_KEY` — clave de [Resend](https://resend.com)
   - `RESEND_FROM_EMAIL` — `Maré Studio <contacto@xn--marstudio-d4a.es>` (dominio verificado)
   - `RESEND_TO_EMAIL` — `info@xn--marstudio-d4a.es` (mismo buzón que info@maréstudio.es)
   - `NEXT_PUBLIC_WHATSAPP_PHONE`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm install
npm run build
npm run start
```

La app queda servida por defecto en el puerto `3000`.

## Despliegue en hosting Node.js (recomendado)

Este proyecto usa `output: "standalone"` para facilitar despliegue en VPS/hosting Node:

1. En tu máquina local ejecuta `npm run build`.
2. Sube al servidor:
   - `.next/standalone`
   - `.next/static`
   - `public`
3. En el servidor:
   - define las variables de entorno
   - ejecuta `node server.js` dentro de la carpeta de `standalone` (o usa PM2)

## Despliegue en Hostinger subiendo un archivo ZIP

1. En tu ordenador:
   - Asegúrate de que el proyecto **no incluye** la carpeta `node_modules` dentro del ZIP (pesa mucho y Hostinger puede instalar dependencias solo).
   - Comprime la carpeta del proyecto (donde está `package.json`) en un `.zip`.
2. En Hostinger (hPanel):
   - Ve a **Sitios Web → Node.js** y crea una nueva aplicación.
   - Elige **Subir mediante archivo** y sube el `.zip` del proyecto.
   - Selecciona como **Application root** la carpeta donde está `package.json`.
3. Variables de entorno en Hostinger:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL=Maré Studio <contacto@xn--marstudio-d4a.es>`
   - `RESEND_TO_EMAIL=info@xn--marstudio-d4a.es`
   - `NEXT_PUBLIC_WHATSAPP_PHONE`
   - Tras guardar, haz **Redeploy** para que la app cargue las variables.
4. En la sección de comandos / startup de Hostinger:
   - Comando de instalación: `npm install`
   - Comando de build: `npm run build`
   - Comando de arranque (startup): `node .next/standalone/server.js`

## Notas

- El endpoint de contacto está en `src/app/api/contacto/route.ts` y depende de Resend.
- El dominio en Resend debe ser `xn--marstudio-d4a.es` (equivalente a maréstudio.es).
- No subas `.env.local` al repositorio.
