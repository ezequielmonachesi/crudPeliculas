import Pelicula from "./classPeliculas.js";

let formPelicula = document.getElementById("formPelicula");
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

console.log(listaPeliculas)

formPelicula.addEventListener("submit", prepararFormulario);

function prepararFormulario(e) {
  e.preventDefault();
  crearPelicula();
}

function crearPelicula() {
  //validar el formulario
  let nuevaPeli = new Pelicula(
    "Super mario",
    "alguna desc",
    "-",
    "url de imagen",
    "aventura",
    2023,
    93,
    "EEUU",
    "varios actores"
  );
  console.log(nuevaPeli);
  //guardar la peli en el array
  listaPeliculas.push(nuevaPeli);
  console.log(listaPeliculas);
  //guardar el array en localstorage
  localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
  //limpiar el formulario
}
