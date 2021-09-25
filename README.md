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
    "direccion": "Calle 15 # 22-02",
    "contraseña": "2222"
}
```


|       correo               |       Nombre      |
|----------------------------|-------------------|
| jimmy.arango.ossa@mail.com |       Jimmy Arango|

## Construido con 🛠️

* NodeJS
* Express
* Swagger
* JWT

## Autores ✒️

* **Jimmy Alexander Arango Ossa** - *Link* - [jimalaros](https://github.com/jimalaros/SOFKA)
