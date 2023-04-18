import Pelicula from "./classPeliculas.js";

let formPelicula = document.getElementById('formPelicula');

formPelicula.addEventListener('submit', prepararFormulario);



function prepararFormulario(e){
    e.preventDefault();
    crearPelicula();
}

function crearPelicula(e){
    let nuevaPeli = new Pelicula('Super Mario', 'algun desc', '-', 'url de imagen', 'aventura', 2023, 93, 'EEUU', 'varios actores');
    console.log(nuevaPeli);

}