# Tipo 'any' y Tipo 'Unknown'

## Tipo 'any'

- Se usa cuando no se conoce el tipo de dato.
- `Peligroso:` Desactiva el sistema de tipos de TypeScript.
- No se aplican métodos específicos del tipo.

```ts
let anyValue: any = 'Hola';
anyValue.toUpperCase(); // Funciona, pero TypeScript no valida nada

let obj: any = { x : 0};
obj.foo();                // No existe, pero no da error
obj();                    // Se ejecuta como si fuera una función
obj.bar = 100;            // Se le puede agregar cualquier propiedad
obj = 'hello';            // Se puede reasignar a cualquier tipo
const n: number = obj;    // No hay garantía de que sea un número
```

## Tipo 'unknown'

- Se usa cuando no se sabe qué tipo de dato se recibirá.
- Más seguro que 'any', pero requiere validación antes de usar.

```ts
let valores: unknown = 'Hola';
// valores.aa; // No se puede acceder a propiedades sin validar el tipo
```
