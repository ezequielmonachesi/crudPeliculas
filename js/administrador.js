import Pelicula from "./classPeliculas.js";
import { sumarioValidaciones } from "./helpers.js";

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
//manejadores de eventos
formPelicula.addEventListener("submit", prepararFormulario);
cargaInicial();
// funciones
function cargaInicial() {
  if (listaPeliculas.length > 0) {
    //dibujar las filas de la tabla
    listaPeliculas.map((pelicula, indice) => crearFila(pelicula, indice + 1));
  } else {
    // le muestro el msj que no tengo elementos
  }
}

function crearFila(pelicula, indice) {
  let tablaPelicula = document.querySelector("tbody");
  tablaPelicula.innerHTML += `
  <tr>
                <th scope="row">${indice}</th>
                <td>${pelicula.titulo}</td>
                <td class="text-truncate ancho pe-5">
                ${pelicula.descripcion}
                </td>
                <td class="text-truncate ancho pe-5">
                ${pelicula.imagen}
                </td>
                <td>${pelicula.genero}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning mx-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="bi bi-pencil-square"></i></button
                  ><button type="button" class="btn btn-danger mx-1">
                    <i class="bi bi-x-square"></i>
                  </button>
                </td>
    </tr>
  `;
}

function prepararFormulario(e) {
  e.preventDefault();
  crearPelicula();
}

function crearPelicula() {
  //validar el formulario
  let listaErrores = sumarioValidaciones(
    titulo.value,
    descripcion.value,
    pais.value,
    reparto.value,
    director.value,
    imagen.value,
    anio.value,
    genero.value,
    duracion.value
  );
  console.log(descripcion.value);
  if (listaErrores.length === 0) {
    mostrarAlert(false, "");
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
    limpiarFormulario();
    //mostrar un mensaje:
    Swal.fire("Película creada", "La película fue correctamente almacenada", "success");
    // dibuja la fila
    crearFila(nuevaPeli, listaPeliculas.length);
  } else {
    // si validacion falló pongo en true y muestro la lista de errores
    mostrarAlert(true, listaErrores);
  }
}

function mostrarAlert(estado, resumenErrores) {
  let alerta = document.getElementById("alertMsjError");
  // estado = true muestro el alert, caso contrario oculto
  if (estado) {
    alerta.className = "alert alert-danger";
    alerta.innerHTML = resumenErrores;
  } else {
    alerta.className = "alert alert-danger d-none";
  }
}

function limpiarFormulario() {
  formPelicula.reset();
}
