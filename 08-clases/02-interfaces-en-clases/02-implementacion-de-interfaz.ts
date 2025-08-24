// -----------------------------------------------------------------------------
// 2) Interfaces en clases
// -----------------------------------------------------------------------------

// Interfaz que define el contrato para un Avenger
interface IAvengers {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;
  battle: (enemy: Avengers, win: boolean) => void; // Método para pelear contra otro Avenger
}

// Clase que implementa la interfaz
class Avengers implements IAvengers {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;

  //Constructor
  constructor(name: string, powerScore: number, age: number) {
    this.name = name;
    this.powerScore = powerScore;
    this.wonBattles = 0;
    this.age = age;
    // this.poderes -> No se puede implementar porque no está definido en la interfaz
  }

  // Método para pelear contra otro Avenger implementado
  battle(enemy: Avengers, win: boolean): void {
    if (win) {
      this.wonBattles++;
      this.powerScore += 5;
    } else {
      enemy.wonBattles++;
      enemy.powerScore += 5;
    }
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
