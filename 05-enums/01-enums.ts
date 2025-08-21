// -----------------------------------------------------------------------------
// 10) Enums en TypeScript
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Ejemplo en JavaScript con magic strings: No recomendado
// -----------------------------------------------------------------------------

// Función que muestra un mensaje según el tipo de error recibido
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

// -----------------------------------------------------------------------------
// Solución recomendada en JavaScript: usar constantes
// -----------------------------------------------------------------------------

// Definimos un objeto con los tipos de error como constantes
const ERROR_TYPES_JS = {
  NOT_FOUND: 'notFound',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden'
};

// Función que muestra un mensaje de error usando las constantes definidas
function mostrarMensajeJS(tipoDeError) {
  if (tipoDeError === ERROR_TYPES_JS.NOT_FOUND) {
    console.log('No se encuentra el recurso');
  } else if (tipoDeError === ERROR_TYPES_JS.UNAUTHORIZED) {
    console.log('No tienes permisos para acceder');
  } else if (tipoDeError === ERROR_TYPES_JS.FORBIDDEN) {
    console.log('No tienes permisos para acceder');
  }
}

// -----------------------------------------------------------------------------
// Enums en TypeScript:
// -----------------------------------------------------------------------------

// Definimos un enum con los tipos de error
enum ERROR_TYPE_TS {
  NOT_FOUND,      //ERROR_TYPES_TS[ERROR_TYPES_TS["NOT_FOUND"] = 0] = "NOT_FOUND";
  UNAUTHORIZED,   //ERROR_TYPES_TS[ERROR_TYPES_TS["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
  FORBIDDEN       //ERROR_TYPES_TS[ERROR_TYPES_TS["FORBIDDEN"] = 2] = "FORBIDDEN";
}

// Función que muestra un mensaje de error usando el enum
function mostrarMensajeTS(tipoDeError: ERROR_TYPE_TS) {
  if (tipoDeError === ERROR_TYPE_TS.NOT_FOUND) {
    console.log('No se encuentra el recurso');
  } else if (tipoDeError === ERROR_TYPE_TS.UNAUTHORIZED) {
    console.log('No tienes permisos para acceder');
  } else if (tipoDeError === ERROR_TYPE_TS.FORBIDDEN) {
    console.log('No tienes permisos para acceder');
  }
}

// -----------------------------------------------------------------------------
// Enums con `const` para optimizar el código
// -----------------------------------------------------------------------------

// Usamos `const enum` para que el compilador reemplace directamente los valores
const enum ERROR_TYPES_TS_CON_CONST {
  NOT_FOUND,      //tipoDeError === 0 /* ERROR_TYPES_TS.NOT_FOUND */
  UNAUTHORIZED,   //tipoDeError === 1 /* ERROR_TYPES_TS.UNAUTHORIZED */
  FORBIDDEN       //tipoDeError === 2 /* ERROR_TYPES_TS.FORBIDDEN */
}

// -----------------------------------------------------------------------------
// Enums con valores string
// -----------------------------------------------------------------------------

// Usamos strings como valores del enum para mayor claridad
const enum ERROR_TYPES_TS_STRING {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}