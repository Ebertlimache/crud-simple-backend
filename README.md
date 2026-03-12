# CRUD Simple Backend (Prisma + migraciones)

Backend NestJS con **Prisma** y **migraciones**. Sin script SQL: la base se crea con `prisma migrate`.

## Requisitos

- Node.js
- PostgreSQL (local o en la nube, ej. Railway)

## Configuración

1. Copia `.env.example` a `.env`.
2. Define `DATABASE_URL` con tu Postgres (usuario, contraseña, host, puerto, nombre de BD).  
   Ejemplo Railway:  
   `postgresql://postgres:TU_PASSWORD@HOST:PORT/railway?sslmode=require`

## Comandos

```bash
npm install
npm run prisma:generate
npm run prisma:migrate    # crea/applica migraciones (desarrollo)
npm run prisma:seed       # opcional: datos iniciales tb_tipo_*, tb_entidad
npm run start:dev
```

En producción:

```bash
npm run prisma:migrate:deploy
npm run start:prod
```

## Estructura de BD (Prisma)

- **Item** — CRUD simple (id, title, description).
- **tb_tipo_contribuyente**, **tb_tipo_documento**, **tb_entidad** — mismas tablas que el script original; se crean con la migración `prisma/migrations/20250311000000_init`.

## API

Prefijo global: `/api`

- `GET /api/items` — listar
- `GET /api/items/:id` — obtener uno
- `POST /api/items` — crear (body: `{ title, description? }`)
- `PATCH /api/items/:id` — actualizar
- `DELETE /api/items/:id` — eliminar
