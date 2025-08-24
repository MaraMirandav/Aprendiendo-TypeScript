// -----------------------------------------------------------------------------
// 7) Type Guards
// -----------------------------------------------------------------------------

//Interface Mario
interface Mario {
  nombre: string;
  saltar: () => void;
}

//Interface Sonic
interface Sonic {
  nombre: string;
  correr: () => void;
}

// Unión de tipos: el personaje puede ser Mario o Sonic
type Personaje = Mario | Sonic;

// Type Guard para comprobar si el personaje es Sonic
//Determinamos si el personaje es sonic (typeGuard)
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

// Uso del Type Guard
function jugar(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr(); //TypeScript sabe que es Sonic
  }else {
    personaje.saltar(); //TypeScript sabe que es Mario
  }
}
