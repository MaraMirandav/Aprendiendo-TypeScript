// -----------------------------------------------------------------------------
// 1) Definición básica de Interfaces vs Types
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Ejemplo usando `type`
// -----------------------------------------------------------------------------
type Heroe = {
  id: string
  name: string
  age: number
}

// Creamos una instancia de Heroe usando el tipo definido
const hero: Heroe = {
  id: '1',
  name: 'Spiderman',
  age: 30
}

// -----------------------------------------------------------------------------
// Ejemplo usando `interface`
// -----------------------------------------------------------------------------
interface Heroes {
  id: string
  name: string
  age: number
  saludar:() => void
}

// Creamos una instancia que cumple con la interfaz Heroes
const heroe: Heroes = {
  id: '1',
  name: 'Spiderman',
  age: 30,
  saludar: () => {
    console.log('Hola');
  }
}