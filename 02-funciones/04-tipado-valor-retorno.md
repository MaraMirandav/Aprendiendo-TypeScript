# Tipado del valor de retorno

- TypeScript puede inferir el tipo de retorno automáticamente.
- También se puede declarar explícitamente con `': tipo'`.

```ts
function saludar({ name, age }: { name: string; age: number }): number {
  console.log(`Hola ${name}, tienes ${age} años`);
  return age; // Retorna un número
}

let username: string;
// username = saludar4({ name: 'Ikigai', age: 4 }); // Error: number no es asignable a string
```
