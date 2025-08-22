// -----------------------------------------------------------------------------
// 4) Tipado del valor de retorno
// -----------------------------------------------------------------------------

function saludar({ name, age }: { name: string; age: number }): number {
  console.log(`Hola ${name}, tienes ${age} años`);
  return age; // Retorna un número
}

let username: string;
// username = saludar4({ name: 'Ikigai', age: 4 }); // Error: number no es asignable a string
