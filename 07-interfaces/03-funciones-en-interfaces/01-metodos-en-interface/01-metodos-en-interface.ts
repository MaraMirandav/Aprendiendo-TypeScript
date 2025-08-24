// -----------------------------------------------------------------------------
// 3) Funciones en Interfaces
// -----------------------------------------------------------------------------

//Interface base de producto
// Esta interface representa un producto genérico con sus propiedades básicas
interface Producto {
  id: number
  nombre: string
  precio: number
  quantity: number
}

//Forma 1: funciones como propiedades
// Esta forma es útil cuando se asignan funciones como valores (por ejemplo, callbacks)
interface CarritoOptions {
  add: (product: Producto) => void, // Función que recibe un producto y no retorna nada
  remove: (id: number) => void, // Función que recibe un id y no retorna nada
  clear: () => void // Función que no recibe nada y limpia el carrito
}

//Forma 2:funciones como métodos
  // Esta forma es más común cuando se implementa la interfaz en una clase
interface CarritoOptions2 {
  add(product: Producto): void, // Método que agrega un producto al carrito
  remove(id: number): void, // Método que elimina un producto por id
  clear(): void // Método que limpia el carrito
}
