// -----------------------------------------------------------------------------
// 1) Clases: propiedades públicas, privadas, protegidas y solo lectura
// -----------------------------------------------------------------------------

//Ejemplo de una Clase con TypeScript:
class Avenger {
  readonly name: string; // Solo lectura: no se puede modificar después de asignar
  private powerScore: number; // Privado: solo accesible dentro de la clase
  private readonly wonBattles: number = 0; // Privado y solo lectura
  protected age: number = 0; // Protegido: accesible en clases hijas

  //Constructor
  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  }

  // Getter: permite acceder a una propiedad calculada
  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`;
  }

  // Setter: permite modificar el poder con validación
  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower;
    } else {
      throw new Error('Power Score cannot be more than 100');
    }
  }
}

// Instancia de la clase
const avengers = new Avenger('Spidey', 80);

// avengers.name = 'Hulk'; Error: name es readonly
// avengers.powerScore; Error: propiedad privada
