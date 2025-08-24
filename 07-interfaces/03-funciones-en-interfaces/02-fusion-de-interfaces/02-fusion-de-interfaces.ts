// -----------------------------------------------------------------------------
// 4) Fusión de Interfaces
// -----------------------------------------------------------------------------

//Interface base de producto
interface Producto {
  id: number
  nombre: string
  precio: number
  quantity: number
}

//Definiendo la primera parte de la interfaz CarritoOps con 2 de 3 metodos
interface CarritoOps {
  add: (product: Producto) => void, // Función que recibe un producto y no retorna nada
  remove: (id: number) => void // Función que recibe un id y no retorna nada
}

//Definiendo la segunda parte de la interfaz CarritoOps con el 3er metodo restante: Se fusiona automáticamente con la anterior
interface CarritoOps {
  clear: () => void // Función que no recibe nada y limpia el carrito
}

//Instancia del objeto te tipo CarritoOps
//Al compilar a JavaScript, solo queda la instancia, todas las interfaces desaparecen
const ops: CarritoOps = {
  add: (product: Producto) => {},
  remove: (id: number) => {},
  clear: () => {}
}

// -----------------------------------------------------------------------------
//Si implementaramos esto en types, no funciona de la misma forma: No se pueden fusionar luego
// -----------------------------------------------------------------------------
type CarritoOpciones = {
  add: (product: Producto) => {},
  remove: (id: number) => {},
  clear: () => {}
}

// ¿Cuál usar o cuál se recomienda?
// Ejemplo donde se recomienda usar `type`
const RGB = [0, 0, 0];

// También en casos como este no se recomienda interfaces
type HeroId = `${number}-${string}`; // No se puede hacer con interface

//Sin embargo, esto si puede hacerse como una interfaz
interface Hero {
  id: HeroId
  name: string
  age: number
}
