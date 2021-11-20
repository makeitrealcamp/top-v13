# ECMAScript

Es el estándar en el que esta basado JavaScript. Su release más grande fue ES6 (ES2015).

No todas las nuevas funcionalidades de JS están disponibles para todos los navegadores, porque todos utilizan un motor de JS diferente.
[ReplaceAll](https://v8.dev/features/string-replaceall)

Motor: Se encargan de convertir código de alto nivel (JavaScript, Python, C) a código de bajo nivel (Machine Code, Bytecode).

- V8 Engine (Google Chrome), el cual también es motor de Node.js
- Spider Monkey (Mozilla Firefox).
- Chakra (Microsoft Edge).
- JavaScriptCore (Apple Safari).

### ¿Cómo hago para que mi código utilice las últimas características y funcione independiente del navegador?

[BabelJS](https://babeljs.io/) es el compilador que nos permitirá hacerlo

## ES6 Caractéristicas

![tabla compatibilidad de es6](imgs/ES6_SUPPORT.png)

Auque no es la última actualización del EcmaScript, se reconoce como su release más grande. Entre sus nuevas características están:

### 1. Nuevas formas de definir variables: let, const

```javascript
let name = 'Pedro';
name = 'Pablo';
console.log(name);
```

### 2. Función flecha

```javascript
const duplicate = n => n * 2;
```

### 3. Plantillas literales

```javascript
const x = 3;
const y = 4;
const mensaje = `x es ${x} y y es #{y}`;
```

### 4. Parámetros por defecto en una función

```javascript
const incrementar = (n, delta = 1) => n + delta;

incrementar(1, 2);
incrementar(3);
```

### 5. Destructuración

```javascript
const { a, b } = { a: 1, b: 2 };
a;

const firstPosition = [9, 8, 7];
console.log(firstPosition[0]);
const [destructured] = firstPosition;
console.log(destructured);
```

### 6. Tres puntos (Spread Operator)

```javascript
const myMethod = ([first, ...rest]) => first.toUpperCase() + rest.join('');
```
