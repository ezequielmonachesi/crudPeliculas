function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("aqui el texto tiene la cantidad de caracrteres correctos");
    return true;
  } else {
    console.log("no cumple validaciones");
    return false;
  }
}

function validarURLImagenes(texto){
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|gif)$/;
    console.log(typeof patron);
    if(patron.test(texto)){
        console.log('La expresión regular fue válida');
        return true
    }else{
        console.log('no cumplio con la expresión regular');
        return false
    }
}

function validarAnioPelicula(anio){
    const anioActual = new Date().getFullYear()+1;
    console.log(anioActual);
    if(anio > 1895 && anio <= anioActual){
        console.log('está dentro de los años posibles');
        return true
    }else{
        console.log('NO está dentro de los años posibles');
        return false
    }
}

function duracionPelicula(tiempo){
  if (duracion < 300 && tiempo > 0){
    console.log('Está dentro de los tiempos de una pelicula')
    return true
  }else{
    console.log('No está dentro de los tiempos de una pelicula')
    return false
  }
}

function validacionGenero(genero){
    if(genero.length > 0 && genero === 'Accion' || genero === 'Aventura' || genero === 'Comedia' || genero === 'Terror' || genero === 'Drama'){
        return true;
    }else{
        return false;
    }
}

export function sumarioValidaciones(
  titulo,
  descripcion,
  pais,
  reparto,
  director,
  imagen,
  anio,
  genero,
  duracion
) {
  let resumen = "";
  if (!validarCantidadCaracteres(titulo, 2, 100)) {
    resumen = "El Titulo tiene que tener entre 2 y 50 caracteres. <br>";
    console.log("titulo valida");
  }
  if (!validarCantidadCaracteres(descripcion, 2, 600)) {
    resumen += "La Descripción tiene que tener entre 2 y 600 caracteres. <br>";
  }
  if (!validarCantidadCaracteres(pais, 3, 40)) {
    resumen += "El campo País tiene que tener entre 3 a 40. <br>";
  }
  if (!validarCantidadCaracteres(reparto, 5, 500)) {
    resumen += "El campo Reparto tiene que tener entre 5 y 500 caracteres. <br>";
  }
  if (!validarCantidadCaracteres(director, 5, 50)) {
    resumen += "El campo Director tiene que tener entre 5 y 50 caracteres. <br>";
  }
  if (!validarURLImagenes(imagen)) {
    resumen += "Tiene que ingresar una imagen con formato valido, con terminacion (.jpg, .png, .gif) <br>";
  }
  if (!validarAnioPelicula(anio)) {
    const anioActual = new Date().getFullYear()+1;
    resumen += `Tiene que ser un año entre 1985 y ${anioActual} <br>`;
  }
  if (!validacionGenero(genero)) {
    resumen += `Tiene que ser un género válido`;
  }
  if (!duracionPelicula(duracion)) {
    resumen += `Tiene que ser una duracion entre 0 a 300 minutos.`;
  }

  return resumen;
}
