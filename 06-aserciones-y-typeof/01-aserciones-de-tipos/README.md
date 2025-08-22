# Aserciones de tipo en TypeScript

Las aserciones de tipo permiten indicarle al compilador que tratamos un valor como un tipo específico.

- No transforman el valor en tiempo de ejecución.
- Solo afectan cómo TypeScript interpreta el tipo en tiempo de desarrollo.
- Se usan cuando el desarrollador tiene más información que el compilador.

**Sintaxis:**

- `valor as Tipo` -> Forma recomendada
- `<Tipo>valor` -> Válida solo en archivos .ts

## Mal uso de aserción sin verificación previa

- Como TypeScript no funciona en tiempo de ejecución, debemos indicarle de qué trata el valor. En este caso, el método `getElementById` puede devolver: `HTMLElement | null`
  - Si no encuentra el elemento, devuelve `null`; si lo encuentra, devuelve un `HTMLElement`.
- Pero si sabemos que el elemento es un `<canvas>`, debemos indicarlo explícitamente como `HTMLCanvasElement`.

```ts
const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement;
// Aunque usamos "as HTMLCanvasElement", TypeScript no puede garantizar que sea realmente un <canvas>

//const canvas: HTMLCanvasElement = document.getElementById('canvas') -> No es correcto, porque puede ser null;

if(canvas2 != null) {
  const ctx = canvas2.getContext('2d') // Error: TypeScript no sabe si canvas2 es realmente un <canvas>
}
```

- Aunque usamos `as HTMLCanvasElement`, TypeScript no puede garantizar que el elemento sea un `<canvas>`.
- Si el elemento con id 'canvas' no existe o es otro tipo (como un `<div>`), el código puede fallar.

## Aserción incorrecta del tipo sin validación real

- En el ejemplo anterior, **`canvas2` ya no puede ser `null`**, por lo tanto la validación que hicimos pierde efecto.
- Lo mejor es hacer la aserción dentro de la validación.

```ts
const canvas3 = document.getElementById('canvas');

if(canvas3 != null) {
  const ctxx =  (canvas3 as HTMLCanvasElement).getContext('2d');
  // Aqui le decimos que si no es null, tratalo como un HTMLCanvasElement
  // Pero seguimos sin verificar si realmente lo es
}
```

- La validación con `!= null` evita errores por acceso a `null`, pero no garantiza que sea un `<canvas>`.
- Si el elemento es un `<span>` o `<div>`, el método getContext no existe y el código se rompe.

## Validación con `null` + `instanceof`: Funciona

- Imaginemos que la constante **`canvas4` finalmente devuelve un span**: Esto es un problema si le indicamos a TypeScript que lo trate como un HTMLCanvasElement sin verificar.
- **Solución: Usamos `instanceof` en la validación.** Si no es null y es una instancia de `HTMLCanvasElement`, TypeScript infiere el tipo automáticamente.

```ts
// Elemento es un <span>, no un <canvas>
const canvas4 = document.getElementById('span');

if(canvas4 != null && canvas4 instanceof HTMLCanvasElement) {
  const ctxx =  canvas4.getContext('2d'); //TypeScript infiere que canvas4 es un HTMLCanvasElement dentro del bloque
}
```

- Validamos que el elemento no sea null y que sea una instancia real de `HTMLCanvasElement`.
- Evitamos errores en tiempo de ejecución si el elemento no es un `<canvas>`.
- TypeScript reconoce el tipo exacto dentro del bloque (inferencia).

## Validación con solo `instanceof`: Opción correcta

- `instanceof` ya descarta automáticamente `null`, porque `null instanceof Tipo` siempre es false.
- Es más limpio y seguro que hacer `!= null && instanceof`.

```ts
const canva5 = document.getElementById('span');

if(canva5 instanceof HTMLCanvasElement) {
  const ctxx =  canva5.getContext('2d'); //JavaScript ejecuta la condición y TypeScript infiere el tipo
}
```

## typeof vs instanceof

- `typeof` -> para tipos primitivos (`string`, `number`, `boolean`, etc.)

```ts
const nombre = "María";
if (typeof nombre === "string") {
  console.log(nombre.toUpperCase());
}
```

- `instanceof` -> para instancias de clases o constructores (`Date`, `HTMLElement`, etc.)

```ts
const fecha = new Date();
if (fecha instanceof Date) {
  console.log(fecha.toISOString());
}
```

## Buenas prácticas

- Usar `instanceof` para validar elementos del DOM antes de aplicar métodos específicos.
- Evita usar `as` sin verificación previa, especialmente con elementos que pueden ser null o de tipo ambiguo.
- Las aserciones son útiles, pero no reemplazan la validación lógica.
- TypeScript confía cuando usasmos `as`, se debe usar con responsabilidad.
