# Matrices y Tuplas

- Una **matriz** es un array de arrays (por ejemplo, una cuadrícula de juego).
- Una **tupla** es un array con longitud fija y tipos definidos por posición.

## Ejemplo: Tablero de tres en raya

- Cada fila es un array de strings ->`string[]`
- El conjunto completo es una matriz -> `string[][]`

  - **['X' , 'O',  'X']** -> `String[]`
  - **['O' , 'X',  'O']** -> `String[]`
  - **['X' , ' ',  'X']** -> `String[]`

### Matriz boardExample de tipo `string[][]`

```ts
const boardExample: string[][] = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', ' ', 'X']
];
boardExample[0][1] = 'X'; //forma correcta
// boardExample[0][1] = '436365372534'; // Error: Podemos ingresar cualquier tipo de string, incluso si no correspondientes a una jugada
```

- **Problema**: Si no restringimos los valores, cualquier string es válido.
- Para evitar esto, definimos un tipo específico para las celdas.

### Tipo restringido para valores válidos en una celda

 ```ts
type CellValue = 'X' | 'O' | ' '; //Solo podemos usar estos valores

//Matriz con tipo CellValue
const gameBoard: CellValue[][] = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', ' ', 'X', ' '] // Error: No controlamos el tamaño de los arrays
];
```

- Aunque el tipo `CellValue` limita los valores, no limita el tamaño del array.
- Esto puede romper la lógica del tablero si se agregan más celdas.

## Tuplas: Tamaño fijo y tipos por posición

Usamos las tuplas para asegurar que el tablero tenga exactamente 3x3 celdas.

### Tupla con tamaño fijo para tablero 3x3 de tipo `CellValue`

```ts
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];
```

### Tableto de tipo `GameBoard` limitado por las tuplas y el tipo `CellValue` en el ingreso de jugadas

```ts
const gameBoard2: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', ' ', 'X']
];
```

### Ventajas de usar tuplas

- Ahora el tablero tiene exactamente 3 filas y 3 columnas.
- El tamaño está garantizado y controlado
- Si intentas agregar más celdas o cambiar el tipo, TypeScript lo detecta.

## Ejemplo: Representar un color RGB como tupla

- Cada posición representa un componente del color -> [R, G, B]

```ts
type RGB = readonly[number, number, number];
const black: RGB = [0, 0, 0];
const white: RGB = [255, 255, 255];

// const rgbColor: RGB = [2, 5, 6, 'f']; // Error: 'f' no es número
//black.push(4) -> Error: las tuplas no permiten modificar su longitud
```

- Aunque las tuplas se parecen a los arrays, tienen una longitud fija y tipos definidos por posición.
- **Por eso, métodos como push no están permitidos**: TypeScript lo bloquea para mantener la estructura.
- Para reforzar esta restricción, se puede usar `readonly` en el tipo. Esto convierte la tupla en inmutable, evitando cualquier intento de modificación.
