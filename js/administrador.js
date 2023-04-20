import Pelicula from "./classPeliculas.js";

let formPelicula = document.getElementById('formPelicula');

formPelicula.addEventListener('submit', prepararFormulario);



function prepararFormulario(e){
    e.preventDefault();
    crearPelicula();
}

function crearPelicula(){
    //validar el formulario
    let nuevaPeli = new Pelicula('Super mario','alguna desc','-','url de imagen','aventura', 2023, 93,'EEUU','varios actores');
    console.log(nuevaPeli);
    //guardar la peli en el array
    listaPeliculas.push(nuevaPeli)
    console.log(listaPeliculas)
    //guardar el array en localstorage
    localStorage.setItem('listaPeliculas', JSON.stringify(listaPeliculas));
    //limpiar el formulario
}