# Narrowing en TypeScript

## ¿Qué es Narrowing?

- Es el proceso de reducir un tipo amplio (como una unión) a uno más específico.
- Se utiliza en condicionales para acceder a propiedades o métodos que solo existen en ciertos tipos.
- TypeScript realiza esta inferencia automáticamente cuando usamos operadores como `typeof`, `instanceof` o discriminantes de tipo.

## Narrowing con tipos primitivos (string | number)

### Ejemplo incorrecto: acceso directo sin verificar el tipo

```ts
function mostrarLongitud(objeto: number | string) {
  //return objeto.length //// Error: `length` no existe en `number`
}
```

### Ejemplo correcto usando narrowing con typeof

- La propiedad `length` es exclusiva de strings, arrays y algunos objetos.
- Al usar `typeof`, TypeScript reduce el tipo y permite acceder a métodos específicos.

```ts
function mostrarLongitud2(objeto: number | string) {
  if(typeof objeto === 'string') { // Esto es narrowing: Aseguramos tener el tipo correcto
    return objeto.length
  }
  return objeto.toString().length // Convertimos number a string para obtener su longitud
}
```

## Narrowing con tipos compuestos (interfaces y discriminantes)

### Interfaces con propiedades exclusivas

```ts
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
```

### Unión de tipos: el personaje puede ser Mario o Sonic

```ts
type Personaje = Mario | Sonic
```

### Ejemplo incorrecto: acceso directo sin verificar el tipo en interfaces

No se puede garantizar que el método exista en el tipo personaje: Sonic no puede saltar y Mario no puede correr

```ts
function jugar(personaje: Personaje) {
  //console.log(personaje.correr()) -> Error: no se puede garantizar que el método exista en el tipo personaje
}
```

### Ejemplo correcto usando discriminante literal

```ts
function jugar2(personaje: Personaje) {
  if(personaje.company === 'Nintendo') {
    personaje.saltar() //Es Mario, ya que este pertenece a Nintendo
    return
  }
  personaje.correr() //Es Sonic
}
```

## ¿Por qué no usamos `typeof` o `instanceof` aquí?

- Porque aun no hemos instanciado ningun objeto, solo estamos trabajando con interfaces.
- `typeof` solo funciona con tipos primitivos.
- `instanceof` requiere instancias de clases.
- Usamos propiedades discriminantes (como `company`) para guiar el narrowing.

## Buenas prácticas

- Usa `typeof` para tipos primitivos.
- Usa propiedades discriminantes para interfaces.
- Evita acceder a métodos sin verificar el tipo primero.
