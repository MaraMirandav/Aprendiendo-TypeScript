# Buenas prácticas con tipos

- Es recomendable escribir los menos tipos posibles y dejar que TypeScript los infiera.
- Solo usar anotaciones cuando el tipo no pueda deducirse automáticamente.

```ts
  let cadenaDeTexto = 'hola';        // Infiere que es String
  cadenaDeTexto.toLocaleLowerCase(); // Se pueden usar métodos propios de string

  // cadenaDeTexto = 2 -> Error: no se puede asignar un número
  // cadenaDeTexto.propiedadInexistente() -> Error: el método no existe en string
```

## IMPORTANTE: TypeScript NO funciona en tiempo de ejecución

- TypeScript es un lenguaje de desarrollo, **no lo entiende el navegador**.
- Se **compila** a JavaScript antes de ejecutarse.
- **El tipado desaparece en tiempo de ejecución, por lo tanto:**
  1. No se puede confiar en TypeScript para validar tipos en tiempo real.
  2. Si necesitas validaciones, debes hacerlas manualmente en JavaScript.
