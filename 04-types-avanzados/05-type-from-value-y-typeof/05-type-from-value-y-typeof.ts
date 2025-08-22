// -----------------------------------------------------------------------------
// 5) Type from value y typeof
// -----------------------------------------------------------------------------

// Creamos una constante con información de dirección
const address = {
  planet: 'Earth',
  city: 'Madrid'
};

// Creamos un tipo 'Address' a partir de la constante 'address' usando typeof
type Address = typeof address;

// Esta constante es de tipo 'Address', que fue creada con typeof
const addressTwitch: Address = {
  planet: 'Mars',
  city: 'Twitch'
};
