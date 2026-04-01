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
