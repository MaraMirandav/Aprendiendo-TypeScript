# Interfaces en clases

En TypeScript, las interfaces definen la estructura que debe cumplir una clase.

- Al implementar una interfaz, la clase debe declarar todas las propiedades y métodos definidos en ella.
- Esto permite separar el contrato (interfaz) de la implementación (clase).
- Las interfaces no contienen lógica, solo definen qué debe existir.

## Interfaz que define el contrato para un Avenger

```ts
interface IAvengers {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;
  battle: (enemy: Avengers, win: boolean) => void; // Método para pelear contra otro Avenger
}
```

## Clase que implementa la interfaz

```ts
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
```

## ¿Qué es un archivo `.d.ts`?

- Es un archivo de declaración de tipos (Declaration File).
- No contiene código ejecutable, solo definiciones de tipos, interfaces, clases, funciones, etc.
- Se usa para describir la forma de librerías JavaScript o APIs externas.
- Permite que TypeScript conozca los tipos aunque no tenga acceso al código fuente.

### Ventajas de separar interfaz y clase

- Reutilización: puedes implementar la misma interfaz en distintas clases.
- Escalabilidad: si cambias la interfaz, todas las clases que la implementan se actualizan.
- Claridad: es más fácil entender el contrato (interfaz) y la implementación (clase) por separado.

### Interfaz implementada en la clase (archivo separado)

```ts
export interface IAvengers {
  readonly name: string
  powerScore: number
  wonBattles: number
  age: number
  battle: (enemy: IAvengers, win: boolean) => void // Método para pelear contra otro Avenger
}
```

### Clase que implementa la interfaz (requiere importación)

```ts
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
```
