# Test Cases Login negative - SauceDemo

## TC-05: Login con usuario bloqueado
**Precondiciones:**  
- El usuario está en la página de login  

**Pasos:**  
1. Introducir `locked_out_user` en el campo de usuario  
2. Introducir `secret_sauce` en el campo de contraseña  
3. Pulsar botón **Login**  

**Resultado esperado:**  
- Se deberia mostrar un mensaje indicando que el usuario está bloqueado y no puede iniciar sesión  

**Resultado obtenido:**  
- Se muestra correctamente el mensaje de usuario bloqueado  

**Estado:** ✅ PASS  

---

## TC-06: Login con campos vacíos
**Precondiciones:**  
- El usuario está en la página de login  

**Pasos:**  
1. Pulsar el botón **Login** sin ingresar usuario ni contraseña  

**Resultado esperado:**  
- Se deberia mostrar un mensaje indicando que los campos son obligatorios  

**Resultado obtenido:**  
- Se muestra correctamente el mensaje de error por campos vacíos  

**Estado:** ✅ PASS  

---

## TC-07: Login con contraseña incorrecta
**Precondiciones:**  
- El usuario está en la página de login  

**Pasos:**  
1. Introducir `standard_user` en el campo de usuario  
2. Introducir `wrong_password` en el campo de contraseña  
3. Pulsar botón **Login**  

**Resultado esperado:**  
- Se deberia mostrar un mensaje indicando que la contraseña es incorrecta 

**Resultado obtenido:**  
- Se muestra correctamente el mensaje de contraseña incorrecta  

**Estado:** ✅ PASS  
