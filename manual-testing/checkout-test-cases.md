# Checkout Test Cases - SauceDemo

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
El total mostrado debería coincidir con la suma de los productos

**Resultado obtenido:**
El total se muestra correctamente en la página de resumen

**Estado:**
✅ PASS


## TC-14: Validar impuesto en checkout

**Precondición:**
- Usuario logueado
- Producto añadido al carrito

**Pasos:**
1. Añadir producto al carrito
2. Ir al carrito
3. Pulsar "Checkout"
4. Introducir datos válidos
5. Pulsar "Continue"

**Resultado esperado:**
Se debería mostrar el impuesto correctamente en el resumen

**Resultado obtenido:**
El impuesto se muestra correctamente

**Estado:**
✅ PASS


## TC-15: Validar total final (producto + tax)

**Precondición:**
- Usuario logueado
- Producto añadido

**Pasos:**
1. Ir a checkout
2. Introducir datos válidos
3. Pulsar "Continue"

**Resultado esperado:**
El total final debería ser igual a (precio del producto + impuesto)

**Resultado obtenido:**
El total final se calcula correctamente

**Estado:**
✅ PASS


## TC-16: Cancelar checkout

**Precondición:**
- Usuario logueado
- Producto en carrito

**Pasos:**
1. Ir a checkout
2. Pulsar botón "Cancel"

**Resultado esperado:**
El usuario debería volver al carrito

**Resultado obtenido:**
El usuario vuelve correctamente al carrito

**Estado:**
✅ PASS


## TC-17: Acceder al checkout con carrito vacío

**Precondición:**

Usuario logueado en el sistema
Carrito de compras vacío

**Pasos:**

Acceder al carrito de compras
Hacer clic en el botón "Checkout"

**Resultado esperado:**
El sistema no deberia permitir continuar al proceso de checkout.
Debe mostrar un mensaje indicando que el carrito está vacío o redirigir al usuario a la página del carrito o catálogo.

**Resultado obtenido:**
El sistema permite continuar al checkout aun cuando el carrito está vacío.

**Estado:**
❌ FAIL

**Observaciones:**
Se detecta un comportamiento incorrecto, ya que no se valida que el carrito contenga productos antes de permitir el acceso al checkout.