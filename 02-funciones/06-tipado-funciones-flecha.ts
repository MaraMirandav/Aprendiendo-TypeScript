// -----------------------------------------------------------------------------
// 6) Tipado de funciones flecha en TypeScript
// -----------------------------------------------------------------------------

// Forma 1: Tipar parámetros y retorno directamente en la función
const sumar = (a: number, b: number): number => {
  return a + b;
};

// Forma 2: Tipar la función completa como una variable
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};