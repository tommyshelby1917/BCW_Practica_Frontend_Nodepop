# Keep Coding | Full Stack Web Developer
## Frontend

**Nodepop** es una aplicación creada puramente con **Vanilla Javascript** que nos permite acceder a una página de compra-venta de artículos de segunda mano. Para visualizar los anuncios que hay almacenados en la web, no es necesario registrarse. En cambio, si nos registramos, se nos permite crear y postear anuncios, que posteriormente, podemos controlar.
 
En esta ocasión, nos respaldaremos en un fake backend provisional llamado [Sparrest.js](https://github.com/kasappeal/sparrest.js), basado en [json-server](https://github.com/typicode/json-server) que nos permite hacer todo tipo de peticiones API.

## Como ejecutar Nodepop?
1. Clonamos este repositorio
2. Clonamos [Sparrest.js](https://github.com/kasappeal/sparrest.js)
3. Accedemos al repositorio de sparrest y ejecutamos `npm i` en consola para instalar las dependencias. Remplazamos el archivo bd.json de sparrest con el de la carpeta data de este repositorio.
4. Arrancamos el **sparrest.js** con `npm start`. Esto hará que el servidor arranque en el puerto **8000**
5. Nodepop YA funciona

## Mapa de nuestra aplicación
- /index.html: Homepage de nuestra aplicación con el listado de anuncios y filtro de busqueda
- /new.html: Creacion de un nuevo anuncio
- /register.html: Registro de usuario en la aplicación
- /login: Acceso a la aplicación con tu nombre y usuario
- /detail.html: Página de detalle de cada anuncio
