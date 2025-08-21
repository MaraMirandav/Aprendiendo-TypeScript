// -----------------------------------------------------------------------------
// 3) Intersection Types
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// a) Definición de tipos base
// -----------------------------------------------------------------------------

// UUID como template literal y Escala de poder
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent';

// Variable que puede ser booleana o numérica
const enableAnimationDuration: boolean | number = true;

// Tipo con información básica del héroe
type HeroBasicInfo = {
  name: string;
  age: number;
};

// Tipo con propiedades adicionales del héroe
type HeroProperties = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

// -----------------------------------------------------------------------------
// b) Intersection de tipos
// -----------------------------------------------------------------------------

// Combinamos HeroBasicInfo y HeroProperties en un solo tipo
type Hero = HeroBasicInfo & HeroProperties;

// -----------------------------------------------------------------------------
// c) Función que crea un héroe desde HeroBasicInfo
// -----------------------------------------------------------------------------

function createHeroes(input: HeroBasicInfo): Hero {
  const { name, age } = input; // Extraemos las propiedades básicas del hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  };
}

// -----------------------------------------------------------------------------
// d) Creamos un héroe con intersección de tipos
// -----------------------------------------------------------------------------

const thor = createHeroes({ name: 'Thor', age: 1500 });

// thor ahora tiene:
// - name: 'Thor'
// - age: 1500
// - id: UUID generado automáticamente
// - isActive: true