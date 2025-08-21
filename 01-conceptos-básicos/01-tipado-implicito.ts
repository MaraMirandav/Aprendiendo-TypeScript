// -----------------------------------------------------------------------------
// 1) Variables con tipado implícito
// -----------------------------------------------------------------------------

let a = 'Hola'; // string
// a = 2; // No se puede asignar un número a una variable que fue inferida como string

console.log(typeof a); // Resultado: string

//TypeScript infiere que b, c y d son de tipo number
const b = 1;
const c = 2;
const d = b + c; //d también será de tipo number
