# Tipado de parámetros

- Si no se tipa el parámetro, TypeScript lo infiere como `'any'`.
- Es recomendable indicar el tipo para evitar errores y mejorar la claridad.

```ts
function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar('Ikigai');  // Hola Ikigai
// saludar(2);      // Error: el argumento debe ser de tipo string
```
