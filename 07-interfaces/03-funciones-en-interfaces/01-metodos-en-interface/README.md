# Funciones en Interfaces

- Las interfaces pueden incluir funciones como parte de su contrato.
- Hay dos formas de definirlas:
  - Como propiedades con funciones anónimas.
  - Como métodos con sintaxis de función.

## Interface base de `Producto`

Esta interface representa un producto genérico con sus propiedades básicas

```ts
interface Producto {
  id: number
  nombre: string
  precio: number
  quantity: number
}
```

## Forma 1: Funciones como propiedades

Esta forma es útil cuando se asignan funciones como valores (por ejemplo, callbacks)

```ts
interface CarritoOptions {
  add: (product: Producto) => void, // Función que recibe un producto y no retorna nada
  remove: (id: number) => void, // Función que recibe un id y no retorna nada
  clear: () => void // Función que no recibe nada y limpia el carrito
}
```

## Forma 2: Funciones como métodos

Esta forma es más común cuando se implementa la interfaz en una clase

```ts
interface CarritoOptions2 {
  add(product: Producto): void, // Método que agrega un producto al carrito
  remove(id: number): void, // Método que elimina un producto por id
  clear(): void // Método que limpia el carrito
}
```

## Ambas formas son válidas

- La forma 2 es más común en clases.
- La forma 1 es útil cuando se trabaja con funciones como valores.
