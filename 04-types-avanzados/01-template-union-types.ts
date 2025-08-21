// -----------------------------------------------------------------------------
// 1) Template Union Types
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Ejemplo de Template Union Types con Héroes
// -----------------------------------------------------------------------------

// Creamos un tipo HeroId
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// Creamos un tipo Heroe con id como UUID
type Hero = {
  readonly id?: HeroId; // Ahora es de tipo HeroId
  name: string;
  age: number;
  isActive?: boolean;
};

// Función que crea un héroe con UUID y lo activa
function createHeroes(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(), // genera un UUID único: '3b12f1df-5232-4e6b-8c15-3c2f3f7a9b1e'.
    name,
    age,
    isActive: true
  };
}

// Creamos un objeto:
const thor2 = createHeroes({ name: 'Thor', age: 1500 });

// Si 'id' existe, se usa; si no, se muestra 'No tiene id'
thor2.id ?? 'No tiene id';

// -----------------------------------------------------------------------------
// Ejemplo de Template Union Types para colores hexadecimales
// -----------------------------------------------------------------------------

// Tipo que obliga a que el color comience con '#'
type HexadecimalColor = `#${string}`;

// const color: HexadecimalColor = '0033ff'; Error: Se queja porque no cumple con la plantilla, le falta la almohadilla
const color: HexadecimalColor = '#0033ff'; // Correcto
