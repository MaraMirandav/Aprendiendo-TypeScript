# Template Union Types

- Permiten crear tipos basados en patrones de texto.
- Útiles para validar formatos como UUIDs o colores hexadecimales.

## Ejemplo de Template Union Types con Héroes

- Creamos un tipo HeroId para poder asignarlo en el type Hero en el id, siguiendo la plantilla que se ha creado

```ts
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
```

- Creamos un tipo Hero con id como UUID

```ts
type Hero = {
  readonly id?: HeroId; // Ahora es de tipo HeroId
  name: string;
  age: number;
  isActive?: boolean;
};
```

- Función que crea un héroe con UUID y lo activa

```ts
function createHeroes(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(), // genera un UUID único
    name,
    age,
    isActive: true
  };
}
```

- Creamos un objeto:

```ts
const thor2 = createHeroes({ name: 'Thor', age: 1500 });
```

- Si 'id' existe, se usa; si no, se muestra 'No tiene id'

```ts
thor2.id ?? 'No tiene id';
```

### ¿Qué hace crypto.randomUUID()?

- Genera un UUID (Universally Unique Identifier)
- Es una cadena única como: `'3b12f1df-5232-4e6b-8c15-3c2f3f7a9b1e'`.
- Ideal para asignar identificadores únicos a objetos, como usuarios, héroes, etc.
- Es nativo del navegador web

## Ejemplo de Template Union Types para colores hexadecimales

- Algunas veces, cuando trabajamos con colores, no siempre tenemos claro si se han declarado con almohadilla o no.
- Para ello, usamos un template Union type, de manera que se cree una plantilla para trabajar los colores sin confusión.

### Tipo que obliga a que el color comience con '#'

```ts
type HexadecimalColor = `#${string}`;

// const color: HexadecimalColor = '0033ff'; Error: Se queja porque no cumple con la plantilla, le falta la almohadilla
const color: HexadecimalColor = '#0033ff'; // Correcto
```
