# Pruebas automatizadas

Las pruebas automatizadas, o tests, nos ayudan a prevenir errores, especialmente cuando hacemos nuevos cambios sobre nuestro código, haciendo nuestras aplicaciones más mantenibles en el tiempo.

Nuestras pruebas unitarias deben ser: independietes, automatizable, repetible y predecible.

Una prueba unitaria aisla una parte del código y comprueba que este funcione a la perfección. Demostrando que la lógica esté en buen estado.

## Tipos de pruebas

El siguiente gráfico tomado de Kent C Dodds, nos ayuda entender los cuatro tipos de tests que podemos tener

![Testing trophy](imgs/trophy.jpeg)
Fuente: [https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests](https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests)

## Patrón AAA

### Arrange: Organizo e incializo datos de entrada

Delcaro variables que pueda necesitar antes de ejectutar el test, por ejemplo argumentos que reciba el método a probar

`const nombre = 'Ana'`

### Act: Actúo/Ejecuto

Ejecuto el método que deseo probar y se lo puedo asignar a una variable en caso de que mi método retorne algo.

`const saludo = saludar(nombre)`

### Assert: Confirmo/Compruebo

Compruebo que el método de pruebas se comportó tal y como era previsto

`expect(saludo).toBe('Hola Ana!')`

## Pruebas Unitarias: Jest

Jest es una librería de testing creada por Facebook y cada vez está ganando más popularidad por su facilidad de uso.

`npm install --save-dev jest`

Añadirlo a los scripts del package.json

`"test": "jest --coverage"`
