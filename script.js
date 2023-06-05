const $electrica = document.getElementById("electrica");
const $mecanico = document.getElementById("mecanico");
const $validaciones = document.getElementById("validaciones");
const $iputs = document.querySelectorAll("#electrical inputs", "#mecanico inputs", "#validaciones inputs");

const expresiones = {
    //electricas
    tensio_p : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    tensio_s : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    tensio_c : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    corrineteN : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    corrineteC : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    temperatura : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    //mecanicas
    ttipo_tablero : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    ttipo_lamina : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    clamina : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    ip : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    pral : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    medida_zocalo : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros
    reservas : /^[0-9]/, //Esto indica que solo se pueden ingresar numeros

}

const campos = {
    //electricas
    tensio_p : false,
    tensio_s : false,
    tensio_c : false,
    corrineteN : false,
    corrineteC : false,
    temperatura : false,
    //mecanicas
    ttipo_tablero : false,
    ttipo_lamina : false,
    clamina : false,
    ip : false,
    pral : false,
    medida_zocalo : false,
    reservas : false
}

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case tensio_p:
            validarCampo(expresiones.tensio_p, e.target, "tensio_p")
            break;
    
        default:
            break;
    }
}

const validarCampo = (expresiones, input, campo) => {
    if (expresiones.test(input.value)){
        document.getElementById('formulario_${campo}').classList.remove(".formulario_incorrecto");
        document.getElementById('formulario_${campo}').classList.add(".formulario_correcto");
    }else{

    }
}