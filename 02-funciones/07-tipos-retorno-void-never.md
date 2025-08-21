# Tipos especiales de retorno: void vs never

## void: La función no devuelve ningún valor

**`void` se usa cuando:**

- La función realiza una acción (como imprimir en consola)
- No necesitas que devuelva nada

```ts
function logMessage(message: string): void {
  console.log(message);
  // No hay return con valor -> el retorno es implícitamente void
}
```

## never: La función NUNCA devuelve, ni siquiera undefined

**`never` se usa cuando:**

- La función termina abruptamente (por ejemplo, lanza un error)
- Entra en un bucle infinito
- TypeScript sabe que nunca llegará al final de la función

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

### Diferencia clave

- `void:` La función termina normalmente, pero no devuelve valor
- `never:` la función no termina nunca o termina con una excepción
