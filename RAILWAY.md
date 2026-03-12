# Desplegar backend en Railway con PostgreSQL

Guía paso a paso: crear PostgreSQL en Railway y desplegar este backend.

---

## 0. Cuenta y proyecto en Railway

1. Entra en [railway.app](https://railway.app) y crea una cuenta (con GitHub es más fácil).
2. Crea un **nuevo proyecto** (New Project).
3. En ese proyecto harás dos cosas: **añadir PostgreSQL** y **añadir el servicio del backend**.

---

## 1. Crear PostgreSQL en Railway

1. En tu proyecto, clic en **"+ New"** (o "Add service").
2. Elige **"Database"** → **"Add PostgreSQL"**.
3. Railway crea el servicio y te da una **connection URL**.
4. Entra al servicio **Postgres** → pestaña **"Variables"** o **"Connect"**.
5. Copia la **"Postgres connection URL"** (o la variable `DATABASE_URL`). La usarás en el backend.  
   Tiene esta forma:  
   `postgresql://postgres:PASSWORD@HOST:PORT/railway?sslmode=require`

---

## 2. Código en GitHub

- Crea un repo en GitHub (si no lo tienes).
- Sube la carpeta **crud-simple-backend** (solo el backend, no el frontend).
- Asegúrate de tener un `.gitignore` que incluya `node_modules`, `.env`, `dist`.

---

## 3. Nuevo servicio (backend) en Railway

1. Entra a [railway.app](https://railway.app) y abre tu proyecto.
2. **New** → **GitHub Repo** (o “Empty Service” si despliegas manualmente).
3. Elige el repo donde está **crud-simple-backend**.
4. Si el repo tiene varias carpetas, en **Settings** → **Root Directory** pon: `crud-simple-backend`.

---

## 4. Conectar el backend a PostgreSQL

En el servicio del **backend** (no en Postgres):

| Variable       | Valor |
|----------------|--------|
| `DATABASE_URL` | Cópialo desde tu servicio **Postgres** en Railway: pestaña **Variables** o **Connect** → “Postgres connection URL”. |
| `PORT`         | No hace falta ponerla; Railway la asigna solo. |

Si en **Postgres** en Railway haces **Connect** → “Add to [tu servicio backend]”, Railway suele crear `DATABASE_URL` en el backend automáticamente.

---

## 5. Build y Start en Railway

El repo incluye **`railway.json`** con build y start ya definidos; Railway los aplica solo. Para cambiarlos: en el servicio del backend, **Settings** (o pestaña “Build / Deploy”):

- **Build Command:**  
  `npm install && npx prisma generate && npm run build`

- **Start Command (o Run Command):**  
  `npm run start:railway`

Eso instala dependencias, genera el cliente de Prisma, compila Nest y al arrancar aplica migraciones y luego levanta la API.

---

## 6. Desplegar

- Haz **Deploy** (o push a la rama que Railway vigila).
- Cuando termine, Railway te dará una URL tipo `https://tu-app.up.railway.app`.
- La API quedará en: **`https://tu-app.up.railway.app/api`** (por el prefijo global `api`).

---

## 7. (Opcional) Datos iniciales

Si quieres los datos del seed (tb_tipo_contribuyente, tb_tipo_documento, tb_entidad) en la BD de Railway:

- En tu PC, con la **misma** `DATABASE_URL` de Railway en tu `.env`, ejecuta una sola vez:  
  `npm run prisma:seed`
- O conecta por CLI a la BD de Railway y ejecuta el seed desde un script que use esa URL.

---

## Resumen

1. **Railway:** cuenta + proyecto nuevo.
2. **PostgreSQL:** "+ New" → Database → Add PostgreSQL → copiar `DATABASE_URL`.
3. **Repo:** subir **crud-simple-backend** a GitHub (con `.gitignore` que incluya `node_modules`, `.env`, `dist`).
4. **Backend en Railway:** "+ New" → GitHub Repo → elegir repo; si el backend está en una subcarpeta, poner **Root Directory**: `crud-simple-backend`.
5. **Variables:** en el servicio backend, `DATABASE_URL` = URL de Postgres (o usar "Add to backend" desde Postgres).
6. **Build:** `npm install && npx prisma generate && npm run build`
7. **Start:** `npm run start:railway`

La API quedará en `https://tu-app.up.railway.app/api`.
