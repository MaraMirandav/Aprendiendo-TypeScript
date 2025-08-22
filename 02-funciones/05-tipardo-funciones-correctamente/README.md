# Cómo tipar funciones correctamente, mediante ejemplo de Callbacks

## ¿Por qué es incorrecto usar 'Function' como tipado?

- `'Function'` es demasiado general, es como usar `'any'`. **Se debe evitar su uso.**
- TypeScript no sabe qué parámetros espera ni qué devuelve.
- No detecta errores si la función no cumple con lo que necesitamos.

## Forma INCORRECTA de tipar una función como parámetro

- Ejecuta la función recibida, pasándole el string 'Miguel'

```ts
const sayHiFromFunction = (fn: Function) => {
  return fn('Miguel');
};
```

- Llamamos a sayHiFromFunction con una función anónima que espera un string

```ts
sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`); // Hola Miguel
});
```

- También acepta funciones que no tienen nada que ver con el tipo esperado

```ts
sayHiFromFunction(() => {
  return Math.random(); // Esto funciona, pero no debería
});
```

## Forma CORRECTA: tipar la función con su firma exacta

- `'fn'` debe ser una función que reciba un string y no retorne nada (`void`)

```ts
const sayHelloFromFunction = (fn: (name: string) => void) => {
  return fn('Miguel');
};
```

- Creamos una función que cumple con la estructura (firma)

```ts
const sayHello = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHelloFromFunction(sayHello); // Hola Miguel
```

## Ventajas de tipar correctamente

- TypeScript valida que la función tenga los parámetros correctos.
- Evita errores en tiempo de compilación.
- Hace el código más claro y seguro.

## IMPORTANTE

- Usamos 'void' cuando la función no retorna nada.
- Si retorna algo, indica el tipo: `(name: string) => string`, por ejemplo.
