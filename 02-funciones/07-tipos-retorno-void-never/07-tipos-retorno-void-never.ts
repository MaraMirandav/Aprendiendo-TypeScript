// -----------------------------------------------------------------------------
// 7) Tipos especiales de retorno: void vs never
// -----------------------------------------------------------------------------

// void -> La función no devuelve ningún valor
function logMessage(message: string): void {
  console.log(message);
  // No hay return con valor -> el retorno es implícitamente void
}

//-------------------------------------------------------------------------
// never -> La función NUNCA devuelve, ni siquiera undefined
function throwError(message: string): never {
  throw new Error(message);
}
