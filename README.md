# QA Testing - SauceDemo

## Objetivo
Este proyecto tiene como objetivo realizar pruebas manuales y automatizadas sobre la web SauceDemo para validar su correcto funcionamiento.

## Funcionalidades a testear
- Login
- Visualización de productos
- Carrito de compra
- Proceso de checkout

## Tipo de pruebas
- Testing manual
- Testing automatizado con Cypress (en progreso)

## Estructura del proyecto
- manual-testing: contiene los casos de prueba y reporte de bugs
- cypress: pruebas automatizadas (pendiente)
## Pruebas automatizadas con Cypress

### Tests positivos

- login.spec.js
  - TC-01: Login con credenciales válidas
  - TC-02: Login con credenciales inválidas
- products.spec.js
  - TC-03: Visualización de productos
- cart.spec.js
  - TC-04: Añadir producto al carrito

### Tests negativos / edge cases

- login-negative.spec.js
  - TC-05: Login con usuario bloqueado
  - TC-06: Login con campos vacíos
  - TC-07: Login con contraseña incorrecta
## Estado del proyecto
En desarrollo 🚧
