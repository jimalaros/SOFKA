API REST en la cuál encontrarás funciones como:

* Observar todos los usuarios registrados.
* Crear un nuevo usuario.
* Iniciar sesión con los usuarios nuevos.
* Ver todas los preguntas disponibles y sus bonificaciones.
* Responder todas las preguntas.

# Comienzo 🚀

## Instalación 🔧

_Estas instrucciones te permitirán correr el proyecto y realizar las pruebas correspondientes._

1. Descarga el repositorio en este [link](https://github.com/jimalaros/SOFKA) e instala los packages como se muestra a continuación.

2. Al abrir este proyecto, ejecuta en consola el siguiente comando:

```
cd SOFKA-master
```

3. Luego instala los paquetes para que la API funcione correctamente, ejecutando en consola el siguiente comando:

```
npm install
```

4. Antes de ejecutar la API, tendrás que ejecutar el siguiente comando en otra consola:

```
mongod
```

_Importante: asegurate de tener correctamente instalado el microservicio mongodb (Que es la base de datos utilizada para almacenar las preguntas y las respuestas), el cuál por defecto estará corriendo el puerto 27017, la base de datos que generé tiene como nombre "segundoproyecto"_

_Lo anterior es para que la base de datos se ejecute corectamente_

8. Después de tener la base de datos corriendo, podrás ejecutar la API, usando el siguiente comando:

```
npm start
```

9. Dirigirse a la documentación de Swagger en el siguiente [link](http://localhost:5000/api-docs/)

### Ruta de USUARIOS

_Para crear un usuario tendrás que llenar todos los datos de este esquema en el body correspondiente, acá un pequeño ejemplo:_

```
{
    "nombre": "Jaao",
    "apellido": "A",
    "correo": "j@gmail.com",
    "telefono": 321850,
    "contraseña": "2222"
}
```

_En la ruta Login que encontrarás debajo de la ruta de registro, llenas el body y obtienes un token, ese token tendrás que usarlo en la parte superior de swagger, donde dice "Authorize", con ingresar el token crearás el esqueleto del historial.

10. Cada ronda tendrá 5 preguntas, para verlas tendrás que ejecutar la operación get que encontrarás en cada ronda, para responder las preguntas tendrás que llenar el body que encontrarás en la operación post de cada ronda.

11. Para operar el archivo de python adjunto en este repositorio, te registras haciendo uso de la opción 1 del menú, si quieres ver el o los usuarios registrados, tendrás la opción 2, es obligatorio antes de responder o ver las preguntas crearlas, para esto solo tienes que correr la opción 4, para responder, de la opción 6 en adelante.


|       correo               |       Nombre      |
|----------------------------|-------------------|
| jimmy.arango.ossa@mail.com |       Jimmy Arango|

## Construido con 🛠️

* NodeJS
* Express
* Swagger
* JWT
* Python
* JavaScript

## Autores ✒️

* **Jimmy Alexander Arango Ossa** - *Link* - [jimalaros](https://github.com/jimalaros/SOFKA)
