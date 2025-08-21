// -----------------------------------------------------------------------------
// 7) Arrays
// -----------------------------------------------------------------------------

// Array vacío sin tipo: TypeScript lo infiere como never[]
const languagess = []; // Type never[]
// languagess.push('JavaScript'); Error: 'JavaScript' no es de tipo never, es un string

// Forma correcta: tipar el array como string[]
const languages: string[] = [];
languages.push('JavaScript');
// languages.push(true); // Error: 'true' no es de tipo string


// También se puede usar sintaxis genérica: Array<string>
const languages2: Array<string> = [];
languages2.push('TypeScript');

// -----------------------------------------------------------------------------
// Error común: mezclar arrays de tipos incompatibles
// -----------------------------------------------------------------------------
const languages3: string[] | number[] = []; // No se pueden mezclar, esto indica que los elementos o son de tipo string o son de tipo number

// Forma correcta: usar unión dentro del array, usando los paréntesis
const languages4: (string | number)[] = [];
languages4.push('Python');
languages4.push('Java');
languages4.push(4);
// languages4.push(true); // Error: no es string ni number

// -----------------------------------------------------------------------------
// Arrays con tipos personalizados
// -----------------------------------------------------------------------------

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent';

type HeroBasicInfo = {
  id?: number,
  name: string;
  age: number;
};

//Array de héroes usando el tipo HeroBasicInfo
const herosWithBasicInfo: HeroBasicInfo[] = [];
herosWithBasicInfo.push({ name: 'Thor', age: 1500 });
herosWithBasicInfo.push({ name: 'Iron Man', age: 45 });
