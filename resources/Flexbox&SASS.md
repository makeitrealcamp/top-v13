# Flexbox

Es una forma de distribuir y alinear los elementos de un contenedor. Cuando le añadimos la propiedad display: flex, se la debemos de añadir al padre, para que sus hijos se distribuyan de la manera que nosotros deseemos

[Guía](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# SASS

Es un pre-procesador de CSS. Sabemos que CSS no es un lenguaje de programación pero con SASS podremos hacer que nuestro archivo de estilos pueda tener funciones, ciclos, variables, archivos en partes.

[https://sass-lang.com/guide](https://sass-lang.com/guide)

Pasos:

## 1. Añadir la librería

`npm install sass --save`

## 2. Añadir el script

`"compile:sass": "sass scss/style.scss css/style.css"`

## 3. Para que escuche nuestros cambios

`"scss": "sass --watch scss -o css"`

Instalar [live server]https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
