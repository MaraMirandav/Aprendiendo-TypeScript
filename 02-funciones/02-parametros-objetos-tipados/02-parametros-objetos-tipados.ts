//-----------------------------------------------------------------------------
// 2) Tipado de objetos como parámetros
// -----------------------------------------------------------------------------

// Forma 1: Tipar directamente dentro de la firma de la función
function saludar({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`);
}

saludar({ name: 'Ikigai', age: 4 }); //'Hola Ikigai, tienes 4 años'


// Forma 2: Tipar el objeto como un parámetro único
function saludar2(persona: { name: string; age: number }) {
  const { name, age } = persona; // Desestructuración
  console.log(`Hola ${name}, tienes ${age} años`);
}

saludar2({ name: 'Ikigai', age: 4 }); ////'Hola Ikigai, tienes 4 años'
