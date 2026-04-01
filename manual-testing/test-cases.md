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

**Resultado obtenido:**
El usuario accede correctamente a la página de productos

**Estado:**
✅ PASS


## TC-02: Login con credenciales inválidas

**Precondiciones:**
- El usuario está en la página de login

**Pasos:**
1. Introducir usuario incorrecto
2. Introducir contraseña incorrecta
3. Pulsar botón login

**Resultado esperado:**
Se muestra un mensaje de error

**Resultado obtenido:**
Se muestra correctamente un mensaje de error

**Estado:**
✅ PASS


## TC-03: Visualización de productos

**Precondiciones:**
- El usuario ha iniciado sesión correctamente

**Pasos:**
1. Acceder a la página principal

**Resultado esperado:**
Se muestra la lista de productos disponibles

**Resultado obtenido:**
La lista de productos se muestra correctamente

**Estado:**
✅ PASS


## TC-04: Añadir producto al carrito

**Precondiciones:**
- El usuario ha iniciado sesión correctamente

**Pasos:**
1. Pulsar "Add to cart" en un producto

**Resultado esperado:**
El producto se añade al carrito correctamente

**Resultado obtenido:**
El producto se añade correctamente al carrito

**Estado:**
✅ PASS


## TC-11: Añadir múltiples productos al carrito

**Precondición:**
- Usuario logueado

**Pasos:**
1. Añadir 2 productos diferentes al carrito
2. Ir al carrito

**Resultado esperado:**
Se muestran ambos productos en el carrito

**Resultado obtenido:**
Los dos productos se muestran correctamente en el carrito

**Estado:**
✅ PASS


## TC-12: Validar precio total

**Precondición:**
- Usuario logueado
- 2 productos añadidos al carrito

**Pasos:**
1. Ir al carrito
2. Pulsar "Checkout"
3. Introducir datos válidos
4. Pulsar "Continue"

**Resultado esperado:**
El total mostrado en la página de resumen coincide con la suma de los productos

**Resultado obtenido:**
El total se muestra correctamente en la página de resumen tras pulsar "Continue"

**Estado:**
✅ PASS


## TC-13: Eliminar producto del carrito

**Precondición:**
- Usuario logueado
- Producto añadido al carrito

**Pasos:**
1. Ir al carrito
2. Pulsar "Remove" en el producto

**Resultado esperado:**
El producto desaparece del carrito

**Resultado obtenido:**
El producto se elimina correctamente del carrito

**Estado:**
✅ PASS
