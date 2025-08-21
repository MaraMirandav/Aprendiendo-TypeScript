# Type from value y typeof

- typeof en TypeScript permite obtener el tipo de una variable o constante.
- Es útil para crear tipos automáticamente basados en valores ya definidos.
- También permite extraer el tipo de objetos, funciones, arrays, etc.
- Así evitamos escribir manualmente la estructura del tipo.

## Creamos una constante con información de dirección

```ts
const address = {
  planet: 'Earth',
  city: 'Madrid'
};
```

## Creamos un tipo 'Address' a partir de la constante 'address' usando typeof

Esto significa que 'Address' tendrá exactamente las mismas propiedades que 'address'

```ts
type Address = typeof address;
```

Esta constante es de tipo 'Address', que fue creada con typeof

```ts
const addressTwitch: Address = {
  planet: 'Mars',
  city: 'Twitch'
};
```

- Si modificamos la constante 'address' (por ejemplo, agregamos una propiedad), el tipo 'Address' se actualizará automáticamente.
- Esto ayuda a mantener el código sincronizado y evita errores por duplicación.
