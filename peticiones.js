// Con freeze creamos un objeto que no se puede modificar
const EndPoints = Object.freeze( {
    nombre: "https://restcountries.com/v3.1/name/NOMBRE",
    idioma: "https://restcountries.com/v3.1/lang/IDIOMA",
    moneda: "https://restcountries.com/v3.1/currency/MONEDA"
});

/*export function obtenerPaisesPorNombre(nombre, funcionMostrarDatos, funcionMostrarError) {
    fetch(EndPoints.nombre.replace("NOMBRE", nombre))
    .then(respuesta => {
        if(respuesta.ok) {
            return respuesta.json();
        } else if(respuesta.status == 404){
            // Si el pais o idioma no se encuentran, devuelve un 404
            return respuesta.json();
        } else {
            throw new Error("Error obteniendo los países: " + respuesta.status);
        }
    })
    .then(datos => funcionMostrarDatos(datos))
    .catch(error => funcionMostrarError(error));
}

export function obtenerPaisesPorIdioma(idioma, funcionMostrarDatos, funcionMostrarError) {
    fetch(EndPoints.idioma.replace("IDIOMA", idioma))
    .then(respuesta => {
        if(respuesta.ok) {
            return respuesta.json();
        } else if(respuesta.status == 404){
            // Si el pais o idioma no se encuentran, devuelve un 404
            return respuesta.json();
        } else {
            throw new Error("Error obteniendo los países: " + respuesta.status);
        }
    })
    .then(datos => funcionMostrarDatos(datos))
    .catch(error => funcionMostrarError(error));
}*/

function obtenerPaises(url, funcionMostrarDatos, funcionMostrarError) {
    fetch(url)
    .then(respuesta => {
        if(respuesta.ok) {
            return respuesta.json();
        } else if(respuesta.status == 404){
            // Si el pais o idioma no se encuentran, devuelve un 404
            return respuesta.json();
        } else {
            throw new Error("Error obteniendo los países: " + respuesta.status);
        }
    })
    .then(datos => funcionMostrarDatos(datos))
    .catch(error => funcionMostrarError(error));
}

export function obtenerPaisesPorNombre(nombre, funcionMostrarDatos, funcionMostrarError) {
    obtenerPaises(EndPoints.nombre.replace("NOMBRE", nombre)
        , funcionMostrarDatos, funcionMostrarError);
}

export function obtenerPaisesPorIdioma(idioma, funcionMostrarDatos, funcionMostrarError) {
    obtenerPaises(EndPoints.idioma.replace("IDIOMA", idioma)
        , funcionMostrarDatos, funcionMostrarError);
}