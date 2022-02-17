/**
 * Falsy - Truthy (Valores falsos o verdaderos)
 */

let number = 1;
console.log(number, typeof number);

number = "1";
console.log(number, typeof number);

number = [1, 2];
console.log(number, typeof number);

number = [];
console.log(number, typeof number);

if (number) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// undefined  -
