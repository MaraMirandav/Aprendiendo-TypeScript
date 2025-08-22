// -----------------------------------------------------------------------------
// 5) Cómo tipar funciones correctamente, mediante ejemplo de Callbacks
// -----------------------------------------------------------------------------

// Forma INCORRECTA de tipar una función como parámetro
const sayHiFromFunction = (fn: Function) => {
  // Ejecuta la función recibida, pasándole el string 'Miguel'
  return fn('Miguel');
};

// Llamamos a sayHiFromFunction con una función anónima que espera un string
sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`); // Hola Miguel
});

// También acepta funciones que no tienen nada que ver con el tipo esperado
sayHiFromFunction(() => {
  return Math.random(); // Esto funciona, pero no debería
});

//---------------------------------------------------------------------------
// Forma CORRECTA: tipar la función con su firma exacta
const sayHelloFromFunction = (fn: (name: string) => void) => {
  // 'fn' debe ser una función que reciba un string y no retorne nada (void)
  return fn('Miguel');
};

// Creamos una función que cumple con la estructura (firma)
const sayHello = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHelloFromFunction(sayHello); // Hola Miguel
