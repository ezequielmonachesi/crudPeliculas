function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('aqui el texto tiene la cantidad de caracrteres correctos');
        return true;
    }else{
        console.log('no cumple validaciones')
        return false;
    }
}

export function sumarioValidaciones(titulo){
    let resumen = '';
    if(!validarCantidadCaracteres(titulo, 2, 50)){
        resumen = 'El nombre tiene que tener entre 2 y 50 caracteres.'
    }
    return resumen;
}