// -----------------------------------------------------------------------------
// 8) Tipo `never` en condicionales
// -----------------------------------------------------------------------------

// Ejemplo: condicional con `string | number`
function fn(x: string | number) {
  if (typeof x === 'string') {
    x.toUpperCase(); // x es string
  } else if (typeof x === 'number') {
    x.toFixed(2); //x es number
  } else {
    throw new Error('Tipo inesperado');//Tipo `never`: esta rama nunca debería ejecutarse
  }
}

