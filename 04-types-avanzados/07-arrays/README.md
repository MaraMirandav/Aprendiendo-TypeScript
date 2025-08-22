# Arrays

- En TypeScript, si creas un array vacío sin especificar su tipo, se infiere como 'never[]'.
- Esto significa que no puedes insertar ningún valor, porque el array no tiene un tipo definido.

## Array vacío sin tipo: TypeScript lo infiere como `never[]`

- Para evitar este error, debemos tipar el array explícitamente, indicando a TypeScript qué tipo de elementos puede contener.

```ts
const languagess = []; // Type never[]
// languagess.push('JavaScript'); Error: 'JavaScript' no es de tipo never, es un string
```

### Forma correcta: tipar el array como `string[]`

```ts
const languages: string[] = [];
languages.push('JavaScript');
// languages.push(true); // Error: 'true' no es de tipo string
```

### También se puede usar sintaxis genérica: `Array<string>`

Ambas son equivalentes y válidas, depende del estilo que se prefiera.

```ts
const languages2: Array<string> = [];
languages2.push('TypeScript');
```

## Error común: mezclar arrays de tipos incompatibles

```ts
const languages3: string[] | number[] = []; // No se pueden mezclar, esto indica que los elementos o son de tipo string o son de tipo number
```

### Forma correcta: usar unión dentro del array, usando los paréntesis

```ts
const languages4: (string | number)[] = [];
languages4.push('Python');
languages4.push('Java');
languages4.push(4);
// languages4.push(true); // Error: no es string ni number
```

## Arrays con tipos personalizados

- Podemos usar tipos personalizados para definir la forma de los elementos dentro de un array.
- Esto es útil cuando trabajamos con estructuras más complejas, como con el ejemplo de hero.

```ts
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent';

type HeroBasicInfo = {
  id?: number,
  name: string;
  age: number;
};
```

- Creamos un array de héroes usando el tipo `HeroBasicInfo`: Esto nos permite almacenar múltiples héroes

```ts
const herosWithBasicInfo: HeroBasicInfo[] = [];
herosWithBasicInfo.push({ name: 'Thor', age: 1500 });
herosWithBasicInfo.push({ name: 'Iron Man', age: 45 });
```
