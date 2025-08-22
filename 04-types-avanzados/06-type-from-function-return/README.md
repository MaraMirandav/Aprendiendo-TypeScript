# Type from function return

- ReturnType permite recuperar el tipo que devuelve una función.
- En este caso, 'Address2' tiene el mismo tipo que el objeto retornado por 'createAddress'.
- Es útil para crear tipos basados en lo que devuelve una función, sin tener que escribirlos manualmente.

## Creamos una función que devuelve un objeto con dirección

```ts
function createAddress() {
  return {
    planet: 'Tierra',
    city: 'Barcelona'
  };
}
```

## Usamos 'ReturnType' para obtener el tipo que devuelve la función 'createAddress'

El tipo 'Address2' será igual al tipo del objeto retornado por la función

```ts
type Address2 = ReturnType<typeof createAddress>;
```

- Si cambiamos el contenido que devuelve la función (por ejemplo, agregamos 'country'), el tipo 'Address2' se actualizará automáticamente.
- Esto es ideal para mantener consistencia entre funciones y tipos sin repetir estructuras.
