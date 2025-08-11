import { obtenerPaisesPorNombre } from "./peticiones.js";

function validar() {
    const errores = [];
    const porNombre = document.getElementById("porNombre").checked;
    const porIdioma = document.getElementById("porIdioma").checked;
    const nombre = document.getElementById("nombre").value.trim();
    const idioma = document.getElementById("idioma").value.trim();
    if(porNombre) {
        if(nombre.length == 0) {
            errores.push("El nombre del país está vacío");
        }
    } else if(porIdioma) {
         if(idioma.length == 0) {
            errores.push("El nombre del idioma está vacío");
        }
    } else {
        errores.push("Debes marcar alguna de las opciones");
    }
    return errores;
}

function mostrarPaises(paises) {
    const info = document.getElementById("info");
    info.textContent = "";
    const clon = document.getElementById("clon");
    for(const p of paises) {
        // Casi siempre hay que poner true, pues si no, no clona los hijos
        const nuevoClon = clon.cloneNode(true);
        nuevoClon.id = "";
        nuevoClon.classList.remove("d-none");
        info.appendChild(nuevoClon);
        nuevoClon.querySelector(".nombreOficial").textContent = p.name.official;
        nuevoClon.querySelector(".capital").textContent = p.capital;
        nuevoClon.querySelector(".idiomas").textContent = p.languages;
    }
}

function mostrarErrores(errores) {
    const div = document.querySelector("#errores div");
    div.textContent = errores;
    const dialogoErrores = document.getElementById("errores");
    // Mostramos el cuadro de diálogo errores en modo modal, es decir,
    // no podemos seguir usando la página hasta que lo cerremos.
    // La otra opción es show()
    dialogoErrores.showModal();
}

function buscar() {
    const errores = validar();
    if(errores.length > 0) {
        mostrarErrores(errores);
        return;
    }
    const porNombre = document.getElementById("porNombre").checked;
    const porIdioma = document.getElementById("porIdioma").checked;
    const nombre = document.getElementById("nombre").value.trim();
    const idioma = document.getElementById("idioma").value.trim();
    if(porNombre) {
        obtenerPaisesPorNombre(nombre, mostrarPaises, mostrarErrores);
    }
}

function cerrarDialogo() {
    document.getElementById("errores").close();
}

// Como el botón no es de tipo submit, usamos el evento click 
document.getElementById("buscar").addEventListener("click", buscar);

document.getElementById("cerrar").addEventListener("click", cerrarDialogo);

// Si queremos hacer algo cuando se cierre el cuadro de diálogo, ya sea por
// pulsar el botón o que el usuario pulse ESC, podemos suscribirnos al evento
// close del mismo
//document.getElementById("errores").addEventListener("close", funcionDeseada);