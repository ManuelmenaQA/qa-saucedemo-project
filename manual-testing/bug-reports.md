
# Bug Reports - SauceDemo

## BUG-01: El sistema permite checkout con datos inválidos

**ID:** BUG-01  
**Título:** El formulario de checkout no valida el formato de los campos  

**Severidad:** Media  
**Prioridad:** Media  

**Precondición:**
- Usuario logueado
- Producto añadido al carrito  

**Pasos para reproducir:**
1.Entrar en la web https://www.saucedemo.com/
2.Rellenar el campo de username y password validos
3.Añadir un producto al carrito
4. Ir al carrito  
5. Pulsar "Checkout"  
6. Introducir datos inválidos (ej: números en nombre)  
7. Pulsar "Continue"  
8. Completar la compra  

**Resultado esperado:**
El sistema debería validar los datos y mostrar un error si son inválidos  

**Resultado actual:**
El sistema permite continuar y completar la compra con datos inválidos  

**Entorno:**
- Navegador: Chrome  
- URL: https://www.saucedemo.com/  

**Notas:**
No existe validación de formato en los campos del formulario
