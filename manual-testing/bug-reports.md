# Bug Reports - SauceDemo

## BUG-01: El sistema permite checkout con datos inválidos

**ID:** BUG-01  
**Título:** El formulario de checkout no valida el formato de los campos  

**Severidad:** Media  
**Prioridad:** Media  

---

### Precondición:
- Usuario logueado  
- Producto añadido al carrito  

---

### Pasos para reproducir:
1. Entrar en la web: https://www.saucedemo.com/  
2. Introducir usuario y contraseña válidos  
3. Añadir un producto al carrito  
4. Ir al carrito  
5. Pulsar "Checkout"  
6. Introducir datos inválidos (ej: números en nombre)  
7. Pulsar "Continue"  
8. Completar la compra  

---

### Resultado esperado:
El sistema debería validar los datos y mostrar un error si son inválidos  

---

### Resultado actual:
El sistema permite continuar y completar la compra con datos inválidos  

---

### Entorno:
- Navegador: Chrome  
- URL: https://www.saucedemo.com/  

---

### Notas:
No existe validación de formato en los campos del formulario  

## BUG-02: El sistema permite acceder al checkout con el carrito vacío

**ID:** BUG-02  
**Título:** El sistema permite continuar al checkout con el carrito vacío  

**Severidad:** Alta  
**Prioridad:** Alta  

---

### Precondición:
- Usuario logueado  
- Carrito de compras vacío  

---

### Pasos para reproducir:
1. Entrar en la web: https://www.saucedemo.com/  
2. Iniciar sesión con un usuario válido  
3. Acceder al carrito de compras  
4. Pulsar el botón "Checkout"  

---

### Resultado esperado:
El sistema no debería permitir continuar al checkout si el carrito está vacío.  
Debe mostrar un mensaje indicando que no hay productos en el carrito o redirigir al usuario al catálogo/carrito.

---

### Resultado actual:
El sistema permite continuar al proceso de checkout aun cuando el carrito está vacío  

---

### Entorno:
- Navegador: Chrome  
- URL: https://www.saucedemo.com/  

---

### Notas:
No existe validación que impida el acceso al checkout cuando el carrito no contiene productos, lo que rompe la lógica del flujo de compra.
