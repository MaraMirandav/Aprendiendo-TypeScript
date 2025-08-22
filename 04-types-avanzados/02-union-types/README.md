# Union Types

- Permiten que una variable o propiedad tenga uno entre varios tipos posibles.
- Muy útiles cuando un valor puede tener más de una forma válida.
- Se usa el operador `|` para definirlos.
- Funciona como un **OR lógico**.

Esta variable puede ser un number o un string

```ts
let a: number | string;
a = 2; //funciona
a = 'dos'; // también funciona
// a = true; Error: Se queja, porque no es ni number ni string
```

Esta variable puede ser un string o el número 2 directamente

```ts
let b: string | 2;
// b = 3; Error: Se queja, ya que solo puede ser un string o el número 2
```

## Tipos personalizados con Union Types

- UUID como template literal

```ts
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
```

- Escala de poder del héroe usando Union Types

```ts
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent';
```

- Variable que puede ser booleana o numérica

```ts
const enableAnimationDuration: boolean | number = true; // también puede ser 200
```

- Aplicamos los tipos personalizados en Hero

```ts
type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale; //ahora es de tipo HeroPowerScale
};
```

- Función que crea un héroe:

```ts
function createHeroes(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  };
}
```

- Creamos un héroe y le asignamos una escala de poder válida

```ts
const thor = createHeroes({ name: 'Thor', age: 1500 });
thor.powerScale = 'multiversal'; // Correcto
// thor3.powerScale = 'muy fuerte'; Error: Se queja, porque no es asignable al tipo HeroPowerScale
```
