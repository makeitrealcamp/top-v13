import { Operation } from "./operations.js";

// Cuando hacemos un export de las funciones, exportamos dichas funciones destructurandolas
//import { sum, substract } from "./operations.js";

// Cuando exportamos la clase, se debe instanciar , creando el objeto op
const op = new Operation();

/**
 * Se llama al la operación desde el objeto, también podríamos hacerle un destructuring y ejecutarlas directamente
 * const { sum, substract } = op
 * op.sum(...)
 * op.substract(...)
 */

console.log(op.sum(2, 4));
console.log(op.substract(2, 4));
