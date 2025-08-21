// -----------------------------------------------------------------------------
// 1) Uso de Type Alias
// -----------------------------------------------------------------------------

  // Objeto sin type explícito:
let hero = {
  name: 'Thor',
  age: 1500
};

//hero.name = 12345; // -> Error: name debe ser string
//hero.power = 100; // -> Error: 'power' no existe en el tipo

// -----------------------------------------------------------------------------

// Función que retorna un objeto con los mismos atributos, pero sin un type definido
function createHero(name: string, age: number) {
  return { name, age };
}

const thor = createHero('Thor', 1500); // No tiene tipo Hero

// -----------------------------------------------------------------------------

// Creamos un Type Alias para definir la estructura:
type Hero = {
  name: string;
  age: number;
};

// Ahora sí, podemos tipar correctamente
let heroe: Hero = {
  name: 'Thor',
  age: 1500
};

// -----------------------------------------------------------------------------

// Creamos una función que retorna un objeto del tipo Hero:
function createHeroes(name: string, age: number): Hero {
  return { name, age };
}

const thor2 = createHeroes('Thor', 1500); // Es de tipo Hero

// -----------------------------------------------------------------------------

// También podemos pasar un objeto completo como argumento
function createHeroes2(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

const thor3 = createHeroes2({ name: 'Thor', age: 1500 });