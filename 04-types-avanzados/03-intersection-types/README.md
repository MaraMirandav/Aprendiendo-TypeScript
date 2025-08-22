# Intersection Types

- El tipo resultante debe cumplir con todas las propiedades de los tipos combinados.
- Aunque puede aplicarse a cualquier tipo, su uso más común es con objetos.
- Funciona como un **AND lógico** entre tipos.
- Se usa el operador `&` para definirlos.
- Si se intersectan tipos incompatibles (por ejemplo, string & number), el resultado será never.

## Definición de tipos base

- UUID como template literal y la escala de poder del héroe

```ts
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent';
```

- Tipo con información básica del héroe

```ts
type HeroBasicInfo = {
  name: string;
  age: number;
};
```

- Tipo con propiedades adicionales del héroe

```ts
type HeroProperties = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};
```

## Intersection de tipos

- Combinamos HeroBasicInfo y HeroProperties en un solo tipo

```ts
type Hero = HeroBasicInfo & HeroProperties;
```

### Esto significa que cualquier objeto de tipo Hero debe tener:**

- **Obligatoriamente:** name y age (de `HeroBasicInfo`)
- **Opcionalmente:** id, isActive y powerScale (de `HeroProperties`)

- Función que crea un héroe desde HeroBasicInfo

```ts
function createHeroes(input: HeroBasicInfo): Hero {
  const { name, age } = input; // Extraemos las propiedades básicas del hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  };
}
```

- Creamos un héroe con intersección de tipos

```ts
const thor = createHeroes({ name: 'Thor', age: 1500 });
```
