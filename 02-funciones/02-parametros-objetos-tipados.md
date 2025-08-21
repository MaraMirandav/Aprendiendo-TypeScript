# Tipado de objetos como parámetros

- Si no se tipa el objeto, se considera 'any'.
- En ese caso, TypeScript no detecta errores, pero al compilar a JavaScript puede fallar.

## Forma 1: Tipar directamente dentro de la firma de la función

```ts
function saludar({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`);
}

saludar({ name: 'Ikigai', age: 4 }); //'Hola Ikigai, tienes 4 años'
```

## Forma 2: Tipar el objeto como un parámetro único

```ts
function saludar2(persona: { name: string; age: number }) {
  const { name, age } = persona; // Desestructuración
  console.log(`Hola ${name}, tienes ${age} años`);
}

saludar2({ name: 'Ikigai', age: 4 }); ////'Hola Ikigai, tienes 4 años'
```
