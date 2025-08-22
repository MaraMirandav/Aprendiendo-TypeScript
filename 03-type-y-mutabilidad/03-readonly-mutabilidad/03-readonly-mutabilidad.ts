// -----------------------------------------------------------------------------
// 3) Mutabilidad en objetos y cómo evitarla usando readonly y Object.freeze
// -----------------------------------------------------------------------------

type Hero = {
  id?: number; // propiedad opcional
  name: string;
  age: number;
  isActive?: boolean;
};

// Función que retorna un objeto con isActive en true
function createHeroes(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age, isActive: true };
}

// Creamos un objeto y lo congelamos para evitar modificaciones
const thor = Object.freeze(createHeroes({ name: 'Thor', age: 1500 }));

// thor.id = 1234566887; // -> Error: el objeto está congelado, es un objeto inmutable
// //thor es ahora un readonly(Hero)
