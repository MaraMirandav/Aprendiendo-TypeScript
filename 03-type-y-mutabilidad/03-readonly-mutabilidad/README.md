# Mutabilidad en objetos y cómo evitarla usando readonly y Object.freeze

- Por defecto, los objetos en JavaScript son mutables: **sus propiedades pueden cambiar**.
- En TypeScript, podemos usar `readonly` para evitar modificaciones durante el desarrollo, pero esto **no impide que el objeto sea modificado en tiempo de ejecución** (JavaScript).
- Para hacer un objeto realmente inmutable, usamos `Object.freeze()`.

```ts
type Hero = {
  id?: number; // propiedad opcional
  name: string;
  age: number;
  isActive?: boolean;
};
```

## Función que retorna un objeto con isActive en true

```ts
function createHeroes(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age, isActive: true };
}
```

## Creamos un objeto y lo congelamos para evitar modificaciones

- Thor es ahora un `readonly(Hero)`

```ts
const thor = Object.freeze(createHeroes({ name: 'Thor', age: 1500 }));
// thor.id = 1234566887; // -> Error: el objeto está congelado, es un objeto inmutable
```

### ¿Qué significa esto?

- `readonly` en TypeScript impide modificar propiedades durante el desarrollo. Sin embargo, al compilar a JavaScript, **el objeto sigue siendo mutable**
- `Object.freeze()` congela el objeto para evitar cambios reales en tiempo de ejecución
- Es útil cuando queremos evitar cambios accidentales en producción
