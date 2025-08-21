// -----------------------------------------------------------------------------
// Tipo 'any'
// -----------------------------------------------------------------------------

let anyValue: any = 'Hola';
anyValue.toUpperCase(); // Funciona, pero TypeScript no valida nada

let obj: any = { x : 0};
obj.foo();                // No existe, pero no da error
obj();                    // Se ejecuta como si fuera una función
obj.bar = 100;            // Se le puede agregar cualquier propiedad
obj = 'hello';            // Se puede reasignar a cualquier tipo
const n: number = obj;    // No hay garantía de que sea un número


// -----------------------------------------------------------------------------
// Tipo 'unknown'
// -----------------------------------------------------------------------------

let valores: unknown = 'Hola';
// valores.aa; // No se puede acceder a propiedades sin validar el tipo

