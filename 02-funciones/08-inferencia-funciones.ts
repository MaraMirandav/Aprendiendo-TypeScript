// -----------------------------------------------------------------------------
// 8) Inferencia de tipos en funciones anónimas según el contexto
// -----------------------------------------------------------------------------

const avengers = ['Spidey', 'Hulk', 'Avengers'];

avengers.forEach(avenger => {
  // TypeScript infiere que 'avenger' es un array de tipo string
  console.log(avenger.toLocaleUpperCase()); // SPIDEY, HULK, AVENGERS
});

