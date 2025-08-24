// -----------------------------------------------------------------------------
// 2) Herencia entre interfaces y uso de union types
// -----------------------------------------------------------------------------

//Interface base de producto
interface Producto {
  id: number
  nombre: string
  precio: number
  quantity: number
}

// Interface especializada que extiende Producto: Herencia
interface Zapatilla extends Producto {
  talla: number
}

// Interface CarritoDeCompras que contiene el precio total y un array de productos
interface CarritoDeCompras {
  totalPrice: number
  productos: (Producto | Zapatilla)[]
  //Si acá coloco solo Zapatilla, en la instancia se requerirá la propiedad talla
  //Usando union types, indicamos que pueden ser productos o zapatillas.
}

//Instancia de carrito de compras, con un producto en el array
const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      quantity: 1,
      talla: 39
    }
  ]
}
