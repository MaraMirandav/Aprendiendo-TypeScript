// -----------------------------------------------------------------------------
// 2) Uso de optional properties (?) y readonly en Type Alias
// -----------------------------------------------------------------------------

type Hero = {
  readonly id?: number;   // propiedad opcional y de solo lectura
  name: string;
  age: number;
  isActive?: boolean;     // propiedad opcional
};

// Creamos un objeto sin las propiedades opcionales
let heroe: Hero = {
  name: 'Thor',
  age: 1500
};

// Función que retorna un objeto Heroe, activando la propiedad isActive
function createHeroes(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age, isActive: true };
}

// Creamos un nuevo héroe usando la función
const thor = createHeroes({ name: 'Thor', age: 1500 });
console.log(thor.isActive); // -> true


// Uso del operador ? -> para acceder a propiedades opcionales
thor.id?.toString(); // Solo ejecuta toString si 'id' existe.


