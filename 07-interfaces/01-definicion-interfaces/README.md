# Definición básica de Interfaces vs Types

- En TypeScript, tanto `type` como `interface` se usan para definir la forma de los datos.
- Ambos permiten describir objetos, pero tienen diferencias clave:
- `type`
  - Más flexible.
  - Permite definir tipos primitivos, literales, tuplas, templates, funciones, etc.
  - No se puede fusionar (declaración duplicada lanza error).
  - Ideal para estructuras complejas o combinaciones.

- `interface`:
  - Pensado para describir la forma de objetos.
  - Se puede extender (`extends`) y fusionar (declaración múltiple).
  - Ideal para clases, objetos y estructuras que pueden crecer.

## Ejemplo usando `type`

```ts
type Heroe = {
  id: string
  name: string
  age: number
}
```

### Creamos una instancia de Heroe usando el tipo definido

- Este tipo es útil si queremos combinarlo con otros tipos, usarlo en templates o unirlo con literales.

```ts
const hero: Heroe = {
  id: '1',
  name: 'Spiderman',
  age: 30
}
```

## Ejemplo usando `interface`

```ts
interface Heroes {
  id: string
  name: string
  age: number
  saludar:() => void
}
```

### Creamos una instancia que cumple con la interfaz Heroes

- Las interfaces son ideales para definir contratos que deben cumplir los objetos.
- Podemos crear múltiples objetos que sigan esta estructura.
- También se pueden extender o fusionar con otras interfaces.

```ts
const heroe: Heroes = {
  id: '1',
  name: 'Spiderman',
  age: 30,
  saludar: () => {
    console.log('Hola');
  }
}
```

## Buenas prácticas

- Usa `interface` cuando trabajes con objetos que podrían crecer o extenderse.
- Usa `type` cuando necesites definir:
  - Tipos primitivos
  - Tuplas
  - Literales
  - Templates (`${number}-${string}`)
  - Combinaciones con `union` o `intersection`
- Ambos son compatibles y pueden coexistir en un proyecto.
- La elección depende del contexto y del tipo de estructura que estés modelando.
