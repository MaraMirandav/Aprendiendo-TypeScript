// -----------------------------------------------------------------------------
// Interfaz implementada en la clase
// -----------------------------------------------------------------------------
export interface IAvengers {
  readonly name: string
  powerScore: number
  wonBattles: number
  age: number
  battle: (enemy: IAvengers, win: boolean) => void // Método para pelear contra otro Avenger
}