# Herencia entre interfaces y uso de union types

- Las interfaces pueden extender otras interfaces, lo que permite reutilizar estructuras.
- Esto es útil para representar jerarquías o especializaciones.
- También podemos usar `union types` para permitir múltiples formas en una propiedad.

## Interface base de `Producto`

```ts
interface Producto {
  id: number
  nombre: string
  precio: number
  quantity: number
}
```

## Interface que extiende de `Producto`: Herencia

```ts
interface Zapatilla extends Producto {
  talla: number
}
```

## Interface `Carrito De Compras` que contiene el precio total y un array de productos

- Usando union types, indicamos que pueden ser productos o zapatillas.

```ts
interface CarritoDeCompras {
  totalPrice: number
  productos: (Producto | Zapatilla)[]
  //Si acá coloco solo Zapatilla, en la instancia se requerirá la propiedad talla
}
```

### Instancia de `Carrito De Compras`, con un producto en el array

```ts
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
```

## Buenas prácticas

- Usa `extends` para especializar interfaces.
- Usa `union types` para permitir múltiples formas en una propiedad.
- Las interfaces son ideales para estructuras que pueden crecer o especializarse.
- Los union types son útiles para modelar estructuras flexibles y dinámicas.
