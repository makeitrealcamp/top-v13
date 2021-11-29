# Jest

## NodeJS

NO ES UN NUEVO LENGUAJE, Es una plataforma que nos permite ejecutar código JavaScript fuera del navegador. [Descárgalo aquí](https://nodejs.org/en/)

Casos de uso:

- Manipular archivos del sistema (crear, editar, eliminar, etc.).
- Crear aplicaciones para la línea de comandos.
- Crear aplicaciones móviles.
- Crear aplicaciones de escritorio.
- Crear aplicaciones Web.

`this` en el navegador hace referencia a `window` mientras que en Node.js this is undefined.

### Ejemplo manipulación de archivo

El paquete fs (file system) es el que nos va a permitir manipular archivos.

```javascript
const fs = require('fs');

fs.writeFile('hola.txt', 'Hola Mundo, fui generado usando Node!', err => {
  if (err) {
    return console.log(err);
  }

  console.log('El archivo fue creado correctamente');
});
```

### NPM y YARN

En Node.js a las librerías se les conoce como paquetes y existen manejadores de paquetes como NPM y Yarn.
Estas librerias quedan instaladas dentro de una carpeta llamada node_modules, que siempre debes incluir en el gitignore

npm (node package manager) es el gestor de dependencias/paquetes que obtienes por defecto cuando instalas Node.js.

Para instalar un paquete: `npm install nombreDelPaquete`

### Creando mi proyecto

```
npm init
```

## Eslint

[Guia de configuración](https://eslint.org/docs/user-guide/getting-started)

```
npm install eslint --save-dev
npx eslint --init
```
