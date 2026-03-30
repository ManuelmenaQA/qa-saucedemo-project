# Test Cases - SauceDemo

## TC-01: Login con credenciales válidas

**Precondiciones:**
- El usuario está en la página de login

**Pasos:**
1. Introducir usuario válido
2. Introducir contraseña válida
3. Pulsar botón login

**Resultado esperado:**
El usuario accede correctamente a la página de productos


## TC-02: Login con credenciales inválidas

**Precondiciones:**
- El usuario está en la página de login

**Pasos:**
1. Introducir usuario incorrecto
2. Introducir contraseña incorrecta
3. Pulsar botón login

**Resultado esperado:**
Se muestra un mensaje de error


## TC-03: Visualización de productos

**Precondiciones:**
- El usuario ha iniciado sesión correctamente

**Pasos:**
1. Acceder a la página principal

**Resultado esperado:**
Se muestra la lista de productos disponibles


## TC-04: Añadir producto al carrito

**Precondiciones:**
- El usuario ha iniciado sesión correctamente

**Pasos:**
1. Pulsar "Add to cart" en un producto

**Resultado esperado:**
El producto se añade al carrito correctamente
