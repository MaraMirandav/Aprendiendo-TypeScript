# Inferencia de tipos en funciones anónimas según el contexto

- TypeScript analiza el tipo de dato que se está recorriendo (`string[]`)
- Por eso sabe que cada elemento (`'avenger'`) es un string
- Esto permite que se sugieran métodos como `.toLocaleUpperCase()`, `.length`, etc.
- No es necesario tipar manualmente `'avenger'`, TypeScript **lo deduce automáticamente**
- También ocurre con otros métodos que reciben funciones, como map

```ts
const avengers = ['Spidey', 'Hulk', 'Avengers'];

avengers.forEach(avenger => {
  // TypeScript infiere que 'avenger' es un array de tipo string
  console.log(avenger.toLocaleUpperCase()); // SPIDEY, HULK, AVENGERS
});
```
