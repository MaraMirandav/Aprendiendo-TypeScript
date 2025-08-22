// -----------------------------------------------------------------------------
// 8) Matrices y Tuplas
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
//Ejemplo: Tablero de tres en raya
// -----------------------------------------------------------------------------

//Matriz boardExample de tipo string[][]
const boardExample: string[][] = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', ' ', 'X']
];

boardExample[0][1] = 'X'; //forma correcta
// boardExample[0][1] = '436365372534'; // Error: Podemos ingresar cualquier tipo de string, incluso si no correspondientes a una jugada

//Tipo restringido para valores válidos en una celda
type CellValue = 'X' | 'O' | ' '; //Solo podemos usar estos valores

//Matriz con tipo CellValue
const gameBoard: CellValue[][] = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', ' ', 'X', ' '] // Error: No controlamos el tamaño de los arrays
];

// -----------------------------------------------------------------------------
// Tuplas: Tamaño fijo y tipos por posición
// -----------------------------------------------------------------------------

// Tupla con tamaño fijo para tablero 3x3 de tipo CellValue
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

//Tableto de tipo GameBoard limitado por las tuplas y el tipo CellValue en el ingreso de jugadas
const gameBoard2: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', ' ', 'X']
];

// -----------------------------------------------------------------------------
// Ejemplo: Representar un color RGB como tupla
// -----------------------------------------------------------------------------

//Cada posición representa un componente del color -> [R, G, B]
type RGB = readonly[number, number, number];
const black: RGB = [0, 0, 0];
const white: RGB = [255, 255, 255];

// const rgbColor: RGB = [2, 5, 6, 'f']; // Error: 'f' no es número
//black.push(4) -> Error: las tuplas no permiten modificar su longitud
