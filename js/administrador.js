import Pelicula from "./classPeliculas.js";

let formPelicula = document.getElementById("formPelicula");
let codigo = document.getElementById("codigo");
let titulo = document.getElementById("titulo");
let genero = document.getElementById("genero");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let director = document.getElementById("director");
let reparto = document.getElementById("reparto");
let duracion = document.getElementById("duracion");
let pais = document.getElementById("pais");
let anio = document.getElementById("anio");

// // si quiero trabahar con un array de objetos normales hago esta línea de código
// let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || [];

// si quiero trabajar con un array de objetos tipo pelicula.
let listaPeliculas = localStorage.getItem("listaPeliculas");
// Si listaPeliculas está vacío
if (!listaPeliculas) {
  listaPeliculas = [];
} else {
  listaPeliculas = JSON.parse(listaPeliculas).map(
    (pelicula) =>
      new Pelicula(
        pelicula.titulo,
        pelicula.descripcion,
        pelicula.director,
        pelicula.imagen,
        pelicula.genero,
        pelicula.anio,
        pelicula.duracion,
        pelicula.pais,
        pelicula.reparto
      )
  );
}

console.log(listaPeliculas);

formPelicula.addEventListener("submit", prepararFormulario);

function prepararFormulario(e) {
  e.preventDefault();
  crearPelicula();
}

function crearPelicula() {
  //validar el formulario
    
  // creo la peli
  let nuevaPeli = new Pelicula(
    titulo.value,
    descripcion.value,
    director.value,
    imagen.value,
    genero.value,
    anio.value,
    duracion.value,
    pais.value,
    reparto.value
  );
  console.log(nuevaPeli);
  //guardar la peli en el array
  listaPeliculas.push(nuevaPeli);
  console.log(listaPeliculas);
  //guardar el array en localstorage
  localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
  //limpiar el formulario
}
