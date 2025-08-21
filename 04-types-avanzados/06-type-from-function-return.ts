// -----------------------------------------------------------------------------
// 6) Type from function return
// -----------------------------------------------------------------------------

// Creamos una función que devuelve un objeto con dirección
function createAddress() {
  return {
    planet: 'Tierra',
    city: 'Barcelona'
  };
}

// Usamos 'ReturnType' para obtener el tipo que devuelve la función 'createAddress'
type Address2 = ReturnType<typeof createAddress>;
