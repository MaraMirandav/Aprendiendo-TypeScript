// -----------------------------------------------------------------------------
// Clase que implementa la interfaz
// -----------------------------------------------------------------------------

import { IAvengers } from "./02-interface-iavengers"

class Avengers implements IAvengers {
  readonly name: string
  powerScore: number
  wonBattles: number
  age: number

//Constructor
  constructor(name: string, powerScore: number, age: number) {
    this.name = name;
    this.powerScore = powerScore;
    this.wonBattles = 0;
    //this.poderes -> no puedes implententarlo porque no está descrita en la interfaz
  }

  // Método para pelear contra otro Avenger
  battle(enemy: IAvengers, win: boolean): void  {
    if(win) {
      this.wonBattles ++;
      this.powerScore += 5;
    }else {
      enemy.wonBattles++;
      enemy.powerScore += 5;
    }
  }

  // Getter para mostrar el nombre completo y el poder
  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`
  }

  // Setter para actualizar el poder, con validación de máximo
  set power(newPower: number) {
    if(newPower <= 100) {
      this.powerScore = newPower;
    }else {
      throw new Error('Power Score cannot be more than 100');
    }
  }
}