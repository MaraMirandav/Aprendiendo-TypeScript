// -----------------------------------------------------------------------------
// 3) Buenas prácticas con tipos
// -----------------------------------------------------------------------------
// - Es recomendable escribir los menos tipos posibles y dejar que TypeScript los infiera.

let cadenaDeTexto = 'hola';        // Infiere que es String
cadenaDeTexto.toLocaleLowerCase(); // Se pueden usar métodos propios de string

// cadenaDeTexto = 2 -> Error: no se puede asignar un número
// cadenaDeTexto.propiedadInexistente() -> Error: el método no existe en string

