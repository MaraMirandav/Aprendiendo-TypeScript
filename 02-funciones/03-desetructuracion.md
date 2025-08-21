# Desestructuración en TypeScript

- Es una forma de extraer valores de objetos o arrays y asignarlos a variables individuales.
- Muy útil para trabajar con funciones, objetos grandes o datos anidados.

## Ejemplo con objeto

```ts
const persona = {
  nombre: 'Ikigai',
  edad: 4,
  ciudad: 'Madrid'
};

const { nombre, edad } = persona;
console.log(nombre); // Ikigai
console.log(edad);   // 4
```

## Ejemplo con array

```ts
const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores;
console.log(primero); // rojo
console.log(segundo); // verde
```
