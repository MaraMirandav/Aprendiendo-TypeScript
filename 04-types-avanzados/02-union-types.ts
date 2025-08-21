// -----------------------------------------------------------------------------
// 2) Union Types
// -----------------------------------------------------------------------------

// Esta variable puede ser un number o un string
let a: number | string;
a = 2; //funciona
a = 'dos'; // también funciona
// a = true; Error: Se queja, porque no es ni number ni string

// Esta variable puede ser un string o el número 2 directamente
let b: string | 2;
// b = 3; Error: Se queja, ya que solo puede ser un string o el número 2

// -----------------------------------------------------------------------------
// Tipos personalizados con Union Types
// -----------------------------------------------------------------------------

// UUID como template literal
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// Escala de poder del héroe usando Union Types
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent';

// Variable que puede ser booleana o numérica
const enableAnimationDuration: boolean | number = true; // también puede ser 200

type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale; //ahora es de tipo HeroPowerScale
};

// Función que crea un héroe:
function createHeroes(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  };
}

// Creamos un héroe y le asignamos una escala de poder válida
const thor = createHeroes({ name: 'Thor', age: 1500 });
thor.powerScale = 'multiversal'; // Correcto
// thor3.powerScale = 'muy fuerte'; Error: Se queja, porque no es asignable al tipo HeroPowerScale