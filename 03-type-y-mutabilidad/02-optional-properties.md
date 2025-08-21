# Uso de optional properties (?) y readonly en Type Alias

- `Optional properties (?)` permiten que una propiedad no sea obligatoria.
- El operador `?` se usa para acceder de forma segura a propiedades opcionales.
- `Readonly` impide que una propiedad sea modificada después de asignada.
- Esto da flexibilidad al crear objetos y protege datos importantes.

```ts
type Hero = {
  readonly id?: number;   // propiedad opcional y de solo lectura
  name: string;
  age: number;
  isActive?: boolean;     // propiedad opcional
};
```

- Creamos un objeto sin las propiedades opcionales

```ts
let heroe: Hero = {
  name: 'Thor',
  age: 1500
};
```

- Función que retorna un objeto Heroe, activando la propiedad `isActive`

```ts
function createHeroes(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age, isActive: true };
}
```

- Creamos un nuevo héroe usando la función `createHeroes`

```ts
const thor = createHeroes({ name: 'Thor', age: 1500 });
console.log(thor.isActive); // -> true
```

## Uso del operador `?` para acceder a propiedades opcionales

Solo ejecuta toString si 'id' existe. Evita errores si la propiedad es undefined.

```ts
thor.id?.toString();
```
