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
- Testing automatizado con Cypress

## Estructura del proyecto
manual-testing/ # Casos de prueba manual y reporte de bugs
cypress/
e2e/
smoke.spec.js # Smoke tests: login, productos, carrito
checkout.spec.js # Tests de checkout completo
cart-advanced.spec.js # Tests de carrito avanzado
login-negative.cy.js # Tests negativos de login
support/
commands.js # Comandos reutilizables, ej. cy.login()
index.js # Configuración de soporte de Cypress
cypress.config.js # Configuración general de Cypress
README.md # Documentación del proyecto

## Pruebas automatizadas con Cypress

### Smoke Tests
- smoke.spec.js
  - Login básico funciona
  - Productos se muestran
  - Añadir un producto al carrito

### Tests positivos / Funcionales
- checkout.spec.js
  - TC-08: Checkout completo correcto
- cart-advanced.spec.js
  - TC-11: Añadir múltiples productos al carrito
  - TC-12: Validar precio total
  - TC-13: Eliminar producto del carrito

### Tests negativos / edge cases
- login-negative.cy.js
  - TC-05: Login con usuario bloqueado
  - TC-06: Login con campos vacíos
  - TC-07: Login con contraseña incorrecta

## Estado del proyecto
En desarrollo 🚧