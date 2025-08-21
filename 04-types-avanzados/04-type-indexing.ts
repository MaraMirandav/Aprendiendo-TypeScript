// -----------------------------------------------------------------------------
// 04 Type Indexing
// -----------------------------------------------------------------------------

//Tipo que define las propiedades de un hero, incluyendo su estado y dirección.
type HeroProperties = {
  isActive: boolean,
  adress: {
    planet: string,
    city: string
  }
}

// Extraemos solo el tipo de 'adress' usando indexación
const adressHero: HeroProperties['adress'] = {
  planet: 'Earth',
  city: 'Madrid'
};
