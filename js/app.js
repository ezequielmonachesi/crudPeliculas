let btnThemeLight = document.querySelector("#btnThemeLight");
let btnThemeDark = document.querySelector("#btnThemeDark");

btnThemeLight.addEventListener("click", () => cambiarTema("light"));
btnThemeDark.addEventListener("click", () => cambiarTema("dark"));

//leer el localStorage
let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
console.log(temaConfigurado)
cambiarTema(temaConfigurado)

function cambiarTema(color) {
  console.log(color);
  //data-bs-theme = 'light/dark'
  document.querySelector("html").setAttribute("data-bs-theme", color);
  //guardar en Localstorage
  localStorage.setItem('tema', JSON.stringify(color));
  // Tarea: cambiar el ícono del navbar del tema seleccionado.
    if(color === "light"){ 
      document.getElementById('icon-toggle').classList.remove('bi-moon-stars-fill');
      document.getElementById('icon-toggle').classList.add('bi-brightness-high-fill');
    }else{
      document.getElementById('icon-toggle').classList.remove('bi-brightness-high-fill');
      document.getElementById('icon-toggle').classList.add('bi-moon-stars-fill');
    }
}
