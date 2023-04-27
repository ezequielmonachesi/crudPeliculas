function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("aqui el texto tiene la cantidad de caracrteres correctos");
    return true;
  } else {
    console.log("no cumple validaciones");
    return false;
  }
}

export function sumarioValidaciones(
  titulo,
  descripcion,
  pais,
  reparto,
  director
) {
  let resumen = "";
  if (!validarCantidadCaracteres(titulo, 2, 100)) {
    resumen = "El Titulo tiene que tener entre 2 y 50 caracteres.";
    console.log("titulo valida");
  }
  if (!validarCantidadCaracteres(descripcion, 2, 600)) {
    resumen += "\n La Descripción tiene que tener entre 2 y 600 caracteres.";
  }
  if (!validarCantidadCaracteres(pais, 3, 40)) {
    resumen += "\n El campo País tiene que tener entre 3 a 40";
  }
  if (!validarCantidadCaracteres(reparto, 5, 500)) {
    resumen += "\n El campo Reparto tiene que tener entre 5 y 500 caracteres.";
  }
  if (!validarCantidadCaracteres(director, 5, 50)) {
    resumen += "\n El campo Director tiene que tener entre 5 y 50 caracteres.";
  }
  return resumen;
}
