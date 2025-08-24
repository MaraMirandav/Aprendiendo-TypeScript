# Clases: propiedades públicas, privadas, protegidas y solo lectura

En TypeScript, las clases permiten definir atributos con distintos niveles de acceso:

- `public`: acceso libre (por defecto).
- `private`: solo accesible dentro de la clase.
- `protected`: accesible dentro de la clase y sus subclases. No se puede acceder desde instancias externas.
- `readonly`: solo lectura, no se puede modificar después de asignar.

## Diferencias con JavaScript

- En JavaScript moderno, los atributos privados se indican con `#` y deben usarse así en todo el código.
- En TypeScript, `private` es una restricción estática: no se transpila como privado en JS, pero el compilador lo respeta.
- En TypeScript se pueden combinar `private` y `readonly` para crear propiedades inmutables y encapsuladas.

## Ejemplo de una Clase con TypeScript

```ts
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
```

## Instancia de la clase

```ts
const avengers = new Avenger('Spidey', 80);

// avengers.name = 'Hulk'; Error: name es readonly
// avengers.powerScore; Error: propiedad privada
```

## Notas adicionales

- `public` no necesita ser declarado explícitamente, ya que es el valor por defecto.
- `private` impide el acceso desde fuera de la clase, incluso desde instancias.
- `protected` permite el acceso desde clases que heredan, pero no desde instancias.
- `readonly` garantiza que el valor no se puede modificar después de su asignación inicial.
