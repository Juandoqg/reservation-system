
# Reservation System 🗓️

Sistema completo de gestión de reservas para restaurantes. Este proyecto permite a los usuarios registrar, visualizar y administrar reservas de manera eficiente, con autenticación segura y arquitectura limpia.

## 🚀 Tecnologías utilizadas
- **Backend:**
  - NestJS
  - TypeORM
  - MySQL
  - Clean Architecture
  - JWT para autenticación
- **Frontend:**
  - Angular
  - Angular Router
  - Angular Services
  - Bootstrap (o el framework que uses para estilos)
- **Herramientas:**
  - Git
  - Postman
  - Docker (opcional)

## 📂 Estructura del proyecto

```text
reservation-system/
│
├── backend/          # Backend NestJS con Clean Architecture
│   ├── src/
│   │   ├── application/
│   │   ├── domain/
│   │   ├── infrastructure/
│   │   └── interfaces/
│   └── package.json
│
├── frontend/         # Frontend Angular
│   ├── src/
│   └── package.json
│
└── README.md
```

## ⚙️ Instalación

### 1. Clona el repositorio
```bash
git clone https://github.com/Juandoqg/reservation-system.git
```

### 2. Configura el Backend
```bash
cd reservation-system/backend
npm install
```
- Crea un archivo `.env` con las variables de conexión a MySQL:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=reservation_db
JWT_SECRET=tu_clave_secreta
```

### 3. Ejecuta el Backend
```bash
npm run start:dev
```

### 4. Configura el Frontend
```bash
cd ../frontend
npm install
```

### 5. Ejecuta el Frontend
```bash
ng serve
```

## ✅ Características
- Registro de usuarios
- Login con autenticación JWT
- Gestión de reservas
- Arquitectura limpia (Clean Architecture)
- Consumo de APIs públicas (más adelante)
- Buenas prácticas de desarrollo

## 📌 Buenas prácticas
- Código estructurado por capas: dominio, aplicación, infraestructura e interfaces.
- Inyección de dependencias correcta.
- Separación de responsabilidades.
- Uso de TypeORM para facilitar la persistencia.
- JWT seguro con almacenamiento local del token.

## 📬 Contacto
Si quieres contactarme:

- **GitHub:** [Juandoqg](https://github.com/Juandoqg)
- **Correo:** juandoqg@gmail.com