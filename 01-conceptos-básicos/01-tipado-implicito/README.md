# Variables con tipado implícito

- TypeScript **infiere** que 'a' es de tipo string

```ts
  let a = 'Hola'; //string
  console.log(typeof a); // Resultado: string
```

- No se puede asignar un número a una variable que fue inferida como string

```ts
  a = 2; // ❌ Error
```

## Ejemplo

TypeScript infiere que b, c y d son de **tipo number**

```ts
  const b = 1;
  const c = 2;
  const d = b + c; //d también será de tipo number
```
