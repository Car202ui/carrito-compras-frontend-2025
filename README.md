# 🛒 Carrito Compras | Prueba Técnica 2025

Solución profesional para la prueba técnica de agosto 2025.

---

## 🚀 Tecnologías utilizadas

- **Frontend:** React 18 + Vite + Material UI 5 + Axios
- **Backend:** Java 17 + Spring Boot 3 + Swagger (API REST)
- **Arquitectura:** Clean Code — componentes reutilizables, hooks propios, integración real full stack

---

## ⚡ Instalación y ejecución

### 1. Backend (Spring Boot)

1. **Ubica la carpeta del backend** (proyecto Java).
2. Ejecuta:
    ```bash
    ./mvnw spring-boot:run
    ```
   o desde tu IDE favorito (IntelliJ, Eclipse, VS Code).
3. API activa en: [http://localhost:8083/api](http://localhost:8083/api)
4. Swagger (documentación y pruebas): [http://localhost:8083/swagger-ui.html](http://localhost:8083/swagger-ui.html)

### 2. Frontend (React)

1. Entra a la carpeta `carrito-frontend`:
    ```bash
    cd carrito-frontend
    npm install
    npm run dev
    ```
2. La aplicación abre en: [http://localhost:5173](http://localhost:5173)

---

## ✨ Características principales

- **Interfaz moderna, responsive y minimalista** (Material UI).
- **Agregar y eliminar productos al carrito** con feedback visual inmediato (snackbar).
- **Visualización del total y badge de cantidad de productos en el carrito**.
- **Optimización de productos según presupuesto** (el usuario ingresa un monto y ve la mejor combinación posible).
- **Código organizado y desacoplado**: componentes, hooks, servicios API.
- **Integración total con backend REST en Java Spring Boot** (todas las operaciones reales).

## 📂 Estructura del proyecto

carrito-frontend/
├─ src/
│ ├─ components/
│ ├─ hooks/
│ ├─ Services/
│ ├─ styles/
│ ├─ App.jsx
│ └─ main.jsx



## 🗂️ Estructura del backend
Carrito-de-Compras/
└── src/
    └── main/
        ├── java/
        │   └── com.carritobackend.Carrito.de.Compras/
        │       ├── Controller/
        │       │   └── CartController.java
        │       ├── Model/
        │       │   ├── Cart.java
        │       │   ├── CartItem.java
        │       │   └── Product.java
        │       └── Service/
        │           └── CartService.java
        │           └── CarritoDeComprasApplication.java
        └── resources/
            ├── static/
            ├── templates/
            └── application.properties

👨‍💻 Autor
Desarrollado por Carlos Iglesias — Agosto 2025