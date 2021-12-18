## Pasos para crear mi proyecto

1. Instalar Node
2. Creamos el proyecto `npx create-react-app my-app`
3. Sass:

- Instalo la dependencia: `npm install sass`
- Renombro la extensión del archivo de .css a .scss
- Donde estaba usando mi archivo .css renombrarlo a .scss

4. Eslint: YA ESTÁ INSTALADO: (Mirar el proyecto products-list-react como referencia)

- añadir el script al package.json:

```
"lint": "eslint -c .eslintrc.json --ext .js,.jsx ."
```

- crear el archivo .eslintrc.json y añadir config
- crear el archivo .eslintignore

5. Prettier: Instalar el paquete y crear el archivo .prettierrc

6. Instalar React router dom versión 6
   `npm install react-router-dom`
