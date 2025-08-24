# Type Guards

- Los Type Guards permiten refinar el tipo de una variable en tiempo de ejecución.
- Se implementan como funciones que devuelven una condición de tipo: `x is Tipo`.
- Son útiles cuando no podemos usar discriminantes como `company`, y queremos evitar errores de acceso a propiedades/métodos.

## Interfaces con propiedades exclusivas

```ts
//Interface Mario
interface Mario {
  nombre: string;
  saltar: () => void;
}

//Interface Sonic
interface Sonic {
  nombre: string;
  correr: () => void;
}
```

## Unión de tipos: el personaje puede ser Mario o Sonic

```ts
type Personaje = Mario | Sonic;
```

## Type Guard para comprobar si el personaje es Sonic

Determinamos si el personaje es sonic (typeGuard)

```ts
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}
```

## Uso del Type Guard

```ts
function jugar(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr(); //TypeScript sabe que es Sonic
  }else {
    personaje.saltar(); //TypeScript sabe que es Mario
  }
}
```

## Buenas prácticas

- Usa Type Guards cuando no puedas usar discriminantes simples.
- Evita usar Type Guards si el código se vuelve muy complejo o difícil de mantener.
- Úsalos solo cuando sea estrictamente necesario.
- Siempre valida que el acceso a propiedades/métodos esté justificado por el tipo.
