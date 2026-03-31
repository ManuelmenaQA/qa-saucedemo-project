# Test Cases - Checkout SauceDemo

## TC-08: Checkout completo correcto

**Precondición:**
- Usuario logueado
- Producto añadido al carrito

**Pasos:**
1. Ir al carrito
2. Pulsar "Checkout"
3. Introducir First Name
4. Introducir Last Name
5. Introducir Postal Code
6. Pulsar "Continue"
7. Pulsar "Finish"

**Resultado esperado:**
El pedido se completa correctamente y se muestra mensaje de confirmación Resultado obtenido: Passed


## TC-09: Checkout con campos vacíos

**Precondición:**
- Usuario logueado
- Producto añadido al carrito

**Pasos:**
1. Ir al carrito
2. Pulsar "Checkout"
3. No rellenar los campos
4. Pulsar "Continue"

**Resultado esperado:**
Se muestra un mensaje de error indicando que los campos son obligatorios Resultado obtenido: Passed


## TC-10: Checkout con datos inválidos

**Precondición:**
- Usuario logueado
- Producto añadido al carrito

**Pasos:**
1. Ir al carrito
2. Pulsar "Checkout"
3. Introducir datos inválidos (ej: números en nombre)
4. Pulsar "Continue"

**Resultado esperado:**
El sistema debería validar los datos introducidos y no permitir continuar con datos inválidos

**Resultado obtenido:**
El sistema permite continuar y completar la compra con datos inválidos

**Estado:**
❌ FAIL
