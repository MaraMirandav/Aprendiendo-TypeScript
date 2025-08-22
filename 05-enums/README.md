# Enums en TypeScript

- Los enums permiten definir un conjunto de valores constantes con nombre.
- Son ideales para representar estados, tipos de error, días de la semana, etc.
- Evitan el uso de "magic strings" y mejoran la mantenibilidad del código.
- **Solo existen en TypeScript**, no en JavaScript.

## Ejemplo en JavaScript con magic strings: No recomendado

- Función que muestra un mensaje según el tipo de error recibido

```js
function mostrarMensaje(tipoDeError) {
  // Se compara directamente con cadenas de texto
  if (tipoDeError === 'notFound') {
    console.log('No se encuentra el recurso');
  } else if (tipoDeError === 'unauthorized') {
    console.log('No tienes permisos para acceder');
  } else if (tipoDeError === 'forbidden') {
    console.log('No tienes permisos para acceder');
  }
}
```

### Problema

- Si escribimos mal alguna cadena ('notfOund', 'unauthrized', etc.), puede que no funcione el codigo.
- Esto puede provocar fallos silenciosos difíciles de detectar.

### Solución recomendada en JavaScript: Usar constantes

- Definimos un objeto con los tipos de error como constantes

```js
const ERROR_TYPES_JS = {
  NOT_FOUND: 'notFound',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden'
};
```

- Función que muestra un mensaje de error usando las constantes definidas

```js
function mostrarMensajeJS(tipoDeError) {
  if (tipoDeError === ERROR_TYPES_JS.NOT_FOUND) {
    console.log('No se encuentra el recurso');
  } else if (tipoDeError === ERROR_TYPES_JS.UNAUTHORIZED) {
    console.log('No tienes permisos para acceder');
  } else if (tipoDeError === ERROR_TYPES_JS.FORBIDDEN) {
    console.log('No tienes permisos para acceder');
  }
}
```

- Evitamos cometer errores al escribir los valores.
- Podemos reutilizar los valores en distintos lugares.
- Mejora el mantenimiento y la legibilidad del código.

## Usando Enums en TypeScript

- Definimos un enum con los tipos de error

```ts
enum ERROR_TYPE_TS {
  NOT_FOUND,      //ERROR_TYPES_TS[ERROR_TYPES_TS["NOT_FOUND"] = 0] = "NOT_FOUND";
  UNAUTHORIZED,   //ERROR_TYPES_TS[ERROR_TYPES_TS["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
  FORBIDDEN       //ERROR_TYPES_TS[ERROR_TYPES_TS["FORBIDDEN"] = 2] = "FORBIDDEN";
}
```

- Función que muestra un mensaje de error usando el enum

```ts
function mostrarMensajeTS(tipoDeError: ERROR_TYPE_TS) {
  if (tipoDeError === ERROR_TYPE_TS.NOT_FOUND) {
    console.log('No se encuentra el recurso');
  } else if (tipoDeError === ERROR_TYPE_TS.UNAUTHORIZED) {
    console.log('No tienes permisos para acceder');
  } else if (tipoDeError === ERROR_TYPE_TS.FORBIDDEN) {
    console.log('No tienes permisos para acceder');
  }
}
```

- Al compilar, TypeScript genera un objeto con índices numéricos: `ERROR_TYPES_TS[ERROR_TYPES_TS["NOT_FOUND"] = 0] = "NOT_FOUND";`
- Esto permite acceder tanto por nombre como por índice.

## Enums con `const` para optimizar el código

- Usamos `const enum` para que el compilador reemplace directamente los valores

```ts
const enum ERROR_TYPES_TS_CON_CONST {
  NOT_FOUND,      //tipoDeError === 0 /* ERROR_TYPES_TS.NOT_FOUND */
  UNAUTHORIZED,   //tipoDeError === 1 /* ERROR_TYPES_TS.UNAUTHORIZED */
  FORBIDDEN       //tipoDeError === 2 /* ERROR_TYPES_TS.FORBIDDEN */
}
```

- El enum se elimina en tiempo de compilación.
- Se reemplaza por el valor literal (ej. 0, 1, 2).
- Útil cuando se busca generar menos código
- Recomendación: no usar `const enum` en librerías públicas o compartidas.

## Enums con valores string

- Usamos strings como valores del enum para mayor claridad

```ts
const enum ERROR_TYPES_TS_STRING {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}
```

- Los valores son más legibles en el código generado.
- Útil cuando necesitas que los valores se mantengan como texto.
