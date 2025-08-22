// -----------------------------------------------------------------------------
// 1) Aserciones de tipo en TypeScript
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Mal uso de aserción sin verificación previa
// -----------------------------------------------------------------------------

const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement;
// Aunque usamos "as HTMLCanvasElement", TypeScript no puede garantizar que sea realmente un <canvas>

//const canvas: HTMLCanvasElement = document.getElementById('canvas') -> No es correcto, porque puede ser null;

if(canvas2 != null) {
  const ctx = canvas2.getContext('2d') // Error: TypeScript no sabe si canvas2 es realmente un <canvas>
}

// -----------------------------------------------------------------------------
// Aserción incorrecta del tipo sin validación real
// -----------------------------------------------------------------------------

const canvas3 = document.getElementById('canvas');

if(canvas3 != null) {
  const ctxx =  (canvas3 as HTMLCanvasElement).getContext('2d');
  // Aqui le decimos que si no es null, tratalo como un HTMLCanvasElement
  // Pero seguimos sin verificar si realmente lo es
}

// -----------------------------------------------------------------------------
// Validación con `null` + `instanceof`: Funciona
// -----------------------------------------------------------------------------

// Elemento es un <span>, no un <canvas>
const canvas4 = document.getElementById('span');

if(canvas4 != null && canvas4 instanceof HTMLCanvasElement) {
  const ctxx =  canvas4.getContext('2d'); //TypeScript infiere que canvas4 es un HTMLCanvasElement dentro del bloque
}

// -----------------------------------------------------------------------------
// Validación con solo `instanceof`: Opción correcta
// -----------------------------------------------------------------------------

const canva5 = document.getElementById('span');

if(canva5 instanceof HTMLCanvasElement) {
  const ctxx =  canva5.getContext('2d'); //JavaScript ejecuta la condición y TypeScript infiere el tipo
}

// -----------------------------------------------------------------------------
// typeof vs instanceof
// -----------------------------------------------------------------------------

// typeof -> para tipos primitivos (string, number, boolean, etc.)
const nombre = "María";
if (typeof nombre === "string") {
  console.log(nombre.toUpperCase());
}

// instanceof -> para instancias de clases o constructores (Date, HTMLElement, etc.)
const fecha = new Date();
if (fecha instanceof Date) {
  console.log(fecha.toISOString());
}
