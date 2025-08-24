# Tipo `never` en condicionales

- El tipo `never` representa valores que **nunca deberían ocurrir**.
- Se usa en funciones que lanzan errores o en ramas de código que no deberían ejecutarse.
- TypeScript lo asigna automáticamente cuando el tipo ha sido completamente reducido.

## Ejemplo: condicional con `string | number`

```ts
function fn(x: string | number) {
  if (typeof x === 'string') {
    x.toUpperCase(); // x es string
  } else if (typeof x === 'number') {
    x.toFixed(2); //x es number
  } else {
    throw new Error('Tipo inesperado');//Tipo `never`: esta rama nunca debería ejecutarse
  }
}
```

## Buenas prácticas

- Usa `never` para detectar errores lógicos en condicionales.
- Útil en `switch` o `if` cuando se manejan todos los casos posibles.
- Si aparece `never`, significa que estás accediendo a una rama que TypeScript considera imposible.
