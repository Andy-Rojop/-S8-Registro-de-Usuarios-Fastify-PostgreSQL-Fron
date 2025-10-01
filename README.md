# Proyecto de Gestión de Productos

Este proyecto es una aplicación web completa para gestionar productos, construida con una arquitectura moderna usando Docker, PostgreSQL, Fastify y una interfaz web con Bootstrap.

## Estructura del Proyecto

```
HomeworkS8/
├── backend/
│   ├── src/
│   │   ├── app.js        # Configuración de Fastify y rutas
│   │   ├── db.js         # Conexión a PostgreSQL
│   │   └── index.js      # Punto de entrada
|   |-- .gitignore        # Archivos a ignorar
│   ├── .env              # Variables de entorno
│   ├── Dockerfile        # Configuración de contenedor backend
│   └── package.json      # Dependencias
├── frontend/
│   ├── index.html        # Interfaz de usuario
│   └── app.js           # Lógica del cliente
├── docker-compose.yml    # Configuración de servicios
├── init.sql             # Schema inicial de BD
└── README.md
```

## Requisitos Previos

- Docker Desktop
- Node.js (opcional, para desarrollo local)
- Visual Studio Code (recomendado)

## Variables de Entorno

Crear archivo `.env` en la carpeta backend:

```env
DB_USER=user_DB
DB_PASSWORD=pass_DB
DB_NAME=name_DB
DB_HOST=DB_HOST
DB_PORT=port_DB
PORT=port
```

## Iniciar el Proyecto

1. Clonar el repositorio:
```bash
git clone <url-repositorio>
cd HomeworkS8
```

2. Levantar los contenedores:
```bash
docker-compose up -d
```

3. La aplicación estará disponible en:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3000
- Base de datos: localhost:5432

## Endpoints API

### GET /productos
Obtiene lista de productos

### POST /productos
Crea un nuevo producto
```json
{
  "nombre": "string",
  "precio": number,
  "cantidad": number,
  "tienda": "string"
}
```

### DELETE /productos/:id
Elimina un producto por ID

## Desarrollo Local

1. Instalar dependencias del backend:
```bash
cd backend
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm start
```

3. Para ejecutar ek frontend, usar Live Server de VS Code:
   - Click derecho en `frontend/index.html`
   - Seleccionar "Open with Live Server"

## Base de Datos

La base de datos de PostgreSQL se inicializa con la siguiente estructura:

```sql
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    cantidad INTEGER NOT NULL,
    tienda VARCHAR(100) NOT NULL
);
```

## Tecnologías Utilizadas

- **Backend**: Fastify
- **Base de Datos**: PostgreSQL
- **Frontend**: HTML, JavaScript, Bootstrap
- **Contenedores**: Docker y Docker Compose
- **API**: RESTful

## Comandos Útiles

```bash
# Detener contenedores
docker-compose down

# Ver logs
docker-compose logs -f

# Reconstruir contenedores
docker-compose up --build

# Limpiar volúmenes
docker-compose down -v
```

