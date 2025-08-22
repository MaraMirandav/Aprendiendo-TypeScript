# Tipado de funciones flecha en TypeScript

## Forma 1: Tipar parámetros y retorno directamente en la función

```ts
const sumar = (a: number, b: number): number => {
  return a + b;
};
```

## Forma 2: Tipar la función completa como una variable

```ts
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};
```

### Ambas formas son válidas

- La primera es más común y directa.
- La segunda es útil cuando quieres declarar el tipo antes de definir la función.
