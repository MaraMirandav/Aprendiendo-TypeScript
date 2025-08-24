// -----------------------------------------------------------------------------
// 6) Narrowing en TypeScript
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Narrowing con tipos primitivos (string | number)
// -----------------------------------------------------------------------------

// Ejemplo incorrecto: acceso directo sin verificar el tipo
function mostrarLongitud(objeto: number | string) {
  //return objeto.length //// Error: `length` no existe en `number`
}

// Ejemplo correcto usando narrowing con typeof
function mostrarLongitud2(objeto: number | string) {
  if(typeof objeto === 'string') { // Esto es narrowing: Aseguramos tener el tipo correcto
    return objeto.length
  }
  return objeto.toString().length // Convertimos number a string para obtener su longitud
}

// -----------------------------------------------------------------------------
// Narrowing con tipos compuestos (interfaces y discriminantes)
// -----------------------------------------------------------------------------
// Interfaces con propiedades exclusivas

//Interface Mario
interface Mario {
  company: 'Nintendo',
  nombre: string,
  saltar: () => void
}

//Interface Sonic
interface Sonic {
  company: 'Sega',
  nombre: string,
  correr: () => void
}

// Unión de tipos: el personaje puede ser Mario o Sonic
type Personaje = Mario | Sonic

// Ejemplo incorrecto: acceso directo sin verificar el tipo
function jugar(personaje: Personaje) {
  //console.log(personaje.correr()) -> Error: no se puede garantizar que el método exista en el tipo personaje: Sonic no puede saltar y Mario no puede correr
}
// Ejemplo correcto usando discriminante literal
function jugar2(personaje: Personaje) {
  if(personaje.company === 'Nintendo') {
    personaje.saltar() //Es Mario, ya que este pertenece a Nintendo
    return
  }
  personaje.correr() //Es Sonic
}