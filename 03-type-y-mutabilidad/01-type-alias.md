# Uso de Type Alias

- Un `"type alias"` permite definir un tipo con nombre, para reutilizarlo.
- Es útil para objetos, funciones, arrays, etc.
- Mejora la legibilidad y evita repetir estructuras.

## Objeto sin type explícito

```ts
let hero = {
  name: 'Thor',
  age: 1500
};
```

- TypeScript se quejará si intentamos asignar un tipo incorrecto:

```ts
hero.name = 12345; // -> Error: name debe ser string
```

- También se quejará si agregamos propiedades no definidas

```ts
hero.power = 100; // -> Error: 'power' no existe en el tipo
```

## Función que retorna un objeto con los mismos atributos, pero sin un type definido

```ts
function createHero(name: string, age: number) {
  return { name, age };
}

const thor = createHero('Thor', 1500); // No tiene tipo Hero
```

## Creamos un Type Alias para definir la estructura

```ts
type Hero = {
  name: string;
  age: number;
};
```

- Ahora sí, podemos tipar correctamente

```ts
let heroe: Hero = {
  name: 'Thor',
  age: 1500
};
```

## Creamos una función que retorna un objeto del tipo Hero

```ts
function createHeroes(name: string, age: number): Hero {
  return { name, age };
}

const thor2 = createHeroes('Thor', 1500); // Es de tipo Hero
```

## También podemos pasar un objeto completo como argumento

``` ts
function createHeroes2(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

const thor3 = createHeroes2({ name: 'Thor', age: 1500 });
```
