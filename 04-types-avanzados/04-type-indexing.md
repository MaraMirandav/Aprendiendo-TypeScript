# Type Indexing

- Permite acceder a una propiedad específica de un tipo ya definido.
- Es como decir: “quiero solo esta parte del tipo”.
- Muy útil cuando ya tienes un tipo complejo y solo necesitas una parte.
- También te permite reutilizar tipos que ya tengas sin repetir estructuras.

## Tipo que define las propiedades de un hero, incluyendo su estado y dirección

```ts
type HeroProperties = {
  isActive: boolean,
  adress: {
    planet: string,
    city: string
  }
}
```

## Extraemos solo el tipo de 'adress' usando indexación

```ts
const adressHero: HeroProperties['adress'] = {
  planet: 'Earth',
  city: 'Madrid'
};
```

- Si intentas escribir solo una de las propiedades (por ejemplo, solo 'planet'), TypeScript se quejará.
- Esto garantiza que el objeto tenga la forma exacta que se espera.
