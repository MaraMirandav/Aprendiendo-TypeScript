# Fusión de Interfaces

- TypeScript permite fusionar interfaces si se definen con el mismo nombre.
- No es posible hacer esto con `type`, ya que se considera duplicado.
- No se deben repetir las funciones y métodos, ya que ahi lanzaría error de duplicado.
- Al dividir los métodos en declaraciones separadas, TypeScript los fusiona automáticamente.
- Esta técnica puede generar confusión si no se gestiona con cuidado.

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

## Definiendo la primera parte de la interfaz `CarritoOps` con 2 de 3 metodos

```ts
interface CarritoOps {
  add: (product: Producto) => void, // Función que recibe un producto y no retorna nada
  remove: (id: number) => void // Función que recibe un id y no retorna nada
}
```

## Definiendo la segunda parte de la interfaz `CarritoOps` con el 3er metodo restante

Se fusiona automáticamente con la anterior

```ts
interface CarritoOps {
  clear: () => void // Función que no recibe nada y limpia el carrito
}
```

## Instancia del objeto te tipo `CarritoOps`

Al compilar a JavaScript, solo queda la instancia, todas las interfaces desaparecen

```ts
const ops: CarritoOps = {
  add: (product: Producto) => {},
  remove: (id: number) => {},
  clear: () => {}
}
```

## Si implementaramos esto en types, no funciona de la misma forma: No se pueden fusionar

```ts
type CarritoOpciones = {
  add: (product: Producto) => {},
  remove: (id: number) => {},
  clear: () => {}
}
```

### Esto no se puede hacer con `type`

```ts
type CarritoOpciones = { add: () => void }
type CarritoOpciones = { clear: () => void } // Error: duplicado
```

## ¿Cuál usar o cuál se recomienda?

Depende de lo que se quiera hacer. Por ejemplo:

### Ejemplo donde se recomienda usar `type`

```ts
const RGB = [0, 0, 0];
```

### También en casos como este no se recomienda interfaces

```ts
type HeroId = `${number}-${string}`; // No se puede hacer con interface
```

### Sin embargo, esto si puede hacerse como una interfaz

```ts
interface Hero {
  id: HeroId
  name: string
  age: number
}
```

## Buenas prácticas

- Usa fusión de interfaces solo cuando sea necesario.
- Evita duplicar nombres con `type`.
- Usar `type` para:
  - Tipos primitivos
  - Tuplas
  - Literales
  - Templates
  - Sobrecarga de funciones
- Usar `interface` para:
  - Objetos
  - Métodos de clases
  - Fusión de declaraciones
- Recomendación:
  - Usa `type` cuando necesites flexibilidad.
  - Usa `interface` cuando trabajes con estructuras orientadas a objetos.
