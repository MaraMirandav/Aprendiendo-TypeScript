// -----------------------------------------------------------------------------
// 3) Desestructuración en TypeScript
// -----------------------------------------------------------------------------

// Ejemplo con objeto:
const persona = {
  nombre: 'Ikigai',
  edad: 4,
  ciudad: 'Madrid'
};

const { nombre, edad } = persona;
console.log(nombre); // Ikigai
console.log(edad);   // 4

// Ejemplo con array:
const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores;
console.log(primero); // rojo
console.log(segundo); // verde